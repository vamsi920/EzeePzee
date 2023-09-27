var profileName = document.getElementsByClassName('text-heading-xlarge')[0];
if (profileName) {
  console.log(profileName.innerText);
} else {
  console.log('No element found with class "text-heading-xlarge"');
}
// recieving the messge sent from background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if(request == "clicked"){
    // setting the profile name to vamsi
    profileName.innerText = "vamsi";
  }
  if(request == "rendered"){
    // sending the profile name to background.js
    chrome.runtime.sendMessage({name: profileName.innerText}, resp=>{
      console.log(resp)
    })
  }
});


chrome.runtime.sendMessage({name: profileName.innerText}, resp=>{
console.log(resp)
})