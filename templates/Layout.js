import {GlobalStyle} from "../public/style/Global.style";
import React from "react";
import {Section} from "../public/style/Layout.style";

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Section>
            {children}
            </Section>
        </>
    )
}
export default Layout;