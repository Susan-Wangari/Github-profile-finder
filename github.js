class Github {
    constructor() {
        this.client_id = 'Iv1.58e45ee5b4235214';
        this.client_secret = ' 0ad3a4241d1c112f44d1861912b2bb1c4299a50a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}