var siteName=document.getElementById('siteName')
var siteURL=document.getElementById('siteURL')

if(localStorage.getItem('allSites')==null){
    var allSites=[];
}else{
    allSites= JSON.parse(localStorage.getItem('allSites'));
    displaySites();
}



function addSite(params) {
 var Site={
     name:siteName.value,
     URl:siteURL.value,
     
 }
 allSites.push(Site)
 localStorage.setItem('allSites',JSON.stringify(allSites))
 displaySites();
 clearform();
}



function displaySites(){
    var card=``;
    for(var i=0;i<allSites.length;i++){
        card+=` 
          
        <div class="bg me-auto  p-3 my-4">
        <div class="cont d-flex flex-row justify-content-evenly w-50">
        <div class="fs-4 fw-bold">${allSites[i].name}</div>
        <div class="buttons">
          <button class="btn btn-primary" onclick="visitesite(${i})">visite</button>
          <button  onclick="deletesite(${i})" class="btn btn-danger">delete</button>
        </div>
        </div>
      </div>
      `;

      document.getElementById('cards').innerHTML=card
    }


}

function clearform(){
    siteName.value='';
    siteURL.value='';

}

function deletesite(index){
     
    allSites.splice(index,1);
    localStorage.setItem('allSites',JSON.stringify(allSites))
    console.log(allSites); 
    displaySites();  
}
function visitesite(index){
    location.href=allSites[index].URl;
    // location.replace(allSites[index].URl)
    console.log('sasa');
}