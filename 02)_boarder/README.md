# normal_boarder
# 22.12.21. 게시판 만들기
### 1) 게시판 깃허브 repasitory 만들기
<br>

# 22.12.23
### 1) mariaDB 설정
<br>

# 22.12.24
### 1) mariaDB 및 nodejs 연결
```js
npm install nodejs
npm install mysql --save
```

### 2) mariaDB 및 nodejs
![image](https://user-images.githubusercontent.com/53036090/209423545-27a89504-a393-4d87-9c98-e59e020c1ce5.png)
![image](https://user-images.githubusercontent.com/53036090/209423567-19e84c37-3467-494f-9f17-60a5aff5ea3d.png)
<br>

### 3) gitignore 적용 안될때
```js
git rm -r --cached .
git add .
git commit -m "remove source files"
```
<br>

### 4) Error: ER_NO_SUCH_TABLE: Table 'user_test1.user_test1' doesn't exist 오류시
```js
 //'.' 앞의 이름은 database명 위의 이름은 테이블 명
 //현재 mysql에 데이터베이스명(현재 폴더에서 ./backend/connect/mariadb.js의 7번째줄)과 테이블명(현재 폴더에서 ./backend/connect/mariadb.js의 11번째줄)을 찾은후 적용

 ```
