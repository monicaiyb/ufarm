// Get the modal for registering farmer one.
var modal = document.getElementById("myModal");


var regButton=document.getElementById("regButton");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// regButton.onclick=function(){
//   modal.style.display="none";

// }
window.onsubmit= function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get farmer registration modal
var foModal=document.getElementById("foModal");
var foRegButton=document.getElementById("foRegButton");
// Get the button that opens the modal
var foModalbtn = document.getElementById("foModalBtn");
// When the user clicks on the button, open the modal
foModalbtn.onclick = function() {
  foModal.style.display = "block";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  foModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == foModal) {
    foModal.style.display = "none";
    event.preventDefault();
  }

}
foRegButton.onclick=function(){
  foModal.style.display="none";

}
window.onsubmit= function(event) {
  if (event.target == modal) {
    foModal.style.display = "none";
  }
  event.preventDefault();
}