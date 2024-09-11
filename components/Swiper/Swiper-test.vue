<template>
	<swiper
		:slides-per-view="4"
		:space-between="30"
		:navigation="true"
		:pagination="{
			type: 'fraction',
		}"
		:modules="modules"
		class="swiper-container"
	>
		<swiper-slide
			v-for="(product, index) in viewedItems"
			:key="index"
			class="swiper-slide"
			>1
		</swiper-slide>
	</swiper>
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
					image: '../../public/img-swiper_1.jpg',
				},
				{
					name: 'G2H',
					description:
						'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
					price: '6848 - 56584',
					image: '../../public/img-swiper_1.jpg',
				},
				{
					name: 'GHN',
					description: 'Вытяжное устройство с датчиком присутствия',
					price: '6848 - 56584',
					image: '../../public/img-swiper_1.jpg',
				},
				{
					name: 'TDA',
					description: 'Вытяжное устройство с датчиком присутствия',
					price: '6848 - 56584',
					image: '../../public/img-swiper_1.jpg',
				},
				{
					name: 'BXC',
					description:
						'Вытяжное устройство для механической системы вентиляции',
					price: '6848 - 56584',
					image: '../../public/img-swiper_1.jpg',
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

.swiper-slide {
	height: auto;
	display: flex;
	justify-content: center;
}
/* Стили для продукта */
.product-card {
	padding: 20px;
	background-color: #f6f8fa;
	border-radius: 8px;
	text-align: center;
	width: 245px;
	height: 425px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.product-image {
	width: 245px;
	height: 245px;
	margin-bottom: 5px;
	margin-right: 10px;
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
