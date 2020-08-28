import React from 'react';
import styled from "@emotion/styled";
import {Color} from "../../assets/style/Color.style";

const ModalSection=styled.div`
  position:fixed;
  width:100%;
  height:100vh;
  top:0;
  left:0;
  right:0;
  background-color:rgba(0,0,0,0.13);
  display:flex;
  justify-content: center;
  align-items: center;
`
const ModalBox=styled.div`
  box-shadow: 0 0 10px rgba(0,0,0,0.13);
  background-color:${Color.white};
  padding:1em;
  width:500px;
  min-height:300px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;

`

const Modal = ({children}) => {

    return (
        <ModalSection>
            <ModalBox>
                {children}
            </ModalBox>
        </ModalSection>
    )

}
export default Modal;