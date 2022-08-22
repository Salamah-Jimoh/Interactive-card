console.log('BismilLah');
let cardName=document.getElementById('card-name');
let cardNumber=document.getElementById('card-number');
let cardCvv=document.getElementById('card-cvv');
let cardDate=document.getElementById('card-date');
let nameInput=document.getElementById('nameInput');
let numberInput=document.getElementById('numberInput');
let monthInput=document.getElementById('mm');
let yearInput=document.getElementById('yy');
let cvvInput=document.getElementById('cvcInput')
let btn=document.getElementById('confirm-btn');
//for mobile
let mobileName=document.getElementById('mobile-name');
let mobileNumber=document.getElementById('mobile-number');
let mobileCvv=document.getElementById('mobile-cvv');
let mobileDate=document.getElementById('mobile-date');
//Events
//  Keyup Events for desktop
nameInput.addEventListener('keyup', ()=>{
cardName.textContent=nameInput.value;
mobileName.textContent=nameInput.value;
});
numberInput.addEventListener('keyup', ()=>{
    cardNumber.textContent=numberInput.value;
    mobileNumber.textContent=numberInput.value;
});
cvvInput.addEventListener('keyup', ()=>{
    cardCvv.textContent=cvvInput.value;
    mobileCvv.textContent=cvvInput.value;
});
monthInput.addEventListener('keyup', ()=>{
    cardDate.textContent=monthInput.value;
    mobileDate.textContent=monthInput.value;
});
yearInput.addEventListener('keyup', ()=>{
    cardDate.textContent=`${monthInput.value} / ${yearInput.value}`;
    mobileDate.textContent=`${monthInput.value} / ${yearInput.value}`;
});
//check card number
const checkNumber=()=>{
 let validateDiv=document.getElementById('validate-number');
 let valid =false;
 if(/^[a-z]+$/i.test(numberInput.value)){
    numberInput.style='border:1px solid red';
    validateDiv.innerHTML='<p class="number-validation">Wrong format, numbers only</p>';
    }else{
        valid=true;
    }
    return valid
};
//check date
const checkBlank=()=>{
 let validateDate=document.getElementById('validate-date');
 let validateName=document.getElementById('validate-name');
    let valid =false;
    if(monthInput.value === '' || yearInput.value === '' || nameInput.value === ''){
        nameInput.style='border:1px solid red';
        validateName.innerHTML="<p class='number-validation'>Can't be blank</p>";
        monthInput.style='border:1px solid red';
        yearInput.style='border:1px solid red';
        validateDate.innerHTML="<p class='number-validation'>Can't be blank</p>";
     }else{
         validateDate.remove();
         valid =true;
     }
     return valid;
};
//check cvv
const checkCvv=()=>{
    let validateCvv=document.getElementById('validate-cvv');
    let valid =false;
    if (cvvInput.value === ''){
        cvvInput.style='border:1px solid red';
        validateCvv.innerHTML="<p class='number-validation validate-cvv'>Can't be blank</p>";
     } else{
         validateCvv.remove();
         valid =true;
     }
return valid;
}
//Validate
btn.addEventListener('click', confirmCard);
function confirmCard(e){
    e.preventDefault();
 let isnumberValid=checkNumber(),
    isBlankValid=checkBlank(),
    isCvvValid=checkCvv()
 let isFormValid=isnumberValid && isBlankValid && isCvvValid;
 if(isFormValid){
    let myForm= document.getElementById('my-form');
    let complete=document.getElementById('complete');
myForm.style.display="none"
complete.style.display="block";
 }
 }
// Reset form
let completeBtn=document.getElementById('complete-btn');
completeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(completeBtn)
    let myForm= document.getElementById('my-form');
    let complete=document.getElementById('complete');
    myForm.style.display="block";
    complete.style.display="none"
    nameInput.value='';
    numberInput.value='';
    monthInput.value='';
    yearInput.value=''
    cvvInput.value='';
})

 //Legacy codes
/* else{
    let myForm= document.getElementById('my-form');
    let complete=document.getElementById('complete');
myForm.remove();
complete.style.display="block";
    console.log("enjoy your life"); }*/

  /*else if(cvvInput.value === ''){
cvvInput.style='border:1px solid red';
/*validateCvv.innerHTML="<p class='number-validation validate-cvv'>Can't be blank</p>";
 }else{
console.log("enjoy your life")
    }
  
}*/
/*if(/^[a-z]+$/i.test(numberInput.value)){
     numberInput.style='border:1px solid red';
  validateDiv.innerHTML='<p class="number-validation">Wrong format, numbers only</p>';
 }
 if(monthInput.value === '' || yearInput.value === ''){
    monthInput.style='border:1px solid red';
    yearInput.style='border:1px solid red';
    validateDate.innerHTML="<p class='number-validation'>Can't be blank</p>";
 } if (cvvInput.value === ''){
    cvvInput.style='border:1px solid red';
    validateCvv.innerHTML="<p class='number-validation validate-cvv'>Can't be blank</p>";
 } 
 else{
    let myForm= document.getElementById('my-form');
    let complete=document.getElementById('complete');
myForm.remove();
complete.style.display="block";
    console.log("enjoy your life"); }*/ 
//refrence
/* var numberValue=numberInput.value;
  var re=/^[0-9]+$/;
  var re=/^[a-z]+$/i;
   if(re.test(numberValue)){
console.log("this is alphabet")
   }else{
    console.log("this is not alphabet") 
   }
   console.log(numberValue);*/