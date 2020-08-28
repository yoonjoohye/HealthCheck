import Head from "next/head";
import Layout from "../templates/Layout";
import Link from "next/link";

const Result=()=>{
    return(
        <>
            <Head>
                <title>데일리 헬스체크 결과</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <h3>이 병원은 어떠신가요?</h3>


                <div>후기보러가기</div>
                <div>예약하러가기</div>
                <Link href="/">돌아가기</Link>
            </Layout>
        </>
    )
}
export default Result;