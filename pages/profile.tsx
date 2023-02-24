import React from "react";
import {LoginService} from "@/utils/login-service";
import {UserService} from "@/utils/user-service";
import {User} from "@/interfaces";

export default class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: null
        }
    }
    componentDidMount() {
        LoginService.get().loginGuard();
        this.getUser().then(data => this.setState({user: data}))
    }
    async getUser() {
        return await UserService.get().getUser()
    }
    render() {
        return (<div>hej {this.state?.user?.first_name} {this.state?.user?.last_name}</div>)
    }
}