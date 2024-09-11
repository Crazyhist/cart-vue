import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
	state: () => ({
		cart: [
			{
				id: 1,
				name: 'Вытяжное устройство G2H',
				describe:
					'12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				price: 12644,
				quantity: 1,
				images: ['/img_1.jpg'],
				article: 'G2H1065',
			},
			{
				id: 2,
				name: 'Вытяжное устройство BXC',
				describe:
					'12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				price: 12644,
				quantity: 1,
				images: ['/img_2.jpg'],
				article: 'BXC1066',
			},
			{
				id: 3,
				name: 'Вытяжное устройство GHN',
				describe:
					'12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				price: 12644,
				quantity: 1,
				images: ['/img_3.jpg'],
				article: 'GHN1067',
			},
		],
		installation: false,
	}),
	getters: {
		cartItems: (state) => state.cart,
		cartTotal: (state) => {
			let total = state.cart.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			)
			if (state.installation) {
				total += 10000
			}
			return total
		},
		cartCount: (state) =>
			state.cart.reduce((count, item) => count + item.quantity, 0),
	},
	actions: {
		addItem(itemId) {
			const item = this.cart.find((item) => item.id === itemId)
			if (item) {
				item.quantity += 1
			}
		},
		removeItem(itemId) {
			const item = this.cart.find((item) => item.id === itemId)
			if (item.quantity > 1) {
				item.quantity -= 1
			}
		},
		deleteItem(itemId) {
			this.cart = this.cart.filter((item) => item.id !== itemId)
		},
		clearCart() {
			this.cart = []
		},
		toggleInstallation() {
			this.installation = !this.installation
		},
	},
})
