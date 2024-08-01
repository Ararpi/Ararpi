//Navbar Superior
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

//Menú lateral
function openNav() {
	document.getElementById("menuLateral").style.width = "300px";
	document.getElementById("overlay").style.display = "block";
	bloquearBody.style.overflow = "hidden";
}

function closeNav() {
	document.getElementById("menuLateral").style.width = "0";
	document.getElementById("overlay").style.display = "none";
	bloquearBody.style.overflow = "auto";
}

//Bloquear body cuando menu lateral está abierta
const bloquearBody = document.getElementsByTagName("body")[0];

//Saludo Cliente
const hora = new Date().getHours();
let saludar;
if (hora < 12) {
	saludar = "¡Buenos días!";
} else if (hora < 18) {
	saludar = "¡Buenas tardes!";
} else {
	saludar = "¡Buenas noches!";
}
document.getElementById("saludoCliente").innerHTML = saludar;

//Banner superior
const txts = document.querySelector(".textos-cambiantes").children,
	txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
	textOutTimer = 2800;

function animateText() {
	for (let i = 0; i < txtsLen; i++) {
		txts[i].classList.remove("text-in", "text-out");
	}
	txts[index].classList.add("text-in");

	setTimeout(function () {
		txts[index].classList.add("text-out");
	}, textOutTimer)

	setTimeout(function () {

		if (index == txtsLen - 1) {
			index = 0;
		}
		else {
			index++;
		}
		animateText();
	}, textInTimer);
}
window.onload = animateText;

//Loader
var loader = document.getElementById("pageLoader");

window.addEventListener("load", function(){
	loader.style.display = "none";
})

//Botón subir
function topFunction() {
	document.getElementById("botonSubir");
	document.body.scrollTop = 0; // Para Safari
	document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE and Opera
}