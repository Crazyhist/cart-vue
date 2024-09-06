<template>
	<div class="cart-item">
		<div class="cart-item__image">
			<img :src="item.images[0]" alt="" />
		</div>
		<div class="cart-item__info">
			<p class="cart-item__name">
				{{ item.name }}
			</p>
			<p class="cart-item__description">{{ item.describe }}</p>
			<p class="cart-item__article">Артикул: {{ item.article }}</p>
		</div>
		<div class="cart-item__controls">
			<button class="cart-item__button" @click="$emit('removeItem', item.id)">
				-
			</button>
			<span class="cart-item__quantity">{{ item.quantity }}</span>
			<button class="cart-item__button" @click="$emit('addItem', item.id)">
				+
			</button>
		</div>
		<p class="cart-item__price">{{ item.price * item.quantity }} ₽</p>
		<div class="cart-item__remove" @click="$emit('deleteItem', item.id)">
			<img src="/close.svg" alt="close" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
	},
}
</script>

<style scoped>
.cart-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	max-width: 800px;
	max-height: 120px;
	border-bottom: 1px solid #c4c4c4;
	position: relative;
}

.cart-item__image {
	max-width: 100px;
}

.cart-item__info {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 6px;
	font-size: 12px;
	max-width: 263px;
	margin-bottom: 23px;
}

.cart-item__name {
	font-size: 18px;
	font-weight: 500;
	color: #1f2432;
}

.cart-item__description {
	font-size: 12px;
}

.cart-item__article {
	font-size: 16px;
	color: #797b86;
}

.cart-item__controls {
	display: flex;
	align-items: center;
}

.cart-item__button {
	width: 30px;
	height: 30px;
	background-color: #f6f8fa;
	border: none;
	cursor: pointer;
	border-radius: 4px;
	transition: background-color 0.3s ease;
	font-size: 16px;
}

.cart-item__button:hover {
	background-color: #f6f8fa;
}

.cart-item__quantity {
	font-size: 16px;
	width: 30px;
	height: 30px;
	text-align: center;
	background-color: #f6f8fa;
	margin: 0px 1px;
}

.cart-item__price {
	font-size: 18px;
	font-weight: 600;
	margin-right: 55px;
}

.cart-item__remove {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
}

.cart-item__remove img {
	padding: 5px;
}
</style>
