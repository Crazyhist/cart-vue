<template>
	<div>
		<Header />
		<Cart />
		<Swiper />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'
import Swiper from '@/components/Swiper.vue'

export default {
	components: {
		Header,
		Cart,
		Swiper,
	},
}
</script>
