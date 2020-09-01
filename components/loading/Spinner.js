import {css} from "@emotion/core";
import styled from "@emotion/styled";

const SpinnerSection=styled.div`
  position:fixed;
  width:100%;
  height:100vh;
  top:0;
  left:0;
  right:0;
  background-color:rgba(255,255,255,0.13);
  display:flex;
  justify-content: center;
  align-items: center;
`
const Spinner=()=>{
    return(
        <SpinnerSection>
            <img css={css`height:3em;`} src="/images/spinner.gif"/>
        </SpinnerSection>
    )
}
export default Spinner;