
function contactSubmitAlert() {
	var cv = document.getElementById("upload_CV");
	alert("Thank you for your interest in MP Softwares. We will contact you soon.");
}

function play() {
	window.open("scripts/burpees.html", "_blank", "width=610, height=360");
	document.getElementById('video').play();
}

function openSkillTab(evt, tabName) {
	var experience = document.getElementById("experienceTab");
	var education = document.getElementById("educationTab")
	switch (tabName) {
	  case 'experience':
		experience.style.display = "block";
		education.style.display = "none";
		break;
	  case 'education':
		experience.style.display = "none";
		education.style.display = "block";
		break;
	  default:
		break;
	}
  }