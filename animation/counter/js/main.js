$(document).ready(function() {
	time = 5000;
	step = 1;

	function counter(num, elem){
		let l = document.querySelector('#' + elem);
		n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if(n == num) {
				clearInterval(interval);
			}
			l.innerHTML = n;
			},t);
	};
	counter(1000, 'count_orders')
});