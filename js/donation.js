console.log("connected");
const calculateButton=document.getElementById('donate-button');
calculateButton.addEventListener('click',function(){


    const donationInput=parseFloat(document.getElementById('donation-amount').value);
    // const totalAmount=document.getElementById('total-donate').innerText
   
   const totalAmount=parseFloat(document.getElementById('total-donate').innerText) ;
   console.log(totalAmount);
  
   const newBallance= donationInput + totalAmount;
   console.log(newBallance);
   document.getElementById('total-donate').innerText = newBallance ;
   


   const totalDivide=parseFloat(document.getElementById('total-divided').innerText) ;
   const newDivideBallance=  totalDivide -donationInput;
  
   document.getElementById('total-divided').innerText = newDivideBallance ;
  

   

  

});

