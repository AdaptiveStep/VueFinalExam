<template class="z-20  ">
	<div class="container mx-auto w-full p-3 z-20 relative lg:-mt-8 h-64 hidden lg:block">
		<div v-for="(item, index) in item.fields.selectedReviews" :key="index" class="">
			<div v-if="index == currentIndex" class="flex shadow-lg bg-white rounded h-56 overflow-hidden items-center ">
				<div class="flex flex-col justify-between h-56 text-center flex-auto">


					<div class="flex flex-col justify-between flex-1">
						<div></div>
							<div class="self-center ">
								<p class="text-display self-center text-gray-900 text-1xl lg:text-2xl ">{{ item.fields.review }}</p>
							</div>
						<div></div>
					</div> 
					<p class="text-2xl text-gray-700 p-4">- {{ item.fields.customer }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			contentID: Number,
			item: Object,
			page: Object,
			pageInSitemap: Object,
			dynamicPageItem: Object,
		},
		filters: {
			truncate(string, value) {
				return string.substring(0, value) + '…'
			},
		},

		data: function() {
			return {
				currentIndex: 0,
			}
		},

		methods: {
			getFigures() {},
			moveForward() {
				this.currentIndex = (this.currentIndex + 1) % this.item.fields.selectedReviews.length
			},
			movePrev() {},
			startReviewFader() {
				setInterval(this.moveForward, 4000)
			},
		},

		computed: {
			fields: function() {
				if (this.item.fields.featuredPost) {
					return this.item.fields.featuredPost.fields
				} else {
					return null
				}
			},
			date: function() {
				return new Date(this.fields?.date).toLocaleDateString()
			},
			category: function() {
				if (this.fields.category) {
					return this.fields.category.fields.title
				} else {
					return 'Uncategorized'
				}
			},
		},
		mounted() {
			this.startReviewFader()
		},
	}
</script>
