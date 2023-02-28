import React, {ReactNode} from "react";
import Head from 'next/head';
import {LoginService} from "@/utils/login-service";
import dynamic from "next/dynamic";
import {Footer} from "flowbite-react";

interface ILayoutProps {
    children: ReactNode;
}

const isLoggedIn = LoginService.get().isLoggedIn();

const Nav = dynamic(() => import("@/components/layout/navigation/navBar"), {ssr: false});
const SignedInNav = dynamic(() => import("@/components/layout/navigation/signedInNavBar"), {ssr: false});

const Layout = ({children}: ILayoutProps) => {
    return (
        <>
            <Head>
                <title>SoMe Frontend</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {isLoggedIn ? <SignedInNav></SignedInNav> : <Nav></Nav>}
            <div>
                {children}
            </div>
            {/*<Footer>*/}
            {/*    <Footer.Copyright*/}
            {/*        href="/"*/}
            {/*        by="Ali Issa™"*/}
            {/*        year={2023}*/}
            {/*    />*/}
            {/*    <Footer.LinkGroup>*/}
            {/*        <Footer.Link href="/">*/}
            {/*            Index*/}
            {/*        </Footer.Link>*/}
            {/*    </Footer.LinkGroup>*/}
            {/*</Footer>*/}
        </>
    );
};

export default Layout;