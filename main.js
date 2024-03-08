
var btn = document.querySelector("button")
btn.addEventListener("click", function(){
    var x = Math.floor(Math.random() * 6 + 1);
  var y = Math.floor(Math.random() * 6 + 1);
  var imageOne = document.querySelector(".img1");
  var imageTwo = document.querySelector(".img2");
  imageOne.setAttribute("src", `dice${x}.png`);
  imageTwo.setAttribute("src", `dice${y}.png`);
})
