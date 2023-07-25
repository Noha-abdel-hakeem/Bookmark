var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var sitesList=[];

if(localStorage.getItem('sitesList')){
    sitesList=JSON.parse(localStorage.getItem('sitesList'));
    displayWebsites(sitesList)
    console.log(sitesList);
}


function addWebsiteName(){
    if(validateProductName() && validateProductEmail()){
        var website= {
            name: siteName.value,
            URL : siteURL.value,
         }
        
        sitesList.push(website);
        console.log(website);
        displayWebsites(sitesList);
        localStorage.setItem("sitesList", JSON.stringify(sitesList));
        clearAll() 
    }else{
        swal({
            title: "Site Name or Url is not valid, Please follow the rules below :", 
            text: "Site name must contain at least 3 characters. \n Site URL must be a valid one" , 
            icon: "error"});
            
        }
        siteURL.classList.remove('is-valid' , 'is-invalid');
        siteName.classList.remove('is-valid' , 'is-invalid');

}


function displayWebsites(list){
    var cartonaa = ``;
for (var i = 0 ; i < list.length ; i++){
cartonaa += `
<tr>
<td>${i+1}</td>
<td>${list[i].name}</td>
<td><button class="btn btn-success" onclick="openURL(${i})"><i class="fa-regular fa-eye"></i> Visit</button></td>
<td><button class="btn btn-danger" onclick="deletWebsite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>
`
// 
}
document.getElementById("WebsiteData").innerHTML=cartonaa;
}


function clearAll() {
    siteName.value=" ";
    siteURL.value = " ";
}


function deletWebsite(index) {
    sitesList.splice(index,1);
    localStorage.setItem("sitesList", JSON.stringify(sitesList));
    displayWebsites(sitesList);

}

 function openURL(index){
    open(sitesList[index].URL);
  }

function validateProductName(){
    var regex = /^[A-Z][a-z]{1,10}$/;
    if (regex.test(siteName.value)  ){
        siteName.classList.replace('is-invalid', 'is-valid');
        return true;
    }else{
        siteName.classList.add('is-invalid');
        return false;

    }
}
function validateProductEmail(){
     var urlRegex = /^(http:\/\/|https:\/\/)?(www\.)?[a-zA-Z0-9-_\.]+\.[a-zA-Z]+(:\d+)?(\/[a-zA-Z\d\.\-_]*)*[a-zA-Z.!@#$%&=-_'":,.?\d*)(]*$/;
    if (urlRegex.test(siteURL.value)  ){
        siteURL.classList.replace('is-invalid', 'is-valid');
        return true;
    }else{
        siteURL.classList.add('is-invalid');
        return false;

    }
}



