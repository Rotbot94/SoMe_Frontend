import {useRouter} from "next/router";
import React from "react";
import {Navbar} from "flowbite-react";

export default function NavBar(): JSX.Element {
    const router = useRouter();

    let isActive = (path: string) => {
        if (!path) {
            return false;
        }
        return router.asPath == path;
    }

    return (
        <>
            <Navbar className="navbar text-white" fluid={true} rounded={true}>
                <Navbar.Brand href={"/"}>
                    <h1 className="text-white">Pesty Ninja</h1>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Link  className="text-white" href="/login" active={isActive('/login')}>
                        Login
                    </Navbar.Link>
                    <Navbar.Link className="text-white" href="/register" active={isActive('/register')}>
                        Register
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>

    );
}