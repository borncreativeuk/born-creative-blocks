!function(){"use strict";var e=window.wp.element,t=window.wp.blocks,a=window.wp.blockEditor;const{getBlockDefaultClassName:l}=wp.blocks,{Fragment:c}=wp.element,{InspectorControls:n,PanelColorSettings:o,withColors:r,getColorClassName:s}=wp.blockEditor;(0,t.registerBlockType)("borncreative/header-block",{title:"Header Block",icon:"cover-image",category:"born-creative-blocks",attributes:{bodyContent:{source:"html",selector:".copy-bd"},heading:{source:"html",selector:"h2"},image:{type:"string",default:"http://placehold.it/500"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:r({textColor:"color"})((t=>{const{className:l,setAttributes:r}=t,{attributes:s}=t,{textColor:i,setTextColor:m}=t;let d,u={};return null!=i&&(null!=i.class?d=i.class:u.color=i.color),[(0,e.createElement)(c,null,(0,e.createElement)(n,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options"),(0,e.createElement)(o,{title:"Color settings",colorSettings:[{value:i.color,onChange:m,label:"Text color"}]})),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"media"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){r({image:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:s.image})}})),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"copy-hd "+d,style:u,tagName:"h2",placeholder:"Enter your heading",value:s.heading,onChange:function(e){r({heading:e})}}),(0,e.createElement)(a.RichText,{className:"copy-bd "+d,style:u,tagName:"h3",placeholder:"Enter your text here",value:s.bodyContent,onChange:function(e){r({bodyContent:e})}})))))]})),save:t=>{const c=l("borncreative/header-block"),{attributes:n}=t,{textColor:o,customTextColor:r}=t.attributes;let i,m={};return null!=o&&(i=s("color",o)),null!=r&&(m.color=r),(0,e.createElement)("div",{className:c},(0,e.createElement)("div",{className:"media"},(0,e.createElement)("img",{src:n.image})),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{className:"copy-hd "+i,style:m,tagName:"h2",value:n.heading}),(0,e.createElement)(a.RichText.Content,{className:"copy-bd "+i,style:m,tagName:"h3",value:n.bodyContent}))))}});const{getBlockDefaultClassName:i}=wp.blocks,{Fragment:m}=wp.element,{InspectorControls:d,PanelColorSettings:u,withColors:h,getColorClassName:g}=wp.blockEditor;(0,t.registerBlockType)("borncreative/header-block-video",{title:"Video Header Block",icon:"format-video",category:"born-creative-blocks",attributes:{bodyContent:{source:"html",selector:".copy-bd"},heading:{source:"html",selector:"h2"},image:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:h({textColor:"color"})((t=>{const{className:l,setAttributes:c}=t,{attributes:n}=t,{textColor:o,setTextColor:r}=t;let s,i={};return null!=o&&(null!=o.class?s=o.class:i.color=o.color),[(0,e.createElement)(m,null,(0,e.createElement)(d,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options"),(0,e.createElement)(u,{title:"Color settings",colorSettings:[{value:o.color,onChange:r,label:"Text color"}]})),",",(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"media"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){console.log(e),c({image:e.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("video",{onClick:a,autoplay:"autoplay",muted:!0},(0,e.createElement)("source",{src:n.image,type:"video/mp4"}))}})),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"copy-hd "+s,style:i,tagName:"h2",placeholder:"Enter your heading",value:n.heading,onChange:function(e){c({heading:e})}}),(0,e.createElement)(a.RichText,{className:"copy-bd "+s,style:i,tagName:"h3",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){c({bodyContent:e})}})))))]})),save:t=>{const l=i("borncreative/header-block"),{attributes:c}=t,{textColor:n,customTextColor:o}=t.attributes;let r,s={};return null!=n&&(r=g("color",n)),null!=o&&(s.color=o),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"media"},(0,e.createElement)("video",{loop:"true",autoplay:"autoplay",muted:!0},(0,e.createElement)("source",{src:c.image,type:"video/mp4"}))),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{className:"copy-hd "+r,style:s,tagName:"h2",value:c.heading}),(0,e.createElement)(a.RichText.Content,{className:"copy-bd "+r,style:s,tagName:"h3",value:c.bodyContent}))))}});const{getBlockDefaultClassName:E}=wp.blocks,{Fragment:p}=wp.element,{InspectorControls:v,PanelColorSettings:b,withColors:N,getColorClassName:C}=wp.blockEditor;(0,t.registerBlockType)("borncreative/alt-header-block",{title:"Alternative Header Block",icon:"cover-image",category:"born-creative-blocks",attributes:{headingh2:{source:"html",selector:".copy-h2"},headingh3:{source:"html",selector:".copy-h3"},bodyContent:{source:"html",selector:".copy-body"},listContent:{source:"html",selector:".copy-list"},linkContent:{source:"html",selector:".copy-link"},image:{type:"string",default:"https://via.placeholder.com/500"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:N({textColor:"color"})((t=>{const{className:l,setAttributes:c}=t,{attributes:n}=t,{textColor:o,setTextColor:r}=t;let s,i={};return null!=o&&(null!=o.class?s=o.class:i.color=o.color),[(0,e.createElement)(p,null,(0,e.createElement)(v,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options"),(0,e.createElement)(b,{title:"Color settings",colorSettings:[{value:o.color,onChange:r,label:"Text color"}]})),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"media"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({image:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.image})}})),(0,e.createElement)("div",{className:"column1"},(0,e.createElement)("div",{class:"copy"},(0,e.createElement)(a.RichText,{className:"copy-h2 "+s,style:i,tagName:"h2",placeholder:"Enter your heading",value:n.headingh2,onChange:function(e){c({headingh2:e})}}),(0,e.createElement)(a.RichText,{className:"copy-h3 "+s,style:i,tagName:"h3",placeholder:"Enter your heading",value:n.headingh3,onChange:function(e){c({headingh3:e})}}),(0,e.createElement)(a.RichText,{className:"copy-body "+s,style:i,tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){c({bodyContent:e})}}),(0,e.createElement)(a.RichText,{className:"copy-list "+s,style:i,tagName:"p",placeholder:"Enter your text here",value:n.listContent,onChange:function(e){c({listContent:e})}}),(0,e.createElement)(a.RichText,{className:"copy-link "+s,style:i,tagName:"p",placeholder:"Enter your text here",value:n.linkContent,onChange:function(e){c({linkContent:e})}})))))]})),save:t=>{const l=E("borncreative/alt-header-block"),{attributes:c}=t,{textColor:n,customTextColor:o}=t.attributes;let r,s={};return null!=n&&(r=C("color",n)),null!=o&&(s.color=o),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"media"},(0,e.createElement)("img",{src:c.image})),(0,e.createElement)("div",{className:"column1"},(0,e.createElement)("div",{class:"copy"},(0,e.createElement)(a.RichText.Content,{className:"copy-h2 "+r,style:s,tagName:"h2",value:c.headingh2}),(0,e.createElement)(a.RichText.Content,{className:"copy-h3 "+r,style:s,tagName:"h3",value:c.headingh3}),(0,e.createElement)(a.RichText.Content,{className:"copy-body "+r,style:s,tagName:"p",value:c.bodyContent}),(0,e.createElement)(a.RichText.Content,{className:"copy-list "+r,style:s,tagName:"p",value:c.listContent}),(0,e.createElement)(a.RichText.Content,{className:"copy-link "+r,style:s,tagName:"p",value:c.linkContent}))))}});const{getBlockDefaultClassName:y}=wp.blocks,{Fragment:x}=wp.element,{InspectorControls:f,PanelColorSettings:T,withColors:k,getColorClassName:R}=wp.blockEditor;(0,t.registerBlockType)("borncreative/the-process-block",{title:"The Process Block",icon:"layout",category:"born-creative-blocks",attributes:{headinga:{source:"html",selector:"h2"},headingb:{source:"html",selector:"h3"},bodyContent:{source:"html",selector:"p"},imagea:{type:"string",default:"http://placehold.it/500"},imageb:{type:"string",default:"http://placehold.it/500"},imagec:{type:"string",default:"http://placehold.it/500"},figurea:{source:"html",selector:".figurea"},figureb:{source:"html",selector:".figureb"},figurec:{source:"html",selector:".figurec"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:k({textColor:"color"})((t=>{const{className:l,setAttributes:c}=t,{attributes:n}=t,{textColor:o,setTextColor:r}=t;let s,i={};return null!=o&&(null!=o.class?s=o.class:i.color=o.color),[(0,e.createElement)(x,null,(0,e.createElement)(f,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options"),(0,e.createElement)(T,{title:"Color settings",colorSettings:[{value:o.color,onChange:r,label:"Text color"}]})),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"col-full"},(0,e.createElement)(a.RichText,{className:"headinga "+s,style:i,tagName:"h2",placeholder:"Enter your text here",value:n.headinga,onChange:function(e){c({headinga:e})}})),(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{className:"media column1"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagea:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagea})}}),(0,e.createElement)(a.RichText,{className:"figurea "+s,style:i,tagName:"figure",placeholder:"Enter your text here",value:n.figurea,onChange:function(e){c({figurea:e})}})),(0,e.createElement)("div",{className:"media column2"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imageb:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imageb})}}),(0,e.createElement)(a.RichText,{className:"figureb "+s,style:i,tagName:"figure",placeholder:"Enter your text here",value:n.figureb,onChange:function(e){c({figureb:e})}})),(0,e.createElement)("div",{className:"media column1"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagec:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagec})}}),(0,e.createElement)(a.RichText,{className:"figurec "+s,style:i,tagName:"figure",placeholder:"Enter your text here",value:n.figurec,onChange:function(e){c({figurec:e})}}))),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"headingb "+s,style:i,tagName:"h3",placeholder:"Enter your text here",value:n.headingb,onChange:function(e){c({headingb:e})}}),(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText,{className:"copy-bd "+s,style:i,tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){c({bodyContent:e})}}))))))]})),save:t=>{const l=y("borncreative/the-process-block"),{attributes:c}=t,{textColor:n,customTextColor:o}=t.attributes;let r,s={};return null!=n&&(r=R("color",n)),null!=o&&(s.color=o),(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{className:"col-full"},(0,e.createElement)(a.RichText.Content,{className:"headinga "+r,style:s,tagName:"h2",value:c.headinga}),(0,e.createElement)("hr",null)),(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{className:"media column1"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:c.imagea})),(0,e.createElement)("figure",{className:"figurea "+r,style:s},c.figurea)),(0,e.createElement)("div",{className:"media column2"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:c.imageb})),(0,e.createElement)("figure",{className:"figureb "+r,style:s},c.figureb)),(0,e.createElement)("div",{className:"media column1"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:c.imagec})),(0,e.createElement)("figure",{className:"figurec "+r,style:s},c.figurec))),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{className:"headingb "+r,style:s,tagName:"h3",value:c.headingb}),(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText.Content,{className:"copy-bd "+r,style:s,tagName:"p",value:c.bodyContent})))))}});const{getBlockDefaultClassName:w}=wp.blocks,{Fragment:B}=wp.element,{InspectorControls:S,PanelColorSettings:z,withColors:O,getColorClassName:A}=wp.blockEditor;(0,t.registerBlockType)("borncreative/the-solution-block",{title:"The Solution Block",icon:"layout",category:"born-creative-blocks",attributes:{headinga:{source:"html",selector:"h2"},headingb:{source:"html",selector:"h3"},bodyContent:{source:"html",selector:"p"},imagea:{type:"string",default:"http://placehold.it/500"},imageb:{type:"string",default:"http://placehold.it/500"},imagec:{type:"string",default:"http://placehold.it/500"},figurea:{source:"html",selector:".figurea"},figureb:{source:"html",selector:".figureb"},textColor:{type:"string"},customTextColor:{type:"string"}},edit:O({textColor:"color"})((t=>{const{className:l,setAttributes:c}=t,{attributes:n}=t,{textColor:o,setTextColor:r}=t;let s,i={};return null!=o&&(null!=o.class?s=o.class:i.color=o.color),[(0,e.createElement)(B,null,(0,e.createElement)(S,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options"),(0,e.createElement)(z,{title:"Color settings",colorSettings:[{value:o.color,onChange:r,label:"Text color"}]})),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"col-full ws-t ws-b"},(0,e.createElement)(a.RichText,{className:"headinga "+s,style:i,tagName:"h2",placeholder:"Enter your text here",value:n.headinga,onChange:function(e){c({headinga:e})}})),(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)("div",{className:"media imagec"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagec:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagec})}})),(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"column1"}),(0,e.createElement)("div",{className:"media column1"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagea:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagea})}}),(0,e.createElement)(a.RichText,{className:"figurea "+s,style:i,tagName:"figure",placeholder:"Enter your text here",value:n.figurea,onChange:function(e){c({figurea:e})}})),(0,e.createElement)("div",{className:"media column1"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imageb:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imageb})}}),(0,e.createElement)(a.RichText,{className:"figureb "+s,style:i,tagName:"figure",placeholder:"Enter your text here",value:n.figureb,onChange:function(e){c({figureb:e})}}))),(0,e.createElement)("div",{class:"row ws-t"},(0,e.createElement)("div",{class:"column1"}),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)(a.RichText,{className:"headingb "+s,style:i,tagName:"h3",placeholder:"Enter your text here",value:n.headingb,onChange:function(e){c({headingb:e})}}))),(0,e.createElement)("div",{class:"row ws-b"},(0,e.createElement)("div",{class:"column1"}),(0,e.createElement)("div",{class:"column2"},(0,e.createElement)(a.RichText,{className:"copy-bd "+s,style:i,tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){c({bodyContent:e})}}))))))]})),save:t=>{const l=w("borncreative/the-solution-block"),{attributes:c}=t,{textColor:n,customTextColor:o}=t.attributes;let r,s={};return null!=n&&(r=A("color",n)),null!=o&&(s.color=o),(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{className:"col-full ws-t ws-b"},(0,e.createElement)(a.RichText.Content,{className:"headinga "+r,style:s,tagName:"h2",value:c.headinga}),(0,e.createElement)("hr",null)),(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)("img",{class:"imagec",src:c.imagec}),(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"column1"}),(0,e.createElement)("div",{class:"media column1"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:c.imagea})),(0,e.createElement)("figure",{className:"figureb "+r,style:s},c.figurea)),(0,e.createElement)("div",{class:"media column1"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:c.imageb})),(0,e.createElement)("figure",{className:"figureb "+r,style:s},c.figureb))),(0,e.createElement)("div",{class:"row ws-t"},(0,e.createElement)("div",{class:"column1"}),(0,e.createElement)("div",{className:"copy"},(0,e.createElement)(a.RichText.Content,{className:"headingb "+r,style:s,tagName:"h3",value:c.headingb}))),(0,e.createElement)("div",{class:"row ws-b"},(0,e.createElement)("div",{class:"column1"}),(0,e.createElement)("div",{class:"column2"},(0,e.createElement)(a.RichText.Content,{className:"copy-bd "+r,style:s,tagName:"p",value:c.bodyContent})))))}});const{getBlockDefaultClassName:I}=wp.blocks;(0,t.registerBlockType)("borncreative/client-text-block",{title:"Client Intro Text Block",icon:"id",category:"born-creative-blocks",attributes:{bodyContent:{source:"html",selector:".copy-bd"},headinga:{source:"html",selector:".headinga"},headingb:{source:"html",selector:".headingb"},headingc:{source:"html",selector:".headingc"},linea:{source:"html",selector:".linea"},lineb:{source:"html",selector:".lineb"},linec:{source:"html",selector:".linec"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"copy col-full"},(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"column1"},(0,e.createElement)(a.RichText,{className:"copy-bd",tagName:"p",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){c({bodyContent:e})}})),(0,e.createElement)("div",{class:"column2"},(0,e.createElement)(a.RichText,{className:"headinga",tagName:"h4",placeholder:"Client",value:n.headinga,onChange:function(e){c({headinga:e})}}),(0,e.createElement)(a.RichText,{className:"linea",tagName:"p",placeholder:"Client Name",value:n.linea,onChange:function(e){c({linea:e})}}),(0,e.createElement)(a.RichText,{className:"headingb",tagName:"h4",placeholder:"Project Type",value:n.headingb,onChange:function(e){c({headingb:e})}}),(0,e.createElement)(a.RichText,{className:"lineb",tagName:"p",placeholder:"Client Name",value:n.lineb,onChange:function(e){c({lineb:e})}}),(0,e.createElement)(a.RichText,{className:"headingc",tagName:"h4",placeholder:"Services",value:n.headingc,onChange:function(e){c({headingc:e})}}),(0,e.createElement)(a.RichText,{className:"linec",tagName:"p",placeholder:"Client Name",value:n.linec,onChange:function(e){c({linec:e})}})))))]},save(t){const l=I("borncreative/intro-text-block"),{attributes:c}=t;return(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{className:"copy col-full"},(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"column1"},(0,e.createElement)(a.RichText.Content,{className:"copy-bd",tagName:"p",value:c.bodyContent})),(0,e.createElement)("div",{class:"column2"},(0,e.createElement)(a.RichText.Content,{class:"headinga",tagName:"h4",value:c.headinga}),(0,e.createElement)(a.RichText.Content,{class:"linea",tagName:"p",value:c.linea}),(0,e.createElement)(a.RichText.Content,{class:"headingb",tagName:"h4",value:c.headingb}),(0,e.createElement)(a.RichText.Content,{class:"lineb",tagName:"p",value:c.lineb}),(0,e.createElement)(a.RichText.Content,{class:"headingc",tagName:"h4",value:c.headingc}),(0,e.createElement)(a.RichText.Content,{class:"linec",tagName:"p",value:c.linec})))))}}),(0,t.registerBlockType)("borncreative/title-only-block",{title:"Title Only Block",icon:"heading",category:"born-creative-blocks",attributes:{heading:{source:"html",selector:"h2"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"copy-hd",tagName:"h2",placeholder:"Enter your heading",value:n.heading,onChange:function(e){c({heading:e})}})))]},save(t){const l=I("borncreative/title-only-block"),{attributes:c}=t;return(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{class:"copy-hd",tagName:"h2",value:c.heading}),(0,e.createElement)("hr",null)))}}),(0,t.registerBlockType)("borncreative/text-only-block",{title:"Text Only Block",icon:"heading",category:"born-creative-blocks",attributes:{heading:{source:"html",selector:".copy-bd"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"copy-bd",tagName:"div",placeholder:"Enter your heading",value:n.heading,onChange:function(e){c({heading:e})}})))]},save(t){const l=I("borncreative/text-only-block"),{attributes:c}=t;return(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{class:"copy-bd",tagName:"div",value:c.heading})))}}),(0,t.registerBlockType)("borncreative/the-5-image-gallery-block",{title:"5 image gallery",icon:"layout",category:"born-creative-blocks",attributes:{imagea:{type:"string",default:"http://placehold.it/500"},imageb:{type:"string",default:"http://placehold.it/500"},imagec:{type:"string",default:"http://placehold.it/500"},imaged:{type:"string",default:"http://placehold.it/500"},imagee:{type:"string",default:"http://placehold.it/500"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{class:"column1"},(0,e.createElement)("div",{className:"media pr"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagea:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagea})}}))),(0,e.createElement)("div",{class:"column1"},(0,e.createElement)("div",{className:"media pb"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imageb:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imageb})}})),(0,e.createElement)("div",{className:"media pb"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagec:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagec})}})),(0,e.createElement)("div",{class:"extra-row"},(0,e.createElement)("div",{className:"media pr"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imaged:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imaged})}})),(0,e.createElement)("div",{className:"media"},(0,e.createElement)(a.MediaUpload,{onSelect:function(e){c({imagee:e.sizes.full.url})},render:t=>{let{open:a}=t;return(0,e.createElement)("img",{onClick:a,src:n.imagee})}})))))]},save(t){const a=I("borncreative/the-5-image-gallery-block"),{attributes:l}=t;return(0,e.createElement)("div",{className:a,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{class:"column1"},(0,e.createElement)("div",{className:"media pr"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:l.imagea})))),(0,e.createElement)("div",{class:"column1"},(0,e.createElement)("div",{className:"media pb"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:l.imageb}))),(0,e.createElement)("div",{className:"media pb"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:l.imagec}))),(0,e.createElement)("div",{class:"extra-row"},(0,e.createElement)("div",{className:"media pr"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:l.imaged}))),(0,e.createElement)("div",{className:"media"},(0,e.createElement)("div",{class:"zoom"},(0,e.createElement)("img",{src:l.imagee}))))))}}),(0,t.registerBlockType)("borncreative/double-title-text-block",{title:"Double Title and Text Block",icon:"layout",category:"born-creative-blocks",attributes:{headinga:{source:"html",selector:".headinga"},headingb:{source:"html",selector:".headingb"},contenta:{source:"html",selector:".contenta"},contentb:{source:"html",selector:".contentb"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"headinga",tagName:"h2",placeholder:"Enter your heading",value:n.headinga,onChange:function(e){c({headinga:e})}}),(0,e.createElement)(a.RichText,{className:"contenta",tagName:"p",placeholder:"Enter your content",value:n.contenta,onChange:function(e){c({contenta:e})}}),(0,e.createElement)("hr",null),(0,e.createElement)(a.RichText,{className:"headingb",tagName:"h2",placeholder:"Enter your heading",value:n.headingb,onChange:function(e){c({headingb:e})}}),(0,e.createElement)(a.RichText,{className:"contentb",tagName:"p",placeholder:"Enter your content",value:n.contentb,onChange:function(e){c({contentb:e})}})))]},save(t){const l=I("borncreative/double-title-text-block"),{attributes:c}=t;return(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{class:"headinga",tagName:"h2",value:c.headinga}),(0,e.createElement)(a.RichText.Content,{class:"contenta",tagName:"p",value:c.contenta}),(0,e.createElement)("hr",null),(0,e.createElement)(a.RichText.Content,{class:"headingb",tagName:"h2",value:c.headingb}),(0,e.createElement)(a.RichText.Content,{class:"contentb",tagName:"p",value:c.contentb})))}}),(0,t.registerBlockType)("borncreative/outro-text-block",{title:"Outro Text Block",icon:"text",category:"born-creative-blocks",attributes:{bodyContent:{source:"html",selector:".copy-h3"},linkContent:{source:"html",selector:".copy-link"},heading:{source:"html",selector:".copy-h2"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText,{className:"copy-h2",tagName:"h2",placeholder:"Enter your heading",value:n.heading,onChange:function(e){c({heading:e})}}),(0,e.createElement)(a.RichText,{className:"copy-h3",tagName:"h3",placeholder:"Enter your text here",value:n.bodyContent,onChange:function(e){c({bodyContent:e})}}),(0,e.createElement)(a.RichText,{className:"copy-link",tagName:"p",placeholder:"Enter your text here",value:n.linkContent,onChange:function(e){c({linkContent:e})}}))))]},save(t){const l=I("borncreative/outro-text-block"),{attributes:c}=t;return(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"copy"},(0,e.createElement)("div",{class:"col-full"},(0,e.createElement)(a.RichText.Content,{class:"copy-h2",tagName:"h2",value:c.heading}),(0,e.createElement)(a.RichText.Content,{className:"copy-h3",tagName:"h3",value:c.bodyContent}),(0,e.createElement)(a.RichText.Content,{className:"copy-link",tagName:"p",value:c.linkContent}))))}}),(0,t.registerBlockType)("borncreative/alt-intro-text-block",{title:"Alternative Intro Text Block",icon:"text",category:"born-creative-blocks",attributes:{headinga:{source:"html",selector:".headinga"},headingb:{source:"html",selector:".headingb"},headingc:{source:"html",selector:".headingc"},headingd:{source:"html",selector:".headingd"},headinge:{source:"html",selector:".headinge"},linea:{source:"html",selector:".linea"},lineb:{source:"html",selector:".lineb"},linec:{source:"html",selector:".linec"},lined:{source:"html",selector:".lined"},linee:{source:"html",selector:".linee"},icona:{source:"html",selector:".icona"},iconb:{source:"html",selector:".iconb"},iconc:{source:"html",selector:".iconc"},icond:{source:"html",selector:".icond"},icone:{source:"html",selector:".icone"}},edit(t){const{className:l,setAttributes:c}=t,{attributes:n}=t;return[(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)("div",{style:{padding:"1em 0"}},"Options")),(0,e.createElement)("div",{className:l},(0,e.createElement)("div",{className:"copy col-full"},(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"column1"},(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText,{className:"icona blue-circle-icon",tagName:"span",placeholder:"1",value:n.icona,onChange:function(e){c({icona:e})}})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText,{className:"headinga",tagName:"h4",placeholder:"Heading",value:n.headinga,onChange:function(e){c({headinga:e})}}),(0,e.createElement)(a.RichText,{className:"linea",tagName:"p",placeholder:"Text Content",value:n.linea,onChange:function(e){c({linea:e})}}))),(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText,{className:"iconb blue-circle-icon",tagName:"span",placeholder:"2",value:n.iconb,onChange:function(e){c({iconb:e})}})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText,{className:"headingb",tagName:"h4",placeholder:"Heading",value:n.headingb,onChange:function(e){c({headingb:e})}}),(0,e.createElement)(a.RichText,{className:"lineb",tagName:"p",placeholder:"Text Content",value:n.lineb,onChange:function(e){c({lineb:e})}}))),(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText,{className:"iconc blue-circle-icon",tagName:"span",placeholder:"3",value:n.iconc,onChange:function(e){c({iconc:e})}})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText,{className:"headingc",tagName:"h4",placeholder:"Heading",value:n.headingc,onChange:function(e){c({headingc:e})}}),(0,e.createElement)(a.RichText,{className:"linec blue-circle-icon",tagName:"p",placeholder:"Text Content",value:n.linec,onChange:function(e){c({linec:e})}}))),(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText,{className:"icond blue-circle-icon",tagName:"span",placeholder:"4",value:n.icond,onChange:function(e){c({icond:e})}})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText,{className:"headingd",tagName:"h4",placeholder:"Heading",value:n.headingd,onChange:function(e){c({headingd:e})}}),(0,e.createElement)(a.RichText,{className:"lined",tagName:"p",placeholder:"Text Content",value:n.lined,onChange:function(e){c({lined:e})}})))),(0,e.createElement)("div",{class:"column2"},(0,e.createElement)(a.RichText,{className:"icone",tagName:"h5",placeholder:"text content",value:n.icone,onChange:function(e){c({icone:e})}}),(0,e.createElement)(a.RichText,{className:"headinge",tagName:"h4",placeholder:"Heading",value:n.headinge,onChange:function(e){c({headinge:e})}}),(0,e.createElement)(a.RichText,{className:"linee",tagName:"p",placeholder:"Text Content",value:n.linee,onChange:function(e){c({linee:e})}})))))]},save(t){const l=I("borncreative/alt-intro-text-block"),{attributes:c}=t;return(0,e.createElement)("div",{className:l,"data-aos":"fade-up","data-aos-duration":"2000"},(0,e.createElement)("div",{className:"copy col-full"},(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"column1"},(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText.Content,{class:"icona blue-circle-icon",tagName:"span",value:c.icona})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText.Content,{class:"headinga",tagName:"h4",value:c.headinga}),(0,e.createElement)(a.RichText.Content,{class:"linea",tagName:"p",value:c.linea}))),(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText.Content,{class:"iconb blue-circle-icon",tagName:"span",value:c.iconb})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText.Content,{class:"headingb",tagName:"h4",value:c.headingb}),(0,e.createElement)(a.RichText.Content,{class:"lineb",tagName:"p",value:c.lineb}))),(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText.Content,{class:"iconc blue-circle-icon",tagName:"span",value:c.iconc})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText.Content,{class:"headingc",tagName:"h4",value:c.headingc}),(0,e.createElement)(a.RichText.Content,{class:"linec",tagName:"p",value:c.linec}))),(0,e.createElement)("div",{class:"icon-group-holder"},(0,e.createElement)("div",{class:"column3"},(0,e.createElement)(a.RichText.Content,{class:"icond blue-circle-icon",tagName:"span",value:c.icond})),(0,e.createElement)("div",{class:"column4"},(0,e.createElement)(a.RichText.Content,{class:"headingd",tagName:"h4",value:c.headingd}),(0,e.createElement)(a.RichText.Content,{class:"lined",tagName:"p",value:c.lined})))),(0,e.createElement)("div",{class:"column2"},(0,e.createElement)(a.RichText.Content,{class:"icone",tagName:"h5",value:c.icone}),(0,e.createElement)(a.RichText.Content,{class:"headinge",tagName:"h4",value:c.headinge}),(0,e.createElement)(a.RichText.Content,{class:"linee",tagName:"p",value:c.linee})))))}})}();