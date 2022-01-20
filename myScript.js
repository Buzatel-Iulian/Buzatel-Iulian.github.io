var header = document.getElementById('surr');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
			}

	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;

	var opacity = 1;

	//if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop / elementHeight);
	//				}
	//console.log(scrollTop);
	//console.log(distanceToTop);
	//console.log(elementHeight);
	if (opacity >= 0) {
		element.style.opacity = opacity;
			}else{
		element.style.opacity = 0;
				}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);
