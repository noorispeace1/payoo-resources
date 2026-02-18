document.getElementById("cashout-btn").addEventListener("click",function()
{
    //1-get the agent number & validate
    const cashoutNumber =getValueFromInput("cashout-number");
    if(cashoutNumber.length !=11){
         alert("invalid Number");
    return;
}
    
    //2-get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");
   
 const currentBalance =getBalance();
 //4 calculate Balance
 const newBalance=currentBalance - Number (cashoutAmount)
 console.log(newBalance);
if(newBalance < 0){
    alert("invalid Amount");
    return;
}
const pin = getValueFromInput("cashout-pin");
if(pin ==='1234'){
    alert("cashout Successfull");
      setBalance(newBalance)
      //1- history-container k dhore niye ashbo
    const history =document.getElementById("history-container");

    //2-new div create korbo
    const newHistory = document.createElement("div");
    //3-new div innerhtml add korbo
    newHistory.innerHTML=`
    <div class="transactions-card p-5 bg-base-100">
     Cashout ${cashoutAmount} TAKA success to
         ${cashoutNumber} ,at ${new Date()}
    </div>
    `;
    //4- history container a newDiv append korbo
    history.append(newHistory)
}else{
    alert("invalid Pin");
    return;
}


})




// document.getElementById("cashout-btn").addEventListener("click",function(){
// //1-get the agent number & validate
// const cashoutNumberInput= document.getElementById("cashout-number");
// const cashoutNumber=cashoutNumberInput.value;
// console.log(cashoutNumber);
// if(cashoutNumber.length !=11){
//     alert("Invalid Agent Number");
   
//     return
// }
// //2- get the amount, validate, convert to number
// const cashoutAmountInput= document.getElementById("cashout-amount");
// const cashoutAmount =cashoutAmountInput.value;
// console.log(cashoutAmount);
// //3- get the current balance, validate, convert to number
// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance);

// //4-calculate new Balance
// const newBalance= Number(balance) -Number(cashoutAmount)
// console.log(newBalance);
// if(newBalance < 0){
//     alert("Invalid Amount");
//     return


// }else{
// //5-2 true :: show anerror alert > return
// //5-get the pin and verify
// const cashoutPinInput =document.getElementById("cashout-pin");
// const pin= cashoutPinInput.value;
// if(pin ==='1234'){
// //5-1 true:: show an alert>set Balance
// alert("cashout successfull")
// }
// console.log("new Balance",newBalance);
// balanceElement.innerText=newBalance;
// } 
// })