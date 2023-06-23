let roatationX=0;
let roatationY=0;
let cube=document.querySelector('.box-area');
let three = document.querySelector('.box-back')

cube.style.transform=`rotateX(0deg) rotateY(0deg)`;

function front(){
  cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}


function rotateXAxis(n){
  roatationX += (90*n)
  cube.style.transform=`rotateX(${roatationX}deg) rotateY(0deg)`;
  three.style.transform=`translateZ(-200px) rotateY(180deg) rotateZ(180deg)`
}
function rotateYAxis(n){
  roatationY += (90*n)
  cube.style.transform=`rotateX(0deg) rotateY(${roatationY}deg)`;
  three.style.transform=`translateZ(-200px) rotateY(180deg) rotateZ(0deg)`
}