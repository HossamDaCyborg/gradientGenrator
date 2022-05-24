document.querySelector('#view').addEventListener('click' , ()=>{
function random(num){
   return Math.floor(Math.random()*parseInt(num)) 
}
document.querySelector('#view').style['background-image']=`linear-gradient(to right , rgb(${random(255)},${random(255)},${random(255)}) 0% ,
rgb(${random(255)},${random(255)},${random(255)}) 100% )`;

document.querySelector('.discription').textContent=document.querySelector('#view').style['background-image'];
}

)