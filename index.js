// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is loaded");
    let text = document.getElementById("text").innerHTML = 'This is really cool!';
    
    console.log("The DOM is loaded");
})
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );