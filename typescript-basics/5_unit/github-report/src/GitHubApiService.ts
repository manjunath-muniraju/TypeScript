import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS : any = {
    headers: {
        'User-Agent' : 'request'
    },
    json : true
};

export class GitHubApiService {
    getUserInfo(userName: string) {
        /*
        let options : any = {
            headers: {
                'User-Agent' : 'request'
            },
            json : true
        }*/
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error : any, response: any, body : any) => {
            //casae 1:
            //console.log(body);
            //let user = new User(body); //error
            // The request library returns the response body as a string by default. It needs to be parsed as a JSON object in order to access its properties.

            //casse 2:
            //let user = new User(JSON.parse(body)); // this works fine now.
            //console.log(user);

            //case 3:
            // so instead of doing JSON.parse() rather you can set in option as json is true.
            let user = new User(body)
            console.log(user);

            //case 4: now just return body from these method. let printing happen from index file
            // here we can't just have return type user in getUserInfo() and return to the caller.
            // because get() inside getUserInfo() is asyncronous method and hence getUserInfo() will also become asyncronous.
            // But there are ways to do this using promises, callbacks

        })
    }

    getUserInfoWithCallback(userName: string, cb: (user: User) => any) {
        /*let options : any = {
            headers: {
                'User-Agent' : 'request'
            },
            json : true
        }*/
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error : any, response: any, body : any) => {
            let user = new User(body)
            cb(user);
        })
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error : any, response: any, body : any) => {
            let repos = body.map((repo: any) => new Repo(repo))
            cb(repos);
        })
    }
}