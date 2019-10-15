var i = 1;
var h = 1;
window.onload = function () {
	var intro_btn = document.querySelector("#Introducción");
	var d1_btn = document.querySelector("#Día1");
	var d2_btn = document.querySelector("#Día2");
	var d3_btn = document.querySelector("#Día3");
	var d4_btn = document.querySelector("#Día4");
	var d5_btn = document.querySelector("#Día5");
	var pintro = document.querySelector(".Introducción");
	var pd1 = document.querySelector(".Día1");
	var pd2 = document.querySelector(".Día2");
	var pd3 = document.querySelector(".Día3");
	var pd4 = document.querySelector(".Día4");
	var pd5 = document.querySelector(".Día5");

	intro_btn.addEventListener("click", () => {

		h = 1;
		if (i != 1) {
			pintro.classList.toggle("hide");
			verficar_contador(i, h);

		} 
	});
	d1_btn.addEventListener("click", () => {

		h = 2;
		pd1.classList.toggle("hide");
		verficar_contador(i, h);
	});
	d2_btn.addEventListener("click", () => {

		h = 3;
		pd2.classList.toggle("hide");
		verficar_contador(i, h);
	});
	d3_btn.addEventListener("click", () => {

		h = 4;
		pd3.classList.toggle("hide");
		verficar_contador(i, h);
	});
	d4_btn.addEventListener("click", () => {

		h = 5;
		pd4.classList.toggle("hide");
		verficar_contador(i, h);
	});
	d5_btn.addEventListener("click", () => {
		h = 6;
		pd5.classList.toggle("hide");
		verficar_contador(i, h);
	});

	verficar_contador = (i, h) => {
		if (i != h)
			switch (i) {
				case 1:
					pintro.classList.toggle("hide");
					i++;
					break;
				case 2:
					pd1.classList.toggle("hide");
					i++;
					break;
				case 3:
					pd2.classList.toggle("hide");
					i++;
					break;
				case 4:
					pd3.classList.toggle("hide");
					i++;
					break;
				case 5:
					pd4.classList.toggle("hide");
					i++;
					break;
				case 6:
					pd5.classList.toggle("hide");
					i++;
					break;
			}

		this.console.log("i:"+i);
		this.console.log("h:"+h);
	}

};