# 데일리 자가건강검진
하루에 한번씩 자신의 건강상태를 체크하면서, 해당 질병에 맞는 병원을 추천해주는 서비스임.

## Skill
> React, Next.js, cheerio, emotion

## 만들게 된 이유
감기같은 가벼운 질병을 무심코 넘기다가 비염에 걸린 적이 있음. 하루에 한번은 꼭 자신의 건강상태를 체크하면서 개인이 건강관리를 하도록 데일리 헬스체크를 만들게 됨.

## 기획
1. 건강 상태 검진
2. 병원 추천
3. 월별, 연도별 건강 상태 데이터 시각화

## 어떻게 만들었는가?

> https://forms.gle/J16LCLbaDwMwW19aA 참고하여 개발함

### 굿닥의 병원정보를 크롤링해서 해당 질병에 맞는 병원을 추천을 해줌.
<img src="https://user-images.githubusercontent.com/26542929/91666012-9c388d00-eb34-11ea-8043-608ccbb04823.png"/>
자가 건강 검진을 통해 얻은 정보로 해당 질병에 맞는 병원을 추천하기 위해, 굿닥의 과목별 ID값을 넣어 병원 30개를 크롤링 했음.

### 설문조사를 돌려 병원에 가지않는 이유에 대한 답변을 얻어냄. 답변을 참고하여 병원에 가도록 유도하는 메세지를 넣음.
![image](https://user-images.githubusercontent.com/26542929/91666021-a5c1f500-eb34-11ea-8dc1-097d0dc1f706.png)
![image](https://user-images.githubusercontent.com/26542929/91666010-9773d900-eb34-11ea-81e8-e66f7e020857.png)
![image](https://user-images.githubusercontent.com/26542929/91666012-9c388d00-eb34-11ea-8043-608ccbb04823.png)
설문조사 중 병원을 가지 않는 이유에 대한 답변을 얻을 수 있었음. 

첫번째가 귀찮아서, 두번째가 시간이 없어서, 세번째가 별로 안 아파서였음. 이 답변을 참고하여, 병원 추천페이지 상단에 병원에 가도록 유도 메세지를 넣게 됨.

1. 매우 아픔일때, 참지 말고 병원을 가라는 메세지를 담았음
2. 아픔일때, 귀찮아도 병원을 가라는 메세지를 담았음.
3. 약간 아픔일때, 진료 시간이 얼마 걸리지 않으니 병원을 가라는 메세지를 담았음.
4. 별로 아프지 않음일때, 이 병원이 어떠냐는 메세지를 담았음.


### 자가건강검진을 가볍게 할 수 있도록 모달로 보여줌.
![image](https://user-images.githubusercontent.com/26542929/91666002-8f1b9e00-eb34-11ea-9fc4-73a413fc4f80.png)

![image](https://user-images.githubusercontent.com/26542929/91666005-9347bb80-eb34-11ea-9b54-31fa0f729a5f.png)

![image](https://user-images.githubusercontent.com/26542929/91666010-9773d900-eb34-11ea-81e8-e66f7e020857.png)

'건강검진'이라는 무거운 주제를 어떻게 하면 사용자들이 편하게, 가볍게 건강검진을 할지 고민했음.

모달을 사용하면, 페이지를 넘기는 것보다 훨씬 가볍게 느껴지지 않을까 생각해서 선택하게 됨.


## Install

```bash
npm run dev
# or
yarn dev
```

## ScreenShot

![image](https://user-images.githubusercontent.com/26542929/91666002-8f1b9e00-eb34-11ea-9fc4-73a413fc4f80.png)

![image](https://user-images.githubusercontent.com/26542929/91666005-9347bb80-eb34-11ea-9b54-31fa0f729a5f.png)

![image](https://user-images.githubusercontent.com/26542929/91666010-9773d900-eb34-11ea-81e8-e66f7e020857.png)

![image](https://user-images.githubusercontent.com/26542929/91666012-9c388d00-eb34-11ea-8043-608ccbb04823.png)



