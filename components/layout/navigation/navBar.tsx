import {useRouter} from "next/router";
import React from "react";
import NavItem from "@/components/layout/navigation/navItem";
import {Navbar} from "flowbite-react";

export default function NavBar() {
    const router = useRouter();

    let isActive = (path: string) => {
        if (router.asPath == path) {
            return true;
        }
    }

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="/" active={isActive('/')}>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/login" active={isActive('/login')}>
                    Login
                </Navbar.Link>
                <Navbar.Link className="self-end" href="/register" active={isActive('/register')}>
                    Register
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}