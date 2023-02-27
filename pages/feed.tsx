import React from "react";
import {LoginService} from "@/utils/login-service";
import {UserService} from "@/utils/user-service";
import ProfileImage from "@/components/profileImage";

export default class Feed extends React.Component<any, any> {
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
        return (
            <div className="container">
                Feed
            </div>
        )
    }
}