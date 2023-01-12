fetch('/',{
    method:'get',
}).then((res)=>res.json())
.then(res =>{
    if(res.indexSuccess == false){
        window.alert(res.message)
        return;
    }
    else{
        for(let i = 0; i<res.rows.length;i++){
            console.log(res.rows)
            document.getElementById('demo').innerText=res.rows[i]
        }
    }
})