// Our Agility Modules
import TextBlockWithImage from './components/agility-pageModules/TextBlockWithImage'
import RichTextArea from './components/agility-pageModules/RichTextArea'
import Heading from './components/agility-pageModules/Heading'
import FeaturedPost from './components/agility-pageModules/FeaturedPost'
import PostsListing from './components/agility-pageModules/PostsListing'
import PostDetails from './components/agility-pageModules/PostDetails'
import ContactForm from './components/agility-pageModules/ContactForm'
import BlueBanner from './components/agility-pageModules/BlueBanner'
import BigJumbotron from './components/agility-pageModules/BigJumbotron'
import ImageHeader from './components/agility-pageModules/ImageHeader'
import Reviews from './components/agility-pageModules/Reviews'

// Our Agility Data Fetch
import PostsListingData from './data/PostsListing'

// Our Agility PageTemplates
import MainTemplate from './components/agility-pageTemplates/MainTemplate'

export default {
	dataFetch: {
		PostsListing: PostsListingData,
	},
	moduleComponents: {
		TextBlockWithImage,
		RichTextArea,
		Heading,
		FeaturedPost,
		PostsListing,
		PostDetails,
		ContactForm,
		BlueBanner,
		BigJumbotron,
		ImageHeader,
		Reviews,
	},
	pageTemplateComponents: {
		'Main Template': MainTemplate,
	},
}
