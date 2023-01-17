updateTest();


function updateTest(){
    fetch('http://localhost:5000/',{
        method:'get',
    }).then((res)=>res)
    .then(res =>{
        if(res.indexSuccess == false){
            window.alert(res.message)
            return;
        }
        else{
            testInnerHtml(res.rows);
        }
    })
}


function testInnerHtml(rows){
    testIH= "";
    testIH += `<div id = "command" class = "command">`
            + `<div id = "num">1</div>`
            + `<div id = "user">유저이름</div>`
            + `<div id = "subject">제목일려나?</div>`
            + `<div id = "date">${Date().toString().substring(16,4)}</div>`
            + `</div>`

            document.getElementById("demo").innerHTML=testIH;

    console.log(rows)
}