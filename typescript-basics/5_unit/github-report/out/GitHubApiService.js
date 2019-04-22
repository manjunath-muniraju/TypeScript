"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName) {
        /*
        let options : any = {
            headers: {
                'User-Agent' : 'request'
            },
            json : true
        }*/
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            //casae 1:
            //console.log(body);
            //let user = new User(body); //error
            // The request library returns the response body as a string by default. It needs to be parsed as a JSON object in order to access its properties.
            //casse 2:
            //let user = new User(JSON.parse(body)); // this works fine now.
            //console.log(user);
            //case 3:
            // so instead of doing JSON.parse() rather you can set in option as json is true.
            var user = new User_1.User(body);
            console.log(user);
            //case 4: now just return body from these method. let printing happen from index file
            // here we can't just have return type user in getUserInfo() and return to the caller.
            // because get() inside getUserInfo() is asyncronous method and hence getUserInfo() will also become asyncronous.
            // But there are ways to do this using promises, callbacks
        });
    };
    GitHubApiService.prototype.getUserInfoWithCallback = function (userName, cb) {
        /*let options : any = {
            headers: {
                'User-Agent' : 'request'
            },
            json : true
        }*/
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
        });
    };
    GitHubApiService.prototype.getRepos = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
