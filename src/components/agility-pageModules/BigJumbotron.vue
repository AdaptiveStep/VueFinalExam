N<template>
	<div class="relative  bg-pink-200">
		<div class="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center">
			<div class="md:w-6/12 flex-shrink-0 relative ">
				<template v-if="fields.primaryButton.href">
					<NuxtLink :to="fields.primaryButton.href">
						<img :src="fields.image.url" :alt="fields.image.label" style="width: 768px; height: 420px;" class="object-cover object-center" />
					</NuxtLink>

					<!-- <a :href="fields.primaryButton.href">
						<img :src="fields.image.url" :alt="fields.image.label" style="width: 768px; height: 420px;" class="object-cover object-center" />
					</a> -->
				</template>
				<template v-else>
					<img :src="fields.image.url" :alt="fields.image.label" style="width: 768px; height: 420px;" class="rounded-lg object-cover object-center" />
				</template>
			</div>
			<div
				class="md:w-6/12 mt-3 md:mt-0 px-8"
				:class="{
					'md:ml-12 lg:ml-8 md:order-last': !isRight,
					'md:mr-12 lg:mr-8 md:order-first': isRight,
				}"
			>
				<div class="g:py-8 text-center md:text-left pb-5">
					<template v-if="fields.tagline">
						<span class="font-bold text-primary-500 text-sm text-center md:text-left uppercase">
							{{ fields.tagline }}
						</span>
					</template>
					<h2 class="text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left hidden md:block">
						{{ fields.title }}
					</h2>
					<p class="mt-4 text-center md:text-left text-md md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
						{{ fields.content }}
					</p>
					<template v-if="fields.primaryButton">
						<NuxtLink
							:to="fields.primaryButton.href"
							class="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-pink-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
						>
							{{ fields.primaryButton.text }}
						</NuxtLink>
						<!-- <a
							:href="fields.primaryButton.href"
							class="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-pink-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
						>
							{{ fields.primaryButton.text }}
						</a> -->
					</template>
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
