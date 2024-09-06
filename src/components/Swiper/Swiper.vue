<template>
	<div class="swiper-container">
		<!-- Слайдер -->
		<swiper
			:modules="modules"
			:slides-per-view="4"
			:space-between="30"
			navigation
			:pagination="{
				clickable: true,
			}"
		>
			<swiper-slide
				v-for="(product, index) in viewedItems"
				:key="index"
				class="swiper-slide"
			>
				<div class="product-card">
					<img :src="product.image" alt="product image" class="product-image" />
					<h3>{{ product.name }}</h3>
					<p>{{ product.description }}</p>
					<p>{{ product.price }} ₽</p>
					<button>Подробнее</button>
				</div>
			</swiper-slide>

			<!-- Пагинация и навигационные кнопки уже будут работать, если модули подключены -->
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination, Navigation],
		}
	},
	data() {
		return {
			viewedItems: [
				{
					name: 'BXC',
					description:
						'Вытяжное устройство для механической системы вентиляции',
					price: '6848 - 56584',
					image: '/img_1.jpg',
				},
				{
					name: 'G2H',
					description:
						'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
					price: '6848 - 56584',
					image: '/img_2.jpg',
				},
				{
					name: 'GHN',
					description: 'Вытяжное устройство с датчиком присутствия',
					price: '6848 - 56584',
					image: '/img_3.jpg',
				},
				{
					name: 'TDA',
					description: 'Вытяжное устройство с датчиком присутствия',
					price: '6848 - 56584',
					image: '/img_4.jpg',
				},
				{
					name: 'BXC',
					description:
						'Вытяжное устройство для механической системы вентиляции',
					price: '6848 - 56584',
					image: '/img_1.jpg',
				},
				{
					name: 'G2H',
					description:
						'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
					price: '6848 - 56584',
					image: '/img_2.jpg',
				},
				{
					name: 'GHN',
					description: 'Вытяжное устройство с датчиком присутствия',
					price: '6848 - 56584',
					image: '/img_3.jpg',
				},
				{
					name: 'TDA',
					description: 'Вытяжное устройство с датчиком присутствия',
					price: '6848 - 56584',
					image: '/img_4.jpg',
				},
			],
		}
	},
}
</script>

<style scoped>
/* Оформление контейнера слайдера */
.swiper-container {
	width: 100%;
	padding: 20px 0;
}

/* Стили для продукта */
.product-card {
	padding: 20px;
	background-color: #fff;
	border-radius: 8px;
	text-align: center;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
	width: 100px;
	height: 100px;
	margin-bottom: 10px;
}

button {
	margin-top: 10px;
	background-color: #007bff;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

/* Навигационные кнопки */
.swiper-button-next,
.swiper-button-prev {
	color: #007bff;
	width: 44px;
	height: 44px;
	background: #e9e9e9;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Пагинация */
.swiper-pagination {
	text-align: center;
	margin-top: 20px;
}

.swiper-pagination-bullet {
	width: 10px;
	height: 10px;
	background-color: #007bff;
	opacity: 0.5;
}

.swiper-pagination-bullet-active {
	background-color: #007bff;
	opacity: 1;
}
</style>
