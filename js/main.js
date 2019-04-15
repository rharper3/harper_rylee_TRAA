(() => {
	
	console.log("fired");

	var button 	  = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var imageSwitcher = window.setInterval(switchImage, 8000);
	var counter = 0;

	const imgSources = ["traa_heroimage.svg", "traa_SignupDonate_HeroImage.svg", "traa_Merch_HeroImage.svg"]

// Hamburger Menu

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);
	

// Back To Top

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Hero image carousel

function switchImage() {
	let heroImg = document.querySelector("#image1");

	heroImg.src = `images/${imgSources[counter]}`;

	if (counter < 2) {
		counter++
	} else {
		counter = 0;
	}
}

// stopping

// function switchImage() {
//     clearInterval(imageSwitcher);
// }


})();	