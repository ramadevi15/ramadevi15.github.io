_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+QPN":function(e,t,a){e.exports={articleList:"style_articleList__U6uu0"}},"120z":function(e,t,a){e.exports={filter:"style_filter__2xPKL"}},Ctv1:function(e,t,a){e.exports={profile:"style_profile__3RMC3",title:"style_title__2ENt3",image:"style_image__s_MhN",description:"style_description__2egiA",socialLinks:"style_socialLinks__2ZF3S"}},Ff3x:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),r=a("q1tI"),i=a("8Kt/"),c=a.n(i),o=a("ntAx"),s=a("M8b6"),l=a("aBFz"),u=a("Ctv1"),h=function(e){var t,a=e.person,r=e.defaultImage,i=function(e){return e.split("").reduce((function(e,t){var a=(e<<5)-e+t.charCodeAt(0);return a&a}),0)},c=function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t},o=""!==a.image?"url(".concat("/pages/OSP/comcast.github.io").concat(a.image,")"):"linear-gradient(0deg, #".concat(c(i(a.name)),"ee 0%, #").concat(c(i(a.name)),'aa 100%), url("').concat("/pages/OSP/comcast.github.io").concat(r,'")');return Object(n.jsxs)("article",{className:u.profile,children:[Object(n.jsx)("div",{className:u.image,style:{backgroundImage:o}}),Object(n.jsx)("h4",{className:u.title,children:a.name}),Object(n.jsx)("p",{className:u.description,children:a.title}),Object(n.jsx)("div",{className:u.socialLinks,children:null===(t=a.connect)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)("a",{href:e.link,title:"".concat(e.name,": ").concat(a.name),children:Object(n.jsxs)("span",{className:"vh",children:[a.name," at ",e.name]})})}))})]})},d=a("nJU5"),m=function(e){var t=e.events,a=e.talks,r=e.speakers;return console.log("..."),Object(n.jsx)(n.Fragment,{children:t.map((function(e){var t="linear-gradient(0deg, #000c 0%, #0006 100%), url(".concat("/pages/OSP/comcast.github.io").concat(e.image,")"),i=a.filter((function(t){return t.title===e.keynote})),c=a.filter((function(t){return e.specificTalks.includes(t.title)})),o=r.filter((function(e){return c.map((function(t){return t.author.includes(e.name)})).includes(!0)}));return Object(n.jsxs)("article",{className:d.conference,style:{backgroundImage:t},children:[Object(n.jsxs)("h2",{id:"conference",className:"section__title",children:[e.title,": ",e.confTopic]}),Object(n.jsxs)("section",{className:d.card,children:[Object(n.jsx)("p",{className:d.overview,children:e.openingRemarksOverview}),Object(n.jsx)("p",{children:e.openingRemarksDescription})]}),Object(n.jsx)("h3",{children:"Keynote"}),i.map((function(t){return Object(n.jsx)("article",{className:d.card,children:Object(n.jsx)(l.a,{title:t.title,author:t.author,description:t.description,date:t.date,image:t.image,url:t.url,defaultImage:e.image})},"keynote_".concat(t.title))})),Object(n.jsx)("h3",{children:"Topic Talks"}),c.map((function(t){return Object(n.jsx)("div",{className:d.card,children:Object(n.jsx)(l.a,{title:t.title,author:t.author,description:t.description,date:t.date,image:t.image,url:t.url,defaultImage:e.image})},"talks_".concat(t.title))})),Object(n.jsx)("h3",{children:"Speakers"}),Object(n.jsx)("section",{className:"".concat(d.speakerList," profiles"),children:o.map((function(t){return Object(n.jsx)(h,{person:t,defaultImage:e.image})}))})]})}))})},p=a("hVla"),g=a("e/Q5"),b=a("WciA"),j=a("c1hs");t.default=function(){var e=Object(r.useState)(null),t=e[0],a=e[1],i=Object(r.useState)(0),l=i[0],u=i[1],h=Object(r.useState)(null),d=h[0],f=h[1],y=b.f.filter((function(e){return t&&!d?e.title.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase())||e.author.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase()):e})).sort((function(e,t){return new Date(t.date)-new Date(e.date)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(c.a,{children:[Object(n.jsxs)("title",{children:[b.h," of Open Source Software at Comcast"]}),Object(n.jsx)("meta",{property:"og:title",content:b.h},"title")]}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)(s.a,{title:b.h,image:b.d,color:b.a}),Object(n.jsxs)("section",{children:[b.e&&Object(n.jsx)("p",{className:"overview",children:b.e}),b.c&&Object(n.jsx)("p",{children:b.c})]}),Object(n.jsx)("section",{children:Object(n.jsx)(m,{events:b.b,talks:b.f,speakers:j})}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{id:"talks",children:b.g}),Object(n.jsx)(p.a,{data:y,itemType:["talk","talks"],currentPage:l,onPageSelect:function(e){u(e.target.value)},onSearch:function(e){a(e.target.value),u(0)},onSelect:function(e){f(e.target.value),u(0)}}),Object(n.jsx)(g.a,{content:y.slice(10*l,10*l+10),defaultImage:b.d})]})]})]})}},M8b6:function(e,t,a){"use strict";var n=a("nKUr"),r=a("BkDe"),i=a("d8q0"),c=function(e){var t=i.blackBorder;switch(e){case"yellow":t=i.yellowBorder;break;case"orange":t=i.orangeBorder;break;case"red":t=i.redBorder;break;case"purple":t=i.purpleBorder;break;case"blue":t=i.blueBorder;break;case"green":t=i.greenBorder;break;case"black":t=i.blackBorder;break;case"mineshaft":t=i.mineshaftBorder;break;case"carbon":t=i.carbonBorder;break;case"mercury":t=i.mercuryBorder;break;case"white":t=i.whiteBorder;break;default:t=i.blackBorder}return t},o=a("mpBp");t.a=function(e){var t=e.title,a=e.image,i=e.color;return Object(n.jsxs)("header",{className:"".concat(o.header," ").concat(a&&o.featuredImage," ").concat(Object(r.a)(i)," ").concat(c(i)),children:[Object(n.jsx)("section",{className:o.content,children:Object(n.jsx)("h1",{className:o.title,children:t})}),a&&Object(n.jsx)("section",{className:o.image,children:Object(n.jsx)("img",{src:"".concat("/pages/OSP/comcast.github.io").concat(a),alt:""})})]})}},WciA:function(e){e.exports=JSON.parse('{"h":"People","e":"Comcast NBCUniversal brings together engineers, designers, creators, storytellers, and entrepreneurs who are shaping the future of media and technology.","c":"We encourage and support our software engineers in open-sourcing the projects they develop at Comcast. The people who power our teams are the people who power the Open Source community through the sharing of information online, in presentations, and at conferences.","d":"/images/people/featured.jpg","a":"red","b":[{"title":"Winter 2020","confTopic":"The Open Source Cloud","image":"/images/carousel/corporate_10G-HeroImage_5x2_v5.png","topicKey":"cloud","beginDate":"2020-12-21","endDate":"2021-03-21","openingRemarksOverview":"We\u2019re pleased to welcome you to the inital quarterly virtual conference digest.","openingRemarksDescription":"Each quarter the Comcast Open Source Program Office will highlight a curated list of presentations and talks given by the people of Comcast NBCUniversal at various events on topics in Open Source Software. For Winter 2020, we submit to you presentations on the topic of \u201cOpen Source in the Cloud\u201d. Are Cloud Services the Future of Open Source? ...","keynote":"Why your OSPO needs to invest in more than just compliance","specificTalks":["InnerSource is Established, Now What","InnerSource at Comcast","Open Source Summit - Growing Sustainable Contributions Through Ambassador Networks"]}],"g":"Talks","f":[{"title":"When ViewModels Go to Die: Saving ViewModel State","date":"November 19, 2020","author":"Sumayyah Ahmed","url":"https://www.droidcon.com/media-detail?video=481205520","image":"/images/people/talks/droidcon_nov2020.jpg"},{"title":"Extending Automation towards Self-Service CDNs","date":"October 15, 2020","author":"Jonathan Gray","url":"https://www.youtube.com/watch?v=TO0N9sPZdnU","image":"/images/people/talks/extending_automation_towards_self-service_cdns.jpg"},{"title":"Kuberhealthy: An operator for synthetic monitoring in Kubernetes","author":"Joshulyne Park","date":"September 17, 2020","url":"https://www.comcastlabsconnect.com/2020-cloud-schedule/kuberhealthy-an-operator-for-synthentic-monitoring-in-kubernetes-by-joshulyne-park-of-comcast","image":"/images/people/talks/comcast_labs.png"},{"title":"Cloud Beyond Comcast","date":"September 16, 2020","author":"Roberto Moral","url":"https://www.comcastlabsconnect.com/2020-cloud-schedule/lightning-talks","image":"/images/people/talks/comcast_labs.png"},{"title":"InnerSource is Established, Now What","date":"September 15, 2020","author":"Brittany Istenes","url":"https://www.youtube.com/watch?v=RenQ8B7aX84","image":"/images/people/talks/brittany_istenes_innersource2020.jpg"},{"title":"Growing Sustainable Contributions Through Ambassador Networks","date":"September 11, 2020","author":"Alison Yu & Shilla Saebi","url":"https://www.youtube.com/watch?v=i2S7lSxAbrA","image":""},{"title":"Why your OSPO needs to invest in more than just compliance","date":"August 19, 2020","author":"Nithya Ruff","url":"https://www.finos.org/blog/why-your-ospo-needs-to-invest-in-more-than-compliance-nithya-ruff-comcast","image":""},{"title":"Why Diversity in Open Source Will Lead to Better Products for Everyone","date":"July 22, 2020","author":"Quincy Iheme","url":"https://www.comcastlabsconnect.com/2020-inclusion-schedule/innovation4all-why-diversity-in-open-source-will-lead-to-better-products-for-everyone-by-quincy-iheme-of-comcast","image":""},{"title":"Panel: \u201cAllies for Diversity\u201d","date":"July 22, 2020","author":"Jon Moore, Nithya Ruff, & Shane Portfolio. Moderated by Kendra Lee","url":"https://www.comcastlabsconnect.com/2020-inclusion-schedule/panel-allies-for-diversity-moderated-by-kendra-lee-of-comcast","image":""},{"title":"Open Source with a Security Mindset: Releasing with Protection","date":"June 30, 2020","author":"Brittany Istenes & Mike Lacroce","url":"https://onlinexperiences.com/Launch/Event.htm?ShowKey=95540&DisplayItem=E388765","image":""},{"title":"Open Source Summit - Growing Sustainable Contributions Through Ambassador Networks","date":"June 29, 2020","author":"Shilla Saebi & Alison Yu","url":"https://onlinexperiences.com/Launch/Event.htm?ShowKey=95540&DisplayItem=E388811","image":""},{"title":"How the Yocto Project Addressed Comcast RDK Scalability Issues","date":"May 5, 2020","author":"Nicolas Dechesne, Linaro & Khem Raj","url":"https://www.youtube.com/watch?v=vZNr3mZ8SOU","image":""},{"title":"InnerSource at Comcast","date":"April 24, 2020","author":"Nithya Ruff","url":"https://www.youtube.com/watch?v=msD-8-yrGfs","image":""},{"title":"FOSDEM - Growing Sustainable Contributions through Ambassador Networks","date":"February 2, 2020","author":"Shilla Saebi & Alison Yu","url":"https://ftp.osuosl.org/pub/fosdem/2020/UB5.230/ambassadornetworks.mp4","image":""}]}')},aBFz:function(e,t,a){"use strict";var n=a("nKUr"),r=a("jMQc");t.a=function(e){var t=e.title,a=e.author,i=e.description,c=e.date,o=e.image,s=e.url,l=e.defaultImage,u=function(e){return e.split("").reduce((function(e,t){var a=(e<<5)-e+t.charCodeAt(0);return a&a}),0)},h=function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t},d=""!==o?"url(".concat("/pages/OSP/comcast.github.io").concat(o,")"):"linear-gradient(0deg, #".concat(h(u(t)),"ee 0%, #").concat(h(u(t)),'aa 100%), url("').concat("/pages/OSP/comcast.github.io").concat(l||"/images/blog/featured.jpg",'")');return Object(n.jsxs)("article",{className:r.article,children:[Object(n.jsx)("div",{className:r.articleImage,style:{backgroundImage:d}}),Object(n.jsxs)("div",{className:r.articleMessage,children:[Object(n.jsx)("h3",{className:r.articleTitle,children:Object(n.jsx)("a",{className:r.articleLink,href:s,children:t})}),Object(n.jsx)("p",{className:r.articleDate,children:c}),a&&Object(n.jsxs)("p",{className:r.articleAuthor,children:["by ",a]}),i&&Object(n.jsx)("p",{className:r.articleDescription,children:i})]})]},"articles".concat(t))}},c1hs:function(e){e.exports=JSON.parse('[{"name":"Brittany Istenes","title":"Delivery and Community Program Manager for Open Source Software","image":"/images/people/profiles/50678820.png","bio":"???","connect":[{"name":"GitHub","link":"https://github.com/BrittanyIstenes"},{"name":"LinkedIn","link":"https://www.linkedin.com/in/brittany-istenes-91b902152/"}]},{"name":"Nithya Ruff","title":"Executive Director, Open Source Program Office, Comcast","image":"","bio":"???","connect":[{"name":"GitHub","link":"https://github.com/nruff"},{"name":"LinkedIn","link":"https://www.linkedin.com/in/nithyaruff/"},{"name":"Twitter","link":"https://twitter.com/nithyaruff"},{"name":"Website","link":"http://www.behindthetech.org/nithya-ruff"}]},{"name":"Shilla Saebi","title":"Open Source Program Manager","image":"","bio":"???","connect":[{"name":"GitHub","link":"https://github.com/shillasaebi"},{"name":"LinkedIn","link":"https://www.linkedin.com/in/shilla-saebi-9a589633/"}]},{"name":"Sumayyah Ahmed","title":"Android Engineer","bio":"???","connect":[{"name":"LinkedIn","link":"https://www.linkedin.com/in/sumayyah-ahmed"}]}]')},"e/Q5":function(e,t,a){"use strict";var n=a("nKUr"),r=a("aBFz"),i=a("+QPN");t.a=function(e){var t=e.content,a=e.defaultImage;return Object(n.jsx)("section",{className:i.articleList,children:t.map((function(e){var t=e.title,i=e.author,c=e.description,o=e.date,s=e.image,l=e.url;return Object(n.jsx)(r.a,{title:t,author:i,description:c,date:o,image:s,url:l,defaultImage:a})}))})}},hVla:function(e,t,a){"use strict";var n=a("nKUr"),r=a("rb/R"),i=function(e,t,a){for(var i=0,c=[];i<t;)(e>=4&&1===i||i>4&&e<=t-5&&(i+1)%5===0||i>=e+2&&i<=e-2)&&c.push(Object(n.jsx)("span",{className:r.page,children:"\u2026"})),(0===i||i<5&&e<3||i<=e+2&&i>=e-2||(i+1)%5===0||i>4&&e>=t-4)&&c.push(Object(n.jsx)("button",{type:"button",onClick:function(e){return a(e)},value:i,className:"".concat(r.page," ").concat(e===i?r.selected:null),children:i+1},"button".concat(i))),i+=1;return c},c=function(e){var t=e.itemType,a=e.count,c=e.currentPage,o=e.onPageSelect;return Object(n.jsxs)("div",{className:r.pagination,children:[Object(n.jsxs)("p",{className:r.repoCount,children:[a," ",a>1?t[1]:t[0]]}),a>10&&Object(n.jsxs)("p",{className:r.paginationButtons,children:["\u2190",i(parseInt(c,10),Math.ceil(a/10),o),"\u2192"]}),Object(n.jsxs)("p",{className:r.pagesCount,children:["page ",parseInt(c,10)+1," of ",Math.ceil(a/10)]})]})},o=a("120z");t.a=function(e){var t=e.data,a=e.itemType,r=e.categoryTitle,i=e.categoryList,s=void 0===i?[]:i,l=e.currentPage,u=e.onPageSelect,h=e.onSelect,d=e.onSearch;return Object(n.jsxs)("section",{className:o.filter,children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{htmlFor:"projectSearch",children:["Search ",a[1].charAt(0).toUpperCase()+a[1].slice(1)]}),Object(n.jsx)("input",{id:"projectSearch",type:"text",placeholder:"search term",onChange:function(e){return d(e)}})]}),!!s.length&&Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"categorySelect",children:"Select Category"}),Object(n.jsxs)("select",{id:"categorySelect",onChange:function(e){return h(e)},children:[Object(n.jsxs)("option",{value:"",children:["All ",r]}),s.map((function(e){return Object(n.jsx)("option",{value:e.toLowerCase(),children:e})}))]})]}),Object(n.jsx)(c,{itemType:a,count:t.length,currentPage:l,onPageSelect:u})]})}},jMQc:function(e,t,a){e.exports={article:"style_article__G2F_K",articleLink:"style_articleLink__LVN4J",articleTitle:"style_articleTitle__1iMT-",articleDate:"style_articleDate__2XXYW",articleMessage:"style_articleMessage__3IXRk",articleDescription:"style_articleDescription__1JuJ0",articleImage:"style_articleImage__3WIEC"}},mpBp:function(e,t,a){e.exports={header:"style_header__1YNcn",featuredImage:"style_featuredImage__1dX_Z",content:"style_content__2dN1a",image:"style_image__16_NC","zoom-out":"style_zoom-out__26qrI","image--header-image":"style_image--header-image__AcnZu",category:"style_category__1mhUu",details:"style_details__28oyp",date:"style_date__vws_R",author:"style_author__18b5d"}},nJU5:function(e,t,a){e.exports={conference:"style_conference__3rzEk",card:"style_card__1x8FM",overview:"style_overview__2vPYt",speakerList:"style_speakerList__h0I0i"}},"rb/R":function(e,t,a){e.exports={pagination:"style_pagination__2n-iW",repoCount:"style_repoCount__2xxqm",paginationButtons:"style_paginationButtons__Yn3tR",pagesCount:"style_pagesCount__26j9H",page:"style_page__JkEk-",selected:"style_selected__20Fxz"}},sGUS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people",function(){return a("Ff3x")}])}},[["sGUS",0,2,1,3]]]);