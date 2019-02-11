console.log("JavaScript is linked up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backTop").style.display = "block";
  } else {
    document.getElementById("backTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//var are placeholders 
//create pickle jar, label it as first name, put a string in it.
//var firstName = "Rylee";

// this is a method bc it has two () after = alert("Hello " + firstName); 

//modern js = alert(`Hello ${firstName}!!!`);

//console.log(firstName);

