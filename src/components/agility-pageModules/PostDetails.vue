<template>
	<div class="">
		<div class="max-w-auto">
			<div v-if="post.imageHeaderSettings === 'full'" class="md:h-96 relative ">
				<img :src="post.image.url" class="object-cover object-center h-96 w-full " />
			</div>

			<div v-else-if="post.imageHeaderSettings === 'small'" class=" m-10 ">
				<div class="container mx-auto">
					<img :src="post.image.url" class="object-cover object-center mx-auto h-96 rounded-lg" />
				</div>
			</div>

			<div class="max-w-2xl mx-auto mt-4 px-8">
				<!-- If Only show main title if subtitle doesn't exist -->

				<h1 v-if="!post.subtitle" class=" text-center text-2xl md:text-4xl font-bold my-6 text-secondary-500 ">
					{{ post.title }}
				</h1>

				<h1 v-if="!post.title" class="text-center text-2xl md:text-4xl font-bold my-6 text-secondary-500 ">
					{{ post.subtitle }}
				</h1>

				<h1 class="text-center sm:text-2xl font-bold my-6 text-secondary-300 ">
					{{ post.subSubTitle }}
				</h1>

				<div class=" max-w-full mb-10 rounded-images" :inner-html.prop="post.content" />
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
		computed: {
			fields: function() {
				return this.item.fields
			},
			post: function() {
				return this.dynamicPageItem.fields
			},
			date: function() {
				return new Date(this.post.date).toLocaleDateString()
			},
			category: function() {
				return this.post.category?.fields.title || 'Uncategorized'
			},
		},
	}
</script>

<style scoped>
	/* >>> means "deep selection. i.e affecting child components" */
	.rounded-images >>> img {
		border-radius: 1rem;
		display: inline;
	}

	.rounded-images >>> span img {
		display: inline;
	}
</style>
