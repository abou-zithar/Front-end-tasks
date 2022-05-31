
users= JSON.parse(localStorage.getItem('users'))
var signinEmail=document.getElementById('signinEmail')
var signinPassword=document.getElementById('signinPassword')
var login=false;



logincheck=document.querySelector('button');
// console.log(logincheck);
logincheck.addEventListener('click',function(){

  checkdata();
  });


function checkdata(params) {
for(var i=0;i<users.length;i++){

  if(users[i].password==signinPassword.value && users[i].email== signinEmail.value){

    console.log('login');
      navtohome();
     login=true;

  }
  if(login){
    document.querySelector('.feedback').innerHTML=`<p class='text-success'>Success</p>`;
  }else{
    document.querySelector('.feedback').innerHTML=`<p class='text-danger'>wrong data</p>`;
    alert('please enter the right email & password');
  }
  }}




function change_flag(value){
  page_flag=value;
  console.log(page_flag);

}


function navtohome(){

    window.location.href = "home.html";
}