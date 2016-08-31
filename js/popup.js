var sendEmail = document.querySelector(".find-hotel .btn");
var popup = document.querySelector(".modal-content");

sendEmail.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-content-show");
});
