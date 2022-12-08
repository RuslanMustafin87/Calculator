<script setup>
import { ref } from 'vue';

defineProps({
	msg: String,
});

const count = ref(0);
</script>

<template lang="pug">
h1 {{ msg }}
.card
  button.btn(type="button" @click="count++") count is {{ count }}
  .btn__test
</template>

<style scoped lang="scss">
.read-the-docs {
	color: #888;
}
.btn {
	bottom: 1px solid black;
	&__test {
		width: 100px;
		height: 20px;
		background-color: aquamarine;
	}
}
</style>
