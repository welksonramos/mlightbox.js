;(function() {
	'use strict';
	const el = Array.from(document.querySelectorAll('[mlightbox]'));
	const currentImage = document.createElement('img');
	const lightboxPreview = document.createElement('div');
	const lightboxContent = document.createElement('div');
	const btnClose = document.createElement('button');

	function init() {
		createTemplate();
		createImages();
		open();
		close();
	}

	function createTemplate() {
		lightboxPreview.classList.add('preview-mlightbox');
		lightboxContent.classList.add('mlightbox-content');
		btnClose.classList.add('mlightbox-close');

		document.body.insertBefore(lightboxPreview, document.body.nextSibling);
		btnClose.insertAdjacentHTML('beforeend', '&times;');
		lightboxPreview.insertBefore(btnClose, lightboxPreview.firstChild);
		lightboxPreview.insertBefore(lightboxContent, lightboxPreview.nextSibling);
	}

	function createImages() {
		el.map(item => {
			let img = document.createElement('img');
			img.setAttribute('src', item.getAttribute('href'));
			item.appendChild(img);
		});
	}

	function isCurrent() {
		lightboxPreview.classList.add('mlightbox-open');
		currentImage.setAttribute('src', this.getAttribute('href'));
		lightboxContent.insertBefore(currentImage, lightboxContent.firstChild);
	}

	function open() {
		el.map(item => item.addEventListener('click', event => event.preventDefault(), false));
		el.map(item => item.addEventListener('click', isCurrent, false));
	}

	function close () {
		btnClose.addEventListener('click', () => lightboxPreview.classList.remove('mlightbox-open'));
		window.document.addEventListener('keyup', event => {
			if(event.keyCode == 27) {
				lightboxPreview.classList.remove('mlightbox-open');
			}
		});
	}

init();
})();
