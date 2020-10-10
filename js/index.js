/*************************************variables*************************************/
const slides = document.getElementById('slider').children;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.getElementById("dots");
let timer = setInterval(autoPlay, 3000);
let index = 0;

/*************************************Listeners*************************************/
prev.addEventListener("click", function(){

	arrowPrev();
	indicateCircle();
	resetTimer();
});

next.addEventListener("click", function(){

	arrowNext();
	indicateCircle();
	resetTimer();
});

/*************************************Functions*************************************/
function circles(){

	for(let i=0; i<slides.length; i++){

		const div = document.createElement("div");
		div.setAttribute("onclick","indicateSlide(this)");
		div.classList.add("dot");
		div.id = i;

		if (i==0) {

			div.classList.add("activate", "dot");
		}

		circle.appendChild(div);
	}
}

circles();

function indicateSlide(e){

	index = e.id;
	changeSlide();
	indicateCircle();
	resetTimer();
}

function indicateCircle(){

	for(let i = 0; i<circle.children.length; i++){

		circle.children[i].classList.remove("activate");
	}
	
	circle.children[index].classList.add("activate", "dot")
}

function arrowPrev(){

	if(index == 0){

		index = slides.length-1;
	}
	else{

		index--;
	}

	changeSlide();
}

function arrowNext(){

	if(index == slides.length-1){

		index = 0;
	}
	else{

		index++;
	}

	changeSlide();
}

function changeSlide(){

	for( let i = 0; i<slides.length; i++){

		slides[i].classList.remove("active");
	}

	slides[index].classList.add("active");

}

function resetTimer(){

	clearInterval(timer);
	timer = setInterval(autoPlay, 5000);
}

function autoPlay(){

	arrowNext();
	indicateCircle();
}