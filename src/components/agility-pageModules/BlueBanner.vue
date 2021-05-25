<template>
	<div class="bg-blue-400">
		<div class="flex justify-center text-white">
			<div class="grid grid-cols-1 gap-4 px-8 py-10  ">
				
				
				
				<p class="text-2xl sm:text-5xl tracking-wide ">
				<fa class="mr-2" :icon="fas.faEnvelope"  /> info@bararent.se</p>
				
				
				<div class="text-2xl sm:text-5xl tracking-wide">
				    <div class="inline" >
						<fa-layers full-width class="fa-1x">
						<fa :icon="fas.faCircle"/>
						<fa :icon="fas.faPhone " transform="shrink-6" class="fa-inverse text-blue-400" />
						</fa-layers>   
					</div>
					0700-35 72 46
				</div>












			</div>
		</div>
		   

	</div>
</template>
<script>

import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


	export default {
		props: {
			contentID: Number,
			item: Object,
			page: Object,
			pageInSitemap: Object,
			dynamicPageItem: Object,
		},
		  computed: {
    fas () {
       return fas // NOT RECOMMENDED
    },
    faGithub () {
       return faGithub
    }
  },
	}
</script>
