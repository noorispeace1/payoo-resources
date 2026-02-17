console.log("login functionality connect");
document.getElementById("login-btn").addEventListener("click", function(){
    const numberInput=document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);
//get the mobile number input 
const inputPin =document.getElementById("input-pin")
const pin= inputPin.value;
console.log(pin);
//match pin & mobile number
if(contactNumber == "01234567890" && pin== "1234"){

//3-1 true ...> alert> homepage

    alert("login Success");
    // window.location.replace("/home.html");
    window.location.assign("/home.html");

}else{


//3-1 true-alert> return
  alert("login Failed")
  return;

}
})