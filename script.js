var profileName = document.getElementsByClassName('text-heading-xlarge')[0];
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
  // if (request == "clicked") {
  //   // setting the profile name to vamsi

  //   let connectButton = document.getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-profile-actions__action')[0];
  //   if (connectButton.innerText == 'Connect') {
  //     connectButton.click();
  //   }
  //   else {
  //     let moreButton = document.getElementsByClassName('artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted artdeco-button--1 artdeco-button--circle')[0]
  //     moreButton.click();
  //     let moreButtons = document.getElementsByClassName('artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view full-width display-flex align-items-center')
  //     moreButtons[2].click();
  //     moreButtons[7].click()
  //   }
  //   // now adding a note for connection request
  //   let addNoteButton = document.getElementsByClassName('artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1')[0];
  //   addNoteButton.click();
  //   let noteTextArea = document.getElementsByClassName('ember-text-area ember-view connect-button-send-invite__custom-message mb3')[0];
  //   noteTextArea.value = 'Hi, I am Vamsi, I am a software developer. I am looking for a job. Please accept my connection request. Thank you.'
  //   let sendButton = document.getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1')[0];
  //   sendButton.click();
  //   console.log('submitted')

  // }
  if (request == "clicked") {
    // setting the profile name to vamsi
  
    let connectButton = document.getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-profile-actions__action')[0];
    if (connectButton.innerText == 'Connect') {
      connectButton.click();
    } else {
      let moreButton = document.getElementsByClassName('artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view pvs-profile-actions__action artdeco-button artdeco-button--secondary artdeco-button--muted artdeco-button--1 artdeco-button--circle')[0];
      moreButton.click();
      let moreButtons = document.getElementsByClassName('artdeco-dropdown__item artdeco-dropdown__item--is-dropdown ember-view full-width display-flex align-items-center');
  
      setTimeout(() => {
        moreButtons[2].click();
      }, getRandomTimeout());
  
      setTimeout(() => {
        moreButtons[7].click();
      }, getRandomTimeout());
    }
  
    // now adding a note for connection request
    let addNoteButton = document.getElementsByClassName('artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1')[0];
    addNoteButton.click();
  
    let noteTextArea = document.getElementsByClassName('ember-text-area ember-view connect-button-send-invite__custom-message mb3')[0];
    noteTextArea.value = 'Hi, I am Vamsi, I am a software developer. I am looking for a job. Please accept my connection request. Thank you.';
  
    setTimeout(() => {
      let sendButton = document.getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1')[0];
      sendButton.click();
      console.log('submitted');
    }, getRandomTimeout());
  }
  if (request == "rendered") {
    // sending the profile name to background.js
    chrome.runtime.sendMessage({ name: profileName.innerText }, resp => {
      // console.log(resp)
    })
  }
});


chrome.runtime.sendMessage({ name: profileName.innerText }, resp => {
  // console.log(resp)
})