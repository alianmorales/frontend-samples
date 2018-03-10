function validateMe() {
 
  var userName = document.getElementById("userName").value;
  var pass = document.getElementById("passWrd").value;
  var btn = document.getElementById("btn");


  // NEED TO ENTER AT LEAST ONE CHARACTRER
  
  // if (userName == "" || pass == "") {
  //   alert('Enter at least one character');
  //   return false;
  // } 
  // else {
  //   return true;
  // }  


  // NEED TO ENTER AT LEAST 5 CHARACTRER
  //   if (userName.length < 5 || pass.length < 5) {
  //   alert('Enter at least 5 characters');
  //   return false;
  // } 
  // else {
  //   return true;
  // }  


  // NEED TO ENTER AT LEAST 5 CHARACTRER AND INPUT WITH RED BORDER
    if (userName.length < 5 || pass.length < 5) {
    alert('Enter at least 5 characters');
    userName.focus();
    userName.style.border = '13px solid red';
    return false;
  } 
  else {
    return true;
  } 




}