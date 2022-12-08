<template lang="pug">
.calculator
    input.display(type="text" :value="valueDisplay" readonly)
    ul.keys
        li.numeric
            button.numeric-btn(type='button' @click="percent") %
        li.numeric
            button.numeric-btn(type='button' @click="operator = '/'") /
        li.numeric
            button.numeric-btn(type='button' @click="operator = '*'") *
        li.numeric
            button.numeric-btn(type='button' @click="operator = '-'") -
        li.numeric.clean
            button.numeric-btn(type='button' @click="clean") C
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(7)") 7
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(8)") 8
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(9)") 9
        li.numeric.plus
            button.numeric-btn(type='button' @click="operator = '+'") +
        li.numeric.all-clean
            button.numeric-btn(type='button' @click='allClean') AC
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(4)") 4
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(5)") 5
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(6)") 6
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(1)") 1
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(2)") 2
        li.numeric
            button.numeric-btn(type='button' @click="setOperand(3)") 3
        li.numeric.equal
            button.numeric-btn(type='button' @click="equal") =
        li.numeric.zero
            button.numeric-btn(type='button' @click="setOperand(0)") 0
        li.numeric
            button.numeric-btn(type='button' @click="setPoint") ,
        li.numeric
            button.numeric-btn(type='button' @click="negativeNum") +/-
</template>

<script>
export default {
	data() {
		return {
			operand1: 0,
			operand2: 0,
			operator: '',
			valueDisplay: '0',
			isPoint: false,
		};
	},
	methods: {
		setOperand(n) {
			if (this.operator) {
				this.operand2 = this.isPoint ? parseFloat(this.operand2 + '.' + n) : parseFloat(this.operand2 + '' + n);
				this.valueDisplay = this.operand2;
				this.isPoint = false;
				return;
			}
			this.operand1 = this.isPoint ? parseFloat(this.operand1 + '.' + n) : parseFloat(this.operand1 + '' + n);
			this.valueDisplay = this.operand1;
			this.isPoint = false;
		},
		equal() {
			let answer = 0;
			switch (this.operator) {
				case '+':
					answer = this.operand1 + this.operand2;
					break;
				case '-':
					answer = this.operand1 - this.operand2;
					break;
				case '/':
					answer = this.operand1 / this.operand2;
					break;
				case '*':
					answer = this.operand1 * this.operand2;
					break;
			}
			this.operand1 = answer;
			this.operand2 = 0;
			this.operator = '';
			this.valueDisplay = answer;
		},
		percent() {
			let answer = 0;
			switch (this.operator) {
				case '+':
					answer = this.operand1 + (this.operand1 / 100 * this.operand2);
					break;
				case '-':
					answer = this.operand1 - (this.operand1 / 100 * this.operand2);
					break;
				case '*':
					answer = this.operand1 / 100 * this.operand2;
					break;
				case '/':
					answer = this.operand1 * this.operand2;
					break;
			}
			this.operand1 = answer;
			this.operand2 = 0;
			this.operator = '';
			this.valueDisplay = answer;
		},
		negativeNum() {
			if (this.operand2) {
				this.operand2 *= -1;
				this.valueDisplay = this.operand2;
				return;
			}
			this.operand1 *= -1;
			this.valueDisplay = this.operand1;
		},
		setPoint() {
			this.valueDisplay += '.';
			this.isPoint = true;
		},
		clean() {
			if (this.operand2) {
				let strOperand = String(this.operand2);
				this.operand2 = parseFloat(strOperand.slice(0, -1)) || 0;
				this.valueDisplay = this.operand2;
				return;
			}
			if (this.operator) {
				this.operator = '';
				return;
			}
			if (this.operand1) {
				let strOperand = String(this.operand1);
				this.operand1 = parseFloat(strOperand.slice(0, -1)) || 0;
				this.valueDisplay = this.operand1;
			}
		},
		allClean() {
			this.operand1 = 0;
			this.operand2 = 0;
			this.operator = '';
			this.valueDisplay = '0';
		},
	},
};
</script>

<style lang="scss">
.calculator {
	// width: 200px;
	position: relative;
}
.keys {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 4px;
}
.numeric {
	// margin-bottom: 2%;
	box-sizing: border-box;
	&:nth-child(10) {
		& button {
			padding: 0.6em 1em;
		}
	}
	&:last-child {
	}
}

.numeric-btn {
	border: 2px solid black;
	border-radius: 5px;
	padding: 0.6em 1em;
	width: 100%;
	height: 100%;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	&:hover {
		border-color: #646cff;
	}
}

.plus {
	grid-column-start: 4;
	grid-column-end: 5;
	grid-row-start: 2;
	grid-row-end: 4;
}
.equal {
	grid-column-start: 4;
	grid-column-end: 5;
	grid-row-start: 4;
	grid-row-end: 6;
}
.zero {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 5;
	grid-row-end: 6;
}
.clean {
	grid-column-start: 5;
	grid-column-end: 6;
	grid-row-start: 1;
	grid-row-end: 3;
}
.all-clean {
	grid-column-start: 5;
	grid-column-end: 6;
	grid-row-start: 3;
	grid-row-end: 5;
}
.display {
	width: 100%;
	box-sizing: border-box;
	padding: 0.6em;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	margin-bottom: 4px;
}
</style>
