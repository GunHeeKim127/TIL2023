# Nodejs_border

# Nodejs 초기화
```js
npm init
```
<br>

# Nodejs package 설치
![image](https://user-images.githubusercontent.com/53036090/209468634-3893fe84-711d-4e8c-a6ed-fa767acba411.png)
```js
npm install express
npm install mysql
npm install express-myconnection
npm install express-handlebars
npm install body-parser
npm install path
npm install morgan
npm install html
```
1.npm install express : node-express 사용을 위한 설치, 
  express는 rest API를 쓰기 위한 기본적인 환경 제공
  <br>

2.npm install mysql : mysql, mariaDB 사용을 위한 설치
<br>

3.npm install express-myconnection : mysql과 통신하기 위해 사용
<br>

4.npm install express-handlebars : <br>
&nbsp;1)컴파일 단계에서 코드가 해석이 되므로, 클라이언트에서 따로 코드를 해석하는 단계가 필요없다. 그러므로 로딩이 빠르다.
<br>
&nbsp;2)Logic 과 Markup 을 깔끔하게 분리 할 수 있다. {{ }} 안에 있는 것이 Logic 이다.
<br>(참조)https://velog.io/@parkoon/%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-Handlebars-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-feat-express)
<br>

5.npm install path : path 모듈은 폴더와 파일의 경로를 지정해주는 모듈이다.

6.npm install morgan : 서버의 로그 관리를 위한 모듈이다.
<br><br>
# gitignore 작성
1. node-modules, gitattrbuts, package.json
<br><br>
# crud를 위한 폴더 정리
1. app.js에서 backend폴더의 router폴더 세팅 및 router에서 rest API사용시 app.js에서 불러오기 가능
2. path를 이용하여 router에서 frontend폴더의 view폴더에 들어있는 html파일 로더 가능
3. router에 모든 역할을 두는 것이 아닌 controller폴더를 만들어 service 및 controlloer 기능을 가진 파일 저장
4. app.js에서 public의 파일을 사용할 수 있도록 app.use 세팅
<br><br>

# app.js의 순서
1) app.js가 가장 먼저 실행 → 
2) 모듈이 설치 
3) const app = express()를 실행 // express를 app이라는 변수에 선언
4) 포트 설정 
5) index.html의 상대적 위치 선언 
6) 화면을 구성하는 엔진을 HTML로 선언 
7) app.use(logger('dev'));
   // express의 안에 있는 json을 사용하겠다고 선언
   app.use(express.json());
   // 나중에 더 찾기
   app.use(express.urlencoded({ extended : false}));
   실행 이 부분은 좀더 찾아보기 
8) /frontend/public를 정규화 시킨다. 
9) mysql의 선언
10) 포트 정보보기 
11) index.js를 indexRouter라는 변수에 선언
12) 화면을 렌더링 실시
