$('.base_section_button').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.whosection').offset().top
	}, 500);
});


let whowebox1 = document.querySelector(".whosection_box1");
let whowebox2 = document.querySelector(".whosection_box2");
let whowebox3 = document.querySelector(".whosection_box3");

window.addEventListener("scroll", function() {
	let scrollPos = window.scrollY;
	if(scrollPos > 450) {
		whowebox1.classList.add('active');
		whowebox2.classList.add('active');
		whowebox3.classList.add('active');
	} else {
		whowebox1.classList.remove('active');
		whowebox2.classList.remove('active');
		whowebox3.classList.remove('active');
	}
});