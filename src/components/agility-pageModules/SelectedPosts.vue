<template>
	<div v-bind:class="[background()]">
		<div class="container mx-auto ">
			<div class="p-8">
				<div class="max-w-screen-xl mx-auto ">
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<!-- USE THIS LINK INSTEAD WHEN DEPLOYING FINISHED BUILD -->
						<NuxtLink :to="'/blog' + myitem.fields.category.fields.url.href + '/' + myitem.fields.slug" v-for="(myitem, index) in item.fields.selectedPosts" :key="index" class="justify-self-center">
							<div>
								<div class="flex-col group md:mb-0">
									<div class="relative h-64">
										<img :src="myitem.fields.image.url" :alt="myitem.fields.title" class="object-cover object-center rounded-t-lg" style="width: 100%; height: 100%;" />
									</div>
									<div class="bg-blue-400 p-3 text-center border-t-0 rounded-b-xl">
										<h2 class="text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300 ">
											{{ myitem.fields.title }}
										</h2>
									</div>
								</div>
							</div>
						</NuxtLink>

						<!-- :href="`/blog${item.fields.category.fields.url.href}/${item.fields.slug}`" -->
					</div>
				</div>
			</div>
		</div>

		<!-- SEND BUTTON HERE -->
		<!-- <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
			<button @click="clicktest" class="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-2 border-r-2 border-blue-700 hover:border-blue-500 rounded  focus:outline-none ">TEST BUTTON FOR TEST METHOD</button>
		</div> -->
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
			clicktest(item) {
				console.log('TESTING METHOD HERE', this.item.fields.selectedPosts)
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
		computed: {
			fields: function() {
				return this.item.fields
			},
			isRight: function() {
				return this.item.fields.imagePosition == 'right'
			},
		},
	}
</script>
