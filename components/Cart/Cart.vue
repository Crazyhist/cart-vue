<template>
	<div class="cart">
		<div class="cart-header">
			<h1 class="cart-header__title">
				Ваша корзина
				<span class="cart-header__count"
					>{{ cartStore.cartCount }}
					{{ getCorrectWord(cartStore.cartCount) }}</span
				>
			</h1>
			<button class="cart-header__clear" @click="cartStore.clearCart">
				Очистить корзину
			</button>
		</div>

		<div class="cart-left">
			<div v-for="item in cartStore.cartItems" :key="item.id">
				<CartItem
					:item="item"
					@addItem="cartStore.addItem"
					@removeItem="cartStore.removeItem"
					@deleteItem="cartStore.deleteItem"
				/>
			</div>

			<div class="cart-installation">
				<label class="cart-installation__checkbox">
					<input
						type="checkbox"
						v-model="cartStore.installation"
						class="custom-checkbox"
					/>
				</label>
				<img src="/installation.svg" class="cart-installation__image" />
				<p class="cart-installation__text">
					<b>Установка</b>
					Отметьте, если Вам необходима консультация профессионала по монтажу
					выбранных товаров.
				</p>
			</div>
		</div>

		<div class="cart-right">
			<CartSummary
				:cartTotal="cartStore.cartTotal"
				:cartCount="cartStore.cartCount"
				:installation="cartStore.installation"
			/>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/Cart/CartItem.vue'
import CartSummary from '@/components/Cart/CartSummary.vue'
import { getCorrectWord } from '@/utils/utils'

const cartStore = useCartStore()
</script>

<style scoped>
.cart {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 30px;
}
.cart-header {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	max-width: 800px;
	width: 100%;
	margin-bottom: 40px;
}

.cart-header__title {
	font-size: 44px;
	font-weight: bold;
	color: #1f2432;
	display: flex;
	align-items: center;
}

.cart-header__count {
	margin-left: 20px;
	margin-top: 18px;
	font-size: 18px;
	color: #797b86;
}

.cart-header__clear {
	background: none;
	border: none;
	color: #797b86;
	font-size: 14px;
	cursor: pointer;
	text-decoration: underline;
}

.cart-header__clear:hover {
	color: #0056b3;
}

.cart-left {
	display: flex;
	flex-direction: column;
	gap: 25px;
	max-width: 800px;
	width: 100%;
}

.cart-right {
	display: flex;
	justify-content: end;
	flex: 1 1 425px;
}

.cart-installation {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 800px;
	width: 100%;
	max-height: 100px;
	height: 100%;
	gap: 20px;
	padding: 15px;
	background-color: #f6f8fa;
	border-radius: 8px;
	padding: 25px;
}

.cart-installation p b {
	color: #1f2432;
}

.cart-installation__image {
	background-color: #fff;
	padding: 10px;
	border-radius: 5px;
}
.cart-installation__checkbox {
}

.custom-checkbox {
	cursor: pointer;
	width: 20px;
	height: 20px;
}

.cart-installation__text {
	display: flex;
	flex-direction: column;
	font-size: 14px;
	color: #797b86;
}
</style>
