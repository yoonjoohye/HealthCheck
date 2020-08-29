import Head from 'next/head'
import Link from 'next/link'
import Layout from "../templates/Layout";
import Modal from "../templates/modal/Modal";
import React, {useState} from "react";
import {Button} from "../public/style/Button.style";
import {Grid} from "../public/style/Layout.style";
import {css} from "@emotion/core";
import {useRouter} from "next/router";
import {MarkdownBase, MarkdownLg, MarkdownMd, MarkdownSm} from "../public/style/Markdown.style";
import styled from "@emotion/styled";
import {Color} from "../public/style/Color.style";

const Progress = styled.div`
  width:100%;
  height:5px;
  background-color:${Color.lightblue};
  &:after{
    ${MarkdownSm(Color.blue)};
    text-align: center;
    width: 100%;
    display: block;
    ${props => props.step==0 ? 
    css`content:'얼마 걸리지 않아요!';`: 
    props.step==1 ? css`content:'정말 다 와가요!';`:
        props.step===2 && css`content:'이제 마지막이에요!';`
};
  }
`
const Status = styled.div`
  background: linear-gradient(90deg,rgb(0,183,255),rgb(60, 130, 255) 17%,rgb(3,73,205) 34%,rgb(0,36,106) 51%,rgb(0,183,255) 68%,rgb(60, 130, 255) 85%,rgb(3,73,205));
  animation: progress 2s linear infinite;
  background-size: 300% 100%;
  @keyframes progress{
    0%{ background-position: 100%}
    100%{background-position: 0}
  }
  transition: width .6s ease;
  ${(props) => css`
    width: calc( ${props.step} * 45% );
  `};
  height:100%;
`
const Title = styled.h2`
  display:flex; 
  justify-content: center; 
  align-items:center;
  ${MarkdownLg(Color.blue, 600)};
  margin-bottom:0.5em;
`
const Contents = styled.div`
  ${MarkdownMd()};
`
const RadioBox = styled.input`
  display:none;
`
const FakeRadioBox = styled.label`
cursor:pointer;
    display:block;
  ${MarkdownBase()};
 padding:0.5em 1em;
 margin-bottom:0.5em;
  ${props => props.checked ?
    css`
        background-image: url('/check_white.svg');
        background-size:5%;
        background-repeat: no-repeat;
        background-position: calc( 100% - 1em );
         background-color:${Color.blue};
  color:${Color.white};

` :
    css` background-color:${Color.lightblue};
  color:${Color.blue};`
}
`
const Index = () => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(true);
    const [painType, setPainType] = useState(null);
    const [painLevel, setPainLevel] = useState(null);
    const [page, setPage] = useState(1);


    const onNegative = (page) => {
        if (page === 1) {
            setOpenModal(false);
        }
        if (page === 2) {
            setPage(1);
        }
        if (page === 3) {
            setPage(2);
        }
    }
    const onPositive = (page) => {
        if (page === 1) {
            setPage(2);
        }
        if (page === 2) {
            setPage(3);
        }
        if (page === 3) {
            router.push(`/result?painType=${painType}&painLevel=${painLevel}`);
        }
    }
    const changePainType = (e) => {
        let {value} = e.target;
        setPainType(value);
    }

    const changePainLevel = (e) => {
        let {value} = e.target;
        setPainLevel(value);
    }


    return (
        <>
            <Head>
                <title>데일리 자가건강 검진</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                {
                    openModal &&
                    <Modal>
                        <>
                            <div css={css`margin-bottom:2em;`}>

                                {
                                    page === 1 &&
                                    <Title>
                                        <img css={css`width:1.3em; height:1.3em; margin-right:0.5em;`}
                                             src="/check.svg"/>10초만에 건강 체크하기
                                    </Title>
                                }
                                {
                                    page === 2 &&
                                    <Title>어느 부분이 신경쓰이나요?</Title>
                                }
                                {
                                    page === 3 &&
                                    <Title>얼마나 아픈가요?</Title>
                                }
                                <Progress step={page - 1}>
                                    <Status step={page - 1}/>
                                </Progress>
                            </div>

                            {
                                page === 1 &&
                                <>
                                    <Contents css={css`margin-bottom:20px;`}>오늘, 조금이라도 아프거나, 신경쓰인 부분이 있나요?</Contents>
                                    <Grid css={css`margin-top:1em;`}>
                                        <Button enabled={true} isEmpty={true} onClick={() => onNegative(page)}>아니요, 전혀
                                            없어요</Button>
                                        <Button enabled={true} onClick={() => onPositive(page)}>네, 그런것같아요</Button>
                                    </Grid>
                                </>
                            }
                            {
                                page === 2 &&
                                <>
                                    <Contents>
                                        <li>
                                            <RadioBox type="radio" value={10} name="painType" checked={painType == 10}
                                                      onChange={changePainType} id="nose"/>
                                            <FakeRadioBox checked={painType == 10} htmlFor="nose">인후통이 있음</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" value={18} name="painType" checked={painType == 18}
                                                      onChange={changePainType} id="tooth"/>
                                            <FakeRadioBox checked={painType == 18} htmlFor="tooth">치아가 아픔</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" value={9} name="painType" checked={painType == 9}
                                                      onChange={changePainType} id="skin"/>
                                            <FakeRadioBox checked={painType == 9} htmlFor="skin">피부에 문제가
                                                있음</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" value={17} name="painType" checked={painType == 17}
                                                      onChange={changePainType} id="eye"/>
                                            <FakeRadioBox checked={painType == 17} htmlFor="eye">눈이 아픔</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" value={7} name="painType" checked={painType == 7}
                                                      onChange={changePainType} id="stomach"/>
                                            <FakeRadioBox checked={painType == 7} htmlFor="stomach">복통이
                                                있음</FakeRadioBox>
                                        </li>

                                        <li>
                                            <RadioBox type="radio" value={19} name="painType" checked={painType == 19}
                                                      onChange={changePainType} id="head"/>
                                            <FakeRadioBox checked={painType == 19} htmlFor="head">두통이 있음</FakeRadioBox>
                                        </li>

                                        <li>
                                            <RadioBox type="radio" value={11} name="painType" checked={painType == 11}
                                                      onChange={changePainType} id="joint"/>
                                            <FakeRadioBox checked={painType == 11} htmlFor="joint">관절이 아픔</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" value={24} name="painType" checked={painType == 24}
                                                      onChange={changePainType} id="etc"/>
                                            <FakeRadioBox checked={painType == 24} htmlFor="etc">잘 모르겠음</FakeRadioBox>
                                        </li>
                                    </Contents>
                                    <Grid css={css`margin-top:1em;`}>
                                        <Button enabled={true} isEmpty={true}
                                                onClick={() => onNegative(page)}>이전</Button>
                                        <Button enabled={painType > 0} onClick={() => onPositive(page)}>다음</Button>
                                    </Grid>
                                </>
                            }
                            {
                                page === 3 &&
                                <>
                                    <Contents>
                                        <li>
                                            <RadioBox type="radio" name="painLevel" value={1} checked={painLevel == 1}
                                                      onChange={changePainLevel} id="verybad"/>
                                            <FakeRadioBox htmlFor="verybad" checked={painLevel == 1}>😷 매우
                                                아픔</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" name="painLevel" value={2} onChange={changePainLevel}
                                                      id="bad"/>
                                            <FakeRadioBox checked={painLevel == 2} htmlFor="bad">🤒 아픔</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" name="painLevel" value={3} checked={painLevel == 3}
                                                      onChange={changePainLevel} id="good"/>
                                            <FakeRadioBox checked={painLevel == 3} htmlFor="good">🤧 약간 아픔</FakeRadioBox>
                                        </li>
                                        <li>
                                            <RadioBox type="radio" name="painLevel" value={4} checked={painLevel == 4}
                                                      onChange={changePainLevel} id="verygood"/>
                                            <FakeRadioBox checked={painLevel == 4} htmlFor="verygood">🥴 별로 아프지
                                                않음</FakeRadioBox>
                                        </li>
                                    </Contents>
                                    <Grid css={css`margin-top:1em;`}>
                                        <Button enabled={true} isEmpty={true}
                                                onClick={() => onNegative(page)}>이전</Button>
                                        <Button enabled={painLevel > 0} onClick={() => onPositive(page)}>완료</Button>
                                    </Grid>
                                </>
                            }
                        </>
                    </Modal>
                }
            </Layout>
        </>
    )
}
export default Index;