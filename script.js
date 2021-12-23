const btn = document.querySelector('.btn');
const first = document.querySelector('.first');
const noti_container = document.querySelector('.noti_container');
let i = 0;
let j = 0;
let speed = 500;

btn.addEventListener('click', function () {
	noti_container.childElementCount
		? (i = noti_container.childElementCount)
		: (i = 1);
	j++;

	let div = document.createElement('div');
	div.innerHTML = `<div class="noti" style="background-color: rgb(${
		255 * Math.random()
	},${255 * Math.random()},${255 * Math.random()});" min=${i}>Noti ${j}</div>`;
	// let min = div.nextElementSibling.getAttribute(min);
	// i = min + 1;
	first.after(div);
	setTimeout(() => {
		div.style.transform = 'translateX(200px)';
		div.style.transition = 'all 1s linear';

		div.addEventListener('transitionend', function () {
			div.remove();
		});
	}, speed * i);
	console.log(noti_container.childElementCount);
});
