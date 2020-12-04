const increase = document.querySelector('.inc-btn');
const decrease = document.querySelector('.dec-btn');
const reset = document.querySelector('.reset-btn');
const count = document.querySelector('.count');


function changeColor(){
  let innertext= parseInt(count.innerText);
  if(innertext>=1){
    count.style.setProperty("color","green");
  }else if(innertext<0){
    count.style.setProperty("color","red");
  }else{
    count.style.setProperty("color","black");
  }
}
function inc(){
  count.innerText++;
  changeColor();
}
function dec(){
  count.innerText--;
  changeColor();
}
function resetCount(){
  count.innerText=0;
  changeColor();
}

increase.addEventListener('click',inc);
decrease.addEventListener('click',dec);
reset.addEventListener('click',resetCount);