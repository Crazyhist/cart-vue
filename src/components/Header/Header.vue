<template>
	<header class="header">
		<div class="header-cart">
			<img src="/cart-icon.svg" alt="Корзина" class="header-cart__icon" />
			<div class="header-cart__info">
				<p class="header-cart__text">Ваша корзина</p>
				<p class="header-cart__details">{{ cartCount }} товара</p>
				<p class="header-cart__price">{{ cartTotal }} ₽</p>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		cartCount() {
			return this.$store.getters.cartCount
		},
		cartTotal() {
			return this.$store.getters.cartTotal
		},
	},
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 20px;
}

.header-cart {
	display: flex;
	align-items: center;
	gap: 10px;
}

.header-cart__icon {
	width: 24px;
	height: 24px;
}

.header-cart__info {
	text-align: left;
	line-height: normal;
}

.header-cart__text {
	font-size: 14px;
	color: #2a2a2a;
}

.header-cart__details {
	font-size: 12px;
	color: #797b86;
}

.header-cart__price {
	font-size: 12px;
	font-weight: bold;
	color: #1f2432;
}
</style>
