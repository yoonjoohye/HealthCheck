import {GlobalStyle} from "../public/style/Global.style";
import Header from "../components/base/Header";
import React from "react";
import {Section} from "../public/style/Layout.style";

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            {/*<Header/>*/}
            <Section>
            {children}
            </Section>
        </>
    )
}
export default Layout;