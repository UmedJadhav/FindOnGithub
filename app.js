const searchUser = document.getElementById('searchUser');
const github = new Github();
searchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value;
    if (userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //alert
                }else{
                    //show profile
                }
            });
    }else{
        //clear profile
    }
});