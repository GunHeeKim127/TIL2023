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

# gitignore 작성
1. node-modules, gitattrbuts, package.json
