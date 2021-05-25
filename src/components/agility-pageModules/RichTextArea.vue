<template>
	<div class="relative ">

		<div class="max-w-2xl mx-auto pb-4 pl-4 pr-4">
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
