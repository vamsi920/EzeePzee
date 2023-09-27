// one user clicks on the button send a message to the content script
// const port = chrome.runtime.connect({name:'popup'})
let t = document.getElementById('result');
if(t.innerText == ''){
document.addEventListener('DOMContentLoaded', function() {
    // Function to run when the popup is rendered
    function onPopupRendered() {
      console.log('Popup rendered!');
      chrome.runtime.onMessage.addListener((message) => {
        document.getElementById('result').innerText = message.name;
        console.log("Received message in popup:", message);
      });
      // Add your code here to run when the popup is rendered

      // now sending the message when the popup is rendered
      chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
        // sending the message to the content script
        chrome.tabs.sendMessage(tabs[0].id, 'rendered');
    });
    }
  
    // Call the function when the popup is rendered
    onPopupRendered();
  });
}
chrome.runtime.onMessage.addListener((message) => {
    document.getElementById('result').innerText = message.name;
    console.log("Received message in popup:", message);
  });
document.getElementById('apply').addEventListener('click', ()=> {
    console.log('clicked');
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
        // sending the message to the content script
        
        //chrome.tabs.sendMessage(tabs[0].id, 'clicked');
    });
    }, false);

