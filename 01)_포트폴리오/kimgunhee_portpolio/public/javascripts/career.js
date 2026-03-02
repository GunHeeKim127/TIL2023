// $(document).ready(function(){
//     document.getElementById("career").innerHTML
//     ='<object type="text/html" data="./view/career.html" style="width:100%; height:100%;"></object>';
//     document.getElementById("career").style.height="3000px"
// })
$(function () {
  $("#career").load("../view/career.html", function () {
    console.log("career loaded");
  });
});