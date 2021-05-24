<template>
	<div class="bg-blue-400">
		<div class="flex justify-center text-white">
			<div class="grid grid-cols-1 gap-4 px-8 py-10  ">
				<p class="text-2xl sm:text-5xl tracking-wide "><fa class="mr-2" :icon="['fas', 'info-circle']" /> info@bararent.se</p>
				<p class="text-2xl sm:text-5xl tracking-wide"><fa class="mr-2" :icon="['fas', 'info-circle']" /> 0700-35 72 46</p>
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
	}
</script>
