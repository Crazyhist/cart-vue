<template>
	<div class="cart-summary">
		<h2 class="cart-summary__title">Итого</h2>

		<div class="cart-summary__details">
			<p class="cart-summary__line">
				<span>Сумма заказа</span>
				<span>{{ cartTotal }} ₽</span>
			</p>
			<p class="cart-summary__line">
				<span>Количество</span>
				<span>{{ cartCount }} шт</span>
			</p>
			<p class="cart-summary__line">
				<span>Установка</span>
				<span>{{ installation ? 'Да' : 'Нет' }}</span>
			</p>
		</div>

		<hr class="cart-summary__divider" />

		<div class="cart-summary__total">
			<span>Стоимость товаров</span>
			<span class="cart-summary__total-price"
				><b>{{ cartTotal }} ₽</b></span
			>
		</div>

		<button
			class="cart-summary__order-button cart-summary__order-button--primary"
		>
			Оформить заказ
		</button>
		<button
			class="cart-summary__order-button cart-summary__order-button--secondary"
		>
			Купить в 1 клик
		</button>
	</div>
</template>

<script>
export default {
	props: {
		cartTotal: Number,
		cartCount: Number,
		installation: Boolean,
	},
}
</script>

<style scoped>
.cart-summary {
	max-width: 425px;
	width: 100%;
	height: 458px;
	font-size: 20px;
	font-weight: 600;
	background-color: #f6f8fa;
	padding: 35px 30px;
	border-radius: 5px;
}

.cart-summary__title {
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 30px;
	color: #1f2432;
}

.cart-summary__details {
	margin-bottom: 20px;
}

.cart-summary__details p span {
	font-weight: normal;
}

.cart-summary__line {
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	margin-bottom: 17px;
	color: #1f2432;
}

.cart-summary__divider {
	border: 0;
	border-top: 1px solid #aeb0b6;
	margin: 10px 0;
}

.cart-summary__total {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-grow: 1;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 20px;
	color: #1f2432;
}

.cart-summary__total-price {
	font-size: 26px;
	color: #1f2432;
}

.cart-summary__order-button {
	display: block;
	width: 100%;
	padding: 15px;
	background-color: #ffffff;
	border: 1px solid #0069b4;
	color: #0069b4;
	font-size: 18px;
	font-weight: bold;
	border-radius: 4px;
	cursor: pointer;
	margin-top: 20px;
	transition: background-color 0.3s ease;
}

.cart-summary__order-button:hover {
	background-color: #0069b4;
	color: #ffffff;
}
</style>
