<template>
	<div class="relative px-8">
		<div class="max-w-screen-xl mx-auto my-12 md:mt-18">
			<div class=" text-center text-secondary-500 text-2xl  tracking-wide">
				<!-- {{ fields.title }} -->
				{{ fields.text }}
			</div>

			<div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5 text-2xl">
				<NuxtLink :to="item.fields.buttonLink.href">
					<button class="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-2 border-r-2 border-blue-700 hover:border-blue-500 rounded  focus:outline-none ">{{ fields.buttonTitle }}</button>
				</NuxtLink>
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
		},
	}
</script>
