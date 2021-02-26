$(document).ready(function(){
	$(window).scoll(function(){
		if(this.scrollY > 20){
			$('nav').addClass("sticky");
		}else {
			$('nav').removeClass("sticky")
		}
	})
})


// typing animation
var typed = new Typed (".typing",{
	strings:["Web Designer", "Developer", "Blogger", "Freelancer"],
	typeSpeed: 70,
	backSpeed: 70,
	loop: true
})