<template>
	<div class="relative ">
		<div class="relative px-8 ">
			<div class="max-w-screen-xl mx-auto my-12 md:mt-18 ">
				<h1 class="font-display text-center text-secondary-500 text-4xl font-black tracking-wide">
					Om oss
				</h1>
			</div>
		</div>

		<div class="max-w-2xl mx-auto ">
			<div class="rounded-images prose max-w-full mx-auto" v-html="item.fields.textblob" />
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
	}
</script>

<style scoped>
	/* >>> means "deep selection. i.e affecting child components" */
	.rounded-images >>> img {
		border-radius: 1rem;
	}
</style>
