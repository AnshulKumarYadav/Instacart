document.querySelector("#login").addEventListener('click',loginFunction);
var login = document.querySelector("#loginPage");
var close = document.querySelector("#close1").addEventListener("click",closeFunction);

function loginFunction()
{
    login.style.display="block";
}
function closeFunction()
{
    login.style.display="none";
}








// ----------------------------------------------------menu---------------------------------------------------------------
document.querySelector("#menu").addEventListener("click", menuFunction); 
var menuPage = document.querySelector("#menuPage");
var close3 = document.querySelector("#close3").addEventListener("click",closeMenu);

function menuFunction(){
    menuPage.style.display="block";
}
function closeMenu(){
    menuPage.style.display="none";
    department.style.display="none";
    ways.style.display="none";
    Help.style.display="none";

}








// ---------------------------------------------More ways to shop section --------------------------------------------------------

document.querySelector("#moreWay").addEventListener("click",waysFunction)
var ways = document.querySelector("ways");

function waysFunction()
{
    ways.display.display="block";
    Help.style.display="none";
    department.style.display="none";

}



// -------------------------------------------Help Box -----------------------------------------------------------------------------
document.querySelector("#help").addEventListener("click",helpFunction);
var Help = document.querySelector("#helpBox");

function helpFunction()
{
    Help.style.display="block";
}







//------------------------------------Department options after click on department------------------------------------------------

document.querySelector("#departmentList").addEventListener("click",departFunction);
var department = document.querySelector("#department");
function departFunction()
{
    department.style.display="block";
}










// --------------------------------------signup popup-----------------------------------------

document.querySelector("#signup").addEventListener("click",signupFunction);
var signup = document.querySelector("#signupPage");
var close2 = document.querySelector("#close2").addEventListener("click",closeSignupFunction);

function signupFunction()
{
    signup.style.display="block";
}


function closeSignupFunction(){
    signup.style.display="none";
}
 


document.querySelector("#contButton").addEventListener("click",continueFunction);
function continueFunction()
{
    alert("Account Successfully created")
}
// var arrObj = [];
// var email = document.querySelector("#email").value;
// var pass = document.querySelector("#password").value;
// var confirmPassword = document.querySelector("#confirmPassword").value;

// function continueFunction()
// {
//     event.preventDefault();
   
// var obj = {
//     email,
//     pass,
//     confirmPassword
// }
// arrObj.push(obj);
//    localStorage.setItem("accountData",JSON.stringify(arrObj));
// }







// -----------------------------------------------stores------------------------------------------------
var storesData = [
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png",name:"Sprouts Farmers Market"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1/1fe0065e-a947-4b5d-b274-3900694536d5.png",name:"Safeway"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png",name:"Costco"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/31/f889f29f-5d02-4e96-92d2-19c05e886ff6.png",name:"Rainbow Grocery"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png",name:"Walgreens"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1239/fa662636-8cbe-4625-b4a8-e5a54cc647bc.png",name:"Woodlands"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/118/c7780a16-90f9-4596-b82b-af4121fe1ca0.png",name:"Mollie Stone's Markets"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/180/485ab8a3-eadb-480e-9936-ca19c5777f10.png",name:"Gus's Community Market"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/115/9617cce6-ddc3-4f24-a705-d92b7c95e886.jpg",name:"CVS Pharmacy"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/220/fba1c010-69bd-4fd2-9d51-031a8cbe2965.png",name:"BevMo!"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/29/1fbf3168-c654-4f7d-864f-7a615a041346.jpg",name:"Bi-Rite Market"},
    {image:"https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/119/9e38aaa6-e5ae-4be4-a960-0ec79fc8ae9d.png",name:"Lucky Supermarkets"},
]



storesData.map(function(elem){
    var boxes = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.innerText = elem.name;
    var delivery = document.createElement("p");
    delivery.innerText = "Delivery";

    var innerbox = document.createElement("div");
    innerbox.append(name,delivery);

    boxes.append(img,innerbox);

    document.querySelector("#stores").append(boxes);
})

