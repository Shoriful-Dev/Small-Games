let headingOne = document.querySelector('.headingOne')
let inputOne = document.querySelector('.inputOne')
let buttonOne = document.querySelector('.buttonOne')
let error = document.querySelector('.error')

let headingtwo = document.querySelector('.headingtwo')
let inputtwo = document.querySelector('.inputtwo')
let buttontwo = document.querySelector('.buttontwo')
let error2 = document.querySelector('.error2')
let chance = document.querySelector('.chance')

let count = 5;

buttonOne.addEventListener('click',() => {
if (!inputOne.value){
 error.innerHTML="Enter Something ?";
} else if (isNaN(inputOne.value)){
 error.innerHTML="Pleace Write a Number";
} else if (!(inputOne.value <= 10 && inputOne.value >0)){
 error.innerHTML="Pleace Write a 1 to 10 Number";
}else {
 headingtwo.style.display="block"
 inputtwo.style.display="block"
 buttontwo.style.display="block"
 error2.style.display="block"
 chance.innerHTML=`Chance :${count}`

 headingOne.style.display="none"
 inputOne.style.display="none"
 buttonOne.style.display="none"
 error.style.display="none"
}

})
buttontwo.addEventListener('click',() => {
if (!inputtwo.value){
 error2.innerHTML="Enter Something ?";
} else if (isNaN(inputtwo.value)){
 error2.innerHTML="Pleace Write a Number";
} else if (!(inputtwo.value <= 10 && inputtwo.value >0)){
 error2.innerHTML="Pleace Write a 1 to 10 Number";
}else {
 error2.innerHTML=""
 if (count>1){
  count--
  chance.innerHTML=`Chance :${count}`
  if (inputOne.value == inputtwo.value){
   headingtwo.innerHTML="Player Two Is Winner🏆";
   headingtwo.style.color="green"
   buttontwo.style.display="none"
   inputtwo.style.display="none"
   chance.style.display="none"
  }
 }else {
  count=0
  chance.innerHTML=`Chance :${count}`
  headingtwo.innerHTML="You Are Loser 🙆";
  headingtwo.style.color="red"
  buttontwo.style.display="none"
  inputtwo.style.display="none"
  
 }
}
})
