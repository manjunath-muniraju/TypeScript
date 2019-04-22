import { Repo } from "./Repo";

export class User {
    login!: string;
    fullName!: string;
    repoCount!: number;
    follwerCount!: number;
    repos?: Repo[];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.pulic_repos;
        this.follwerCount = userResponse.followers;
        //this.login = userResponse.login;
    }
}