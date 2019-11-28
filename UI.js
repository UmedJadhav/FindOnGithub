class UI{
    constructor(){
        this.UIprofile = document.getElementById('profile');
    }
    showProfile(user){
        this.UIprofile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                    <img class='img-fluid mb-2' src='${user.avatar_url}'>
                    <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block'>
                        View Profile
                    </a>
                    </div>
                    <div class='col-md-9'>
                    <span class='badge badge-primary'>Public Repos:${user.Public_repos}</span>
                    <span class='badge badge-secondary'>Public Gists:${user.Public_gists}</span>
                    <span class='badge badge-success'>Followers:${user.followers}</span>
                    <span class='badge badge-primary'>Following:${user.following}</span>
                    <br></br>
                    <ul class='list-group'>
                        <li class='list-group-item'>Company: ${user.company}</li>
                        <li class='list-group-item'>Website: ${user.website}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Since: ${user.created_at}</li>
                    </ul>
                    </div>
                </div>
            </div>
            <h3 class='page-heading mb-3'>Latest Repos</h3>
            <div id='repos'></div>
        `;
    }

    showRepos(repos){
        let output = ''
        repos.forEach((repo)=>{
            output += `
            <div class='card card-body mb-2'>
                <div class='row'>
                    <div class='col md-6'>
                       <a href="${repo.html_url}" target='_blank'>${repo.name}</a>
                    </div>
                    <div class='col md-6'>
                        <span class='badge badge-primary'>Stars : ${repo.stargazers_count}</span> 
                        <span class='badge badge-primary'>Watchers : ${repo.watchers_count}</span>  
                        <span class='badge badge-secondary'>Forkst: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message,classname){
        this.clearAlert();
        const div = document.createElement('div') ;
        div.className = classname;
        div.appendChild(document.createTextNode(message));
        const UIcontainer = document.querySelector('.search-container');
        const UIsearch = document.querySelector('.search');
        UIcontainer.insertBefore(div,UIsearch); 
        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.UIprofile.innerHTML = '';
    }
}