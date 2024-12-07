console.log("connected");
const calculateButton=document.getElementById('donate-button');
calculateButton.addEventListener('click',function(){


    const donationInput=parseFloat(document.getElementById('donation-amount').value);
   
   const totalAmount=parseFloat(document.getElementById('total-donate').innerText) ;
  
   const newBallance= donationInput + totalAmount;
   console.log(newBallance);
   document.getElementById('total-donate').innerText = newBallance ;
  

});

