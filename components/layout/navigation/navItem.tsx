import React from "react";
import {Navbar} from "flowbite-react";
import Link from "next/link";

export default class NavItem extends React.Component<{ href: any, text: any }> {
    render() {
        let {href, text} = this.props;
        // const isActive = router.asPath === (href === "/home" ? "/" : href);
        return (
            <Navbar.Link href={href === "/home" ? "/" : href}
                  className={'nav_item'}>
                {text}
            </Navbar.Link>
        );
    }
}