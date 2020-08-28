import {Global, css} from '@emotion/core';
import * as React from "react";
import {Color} from "./Color.style";

export const GlobalStyle = () => (
    <Global styles={css`
    *{
      margin:0;
      padding:0;
    }
    html {
      width: 100%;
      height: 100%;
    }
    
    body {
      width: 100%;
      font-family:  sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
    
    textarea {
      font-family:  sans-serif;
      font-size: 16px;
      line-height: 1.5;
      outline:none;
    }
    
    input {
      font-family:  sans-serif;
      font-size: 16px;
      line-height: 1.5;
      outline:none;
    }
    button{
      border:0;
      cursor:pointer;
      outline:none;
    }
    li {
      margin:0;
      padding: 0;
      list-style: none;
    }
    
    ol, ul {
      margin: 0;
      padding: 0;
    }
    
    a {
      color:${Color.black};
      text-decoration: none;
    }
    
`}></Global>
)