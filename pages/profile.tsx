import React from "react";
import {LoginService} from "@/utils/login-service";
import {UserService} from "@/utils/user-service";
import ProfileImage from "@/components/profileImage";

export default class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        LoginService.get().loginGuard();
        this.getUser().then(data => {
            if (data) {
                this.setState({user: data})
            }
        })
    }

    async getUser() {
        return await UserService.get().getUser()
    }

    render() {
        const user = this.state.user;
        return (
            <div className="container">
                <p className="capitalize">Hej {user?.first_name} {user?.last_name}</p>
                <ProfileImage url={'https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg'}/>
            </div>
        )
    }
}