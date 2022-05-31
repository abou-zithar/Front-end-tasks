


// var errorlable=




var page_flag=0

if(localStorage.getItem('users')==null){
  // adduser();
}else{
  users= JSON.parse(localStorage.getItem('users'))

}
// ---------------------------------------------------------------------

//sigup page-----------------------------------

var users=[];
var signupName=document.getElementById('signupName')
var signupEmail=document.getElementById('signupEmail')
var signupPassword=document.getElementById('signupPassword')

savedata=document.querySelector('.savedata');
savedata.addEventListener('click',function(){

  adduser();
  });



function adduser(params) {
  var repeat=false
for(var i=0;i<users.length;i++){
if(users[i].name==signupName.value ||users[i].password==signupPassword.value||users[i].email==signupEmail.value){
  console.log('error');
   repeat=true;
}
}
  if(!repeat){
    var user={
        name:signupName.value,
        password:signupPassword.value,
        email:signupEmail.value,
        
    }
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
    document.querySelector('.error').innerHTML=`<p class='text-success'>Success</p>`;
    clearform();
}else{
 //display console.error();
 document.querySelector('.error').innerHTML=`<p class='text-danger'>the data you enter is already exist</p>`
}






}

   function clearform(){
    signupName.value='';
    signupPassword.value='';
    signupEmail.value='';

}


// login------------------------------------ 
