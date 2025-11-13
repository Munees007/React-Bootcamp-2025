let counter
document.addEventListener("DOMContentLoaded", function ready() {
  counter = document.getElementById("counter");
  console.log("hello")
});
function Count() {
    console.log(counter.innerHTML);
    counter.innerText = parseInt(counter.innerText) + 1;
}

