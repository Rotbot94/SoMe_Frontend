import {useRouter} from "next/router";
import React from "react";
import NavItem from "@/components/layout/navigation/navItem";
import {Navbar} from "flowbite-react";

export default function NavBar() {

    const navigationRoutes = [
        {title: 'register', link: '/register'},
    ];
    const router = useRouter();

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="/" active={true}>
                    Home
                </Navbar.Link>
                About
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}