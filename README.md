# 데일리 자가건강검진
하루에 한번씩 자신의 건강 상태를 체크하면서, 이상이 있을시, 그에 해당하는 병원을 추천해주는 서비스임.

## Skill
> React, Next.js, cheerio, emotion

## 만들게 된 이유
감기같은 가벼운 질병을 무심코 넘기다가 비염에 걸렸음. 하루에 한번 자신의 건강을 체크해서 더이상 가벼운 질병을 넘기지 않게 하기 위해 만들게 됨.

## 기획
1. 건강 상태 검진
2. 병원 추천
3. 월별, 연도별 건강 상태 데이터 시각화

## 어떻게 만들었는가?
- 굿닥의 병원정보를 크롤링해서 해당 질병에 맞는 병원을 추천을 해줌.
- 설문조사를 돌려 병원에 가지않는 이유에 대한 답변을 얻어냄. 답변을 참고하여 병원에 가도록 유도하는 메세지를 넣음.
- 자가건강검진을 가볍게 할 수 있도록 모달로 보여줌.

## Install

```bash
npm run dev
# or
yarn dev
```

## ScreenShot

![image](https://user-images.githubusercontent.com/26542929/91632056-35728100-ea19-11ea-9559-7b80f23dc4ba.png)

![image](https://user-images.githubusercontent.com/26542929/91632064-3e635280-ea19-11ea-9f6c-2d5398e4e086.png)

![image](https://user-images.githubusercontent.com/26542929/91632065-428f7000-ea19-11ea-93fd-222b8c3f375f.png)

![image](https://user-images.githubusercontent.com/26542929/91632068-46bb8d80-ea19-11ea-8d8a-8662fa7e806f.png)


