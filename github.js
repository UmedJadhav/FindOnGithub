class Github{
    constructor(){
        this.client_id='d3144181eb41552232b6';
        this.client_secret='9f38e2b386d4446588067e9ecf44f2b85feb84cd'; 
        this.repos_count = 5;
        this.repos_sort = 'created: asc';   
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }  
    }

}