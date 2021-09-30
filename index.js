var billAmount= document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noofNotes = document.querySelectorAll(".no-of-notes")
const notes = document.querySelector("#notes")

const availableNotes=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
  message.style.display= "none";
  notes.style.display="";
 

  if(billAmount.value>0)
  {
  
    
    var cash=Number(cashGiven.value)
    var bill=Number(billAmount.value)

    if(cash >= bill)
    {
      
      var amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    }
    else{
      notes.style.display="none";
      showMessage("Do you want to wash plates 🍽");

    }
  }
  else{
          showMessage("Invalid Bill Amount");
  

  }
});


function calculateChange(amountToBeReturned){
  
  for(let i=0;i<availableNotes.length;i++){
    const numberOfNotes = Math.trunc(
      amountToBeReturned/availableNotes[i]
    );
      amountToBeReturned %= availableNotes[i];
      noofNotes[i].innerText = numberOfNotes;
  }
}



function hideMessage(){
  message.style.display = "none";
}


function showMessage(msg){
 message.style.display="block";
 message.innerText =msg;
}
