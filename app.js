const UIsearchUser = document.getElementById('searchUser');
const github = new Github;
const ui = new UI;

UIsearchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value;
    if (userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User not Found','alert alert-danger');
                }else{
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }else{
        ui.clearProfile();
    }
});