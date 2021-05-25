<template>
	<div>
		<div class="relative p-11 bg-white">
			<div class="max-w-screen-xl mx-auto">
				<h1 class="font-display text-center text-secondary-500 text-4xl font-black tracking-wide">
					Kontakta Oss
				</h1>
			</div>
		</div>

		<div class="bg-blue-400">
			<div class="flex justify-center text-white">
				<div class="grid grid-cols-1 gap-4 px-8 py-10  ">
					<p class="text-2xl sm:text-5xl tracking-wide "><fa class="mr-2" :icon="fas.faEnvelope" /> info@bararent.se</p>

					<div class="text-2xl sm:text-5xl tracking-wide">
						<div class="inline">
							<fa-layers full-width class="fa-1x">
								<fa :icon="fas.faCircle" />
								<fa :icon="fas.faPhone" transform="shrink-6" class="fa-inverse text-blue-400" />
							</fa-layers>
						</div>
						0700-35 72 46
					</div>
				</div>
			</div>
		</div>

		<footer class="relative text-white max-w-screen bg-agility py-5">
			<div class="text-center max-w-screen-xl px-8 md:py-4 mx-auto md:flex  md:items-center text-1xl sm:text-2xl ">
				<div class=" md:text-center flex-shrink-0 relative">
					<p target="_blank" rel="noreferrer" title="Home">
						Bara Rent Sverige AB
					</p>
				</div>
				<div class="flex-grow  md:mb-0">
					<p class=" text-center md:ml-8 md:max-w-3xl">
						Myggdalsvägen 114, 135 43 Tyresö
					</p>
				</div>
				<div class="flex-1-grow">
					Orgnr: 559198-2201
				</div>
			</div>

			<!-- <div class="max-w-screen-xl px-8 py-6 md:py-4 mt-8 mx-auto  md:flex md:items-center">
      <div class="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative">
        <a
          href="https://www.agilitycms.com"
          target="_blank"
          rel="noreferrer"
          title="Agility CMS"
        >
          <img
            src="~/assets/agility-logo.svg"
            alt="Agility CMS"
            width="90"
            height="24"
            class="mx-auto"
          />
        </a>
      </div>
      <div class="flex-grow mb-4 md:mb-0">
        <p
          class="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl"
        >
          Powered by Agility CMS. This website and materials found on it are for
          demo purposes. You can use this to preview the content you created on
          your Agility CMS account.
          <a
            href="https://github.com/agilitycms/agilitycms-gatsby-starter"
            title="View on GitHub"
            target="_blank"
            rel="noreferrer"
            class="text-gray-600 mr-2 border-b border-gray-600"
          >
            GitHub
          </a>
          <a
            href="https://help.agilitycms.com/hc/en-us"
            title="Help Center"
            target="_blank"
            rel="noreferrer"
            class="text-gray-600 mr-1 border-b border-gray-600"
          >
            Help Center
          </a>
          <a
            href="https://agilitycms.com/contact-us/chat-sales"
            title="Contact Us"
            target="_blank"
            rel="noreferrer"
            class="text-gray-600 border-b border-gray-600"
          >
            Contact Us
          </a>
        </p>
      </div>
      <div class="flex-1-grow">
        <ul class="flex justify-center md:justify-start">
          <li class="mx-4 md:mx-0">
            <a
              href="https://www.twitter.com/agilitycms"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <fa
                class="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"
                :icon="['fab', 'twitter']"
              />
            </a>
          </li>
          <li class="mx-4 md:mx-0">
            <a
              href="https://www.instagram.com/agilitycms"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <fa
                class="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"
                :icon="['fab', 'instagram']"
              />
            </a>
          </li>
          <li class="mx-4 md:mx-0">
            <a
              href="https://join.slack.com/t/agilitycms-community/shared_invite/zt-99qlv1hw-tpPOJ99V21Y2omtA_uTcJw"
              title="Slack"
              target="_blank"
              rel="noreferrer"
            >
              <fa
                class="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"
                :icon="['fab', 'slack']"
              />
            </a>
          </li>
          <li class="mx-4 md:mx-0">
            <a
              href="https://www.youtube.com/channel/UCzKjErx94RLTbJctcrIgsDQ"
              title="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <fa
                class="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"
                :icon="['fab', 'youtube']"
              />
            </a>
          </li>
        </ul>
      </div>
    </div> -->
		</footer>
	</div>
</template>

<script>
	import { fas } from '@fortawesome/free-solid-svg-icons'
	import { faGithub } from '@fortawesome/free-brands-svg-icons'

	export default {
		data: function() {
			return {
				socials: [],
			}
		},
		computed: {
			fas() {
				return fas // NOT RECOMMENDED
			},
			faGithub() {
				return faGithub
			},
		},
	}
</script>
