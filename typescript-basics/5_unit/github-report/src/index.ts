import {GitHubApiService} from './GitHubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';


// calling user and repo separately
let svc = new GitHubApiService();
svc.getUserInfo('manjunath-muniraju');

console.log('Using calling:');
svc.getUserInfoWithCallback('manjunath-muniraju', (user: User) => {
    console.log(user);
}); 

svc.getRepos('manjunath-muniraju', (repos: Repo[]) => {
    console.log(repos);
})

// calling repo inside the user call

svc.getUserInfoWithCallback('manjunath-muniraju', (user: User) => {
    svc.getRepos('manjunath-muniraju', (repos: Repo[]) => {
        // to include all the repos inside user
        //user.repos = repos
        //console.log(user);

        // to sort the repos by forkCount feild 
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount]);
        user.repos = sortedRepos;
        console.log(user);

        // the above code is sorted in ascending order, to sort in descending order, just multiple by -1
        //let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * - 1]);

        // to get first 3 items of Repos
        let filteredRepos = _.take(sortedRepos, 3);
        user.repos = filteredRepos
        console.log(user);
    })
});

// to get / read from command line argument

console.log(process.argv);

if(process.argv.length < 3){
    console.log('please pass git user name');
} else {
    let userName = process.argv[2];
    svc.getUserInfoWithCallback(userName, (user: User) => {
        svc.getRepos(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount]);
            let filteredRepos = _.take(sortedRepos, 3);
            user.repos = filteredRepos
            console.log(user);
        })
    });
}
