console.log("connected");
const calculateButton=document.getElementById('donate-button');
calculateButton.addEventListener('click',function(){

    const donationInput=parseFloat(document.getElementById('donation-amount').value); 
if (!isNaN(donationInput) && donationInput > 0) {
      const totalAmount=parseFloat(document.getElementById('total-donate').innerText) ;
   console.log(totalAmount);
//   add
   const newBallance= donationInput + totalAmount;
   console.log(newBallance);
   document.getElementById('total-donate').innerText = newBallance ;  


// divide
   const totalDivide=parseFloat(document.getElementById('total-divided').innerText) ;
   const newDivideBallance=  totalDivide -donationInput;
   document.getElementById('total-divided').innerText = newDivideBallance ;
document.getElementById('donation-amount').value = "";
} else {
    alert("Please enter a valid donation amount.");
}
   
});
