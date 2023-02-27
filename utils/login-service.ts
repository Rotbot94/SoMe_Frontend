import Cookies from 'universal-cookie';
import axios from "axios";
import Router from "next/router";
import {UserService} from "@/utils/user-service";

export class LoginService {
    private static instance: LoginService;

    constructor() {
    }

    public static get(): LoginService {
        if (!this.instance) {
            this.instance = new LoginService();
        }
        return this.instance;
    }


    loginGuard() {
        if (this.isLoggedIn()) {
            return true;
        }
        this.logout();
    }

    public isLoggedIn(): boolean {
        return !!this.getCookie();
    }

    public async login(formData: Record<string, string>) {
        return await axios.post(process.env.NEXT_PUBLIC_SERVER + 'auth/login', {
                "password": formData.password,
                "email": formData.email,
            }, {
                headers: {
                    authorization: process.env.NEXT_PUBLIC_API_TOKEN
                },
                responseType: "json"
            }
        ).then(response => {
            const cookies = new Cookies();
            cookies.set('auth', response?.data?.access_token, {path: '/'});
            return response;
        });
    }

    public getCookie() {
        const cookies = new Cookies();
        return cookies.get('auth');
    }

    public resetCookies() {
        const cookies = new Cookies();
        cookies.remove('auth', {path: '/'});
        UserService.get().resetUser();
    }

    public logout() {
        this.resetCookies();
        Router.push("/login").finally(() => Router.reload());
    }
}
