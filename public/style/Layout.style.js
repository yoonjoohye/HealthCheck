import styled from "@emotion/styled";
import {media} from "./Media.style";

export const Section=styled.section`
  margin:auto;
  width:1000px;
  ${media.md`width:80%;`}
  ${media.sm`width:90%;`}
`
export const Grid=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:1em;
  ${props=>props.recommend && media.sm `grid-template-columns:100%; grid-gap:1em;`}
 
`
