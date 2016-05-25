;(function(){

	var body = document.body;

	var btn = body.querySelector('.ba-toggle');

	var overlay = body.querySelector('.ba-overlay');

	btn.onclick = function(){
		body.classList.toggle('ba-menu-open');
	}

	overlay.onclick = function(){
		body.classList.toggle('ba-menu-open');
	}

})();
