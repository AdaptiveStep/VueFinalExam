(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,e,n){"use strict";var r=n(5),l=n(29),o=n(30),c=n(124),d=n(69),m=n(11),f=n(50).f,x=n(51).f,v=n(14).f,h=n(176).trim,C="Number",_=r.Number,y=_,j=_.prototype,w=o(n(87)(j))==C,k="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(w?m((function(){j.valueOf.call(n)})):o(n)!=C)?c(new y(I(e)),n,_):I(e)};for(var O,P=n(9)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;P.length>S;S++)l(y,O=P[S])&&!l(_,O)&&v(_,O,x(y,O));_.prototype=j,j.constructor=_,n(16)(r,C,_)}},172:function(t,e,n){var content=n(179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("022267b3",content,!0,{sourceMap:!1})},173:function(t,e,n){var content=n(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("1c8b7255",content,!0,{sourceMap:!1})},174:function(t,e,n){var content=n(183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("476c3896",content,!0,{sourceMap:!1})},175:function(t,e,n){var content=n(185);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("36868efa",content,!0,{sourceMap:!1})},176:function(t,e,n){var r=n(4),l=n(37),o=n(11),c=n(177),d="["+c+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),x=function(t,e,n){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),m=l[t]=d?e(v):c[t];n&&(l[n]=m),r(r.P+r.F*d,"String",l)},v=x.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=x},177:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},178:function(t,e,n){"use strict";n(172)},179:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".rounded-images[data-v-0cbee209] img{border-radius:1rem}",""]),t.exports=r},180:function(t,e,n){"use strict";n(173)},181:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".rounded-images[data-v-11670030] img{border-radius:1rem;display:inline}.rounded-images[data-v-11670030] span img{display:inline}",""]),t.exports=r},182:function(t,e,n){"use strict";n(174)},183:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,"body{height:100%;margin:0}",""]),t.exports=r},184:function(t,e,n){"use strict";n(175)},185:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".rounded-images[data-v-1a9dd64c] img{border-radius:1rem}",""]),t.exports=r},186:function(t,e,n){"use strict";var r=n(4),l=n(89)(5),o="find",c=!0;o in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),n(88)(o)},187:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(28),n(39),n(17),n(40),n(171),{props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fields:function(){return this.item.fields},isRight:function(){return"right"==this.item.fields.imagePosition}}}),o=n(10),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative px-8 mb-12"},[n("div",{staticClass:"max-w-screen-xl mx-auto "},[n("div",{staticClass:"sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"},[n("a",{attrs:{href:t.fields.primaryButton.href}},[n("div",{staticClass:"flex-col group mb-8 md:mb-0"},[n("div",{staticClass:"relative h-64"},[n("img",{staticClass:"object-cover object-center rounded-t-lg",staticStyle:{width:"100%",height:"100%"},attrs:{src:t.fields.image.url,alt:t.fields.title}})]),t._v(" "),n("div",{staticClass:"bg-blue-400 p-3 text-center border-t-0 rounded-b-xl"},[n("h2",{staticClass:"text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.fields.title)+"\n\t\t\t\t\t\t\t")])])])])])])])])}),[],!1,null,null,null).exports,d={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object}},m=(n(178),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative "},[n("div",{staticClass:"max-w-2xl mx-auto pb-4 pl-4 pr-4"},[n("div",{staticClass:"rounded-images prose max-w-full mx-auto",domProps:{innerHTML:t._s(t.item.fields.textblob)}})])])}),[],!1,null,"0cbee209",null).exports),f={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fields:function(){return this.item.fields}}},x=Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative px-8"},[n("div",{staticClass:"max-w-screen-xl mx-auto my-12 md:mt-18"},[n("h1",{staticClass:"text-center text-secondary-500 text-4xl font-black tracking-wide"},[t._v("\n\t\t\t"+t._s(t.fields.title)+"\n\t\t")])])])}),[],!1,null,null,null).exports,v={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},filters:{truncate:function(t,e){return t.substring(0,e)+"…"}},computed:{fields:function(){return this.item.fields.featuredPost?this.item.fields.featuredPost.fields:null},date:function(){var t;return new Date(null===(t=this.fields)||void 0===t?void 0:t.date).toLocaleDateString()},category:function(){return this.fields.category?this.fields.category.fields.title:"Uncategorized"}}},h=Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.fields?n("div",{staticClass:"relative px-8 mb-8"},[n("div",{staticClass:"flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group"},[n("div",{staticClass:"sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative"},[n("NuxtLink",{attrs:{to:"/blog"+t.fields.category.fields.url.href+"/"+t.fields.slug}},[n("div",{staticClass:"h-64 sm:h-96 relative"},[n("img",{staticClass:"object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none h-full",staticStyle:{height:"100%",width:"100%"},attrs:{src:t.fields.image.url,layout:"fullWidth"}})])])],1),t._v(" "),n("div",{staticClass:"sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative"},[n("NuxtLink",{staticClass:"cursor-pointer",attrs:{to:"/blog"+t.fields.category.fields.url.href+"/"+t.fields.slug}},[n("div",{staticClass:" uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content"},[t._v("\n\t\t\t\t\tRekommenderat!\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"border-b-2 border-primary-500 w-8"}),t._v(" "),n("div",{staticClass:"mt-4 uppercase text-gray-600 italic font-semibold text-xs"},[t._v("\n\t\t\t\t\t"+t._s(t.date)+"\n\t\t\t\t")]),t._v(" "),n("h2",{staticClass:" text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300"},[t._v("\n\t\t\t\t\t"+t._s(t.fields.title)+"\n\t\t\t\t")])])],1)])]):t._e()}),[],!1,null,null,null).exports,C=(n(31),{props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object,moduleData:Object},methods:{clicktest:function(){console.log("HELLLO")},background:function(){var t;switch(this.item.fields.bgColor){case"pink":t="bg-pink-200";break;case"blue":t="bg-blue-300";break;default:t="bg-white"}return t}},computed:{posts:function(){var t=this;return this.moduleData.PostsListing.filter((function(e){return e.category===t.listingCategory}))},hasPosts:function(){return this.posts.length>=1},listingCategory:function(){return this.item.fields.categoryPick_TextField},pageName:function(){return this.page.zones.MainContentZone},categorySmallCaps:function(){return this.item.fields.categoryPick_TextField.toLowerCase()}}}),_=Object(o.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasPosts?n("div",{class:[t.background()]},[n("div",{staticClass:"mx-8 py-8"},[n("div",{staticClass:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto "},[t._l(t.posts,(function(e){return[n("NuxtLink",{key:e.title,attrs:{to:"/blog"+t.item.fields.categoryPick.fields.url.href+"/"+e.fields.slug}},[n("div",{staticClass:"flex-col group mb-0"},[n("div",{staticClass:"relative h-64"},[n("img",{staticClass:"object-cover object-center rounded-t-lg",staticStyle:{width:"100%",height:"100%"},attrs:{src:e.fields.image.url,alt:e.fields.title}})]),t._v(" "),n("div",{staticClass:"bg-blue-400 p-3 text-center border-t-0 rounded-b-xl"},[n("h2",{staticClass:"text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.fields.title)+"\n\t\t\t\t\t\t\t\t")])])])])]}))],2)])]):n("div",{staticClass:"mt-44 px-6 flex flex-col items-center justify-center"},[n("h1",{staticClass:"text-3xl text-center font-bold text-secondary-500"},[t._v("\n\t\t\tInga inlägg tillgängliga.\n\t\t")]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-10"},[n("a",{staticClass:"px-4 py-3 my-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary transition duration-300",attrs:{href:"/"}},[t._v("\n\t\t\t\tÅtervänd hem\n\t\t\t")])])}],!1,null,null,null).exports,y={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fields:function(){return this.item.fields},post:function(){return this.dynamicPageItem.fields},date:function(){return new Date(this.post.date).toLocaleDateString()},category:function(){var t;return(null===(t=this.post.category)||void 0===t?void 0:t.fields.title)||"Uncategorized"}}},j=(n(180),Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"max-w-auto"},["full"===t.post.imageHeaderSettings?n("div",{staticClass:"md:h-96 relative "},[n("img",{staticClass:"object-cover object-center h-96 w-full ",attrs:{src:t.post.image.url}})]):"small"===t.post.imageHeaderSettings?n("div",{staticClass:" m-10 "},[n("div",{staticClass:"container mx-auto"},[n("img",{staticClass:"object-cover object-center mx-auto h-96 rounded-lg",attrs:{src:t.post.image.url}})])]):t._e(),t._v(" "),n("div",{staticClass:"max-w-2xl mx-auto mt-4 px-8"},[t.post.subtitle?t._e():n("h1",{staticClass:" text-center text-2xl md:text-4xl font-bold my-6 text-secondary-500 "},[t._v("\n\t\t\t\t"+t._s(t.post.title)+"\n\t\t\t")]),t._v(" "),t.post.title?t._e():n("h1",{staticClass:"text-center text-2xl md:text-4xl font-bold my-6 text-secondary-500 "},[t._v("\n\t\t\t\t"+t._s(t.post.subtitle)+"\n\t\t\t")]),t._v(" "),n("h1",{staticClass:"text-center sm:text-2xl font-bold my-6 text-secondary-300 "},[t._v("\n\t\t\t\t"+t._s(t.post.subSubTitle)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:" max-w-full mb-10 rounded-images",domProps:{innerHTML:t.post.content}})])])])}),[],!1,null,"11670030",null).exports),w={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object}},k=Object(o.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative "},[n("div",{staticClass:"max-w-auto"},[n("div",{staticClass:"rounded-images prose max-w-full mx-auto",domProps:{innerHTML:t._s(t.item.fields.textblob)}}),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex bg-pink-200 items-center justify-center  max-w-full mx-auto"},[n("div",{staticClass:"grid rounded-lg w-11/12 md:w-9/12 lg:w-1/2 text-3xl"},[n("div",{staticClass:"grid grid-cols-1 mt-5 mx-7"},[n("input",{staticClass:"py-2 px-3 rounded-lg border-1 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent",attrs:{type:"text",placeholder:"Ditt Namn"}})]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 mt-5 mx-7"},[n("input",{staticClass:"py-2 px-3 rounded-lg border-1 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent",attrs:{type:"email",placeholder:"Din Epost"}})]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 mt-5 mx-7"},[n("input",{staticClass:"py-2 px-3 rounded-lg border-1 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent",attrs:{rows:"3",type:"number",placeholder:"Ditt mobilnummer"}})]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 mt-5 mx-7"},[n("textarea",{staticClass:"py-2 px-3 rounded-lg border-2 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent",attrs:{name:"",id:"",cols:"10",rows:"3",placeholder:"Jag behöver hjälp med"}})]),t._v(" "),n("div",{staticClass:"flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5"},[n("button",{staticClass:"bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-2 border-r-2 border-blue-700 hover:border-blue-500 rounded  focus:outline-none "},[t._v("Skicka")])])])])}],!1,null,"2f2dee16",null).exports,I=n(64),O=n(12),P={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fas:function(){return I.c},faGithub:function(){return O.a}}},S=Object(o.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-blue-400"},[n("div",{staticClass:"flex justify-center text-white"},[n("div",{staticClass:"grid grid-cols-1 gap-4 px-8 py-10  "},[n("p",{staticClass:"text-2xl sm:text-5xl tracking-wide "},[n("fa",{staticClass:"mr-2",attrs:{icon:t.fas.faEnvelope}}),t._v(" info@bararent.se")],1),t._v(" "),n("div",{staticClass:"text-2xl sm:text-5xl tracking-wide"},[n("div",{staticClass:"inline"},[n("fa-layers",{staticClass:"fa-1x",attrs:{"full-width":""}},[n("fa",{attrs:{icon:t.fas.faCircle}}),t._v(" "),n("fa",{staticClass:"fa-inverse text-blue-400",attrs:{icon:t.fas.faPhone,transform:"shrink-6"}})],1)],1),t._v("\n\t\t\t\t0700-35 72 46\n\t\t\t")])])])])}),[],!1,null,null,null).exports,D={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fields:function(){return this.item.fields},isRight:function(){return"right"==this.item.fields.imagePosition}}},N=Object(o.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative  bg-pink-200"},[n("div",{staticClass:"flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center"},[n("div",{staticClass:"md:w-6/12 flex-shrink-0 relative "},[t.fields.primaryButton.href?[n("NuxtLink",{attrs:{to:t.fields.primaryButton.href}},[n("img",{staticClass:"object-cover object-center",staticStyle:{width:"768px",height:"420px"},attrs:{src:t.fields.image.url,alt:t.fields.image.label}})])]:[n("img",{staticClass:"rounded-lg object-cover object-center",staticStyle:{width:"768px",height:"420px"},attrs:{src:t.fields.image.url,alt:t.fields.image.label}})]],2),t._v(" "),n("div",{staticClass:"md:w-6/12 mt-3 md:mt-0 px-8",class:{"md:ml-12 lg:ml-8 md:order-last":!t.isRight,"md:mr-12 lg:mr-8 md:order-first":t.isRight}},[n("div",{staticClass:"g:py-8 text-center md:text-left pb-5"},[t.fields.tagline?[n("span",{staticClass:"font-bold text-primary-500 text-sm text-center md:text-left uppercase"},[t._v("\n\t\t\t\t\t\t"+t._s(t.fields.tagline)+"\n\t\t\t\t\t")])]:t._e(),t._v(" "),n("h2",{staticClass:"text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left hidden md:block"},[t._v("\n\t\t\t\t\t"+t._s(t.fields.title)+"\n\t\t\t\t")]),t._v(" "),n("p",{staticClass:"mt-4 text-center md:text-left text-md md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"},[t._v("\n\t\t\t\t\t"+t._s(t.fields.content)+"\n\t\t\t\t")]),t._v(" "),t.fields.primaryButton?[n("NuxtLink",{staticClass:"inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-pink-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150",attrs:{to:t.fields.primaryButton.href}},[t._v("\n\t\t\t\t\t\t"+t._s(t.fields.primaryButton.text)+"\n\t\t\t\t\t")])]:t._e()],2)])])])}),[],!1,null,null,null).exports,E={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fields:function(){return this.item.fields},isRight:function(){return"right"==this.item.fields.imagePosition}}},L=Object(o.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full h-64 bg-center bg-no-repeat bg-cover"},[n("div",{staticClass:"absolute w-full h-64 bg-opacity-50 bg-black flex justify-center items-center"},[n("div",{staticClass:"mx-4 text-center justify-center text-white"},[n("h1",{staticClass:"font-bold text-5xl sm:text-6xl mb-4 break-words"},[t._v(t._s(t.fields.title))])])]),t._v(" "),n("img",{staticClass:"object-cover object-center h-64 w-full filter blur-lg",attrs:{src:t.fields.image.url,alt:t.fields.image.label}})])}),[],!1,null,null,null).exports,R={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},filters:{truncate:function(t,e){return t.substring(0,e)+"…"}},data:function(){return{currentIndex:0}},methods:{getFigures:function(){},moveForward:function(){this.currentIndex=(this.currentIndex+1)%this.item.fields.selectedReviews.length},movePrev:function(){},startReviewFader:function(){setInterval(this.moveForward,4e3)}},computed:{fields:function(){return this.item.fields.featuredPost?this.item.fields.featuredPost.fields:null},date:function(){var t;return new Date(null===(t=this.fields)||void 0===t?void 0:t.date).toLocaleDateString()},category:function(){return this.fields.category?this.fields.category.fields.title:"Uncategorized"}},mounted:function(){this.startReviewFader()}},T=Object(o.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto w-full p-3 z-20 relative lg:-mt-8 h-64 hidden lg:block"},t._l(t.item.fields.selectedReviews,(function(e,r){return n("div",{key:r},[r==t.currentIndex?n("div",{staticClass:"flex shadow-lg bg-white rounded h-56 overflow-hidden items-center "},[n("div",{staticClass:"flex flex-col justify-between h-56 text-center flex-auto"},[n("div",{staticClass:"flex flex-col justify-between flex-1"},[n("div"),t._v(" "),n("div",{staticClass:"self-center "},[n("p",{staticClass:"text-display self-center text-gray-900 text-1xl lg:text-2xl "},[t._v(t._s(e.fields.review))])]),t._v(" "),n("div")]),t._v(" "),n("p",{staticClass:"text-2xl text-gray-700 p-4"},[t._v("- "+t._s(e.fields.customer))])])]):t._e()])})),0)}),[],!1,null,null,null).exports,M={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},methods:{background:function(){var t;switch(this.item.fields.bgColor){case"pink":t="bg-pink-200";break;case"blue":t="bg-blue-300";break;default:t="bg-white"}return t}},computed:{fields:function(){return this.item.fields},isRight:function(){return"right"==this.item.fields.imagePosition}}},$=Object(o.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.background()]},[n("div",{staticClass:"container p-8 mx-auto "},[n("div",{staticClass:"max-w-screen-xl mx-auto "},[n("div",{staticClass:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3"},t._l(t.item.fields.selectedCategories,(function(e,r){return n("NuxtLink",{key:r,attrs:{to:""+e.fields.url.href}},[n("div",[n("div",{staticClass:"flex-col group md:mb-0"},[n("div",{staticClass:"relative h-64"},[n("img",{staticClass:"object-cover object-center rounded-t-lg",staticStyle:{width:"100%",height:"100%"},attrs:{src:e.fields.image.url,alt:e.fields.title}})]),t._v(" "),n("div",{staticClass:"bg-blue-400 p-3 text-center border-t-0 rounded-b-xl"},[n("h2",{staticClass:"text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.fields.title)+"\n\t\t\t\t\t\t\t\t")])])])])])})),1)])])])}),[],!1,null,null,null).exports,F={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},methods:{getURL:function(t){return t.fields.url.href},clicktest:function(t){console.log("TESTING METHOD HERE",this.item.fields.selectedPosts)},background:function(){var t;switch(this.item.fields.bgColor){case"pink":t="bg-pink-200";break;case"blue":t="bg-blue-300";break;default:t="bg-white"}return t}},computed:{fields:function(){return this.item.fields},isRight:function(){return"right"==this.item.fields.imagePosition}}},A=Object(o.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.background()]},[n("div",{staticClass:"container mx-auto "},[n("div",{staticClass:"p-8"},[n("div",{staticClass:"max-w-screen-xl mx-auto "},[n("div",{staticClass:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3"},t._l(t.item.fields.selectedPosts,(function(e,r){return n("NuxtLink",{key:r,staticClass:"justify-self-center",attrs:{to:"/blog"+e.fields.category.fields.url.href+"/"+e.fields.slug}},[n("div",[n("div",{staticClass:"flex-col group md:mb-0"},[n("div",{staticClass:"relative h-64"},[n("img",{staticClass:"object-cover object-center rounded-t-lg",staticStyle:{width:"100%",height:"100%"},attrs:{src:e.fields.image.url,alt:e.fields.title}})]),t._v(" "),n("div",{staticClass:"bg-blue-400 p-3 text-center border-t-0 rounded-b-xl"},[n("h2",{staticClass:"text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300 "},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.fields.title)+"\n\t\t\t\t\t\t\t\t\t")])])])])])})),1)])])])])}),[],!1,null,null,null).exports,B={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},computed:{fields:function(){return this.item.fields}}},H=Object(o.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative px-8"},[n("div",{staticClass:"max-w-screen-xl mx-auto my-12 md:mt-18"},[n("div",{staticClass:" text-center text-secondary-500 text-2xl  tracking-wide"},[t._v("\n\t\t\t"+t._s(t.fields.text)+"\n\t\t")]),t._v(" "),n("div",{staticClass:"flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5 text-2xl"},[n("NuxtLink",{attrs:{to:t.item.fields.buttonLink.href}},[n("button",{staticClass:"bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-2 border-r-2 border-blue-700 hover:border-blue-500 rounded  focus:outline-none "},[t._v(t._s(t.fields.buttonTitle))])])],1)])])}),[],!1,null,null,null).exports,z={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},methods:{getURL:function(t){return t.fields.url.href},background:function(){var t;switch(this.item.fields.bgColor){case"pink":t="bg-pink-200";break;case"blue":t="bg-blue-300";break;default:t="bg-white"}return t}},computed:{fields:function(){return this.item.fields},isRight:function(){return"right"==this.item.fields.imagePosition}}},U=(n(182),Object(o.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.background()]},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"relative p-8"},[n("div",{staticClass:"max-w-screen-xl mx-auto "},[n("div",{staticClass:"flex flex-col-reverse  gap-8 sm:grid-cols-1 lg:grid-cols-1 "},t._l(t.item.fields.selectedPosts,(function(e,r){return n("NuxtLink",{key:r,attrs:{to:"/blog"+e.fields.category.fields.url.href+"/"+e.fields.slug}},[n("div",[n("div",{staticClass:"flex p-3 space-x-3 space-y-3 lg:space-y-0 flex-col lg:flex-row items-center  justify-between rounded-xl hover:shadow-md \n\t\t\t\t\t\t\tborder-dotted border-4 border-light-blue-400\n\t\t\t\t\t\t\t"},[n("div",{staticClass:"h-64 bg-blue-600 rounded-xl overflow-hidden flex-shrink-0 shadow"},[n("img",{staticClass:"bg-pink-200 object-contain h-full  rounded-xl overflow-hidden ",attrs:{src:e.fields.image.url,alt:e.fields.title}})]),t._v(" "),n("div",{staticClass:"w-full lg:text-left text-center"},[n("div",{staticClass:"text-2xl lg:text-4xl font-extrabold "},[n("span",{staticClass:"bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.fields.subtitle)+"\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("h2",{staticClass:"font-black text-1xl group-hover:text-red-900 transition duration-300 p-3"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.fields.subSubTitle)+"\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("button",{staticClass:"bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8  border-blue-700 hover:border-blue-500 rounded  focus:outline-none flex-shrink-0"},[t._v("Se Erbjudande")])])])])})),1)])])])])}),[],!1,null,null,null).exports),G={props:{contentID:Number,item:Object,page:Object,pageInSitemap:Object,dynamicPageItem:Object},methods:{getURL:function(t){return t.fields.url.href},background:function(){var t;switch(this.item.fields.bgColor){case"pink":t="bg-pink-200";break;case"blue":t="bg-blue-300";break;default:t="bg-white"}return t}}},J=(n(184),Object(o.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.background()]},["true"===t.item.fields.showTitle?n("div",{staticClass:"relative p-11 bg-white"},[n("div",{staticClass:"max-w-screen-xl mx-auto"},[n("h1",{staticClass:"text-center text-secondary-500 text-4xl font-black tracking-wide"},[t._v("\n\t\t\t\t"+t._s(t.item.fields.title)+"\n\t\t\t")])])]):t._e(),t._v(" "),n("div",{staticClass:"container max-w-2xl mx-auto"},[n("div",{staticClass:"rounded-images p-3 prose max-w-full mx-auto",domProps:{innerHTML:t._s(t.item.fields.hTML)}})])])}),[],!1,null,"1a9dd64c",null).exports),V=n(8),Z=n(65),W=(n(32),n(186),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,l,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$agility,r=[],l=n.languages[0],t.prev=3,t.next=6,n.client.getContentList({referenceName:"posts",languageCode:l});case 6:return o=t.sent,t.next=9,n.client.getContentList({referenceName:"categories",languageCode:l});case 9:c=t.sent,r=o.map((function(t){var e,n,r=null===(e=t.fields.category)||void 0===e?void 0:e.contentid;return t.linkedCategory=null==c?void 0:c.find((function(t){return t.contentID==r})),t.category=(null===(n=t.linkedCategory)||void 0===n?void 0:n.fields.title)||"Uncategorized",t.formattedDate=new Date(t.fields.date).toLocaleDateString(),t})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console&&console.error("Could not load posts list.",t.t0);case 16:return t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}()),X=(n(21),{props:{name:String,page:Object,pageInSitemap:Object,dynamicPageItem:Object,moduleData:Object},computed:{modules:function(){return this.renderModules()}},methods:{renderModules:function(){var t=[],e=this.name,n=this.page.zones[e];if(void 0!==n)return n.forEach((function(e){var n=tt.moduleComponents[e.module];n?t.push({component:n,contentID:e.item.contentID,item:e.item}):console.error('No component found for the module "'.concat(e.module,'". Cannot render module.'))})),t;console.error('Cannot render modules for zone "'.concat(e,'". This does not appear to be a valid content zone for this page template.'))}}}),Y=Object(o.a)(X,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.modules,(function(e){return[n(e.component,{key:e.contentID,tag:"component",attrs:{contentID:e.contentID,item:e.item,page:t.page,pageInSitemap:t.pageInSitemap,dynamicPageItem:t.dynamicPageItem,moduleData:t.moduleData}})]}))],2)}),[],!1,null,null,null).exports,K={props:{page:Object,moduleData:Object,pageInSitemap:Object,dynamicPageItem:Object},components:{ContentZone:Y}},Q=Object(o.a)(K,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ContentZone",{attrs:{name:"MainContentZone",page:t.page,pageInSitemap:t.pageInSitemap,dynamicPageItem:t.dynamicPageItem,moduleData:t.moduleData}})}),[],!1,null,null,null).exports;V.c.add(I.b);var tt={dataFetch:{PostsListing:W},moduleComponents:{TextBlockWithImage:c,RichTextArea:m,Heading:x,FeaturedPost:h,PostsListing:_,PostDetails:j,ContactForm:k,BlueBanner:S,BigJumbotron:N,ImageHeader:L,Reviews:T,SelectedCategories:$,SelectedPosts:A,TextAndButton:H,SelectedOffers:U,HTMLModule:J,FontAwesomeIcon:Z.a},pageTemplateComponents:{"Main Template":Q}},et={data:function(){return{pageInSitemap:{title:""},page:{title:"",seo:{metaDescription:"",keywords:""}},dynamicPageItem:null,moduleData:{},message:null,statusCode:0}},computed:{componentToRender:function(){return tt.pageTemplateComponents[this.page.templateName]}},mounted:function(){},head:function(){return{title:"".concat(this.pageInSitemap.title," | BaraRent.se"),meta:[{hid:"generator",name:"generator",content:"Agility CMS"},{hid:"agility_timestamp",name:"agility_timestamp",content:(new Date).toLocaleString()},{hid:"viewport",name:"viewport",content:"initial-scale=1.0, width=device-width"},{hid:"description",name:"description",content:this.page.seo.metaDescription},{hid:"keywords",name:"keywords",content:this.page.seo.metaKeywords}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,l,o,path,c,d,m,f,x,v,h,C,_,y,j,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=59;break;case 10:if(o=t.sent,path="".concat(r)||Object.keys(o)[0],c=o[path]){t.next=17;break}return d="Page not found on sitemap in ".concat(l,"."),e({statusCode:404,message:d}),t.abrupt("return",{statusCode:404,message:d});case 17:return t.next=19,n.client.getPage({pageID:c.pageID,languageCode:l});case 19:if(t.t0=t.sent,t.t0){t.next=22;break}t.t0=null;case 22:if(m=t.t0){t.next=27;break}return f="Page not found in ".concat(l,"."),e({statusCode:404,message:f}),t.abrupt("return",{statusCode:404,message:f});case 27:if(x=null,!(c.contentID>0)){t.next=32;break}return t.next=31,n.client.getContentItem({contentID:c.contentID,languageCode:l});case 31:x=t.sent;case 32:v={},t.t1=regeneratorRuntime.keys(m.zones);case 34:if((t.t2=t.t1()).done){t.next=51;break}h=t.t2.value,C=m.zones[h],_=0;case 38:if(!(_<C.length)){t.next=49;break}if(y=C[_],j=y.module,!(w=tt.dataFetch[j])){t.next=46;break}return t.next=45,w({$agility:n});case 45:v[j]=t.sent;case 46:_++,t.next=38;break;case 49:t.next=34;break;case 51:return t.abrupt("return",{pageInSitemap:c,page:m,dynamicPageItem:x,moduleData:v,message:null,statusCode:200});case 54:return t.prev=54,t.t3=t.catch(2),console.error(t.t3),e({statusCode:500,message:"Error occurred on server."}),t.abrupt("return",{statusCode:500,message:"Error occurred on server."});case 59:case"end":return t.stop()}}),t,null,[[2,54]])})))()}},it=Object(o.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 200!==t.statusCode?n("div",{staticClass:"max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-6"},[n("div",{staticClass:"my-6 max-w-full"},[t.message?n("div",[t._v(t._s(t.message))]):n("div",[t._v("The page could not be found, or an error occurred.")])])]):n("div",[n(t.componentToRender,{tag:"component",attrs:{page:t.page,pageInSitemap:t.pageInSitemap,dynamicPageItem:t.dynamicPageItem,moduleData:t.moduleData}})],1)}),[],!1,null,null,null);e.default=it.exports}}]);