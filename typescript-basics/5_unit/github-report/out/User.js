"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.pulic_repos;
        this.follwerCount = userResponse.followers;
        //this.login = userResponse.login;
    }
    return User;
}());
exports.User = User;
