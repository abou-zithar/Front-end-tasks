



users= JSON.parse(localStorage.getItem('users'))




document.querySelector('div').innerHTML=`<h2>Welcome  ${users[users.length-1].name} </h2>`


logout=document.querySelector('button');
// console.log(logincheck);
logout.addEventListener('click',function(){
    
    window.location.href = "index.html";
 
  });