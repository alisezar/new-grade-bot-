function todo() {
 // alert("new grade");
var a= document.getElementsByClassName("even")[10].cells[16].innerText;
var proj=document.getElementsByClassName("even")[11].cells[16].innerText;
var mab=document.getElementsByClassName("odd")[8].cells[16].innerText;
var kar=document.getElementsByClassName("odd")[9].cells[16].innerText;
if(a=="19"){
  window.open("https://api.telegram.org/bot API_TOKEN /sendMessage?chat_id=*******&text='robot is working fine'");

}
if(proj!=""){
  window.open("https://api.telegram.org/bot API_TOKEN /sendMessage?chat_id=*******&text='new grade proj'");
  //alert("new grade");
}
if(mab!=""){
  window.open("https://api.telegram.org/bot API_TOKEN /sendMessage?chat_id=********&text='new grade mabahes'");
 window.open("https://api.telegram.org/bot API_TOKEN /sendMessage?chat_id=*********&text='new grade mabahes'");
  //alert("new grade");
}
if(kar!=""){
 window.open("https://api.telegram.org/bot API_TOKEN /sendMessage?chat_id=*********&text='new grade kar amozi'");
  //alert("new grade");
}
 
}
function myTimer() {
  todo();
location.reload();

}
var myVar = setInterval(myTimer, 240000);
