class Github{
    constructor(){
        this.client_id='d3144181eb41552232b6';
        this.client_secret='9f38e2b386d4446588067e9ecf44f2b85feb84cd';    
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }  
    }
}