import {useRouter} from 'next/router';
import Layout from "../../templates/Layout";
import Head from "next/head";

const Check = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Head>
                <title>검사중...</title>
            </Head>
            <Layout>
                {
                    id === '1' ?
                        <section>
                            <h3>오늘은 어디가 아프시나요?</h3>
                            <ul>
                                <li>
                                    <input type="radio" id="a"/> <label htmlFor="a">인후통이 있음.</label>
                                </li>
                                <li><input type="radio" id="b"/><label htmlFor="b">두통이 있음.</label></li>
                                <li><input type="radio" id="c"/><label htmlFor="c">복통이 있음.</label></li>
                                <li><input type="radio" id="d"/><label htmlFor="d">관절이 아픔.</label></li>
                                <li><input type="radio" id="e"/><label htmlFor="e">치아가 아픔.</label></li>
                                <li><input type="radio" id="f"/><label htmlFor="f">피부에 뭐가 났음.</label></li>
                                <li><input type="radio" id="g"/><label htmlFor="g">이상 없음.</label></li>
                            </ul>
                            <button onClick={() => location.href = '/check/2'}>버튼</button>
                        </section> : null
                }
                {
                    id === '2' ?
                        <section>
                            <h3>얼마나 아프시나요?</h3>
                            <ul>
                                <li><input type="radio"/><label htmlFor="a">생활에 무리가 갈 정도</label></li>
                                <li><input type="radio"/><label htmlFor="a">생활에 무리가 없지만, 신경쓰임.</label></li>
                                <li><input type="radio"/><label htmlFor="a">살짝 느껴짐.</label></li>
                                <li><input type="radio"/><label htmlFor="a">생활에 지장 없음.</label></li>
                            </ul>
                            <button onClick={() => location.href = '/check/1'}>이전</button>
                            <button onClick={() => location.href = '/result'}>버튼</button>
                        </section> : null
                }
            </Layout>
        </>
    )
}
export default Check;