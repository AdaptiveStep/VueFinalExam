<template>
	<header class="relative w-full mx-auto bg-white px-8 shadow-lg">
		<div class="max-w-screen-xl mx-auto">
			<div class="flex justify-between items-center py-10 lg:justify-start lg:space-x-10">
				<div class="lg:w-0 lg:flex-1">
					<!-- <NuxtLink to="/" class="flex items-center">
						<template v-if="contentItem.logo">
							<img class="h-10 sm:h-10 w-auto z-50" :src="contentItem.logo.url" :alt="contentItem.logo.label" :title="contentItem.siteName" /> -->
					<!-- <p class="font-bold text-xl text-secondary-500 ml-3 mt-2">
                {{ contentItem.siteName }}
              </p> -->
					<!-- </template>
					</NuxtLink> -->

					<a href="/" class="flex items-center">
						<template v-if="contentItem.logo">
							<img class="h-10 sm:h-10 w-auto z-50" :src="contentItem.logo.url" :alt="contentItem.logo.label" :title="contentItem.siteName" />
							<!-- <p class="font-bold text-xl text-secondary-500 ml-3 mt-2">
                {{ contentItem.siteName }}
              </p> -->
						</template>
					</a>
				</div>
				<div class="-mr-2 -my-2 lg:hidden">
					<button @click="toggle" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
						<svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
				<nav class="hidden lg:flex space-x-10 ">
					<template v-for="link in links">
						<!-- <NuxtLink
							:to="link.path"
							:key="link.path"
							class="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
						>
							{{ link.text }}
						</NuxtLink> -->

						<a
							:href="link.path"
							:key="link.path"
							class="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
						>
							{{ link.text }}
						</a>
					</template>
				</nav>
			</div>
		</div>
		<div class="absolute top-0 inset-x-0 pt-2 transition transform origin-top-right lg:hidden z-20 shadow-2xl" v-show="isOpen">
			<div>
				<div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
					<div class="pt-0 pb-6 px-5 space-y-6">
						<div class="flex items-center justify-end">
							<div class="pt-5 -mr-2">
								<button @click="toggle" aria-label="Toggle Menu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-300">
									<svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div>
							<nav class="grid gap-y-8 text-2xl">
								<template v-for="link in links">
									<a :href="link.path" :key="link.path" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300 text-4xl	" @click="toggle">
										{{ link.text }}
									</a>
								</template>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data: function() {
			return {
				isOpen: false,
				contentItem: null,
				links: [],
			}
		},
		methods: {
			toggle() {
				this.isOpen = !this.isOpen
			},
		},
		async fetch() {
			if (process.server) {
				let contentItem = null
				let links = []
				const languageCode = this.$agility.languages[0]

				// get site header item
				try {
					let contentItemList = await this.$agility.client.getContentList({
						referenceName: 'siteheader',
						languageCode,
					})

					if (contentItemList && contentItemList.length) {
						contentItem = contentItemList[0]
					}
				} catch (error) {
					console.error('Could not load Site Header item', error)
				}

				// get nested sitemap
				try {
					let sitemap = await this.$agility.client.getSitemapNested({
						channelName: this.$agility.channelName,
						languageCode,
					})

					// get top level links
					links = sitemap
						.filter((node) => node.visible.menu)
						.map((node) => {
							return {
								text: node.menuText || node.title,
								path: node.path,
							}
						})
				} catch (error) {
					console.error('Coult not load Nested Sitemap', error)
				}

				this.contentItem = contentItem.fields
				this.links = links
			}
		},
	}
</script>
