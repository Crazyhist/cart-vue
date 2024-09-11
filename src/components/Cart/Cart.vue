<template>
	<div class="cart">
		<div class="cart-header">
			<h1 class="cart-header__title">
				Ваша корзина
				<span class="cart-header__count"
					>{{ cartCount }} {{ getCorrectWord(cartCount) }}</span
				>
			</h1>
			<button class="cart-header__clear" @click="clearCart">
				Очистить корзину
			</button>
		</div>

		<div class="cart-left">
			<div v-for="item in cartItems" :key="item.id">
				<CartItem
					:item="item"
					@addItem="addItem"
					@removeItem="removeItem"
					@deleteItem="deleteItem"
				/>
			</div>

			<div class="cart-installation">
				<label class="cart-installation__checkbox">
					<input
						type="checkbox"
						v-model="installation"
						@change="toggleInstallation"
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
				:cartTotal="cartTotal"
				:cartCount="cartCount"
				:installation="installation"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

export default {
	components: {
		CartItem,
		CartSummary,
	},
	computed: {
		...mapGetters(['cartItems', 'cartTotal', 'cartCount']),
		installation() {
			return this.$store.state.installation
		},
	},
	methods: {
		...mapActions([
			'addItem',
			'removeItem',
			'deleteItem',
			'toggleInstallation',
			'clearCart',
		]),
		getCorrectWord(count) {
			const lastDigit = count % 10
			const lastTwoDigits = count % 100

			if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
				return 'товаров'
			}

			if (lastDigit === 1) {
				return 'товар'
			}

			if (lastDigit >= 2 && lastDigit <= 4) {
				return 'товара'
			}

			return 'товаров'
		},
	},
}
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
