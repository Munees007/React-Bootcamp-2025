
document.addEventListener("DOMContentLoaded",function ready(){
 const  counter = document.getElementById("counter")
  const button = document.getElementById("btn")


  button.addEventListener("click",function Count()
{
  counter.innerText = parseInt(counter.innerText) + 1
})

})

