import {LoginService} from "./login-service";
import axios from "axios";
import {User} from "@/interfaces";
import {cookies} from "next/headers";



export class UserService {
  private static instance: UserService;

  private user: any;

  constructor() {}

  public static get(): UserService {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  public resetUser() {
    this.user = null;
  }

  public async getUser() {
    if (!LoginService.get().isLoggedIn()) {
      return;
    }
    if (this.user) {
      return this.user;
    }
    return await axios.get(process.env.NEXT_PUBLIC_SERVER + 'user',{
      headers: {
        Authorization: "Bearer " + LoginService.get().getCookie()
      }
    }).then((data) => {
            this.user = data.data;
            return data;
    })
  }


}
