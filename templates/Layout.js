import {GlobalStyle} from "../assets/style/Global.style";
import Header from "../components/base/Header";
import React from "react";

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            {children}
        </>
    )
}
export default Layout;