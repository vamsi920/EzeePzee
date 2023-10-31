// import message from './message.json'
var profileName = document.getElementsByClassName('text-heading-xlarge')[0];
var connectionNumber = document.getElementsByClassName('distance-badge')[0]
console.log(connectionNumber.innerText.toString().includes('1'));
if(connectionNumber.innerText.includes('1st')){
  connectionNumber = 1
}
else if(connectionNumber.innerText.includes('2nd')){
  connectionNumber = 2
}
else if(connectionNumber.innerText.includes('3rd')){
  connectionNumber = 3
}
else{
  connectionNumber = 4
}

if (profileName) {
  console.log(profileName.innerText);
} else {
  console.log('No element found with class "text-heading-xlarge"');
}
function getRandomTimeout() {
  // Generate a random float between 0.5 and 1.99 seconds
  return Math.random() * 1499 + 500;
}
// recieving the messge sent from background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "clicked") {
    const getRandomTime = () => {
      // Generate a random time between 0.5 and 1.99 seconds
      return Math.random() * (1.99 - 0.5) + 0.5;
    };

    const clickConnectButton = () => {
      const connectButton = document.querySelector('.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.pvs-profile-actions__action');
      if (connectButton && connectButton.innerText === 'Connect') {
        connectButton.click();
      }
      // Add a random time gap before the next action
      setTimeout(clickMoreButton, getRandomTime() * 1000);
    };

    const clickMoreButton = () => {
      let moreButton = document.querySelector('.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-bottom.ember-view.pvs-profile-actions__action.artdeco-button.artdeco-button--secondary.artdeco-button--muted.artdeco-button--1.artdeco-button--circle');
      if (!moreButton) {
        moreButton = document.querySelector('.artdeco-dropdown.artdeco-dropdown--placement-bottom.artdeco-dropdown--justification-left.ember-view');
      }
      if (moreButton) {
        moreButton.click();
      }
      // Add a random time gap before the next action
      setTimeout(clickMoreItem, getRandomTime() * 1000);
    };

    const clickMoreItem = () => {
      const moreButtons = document.querySelectorAll('.artdeco-dropdown__item.artdeco-dropdown__item--is-dropdown.ember-view.full-width.display-flex.align-items-center');
      if (moreButtons[2]) {
        moreButtons[2].click();
      }
      // Add a random time gap before the next action
      setTimeout(addNoteAndSend, getRandomTime() * 1000);
    };

    const addNoteAndSend = () => {
      const addNoteButton = document.querySelector('.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.ember-view.mr1');
      if (addNoteButton) {
        addNoteButton.click();
    
        setTimeout(() => {
          const noteTextArea = document.querySelector('.ember-text-area.ember-view.connect-button-send-invite__custom-message.mb3');
    
          if (noteTextArea) {
            noteTextArea.value = "hi " + profileName.innerHTML.split(" ")[0] + ", here is my message.";
            setTimeout(() => {

            const sendButton = document.querySelector('.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.ml1');
            if (sendButton) {
              sendButton.click();
              console.log('Connection request submitted.');
            } else {
              console.log('Error finding the send button');
            }
          }
          , 1200); // Adjust the delay as needed
          } else {
            console.log('Error finding the text area');
          }
        }, 1000); // Adjust the delay as needed
      }
    };
    

    // Start the process by clicking the connect button
    setTimeout(clickConnectButton, getRandomTime() * 1000);
  }
  if (request == "rendered") {
    // sending the profile name to background.js
    chrome.runtime.sendMessage({ name: profileName.innerText,
      dist: connectionNumber,
     }, resp => {
      // console.log(resp)
    })
  }
});


chrome.runtime.sendMessage({ name: profileName.innerText, dist:connectionNumber }, resp => {
  // console.log(resp)
})