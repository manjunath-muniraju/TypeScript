"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var _ = __importStar(require("lodash"));
// calling user and repo separately
var svc = new GitHubApiService_1.GitHubApiService();
svc.getUserInfo('manjunath-muniraju');
console.log('Using calling:');
svc.getUserInfoWithCallback('manjunath-muniraju', function (user) {
    console.log(user);
});
svc.getRepos('manjunath-muniraju', function (repos) {
    console.log(repos);
});
// calling repo inside the user call
svc.getUserInfoWithCallback('manjunath-muniraju', function (user) {
    svc.getRepos('manjunath-muniraju', function (repos) {
        // to include all the repos inside user
        //user.repos = repos
        //console.log(user);
        // to sort the repos by forkCount feild 
        var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount; }]);
        user.repos = sortedRepos;
        console.log(user);
        // the above code is sorted in ascending order, to sort in descending order, just multiple by -1
        //let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * - 1]);
        // to get first 3 items of Repos
        var filteredRepos = _.take(sortedRepos, 3);
        user.repos = filteredRepos;
        console.log(user);
    });
});
// to get / read from command line argument
console.log(process.argv);
if (process.argv.length < 3) {
    console.log('please pass git user name');
}
else {
    var userName_1 = process.argv[2];
    svc.getUserInfoWithCallback(userName_1, function (user) {
        svc.getRepos(userName_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount; }]);
            var filteredRepos = _.take(sortedRepos, 3);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
