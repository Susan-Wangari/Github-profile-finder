class UI {
    constructor() {
        this.profile = document.getElementById('container');
    }
    //displays the profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div id="profile">
        <img src="profileImage.jpg" alt="user's profile picture">
        <button type="button">View Profile</button>
    </div>
    <div id="profileInformation">
        <ul>
            <li class="status">Following: ${user.followers}</li>
            <li class="status">Followers: ${user.following}</li>
            <li>Company: ${user.company}</li>
            <li>Website/Blog: ${user.blog}</li>
            <li>Location: ${user.location}</li>
            <li>Date joined: ${user.created_at}</li>
        </ul>
    </div>
    <h3>Latest Repos</h3>
    <div id="latestRepos">
       <ol>
    //<a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <li>Stars: ${repo.stargazers_count}</li>
            <li>Forks: ${repo.fork_count}</li>
        </ol>
    </div>
    `;
    }

    //show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
            <img src="profileImage.jpg" alt="user's profile picture">
            <button type="button">View Profile</button>
            <div id="profileInformation>
            <div id="latestRepos">
            `;
        });
        //output repos
        document.getElementById('latestRepos').innerHTML = output;
    }
   
    //show alert message
    showAlert(message, className) {
        //clear any other alerts
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //add a classname
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('search');
        //get the search box
        const search = document.querySelector('username');
        //an alert
        container.insertBefore(div, username);

        //timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //clear alert message
    clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if(currentAlert) {
        currentAlert.remove();
    }
    }

    //clear profile
    clearProfile(message, className) {
        this.profile.innerHTML = '';
    }
}