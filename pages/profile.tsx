import React from "react";
import {LoginService} from "@/utils/login-service";
import {UserService} from "@/utils/user-service";
import ProfileInfo from "@/components/profile/profileInfo";
import {User} from "@/interfaces";
import {Button} from "flowbite-react";
import Posts from "@/components/content/posts/posts";
import Connections from "@/components/content/connections/connections";
import Media from "@/components/content/media/media";

export default class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: undefined,
            isActive: 'posts'
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

    tabs = ['connections', 'media', 'posts'];

    async getUser() {
        return await UserService.get().getUser()
    }

    changeTab = (tab: string) => {
        const tabIndex = this.tabs.indexOf(tab);
        if (tabIndex != -1) {
            this.setState({isActive: tab})
        }
    }

    isActiveClasses = () => {
        return 'grow !focus:border-[#98CAF1] outline mx-1';
    }

    render() {
        const user: User = this.state.user;

        return (
            <>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col items-center">
                        <ProfileInfo user={user}/>
                        <div
                            className={"mt-5 flex flex-row !min-w-full !max-w-max bg-[#98CAF1] border-4 rounded justify-around"}>
                            <Button onClick={() => this.changeTab('posts')}
                                    className={this.state?.isActive === 'posts' ? this.isActiveClasses() : 'grow-0'}
                                    title="Posts">Posts (3)</Button>
                            <Button onClick={() => this.changeTab('connections')}
                                    className={this.state?.isActive === 'connections' ? this.isActiveClasses() : 'grow-0'}
                                    title="Posts">Connections (3)</Button>
                            <Button onClick={() => this.changeTab('media')}
                                    className={this.state?.isActive === 'media' ? this.isActiveClasses() : 'grow-0'}
                                    title="Posts">Media(6)</Button>
                        </div>
                        <div className="mt-5 flex flex-col scroll !min-w-full !max-w-max items-center">
                            {this.state?.isActive === 'posts' && <Posts/>}
                            {this.state?.isActive === 'connections' && <Connections/>}
                            {this.state?.isActive === 'media' && <Media/>}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}