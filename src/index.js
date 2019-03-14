import './style.scss';

const keys = document.querySelectorAll('.keys');
let input = document.querySelector('.input');
const reset = document.querySelector('.reset');

keys.forEach( key =>{
	if (key.dataset.type === '=') {
		key.addEventListener('click', calc);
	} else {
		key.addEventListener('click', ()=>{
			input.innerHTML = input.innerHTML + key.dataset.type;
		});
	}
});

reset.addEventListener('click', ()=>{
	input.innerHTML = '';
});

function calc(){
	input.innerHTML = eval(input.innerHTML);
}