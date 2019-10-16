var menu = document.querySelectorAll(".item");
var post = document.querySelectorAll(".post");
var show = post[0];

window.onload = () => {
	console.log(show)
	for (let i = 0; i < 6; i++) {
		menu[i].addEventListener("click", () => {
			show.classList.add("hide-post");
			show = post[i];
			show.classList.remove("hide-post");
			console.log(show)
		});
	}
};