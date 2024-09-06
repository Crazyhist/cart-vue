<script setup>
import Cart from './components/Cart/Cart.vue'
import Header from './components/Header/Header.vue'
import Swiper from './components/Swiper/Swiper.vue'
</script>

<template>
	<div class="container">
		<Header />
		<Cart />
		<Swiper />
	</div>
</template>

<style scoped>
.container {
	max-width: 1320px;
	padding: 0 20px;
	margin: 0 auto;
}
</style>
