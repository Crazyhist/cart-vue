import { createStore } from 'vuex'

const store = createStore({
	state: {
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
	},
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
	mutations: {
		ADD_ITEM(state, itemId) {
			const item = state.cart.find((item) => item.id === itemId)
			if (item) {
				item.quantity += 1
			}
		},
		REMOVE_ITEM(state, itemId) {
			const item = state.cart.find((item) => item.id === itemId)
			if (item.quantity > 1) {
				item.quantity -= 1
			}
		},
		DELETE_ITEM(state, itemId) {
			state.cart = state.cart.filter((item) => item.id !== itemId)
		},
		CLEAR_CART(state) {
			state.cart = []
		},
		TOGGLE_INSTALLATION(state) {
			state.installation = !state.installation
		},
	},
	actions: {
		addItem({ commit }, itemId) {
			commit('ADD_ITEM', itemId)
		},
		removeItem({ commit }, itemId) {
			commit('REMOVE_ITEM', itemId)
		},
		deleteItem({ commit }, itemId) {
			commit('DELETE_ITEM', itemId)
		},
		clearCart({ commit }) {
			commit('CLEAR_CART')
		},
		toggleInstallation({ commit }) {
			commit('TOGGLE_INSTALLATION')
		},
	},
})

export default store
