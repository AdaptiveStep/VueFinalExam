<template>
	<div v-bind:class="[background()]">
		<div class="container mx-auto">
			<div class="relative p-8">
				<div class="max-w-screen-xl mx-auto ">
					<div class="grid gap-8 sm:grid-cols-1 lg:grid-cols-1 ">
						<a :href="`/blog${item.fields.category.fields.url.href}/${item.fields.slug}`" v-for="(item, index) in item.fields.selectedPosts" :key="index">
							<!-- USE THIS LINK INSTEAD WHEN DEPLOYING FINISHED BUILD -->
							<!-- <NuxtLink :to="getURL(item)"> -->
							
							


							
							<div>


								<div class="flex p-3 space-x-3 space-y-3 lg:space-y-0 flex-col lg:flex-row items-center  justify-between rounded-xl hover:shadow-md 
								border-dotted border-4 border-light-blue-400
								">
									<div class="h-64 bg-blue-600 rounded-xl overflow-hidden flex-shrink-0 shadow">
										<img :src="item.fields.image.url" :alt="item.fields.title" class="bg-pink-200 object-contain h-full  rounded-xl overflow-hidden " />
									</div> 

									<div class="w-full lg:text-left text-center">


										<div class="text-2xl lg:text-4xl font-extrabold ">
											<span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500">
												{{ item.fields.subtitle }}
											</span>
										</div>


										<h2 class="font-black text-1xl group-hover:text-red-900 transition duration-300 p-3">
											{{ item.fields.subSubTitle }}
										</h2>

									</div>


									<!-- SEND BUTTON HERE -->
									<button class="bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8  border-blue-700 hover:border-blue-500 rounded  focus:outline-none flex-shrink-0">Se Erbjudande</button>

								</div>
							</div>





							<!-- </NuxtLink> -->
						</a>
					</div>
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
<style >
body {
  height: 100%;
  margin: 0;
}


</style>