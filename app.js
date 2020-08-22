//initializing github
const github = new Github; 

//inititializing ui
const ui = new UI;

//search input from the user(username entered)
const username = document.getElementById('username');


//add an event listener for the search input
username.addEventListener('keyup', (e) => {

    //get the input text
    const userText = e.target.value;
    if(userText !== '') {
       //make http call
       github.getUser(userText)
       .then (data => {
           if(data.profile.message === 'Not Found') {
   //show alert
   ui.showAlert('User Not Found', 'alert alert-danger');
           } else {
               //show the profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
           } 
       })
    } else {
        //clear profile
        ui.clearProfile();
    }
})