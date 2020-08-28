import styled from "@emotion/styled";
import {Color} from "./Color.style";
import css from "@emotion/css";
import {MarkdownMd} from "./Markdown.style";

export const Button=styled.button`
  ${MarkdownMd()};
  width:50%;
  padding:0.5em;
  border-radius: 0.3em;
  background-color: ${Color.blue};
  color: ${Color.white};
  ${props=>props.isEmpty && css`background-color:${Color.white}; color:${Color.blue}`}
  
`
