<template class="z-20">
	<div class="container mx-auto w-full sm:w-8/12 p-3 z-20">
		<div v-for="(item, index) in item.fields.selectedReviews" :key="index" class="">
			<div v-if="index == currentIndex" class="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded ">
				<div class="p-5 relative ">
					<p class="text-base text-gray-600 leading-8">{{ item.fields.review }}</p>
					<div class="flex justify-end mt-2"></div>
					<p class="text-right text-gray-600 p-3">{{ item.fields.customer }}</p>
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
