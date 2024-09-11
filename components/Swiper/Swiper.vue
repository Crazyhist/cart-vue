<template>
	<div class="viewed-products">
		<h2 class="viewed-products__title">Просмотренные товары</h2>
		<swiper :slides-per-view="4" :space-between="30" navigation pagination>
			<swiper-slide
				v-for="(product, index) in viewedItems"
				:key="index"
				class="swiper-slide"
			>
				<div class="product-card">
					<img :src="product.image" alt="product image" class="product-image" />
					<h3 class="product-name">{{ product.name }}</h3>
					<p class="product-description">{{ product.description }}</p>
					<div class="product-prices">
						<p class="product-price">{{ product.price }} ₽</p>
						<p class="product-price-euro">{{ product.euroPrice }} €</p>
					</div>
					<button class="product-button">Подробнее</button>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const viewedItems = [
	{
		name: 'BXC',
		description: 'Вытяжное устройство для механической системы вентиляции',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_1.png',
	},
	{
		name: 'G2H',
		description:
			'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_2.png',
	},
	{
		name: 'GHN',
		description: 'Вытяжное устройство с датчиком присутствия',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_3.png',
	},
	{
		name: 'TDA',
		description: 'Вытяжное устройство с датчиком присутствия',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_4.png',
	},
	{
		name: 'BXC',
		description: 'Вытяжное устройство для механической системы вентиляции',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_1.png',
	},
	{
		name: 'G2H',
		description:
			'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_2.png',
	},
	{
		name: 'GHN',
		description: 'Вытяжное устройство с датчиком присутствия',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_3.png',
	},
	{
		name: 'TDA',
		description: 'Вытяжное устройство с датчиком присутствия',
		price: '6 848 - 56 584',
		euroPrice: '77.60 - 643.86',
		image: '/img-swiper_4.png',
	},
]
</script>

<style scoped>
.viewed-products {
	padding: 20px 0;
}

.viewed-products__title {
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 50px;
}

.swiper-container {
	width: 100%;
}

.swiper-slide {
	display: flex;
	align-items: stretch;
}

.product-card {
	padding: 20px;
	background-color: #f6f8fa;
	border-radius: 8px;
	width: 285px;
	min-height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.product-card p {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}

.product-image {
	width: 250px;
	height: 250px;
	margin: 0 auto 10px;
}

.product-name {
	font-size: 16px;
	font-weight: bold;
	color: #1f2432;
	margin-bottom: 5px;
}

.product-description {
	font-size: 14px;
	color: #797b86;
	margin-bottom: 50px;
}

.product-prices {
	margin-bottom: 15px;
}

.product-price {
	font-size: 18px;
	font-weight: bold;
	color: #1f2432;
}

.product-price-euro {
	font-size: 14px;
	color: #797b86;
}

.product-button {
	background-color: #0069b4;
	color: white;
	padding: 20px 22px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.product-button:hover {
	background-color: #0063cc;
}

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

/* Стили для пагинации */
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
