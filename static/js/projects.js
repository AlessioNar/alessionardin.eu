var filterTags = function(tag) {
	document.getElementById(tag).addEventListener("click", function() {
		elements = document.getElementsByClassName("toggle-content");
		for (let i = 0; i < elements.length; i++) {
			if (elements[i].classList.contains(tag)){
				show(elements[i]);
			} else {
				hide(elements[i]);
			}
		};
	});
};

// Show an element
var showAll = function (elements) {
	for (let i = 0; i < elements.length; i++) {
	  elements[i].classList.add('is-visible');
	};
};

var show = function(element){
	element.classList.add('is-visible');
}

// Hide an element
var hide = function (element) {
	element.classList.remove('is-visible');
};
