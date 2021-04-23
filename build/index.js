!function(e){var t={};function a(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),l=(a(3),a(4),wp.blocks.getBlockDefaultClassName),r=wp.editor,i=r.InspectorControls,o=r.RichText,s=r.MediaUpload;Object(n.registerBlockType)("borncreative/header-block",{title:"Header Block",icon:"smiley",category:"common",attributes:{bodyContent:{source:"html",selector:".copy-bd"},heading:{source:"html",selector:"h2"},image:{type:"string",default:"http://placehold.it/500"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"media"},Object(c.createElement)(s,{onSelect:function(e){console.log(e),a({image:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.image})}})),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o,{className:"copy-hd",tagName:"h2",placeholder:"Enter your heading",value:n.heading,onChange:function(e){a({heading:e})}}),Object(c.createElement)(o,{className:"copy-bd",tagName:"h3",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){a({bodyContent:e})}}))))]},save:function(e){var t=l("borncreative/header-block"),a=e.attributes;return Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"media"},Object(c.createElement)("img",{src:a.image})),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o.Content,{class:"copy-hd",tagName:"h2",value:a.heading}),Object(c.createElement)(o.Content,{className:"copy-bd",tagName:"h3",value:a.bodyContent}))))}}),Object(n.registerBlockType)("borncreative/header-block-video",{title:"Video Header Block",icon:"smiley",category:"common",attributes:{bodyContent:{source:"html",selector:".copy-bd"},heading:{source:"html",selector:"h2"},image:{type:"string"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"media"},Object(c.createElement)(s,{onSelect:function(e){console.log(e),a({image:e.url})},render:function(e){var t=e.open;return Object(c.createElement)("video",{onClick:t,autoplay:"autoplay",muted:!0},Object(c.createElement)("source",{src:n.image,type:"video/mp4"}))}})),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o,{className:"copy-hd",tagName:"h2",placeholder:"Enter your heading",value:n.heading,onChange:function(e){a({heading:e})}}),Object(c.createElement)(o,{className:"copy-bd",tagName:"h3",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){a({bodyContent:e})}}))))]},save:function(e){var t=l("borncreative/header-block"),a=e.attributes;return Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"media"},Object(c.createElement)("video",{loop:"true",autoplay:"autoplay",muted:!0},Object(c.createElement)("source",{src:a.image,type:"video/mp4"}))),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o.Content,{class:"copy-hd",tagName:"h2",value:a.heading}),Object(c.createElement)(o.Content,{className:"copy-bd",tagName:"h3",value:a.bodyContent}))))}}),Object(n.registerBlockType)("borncreative/intro-text-block",{title:"Intro Text Block",icon:"smiley",category:"common",attributes:{bodyContent:{source:"html",selector:".copy-bd"},headinga:{source:"html",selector:".headinga"},headingb:{source:"html",selector:".headingb"},headingc:{source:"html",selector:".headingc"},linea:{source:"html",selector:".linea"},lineb:{source:"html",selector:".lineb"},linec:{source:"html",selector:".linec"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"copy col-full"},Object(c.createElement)("div",{class:"row"},Object(c.createElement)("div",{class:"column1"},Object(c.createElement)(o,{className:"copy-bd",tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){a({bodyContent:e})}})),Object(c.createElement)("div",{class:"column2"},Object(c.createElement)(o,{className:"headinga",tagName:"h4",placeholder:"Client",value:n.headinga,onChange:function(e){a({headinga:e})}}),Object(c.createElement)(o,{className:"linea",tagName:"p",placeholder:"Client Name",value:n.linea,onChange:function(e){a({linea:e})}}),Object(c.createElement)(o,{className:"headingb",tagName:"h4",placeholder:"Project Type",value:n.headingb,onChange:function(e){a({headingb:e})}}),Object(c.createElement)(o,{className:"lineb",tagName:"p",placeholder:"Client Name",value:n.lineb,onChange:function(e){a({lineb:e})}}),Object(c.createElement)(o,{className:"headingc",tagName:"h4",placeholder:"Services",value:n.headingc,onChange:function(e){a({headingc:e})}}),Object(c.createElement)(o,{className:"linec",tagName:"p",placeholder:"Client Name",value:n.linec,onChange:function(e){a({linec:e})}})))))]},save:function(e){var t=l("borncreative/intro-text-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{className:"copy col-full"},Object(c.createElement)("div",{class:"row"},Object(c.createElement)("div",{class:"column1"},Object(c.createElement)(o.Content,{className:"copy-bd",tagName:"p",value:a.bodyContent})),Object(c.createElement)("div",{class:"column2"},Object(c.createElement)(o.Content,{class:"headinga",tagName:"h4",value:a.headinga}),Object(c.createElement)(o.Content,{class:"linea",tagName:"p",value:a.linea}),Object(c.createElement)(o.Content,{class:"headingb",tagName:"h4",value:a.headingb}),Object(c.createElement)(o.Content,{class:"lineb",tagName:"p",value:a.lineb}),Object(c.createElement)(o.Content,{class:"headingc",tagName:"h4",value:a.headingc}),Object(c.createElement)(o.Content,{class:"linec",tagName:"p",value:a.linec})))))}}),Object(n.registerBlockType)("borncreative/title-only-block",{title:"Title Only Block",icon:"smiley",category:"common",attributes:{heading:{source:"html",selector:"h2"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o,{className:"copy-hd",tagName:"h2",placeholder:"Enter your heading",value:n.heading,onChange:function(e){a({heading:e})}})))]},save:function(e){var t=l("borncreative/title-only-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o.Content,{class:"copy-hd",tagName:"h2",value:a.heading}),Object(c.createElement)("hr",null)))}}),Object(n.registerBlockType)("borncreative/text-only-block",{title:"Text Only Block",icon:"smiley",category:"common",attributes:{heading:{source:"html",selector:".copy-bd"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o,{className:"copy-bd",tagName:"div",placeholder:"Enter your heading",value:n.heading,onChange:function(e){a({heading:e})}})))]},save:function(e){var t=l("borncreative/text-only-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o.Content,{class:"copy-bd",tagName:"div",value:a.heading})))}}),Object(n.registerBlockType)("borncreative/the-process-block",{title:"The Process Block",icon:"smiley",category:"common",attributes:{headinga:{source:"html",selector:"h2"},headingb:{source:"html",selector:"h3"},bodyContent:{source:"html",selector:"p"},imagea:{type:"string",default:"http://placehold.it/500"},imageb:{type:"string",default:"http://placehold.it/500"},imagec:{type:"string",default:"http://placehold.it/500"},figurea:{source:"html",selector:".figurea"},figureb:{source:"html",selector:".figureb"},figurec:{source:"html",selector:".figurec"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"col-full"},Object(c.createElement)(o,{className:"headinga",tagName:"h2",placeholder:"Enter your text here",value:n.headinga,onChange:function(e){a({headinga:e})}})),Object(c.createElement)("div",{class:"row"},Object(c.createElement)("div",{className:"media column1"},Object(c.createElement)(s,{onSelect:function(e){a({imagea:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagea})}}),Object(c.createElement)(o,{className:"figurea",tagName:"figure",placeholder:"Enter your text here",value:n.figurea,onChange:function(e){a({figurea:e})}})),Object(c.createElement)("div",{className:"media column2"},Object(c.createElement)(s,{onSelect:function(e){a({imageb:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imageb})}}),Object(c.createElement)(o,{className:"figureb",tagName:"figure",placeholder:"Enter your text here",value:n.figureb,onChange:function(e){a({figureb:e})}})),Object(c.createElement)("div",{className:"media column1"},Object(c.createElement)(s,{onSelect:function(e){a({imagec:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagec})}}),Object(c.createElement)(o,{className:"figurec",tagName:"figure",placeholder:"Enter your text here",value:n.figurec,onChange:function(e){a({figurec:e})}}))),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o,{className:"headingb",tagName:"h3",placeholder:"Enter your text here",value:n.headingb,onChange:function(e){a({headingb:e})}}),Object(c.createElement)("div",{class:"column3"},Object(c.createElement)(o,{className:"copy-bd",tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){a({bodyContent:e})}})))))]},save:function(e){var t=l("borncreative/the-process-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{className:"col-full"},Object(c.createElement)(o.Content,{class:"headinga",tagName:"h2",value:a.headinga}),Object(c.createElement)("hr",null)),Object(c.createElement)("div",{class:"row"},Object(c.createElement)("div",{className:"media column1"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imagea})),Object(c.createElement)("figure",{className:"figurea"},a.figurea)),Object(c.createElement)("div",{className:"media column2"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imageb})),Object(c.createElement)("figure",{className:"figureb"},a.figureb)),Object(c.createElement)("div",{className:"media column1"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imagec})),Object(c.createElement)("figure",{className:"figurec"},a.figurec))),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o.Content,{class:"headingb",tagName:"h3",value:a.headingb}),Object(c.createElement)("div",{class:"column3"},Object(c.createElement)(o.Content,{className:"copy-bd",tagName:"p",value:a.bodyContent})))))}}),Object(n.registerBlockType)("borncreative/the-solution-block",{title:"The Solution Block",icon:"smiley",category:"common",attributes:{headinga:{source:"html",selector:"h2"},headingb:{source:"html",selector:"h3"},bodyContent:{source:"html",selector:"p"},imagea:{type:"string",default:"http://placehold.it/500"},imageb:{type:"string",default:"http://placehold.it/500"},imagec:{type:"string",default:"http://placehold.it/500"},figurea:{source:"html",selector:".figurea"},figureb:{source:"html",selector:".figureb"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{className:"col-full ws-t ws-b"},Object(c.createElement)(o,{className:"headinga",tagName:"h2",placeholder:"Enter your text here",value:n.headinga,onChange:function(e){a({headinga:e})}})),Object(c.createElement)("div",{className:"media imagec"},Object(c.createElement)(s,{onSelect:function(e){a({imagec:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagec})}})),Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)("div",{class:"row"},Object(c.createElement)("div",{class:"column1"}),Object(c.createElement)("div",{className:"media column1"},Object(c.createElement)(s,{onSelect:function(e){a({imagea:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagea})}}),Object(c.createElement)(o,{className:"figurea",tagName:"figure",placeholder:"Enter your text here",value:n.figurea,onChange:function(e){a({figurea:e})}})),Object(c.createElement)("div",{className:"media column1"},Object(c.createElement)(s,{onSelect:function(e){a({imageb:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imageb})}}),Object(c.createElement)(o,{className:"figureb",tagName:"figure",placeholder:"Enter your text here",value:n.figureb,onChange:function(e){a({figureb:e})}}))),Object(c.createElement)("div",{class:"row ws-t"},Object(c.createElement)("div",{class:"column1"}),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)(o,{className:"headingb",tagName:"h3",placeholder:"Enter your text here",value:n.headingb,onChange:function(e){a({headingb:e})}}))),Object(c.createElement)("div",{class:"row ws-b"},Object(c.createElement)("div",{class:"column1"}),Object(c.createElement)("div",{class:"column2"},Object(c.createElement)(o,{className:"copy-bd",tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){a({bodyContent:e})}})))))]},save:function(e){var t=l("borncreative/the-solution-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{className:"col-full ws-t ws-b"},Object(c.createElement)(o.Content,{class:"headinga",tagName:"h2",value:a.headinga}),Object(c.createElement)("hr",null)),Object(c.createElement)("img",{class:"imagec",src:a.imagec}),Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)("div",{class:"row"},Object(c.createElement)("div",{class:"column1"}),Object(c.createElement)("div",{class:"media column1"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imagea})),Object(c.createElement)("figure",{className:"figurea"},a.figurea)),Object(c.createElement)("div",{class:"media column1"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imageb})),Object(c.createElement)("figure",{className:"figureb"},a.figureb))),Object(c.createElement)("div",{class:"row ws-t"},Object(c.createElement)("div",{class:"column1"}),Object(c.createElement)("div",{className:"copy"},Object(c.createElement)(o.Content,{class:"headingb",tagName:"h3",value:a.headingb}))),Object(c.createElement)("div",{class:"row ws-b"},Object(c.createElement)("div",{class:"column1"}),Object(c.createElement)("div",{class:"column2"},Object(c.createElement)(o.Content,{className:"copy-bd",tagName:"p",value:a.bodyContent})))))}}),Object(n.registerBlockType)("borncreative/the-5-image-gallery-block",{title:"5 image gallery",icon:"smiley",category:"common",attributes:{imagea:{type:"string",default:"http://placehold.it/500"},imageb:{type:"string",default:"http://placehold.it/500"},imagec:{type:"string",default:"http://placehold.it/500"},imaged:{type:"string",default:"http://placehold.it/500"},imagee:{type:"string",default:"http://placehold.it/500"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{class:"column1"},Object(c.createElement)("div",{className:"media pr"},Object(c.createElement)(s,{onSelect:function(e){a({imagea:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagea})}}))),Object(c.createElement)("div",{class:"column1"},Object(c.createElement)("div",{className:"media pb"},Object(c.createElement)(s,{onSelect:function(e){a({imageb:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imageb})}})),Object(c.createElement)("div",{className:"media pb"},Object(c.createElement)(s,{onSelect:function(e){a({imagec:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagec})}})),Object(c.createElement)("div",{class:"extra-row"},Object(c.createElement)("div",{className:"media pr"},Object(c.createElement)(s,{onSelect:function(e){a({imaged:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imaged})}})),Object(c.createElement)("div",{className:"media"},Object(c.createElement)(s,{onSelect:function(e){a({imagee:e.sizes.full.url})},render:function(e){var t=e.open;return Object(c.createElement)("img",{onClick:t,src:n.imagee})}})))))]},save:function(e){var t=l("borncreative/the-5-image-gallery-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{class:"column1"},Object(c.createElement)("div",{className:"media pr"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imagea})))),Object(c.createElement)("div",{class:"column1"},Object(c.createElement)("div",{className:"media pb"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imageb}))),Object(c.createElement)("div",{className:"media pb"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imagec}))),Object(c.createElement)("div",{class:"extra-row"},Object(c.createElement)("div",{className:"media pr"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imaged}))),Object(c.createElement)("div",{className:"media"},Object(c.createElement)("div",{class:"zoom"},Object(c.createElement)("img",{src:a.imagee}))))))}}),Object(n.registerBlockType)("borncreative/double-title-text-block",{title:"Double Title and Text Block",icon:"smiley",category:"common",attributes:{headinga:{source:"html",selector:".headinga"},headingb:{source:"html",selector:".headingb"},contenta:{source:"html",selector:".contenta"},contentb:{source:"html",selector:".contentb"}},edit:function(e){var t=e.className,a=e.setAttributes,n=e.attributes;return[Object(c.createElement)(i,null,Object(c.createElement)("div",{style:{padding:"1em 0"}},"Options")),Object(c.createElement)("div",{className:t},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o,{className:"headinga",tagName:"h2",placeholder:"Enter your heading",value:n.headinga,onChange:function(e){a({headinga:e})}}),Object(c.createElement)(o,{className:"contenta",tagName:"p",placeholder:"Enter your content",value:n.contenta,onChange:function(e){a({contenta:e})}}),Object(c.createElement)("hr",null),Object(c.createElement)(o,{className:"headingb",tagName:"h2",placeholder:"Enter your heading",value:n.headingb,onChange:function(e){a({headingb:e})}}),Object(c.createElement)(o,{className:"contentb",tagName:"p",placeholder:"Enter your content",value:n.contentb,onChange:function(e){a({contentb:e})}})))]},save:function(e){var t=l("borncreative/double-title-text-block"),a=e.attributes;return Object(c.createElement)("div",{className:t,"data-aos":"fade-up","data-aos-duration":"2000"},Object(c.createElement)("div",{class:"col-full"},Object(c.createElement)(o.Content,{class:"headinga",tagName:"h2",value:a.headinga}),Object(c.createElement)(o.Content,{class:"contenta",tagName:"p",value:a.contenta}),Object(c.createElement)("hr",null),Object(c.createElement)(o.Content,{class:"headingb",tagName:"h2",value:a.headingb}),Object(c.createElement)(o.Content,{class:"contentb",tagName:"p",value:a.contentb})))}})},function(e,t,a){},function(e,t,a){}]);