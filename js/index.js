/** @format */

const embourger = document.getElementById('embourger');
const navigation = document.querySelector('header .top nav');
const title = document.querySelector('.top + p');

navigation.classList.remove('nuv');
embourger.addEventListener('click', function () {
	navigation.classList.toggle('nuv');
	title.classList.toggle('visibility');
});
