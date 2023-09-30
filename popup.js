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
  if(message.dist ==1){
    // blocking the button if this condition is true
    document.getElementById('apply').disabled = true;

  }
  
    document.getElementById('result').innerText = message.name;
    console.log("Received message in popup:", message);
    
  });
document.getElementById('apply').addEventListener('click', ()=> {
    console.log('clicked here');
    // let x = '/html/body/div[6]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/button';
    // const getElementFromXpath = path =>{
    //     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // }
    // console.log(getElementFromXpath(x));
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
        // sending the message to the content script
        chrome.tabs.sendMessage(tabs[0].id, 'clicked');
        //chrome.tabs.sendMessage(tabs[0].id, 'clicked');
    });
    }, false);

