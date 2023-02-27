import Router, {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {Navbar, Dropdown, Avatar} from "flowbite-react";
import {LoginService} from "@/utils/login-service";
import {UserService} from "@/utils/user-service";
import {User} from "@/interfaces";

export default function SignedInNavBar(this: any): JSX.Element {
    const [user, setUser] = useState<User | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        if (LoginService.get().isLoggedIn()) {
            UserService.get().getUser().then((user) => {
                if (user) {
                    setUser(user);
                }
            });
        }
    })

    const logout = () => {
        LoginService.get().logout();
    }

    let isActive = (path: string) => {
        if (!path) {
            return false;
        }
        return router.asPath == path;
    }

    return (
        <>
            <Navbar className="navbar" fluid={true} rounded={true}>
                <Navbar.Brand href={"/"}>
                    <h1>SoMe</h1>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className={"m-2"}>
                    <Navbar.Link href="/feed" active={isActive('/feed')}>
                        Feed
                    </Navbar.Link>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings"
                                       img="https://i.pinimg.com/originals/bf/3a/fd/bf3afd9576212371897e10694c078855.jpg"
                                       rounded={true}/>}>
                        <Dropdown.Header>
                        <span className="block text-sm">
                            {user && <div>
                                <div className="capitalize">
                                    {`${user?.first_name} ${user?.last_name}`}
                                </div>
                                <div>
                                    {user?.email}
                                </div>
                            </div>
                            }
                        </span>

                        </Dropdown.Header>
                        <Dropdown.Item>
                            <a href={"/profile"}>Go to profile</a>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => logout()}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}