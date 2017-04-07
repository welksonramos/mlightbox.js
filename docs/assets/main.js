(function(){
	const windowScroll = window.scrollY;
	const sidebar = document.querySelector('.sidebar');

	window.document.addEventListener('scroll', ()=> {
		console.log(window.scrollY);
		if(window.scrollY <= 340) {
			sidebar.classList.remove('pos-fixed');
		};

		if(window.scrollY > 340) {
			sidebar.classList.add('pos-fixed');
		}

});
})();
