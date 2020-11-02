const menu = document.querySelector('.header')

window.addEventListener('scroll', function () {
	let desplazamientoY = pageYOffset
	if (desplazamientoY > 100) {
		menu.classList.add('opaque')
	} else {
		menu.classList.remove('opaque')
	}
})
$('a').click(function () {
	var sectionTo = $(this).attr('href')
	$('.navbar-collapse').collapse('hide')
	$('html, body').animate(
		{
			scrollTop: $(sectionTo).offset().top,
		},
		1000
	)
})
