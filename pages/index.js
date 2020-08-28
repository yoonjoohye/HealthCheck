import Head from 'next/head'
import Link from 'next/link'
import Layout from "../templates/Layout";
import Modal from "../templates/modal/Modal";
import React, {useState} from "react";
import {Button} from "../assets/style/Button.style";

const Index = () => {
    const [openModal, setOpenModal] = useState(true);
    const [painType,setPainType]=useState(null);
    const [painLevel,setPainLevel]=useState(null);
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
            console.log(painType);
            console.log(painLevel);
            location.href='/result';
        }
    }
    const changePainType=(e)=>{
        let {value}=e.target;
        setPainType(value);
    }

    const changePainLevel=(e)=>{
        let {value}=e.target;
        setPainLevel(value);
    }


    return (
        <>
            <Head>
                <title>데일리 헬스체크</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                {
                    openModal &&
                    <Modal>
                        {
                            page === 1 &&
                            <>
                                <h3>데일리 헬스체크</h3>
                                <section>아픈 곳이 있나요?</section>
                                <section>
                                    <Button isEmpty={true} onClick={()=>onNegative(page)}>아니요, 괜찮아요</Button>
                                    <Button onClick={()=>onPositive(page)}>네, 그런것같아요</Button>
                                </section>
                            </>
                        }
                        {
                            page === 2 &&
                            <>
                                <h3>어디가 아프신가용?</h3>
                                <ul>
                                    <li>
                                        <label htmlFor="a"><input type="radio" value={1} name="painType" onChange={changePainType} id="a"/>인후통이 있음.</label>
                                    </li>
                                    <li>
                                        <label htmlFor="b"><input type="radio" value={2} name="painType" onChange={changePainType} id="b"/>두통이 있음.</label>
                                    </li>
                                    <li>
                                        <label htmlFor="c"><input type="radio" value={3} name="painType" onChange={changePainType} id="c"/>복통이 있음.</label>
                                    </li>
                                    <li>
                                        <label htmlFor="d"><input type="radio" value={4} name="painType" onChange={changePainType} id="d"/>관절이 아픔.</label>
                                    </li>
                                    <li>
                                        <label htmlFor="e"><input type="radio" value={5} name="painType" onChange={changePainType} id="e"/>치아가 아픔.</label>
                                    </li>
                                    <li>
                                        <label htmlFor="f"><input type="radio" value={6} name="painType" onChange={changePainType} id="f"/>피부에 뭐가 났음.</label>
                                    </li>
                                    <li>
                                        <label htmlFor="g"><input type="radio" value={7} name="painType" onChange={changePainType} id="g"/>잘 모르겠음.</label>
                                    </li>
                                </ul>
                                <section>
                                    <Button isEmpty={true} onClick={()=>onNegative(page)}>이전</Button>
                                    <Button onClick={()=>onPositive(page)}>다음</Button>
                                </section>
                            </>
                        }
                        {
                            page === 3 &&
                            <>
                                <h3>얼마나 아프시나요?</h3>
                                <ul>
                                    <li><label htmlFor="verybad"><input type="radio" name="painLevel" value={1} onChange={changePainLevel} id="verybad"/>생활에 무리가 갈 정도의 아픔</label></li>
                                    <li><label htmlFor="bad"><input type="radio" name="painLevel" value={2} onChange={changePainLevel} id="bad"/>생활에 무리가 없지만, 신경 쓰일 정도의 아픔</label></li>
                                    <li><label htmlFor="good"><input type="radio" name="painLevel" value={3} onChange={changePainLevel} id="good"/>가끔 신경 쓰일 정도의 아픔</label></li>
                                    <li><label htmlFor="verygood"><input type="radio" name="painLevel" value={4} onChange={changePainLevel} id="verygood"/>신경 안 쓸 정도의 아픔</label></li>
                                </ul>
                                <section>
                                    <Button isEmpty={true} onClick={()=>onNegative(page)}>이전</Button>
                                    <Button onClick={()=>onPositive(page)}>다음</Button>
                                </section>
                            </>
                        }
                    </Modal>
                }
            </Layout>
        </>
    )
}
export default Index;