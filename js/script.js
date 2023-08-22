let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll = () =>{
	navbar.classList.remove("open-menu")
	menu.classList.remove("move");
}

// read-more-btn
const readMore = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
readMore.addEventListener("click",(e)=>{
	text.classList.toggle ("show-more");
	if(readMore.innerHTML === "Read More"){
		readMore.innerHTML = "Read Less";
	}else{
		readMore.innerHTML ="Read More";
	}
})

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableONInteraction: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Email JS
function validate() {
	let name = document.querySelector(".name");
	let email = document.querySelector(".email");
	let message = document.querySelector(".message");
	let sendBtn = document.querySelector(".send-btn");

	sendBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (name.value == "" || email.value == "" || message.value == "") {
			emptyerror();
		}else{
			sendmail(name.value, email.value, message.value);
			success();
		}
	});
}
validate();

function sendmail(name,email,message){
	emailjs.send("service_e0e68wd","template_030mnzm",{
		to_name: email,
		from_name: name,
		message: message,
		});
}

function emptyerror() {
	swal({
		title: "Oh No...!",
		text: "Please fill all this Fields",
		icon: "error",
	});
}

function success() {
	swal({
		title: "Email Sent Successfully",
		text: "We try to reply in 24 hours",
		icon: "success",
	});
}

// Header Background Change On Scroll
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
	header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", () => {
	scrollTop.classList.toggle("scroll-active", window.scrollY >= 300);
});

