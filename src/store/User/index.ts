import { makeAutoObservable } from "mobx";

export default class UserStore {
    _isAuth;
    _user;

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    };

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    };

    setUser(user: any) {
        this._user = user;
    };

    get isAuth() {
        return this._isAuth;
    };

    get user() {
        return this._user;
    };
};