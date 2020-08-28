import Head from "next/head";
import Layout from "../templates/Layout";
import Link from "next/link";
import axios from 'axios';
import cheerio from 'cheerio';
import React, {useEffect, useState} from "react";
import {css} from "@emotion/core";
import {Button} from "../public/style/Button.style";
import styled from "@emotion/styled";
import {Color} from "../public/style/Color.style";
import {Grid} from "../public/style/Layout.style";
import {MarkdownLg, MarkdownMd, MarkdownSm} from "../public/style/Markdown.style";
import {useRouter} from "next/router";
import Spinner from "../components/loading/Spinner";


const HospitalBox = styled.a`
  background-color:${Color.white};
  padding:1.5em;
  box-shadow:0 0 10px rgba(0,0,0,0.13);  
  &:hover{
    background-color:#f9f9f9;
  }
`
const Title=styled.div`
  ${MarkdownLg(Color.blue, 600)};
  padding:1.5em 0;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Name=styled.figcaption`
  margin-bottom:1em;
  ${MarkdownMd('', 500)};
`
const Location=styled.figcaption`
  margin-bottom:1em;
  ${MarkdownSm('#777777')};
`
const Intro=styled.figcaption`
  padding-top:1em;
  border-top: 1px solid #eee; 
  ${MarkdownSm('#777777')}
`
const Img=styled.img`
  margin-bottom:1em;
  width:300px; 
  height:160px;
`
const Result = () => {
    const [hospital, setHospital] = useState([]);
    const [loading,setLoading]=useState(false);
    const router = useRouter();

    const parseGooddoc = async () => {
        setLoading(true);
        try {
            let res = await axios.get(`https://www.goodoc.co.kr/hospitals?department_id=${router.query.departmentId}&list_open=1`);

            if (res.status === 200) {
                const $ = cheerio.load(res.data);

                const bodyList = $('div.search_result').children('a');

                let response = [];

                bodyList.map((idx, item) => {
                    response[idx] = {};
                    response[idx].name = '';
                    response[idx].intro = '';
                    response[idx].location = '';
                    response[idx].img = '';
                    response[idx].url = '';
                });

                bodyList.map((idx, item) => {
                    response[idx].name = $(item).find('div.hospital_name').text().trim();
                    response[idx].intro = $(item).find('div.hospital-mini-desc').text();
                    response[idx].location = $(item).find('div.address').text();
                    response[idx].img = $(item).find('div.picture_frame > img').attr('src');
                    response[idx].url = $(item).attr('href')
                });

                setHospital(response);
                setLoading(false);
                // console.log(response);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        parseGooddoc();
    }, [router])
    return (
        <>
            {
                loading&&
                    <Spinner/>
            }
            <Head>
                <title>데일리 헬스체크 결과</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Title><img css={css`width:2em; height:2em; margin-right:0.5em;`} src="/hospital.svg" alt="데일리헬스체크-병원이미지"/>이 병원에 가보시는건 어떤가요?</Title>
                <Grid recommend={true} css={css`margin-bottom:3em; min-height:100vh;`}>
                    {
                        hospital.map((item, idx) => {
                            return (
                                <HospitalBox key={idx} href={`https://www.goodoc.co.kr/${item.url}`} target="_blank">
                                    <figure>
                                            <Name>{item.name}</Name>
                                            <Location>
                                                <img css={css`width:0.8em; height:0.8em;`} src="/location.svg" alt="데일리헬스체크-지도이미지"/>
                                                {item.location}
                                            </Location>
                                        {
                                            item.img &&
                                            <Img src={item.img}/>
                                        }
                                        {
                                            item.img &&
                                            <Intro>{item.intro}</Intro>
                                        }
                                    </figure>
                                </HospitalBox>
                            )
                        })
                    }
                </Grid>
                <Button enabled={true} css={css`margin-bottom:3em;`} onClick={() => location.href = '/'}>메인화면으로 돌아가기</Button>
            </Layout>
        </>
    )
}
export default Result;