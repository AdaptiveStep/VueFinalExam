<template>
	<div v-bind:class="[background()]">
		<div class="relative p-11 bg-white" v-if="item.fields.showTitle === 'true'">
			<div class="max-w-screen-xl mx-auto">
				<h1 class="font-display text-center text-secondary-500 text-4xl font-black tracking-wide">
					{{ item.fields.title }}
				</h1>
			</div>
		</div>

		<div class="container max-w-2xl mx-auto">
			<div class="rounded-images p-3 prose max-w-full mx-auto" v-html="item.fields.hTML" />
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
		methods: {
			getURL(item) {
				return item.fields.url.href
			},
			background: function() {
				let fetchedColor = this.item.fields.bgColor
				let translatedColor
				switch (fetchedColor) {
					case 'pink':
						translatedColor = 'bg-pink-200'
						break
					case 'blue':
						translatedColor = 'bg-blue-300'
						break
					default:
						translatedColor = 'bg-white'
				}
				return translatedColor
			},
		},
	}
</script>

<style scoped>
	/* >>> means "deep selection. i.e affecting child components" */
	.rounded-images >>> img {
		border-radius: 1rem;
	}
</style>
