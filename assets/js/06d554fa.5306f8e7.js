"use strict";(self.webpackChunkcasual_simulation=self.webpackChunkcasual_simulation||[]).push([[513],{4624:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return m},Alert:function(){return d},NormalCode:function(){return u},ActionLink:function(){return c},DataTagLink:function(){return g},ListenTagLink:function(){return h},TagLink:function(){return T},default:function(){return y}});var l=a(3117),n=a(102),o=a(7294),r=a(3905),i=a(4996),p={id:"variables",title:"Listen Tag Variables",sidebar_label:"Helper Variables",description:"Learn about variables in CasualOS"},s=void 0,k={unversionedId:"variables",id:"variables",isDocsHomePage:!1,title:"Listen Tag Variables",description:"Learn about variables in CasualOS",source:"@site/docs/variables.mdx",sourceDirName:".",slug:"/variables",permalink:"/docs/variables",editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/variables.mdx",version:"current",frontMatter:{id:"variables",title:"Listen Tag Variables",sidebar_label:"Helper Variables",description:"Learn about variables in CasualOS"},sidebar:"docs",previous:{title:"Listen Tags",permalink:"/docs/listen-tags"},next:{title:"Actions",permalink:"/docs/actions"}},m=[{value:"<code>thisBot</code>",id:"thisbot",children:[]},{value:"<code>that</code>",id:"that",children:[]},{value:"<code>tagName</code>",id:"tagname",children:[]},{value:"<code>tags</code>",id:"tags",children:[]},{value:"<code>raw</code>",id:"raw",children:[]},{value:"<code>creatorBot</code>",id:"creatorbot",children:[]},{value:"<code>configBot</code>",id:"configbot",children:[]},{value:"<code>gridPortalBot</code>",id:"gridportalbot",children:[]},{value:"<code>sheetPortalBot</code>",id:"sheetportalbot",children:[]},{value:"<code>miniGridPortalBot</code>",id:"minigridportalbot",children:[]},{value:"<code>mapPortalBot</code>",id:"mapportalbot",children:[]},{value:"<code>menuPortalBot</code>",id:"menuportalbot",children:[]},{value:"<code>leftWristPortalBot</code>",id:"leftwristportalbot",children:[]},{value:"<code>rightWristPortalBot</code>",id:"rightwristportalbot",children:[]},{value:"<code>meetPortalBot</code>",id:"meetportalbot",children:[]}],d=function(t){var e=t.type,a=t.children;return(0,r.kt)("div",{className:"alert alert--"+e,role:"alert"},a)},u=function(t){var e=t.children;return o.createElement.apply(o,["code",{}].concat(e))},c=function(t){var e=t.action,a=t.children;return(0,r.kt)("a",{href:(0,i.Z)("docs/actions")+"#"+e.replace(/[\.\(\)\,\?]/g,"").replace(/\s/g,"-").toLowerCase()},a||(0,r.kt)(u,{mdxType:"NormalCode"},e))},g=function(t){var e=t.tag;return(0,r.kt)("a",{href:(0,i.Z)("docs/tags")+"#"+e.replace(/\./g,"").toLowerCase()},(0,r.kt)(u,{mdxType:"NormalCode"},"#",e))},h=function(t){var e=t.tag;return(0,r.kt)("a",{href:(0,i.Z)("docs/listen-tags")+"#"+e.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase()},(0,r.kt)(u,{mdxType:"NormalCode"},e))},T=function(t){var e=t.tag;return e.startsWith("@")?(0,r.kt)(h,{tag:e,mdxType:"ListenTagLink"}):(0,r.kt)(g,{tag:e,mdxType:"DataTagLink"})},N={toc:m,Alert:d,NormalCode:u,ActionLink:c,DataTagLink:g,ListenTagLink:h,TagLink:T};function y(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CasualOS defines some variables for each listen tag that you create.\nUnlike ",(0,r.kt)("a",{parentName:"p",href:"/docs/actions"},"actions"),", variables exist to make it easy to access common data."),(0,r.kt)("h3",{id:"thisbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"thisBot")),(0,r.kt)("p",null,"The bot that the listen tag is defined in.\nThis makes it easy to edit and read tag data in the bot that the listen tag was created in."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Also known as"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bot"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)(d,{type:"warning",mdxType:"Alert"},"Be careful when using the ",(0,r.kt)(u,{mdxType:"NormalCode"},"this")," variable/keyword. Due to the nature of JavaScript, it has a lot of extra behavior which may catch newcomers by surprise. If reading ",(0,r.kt)("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this article")," looks daunting, then choose to use either ",(0,r.kt)(u,{mdxType:"NormalCode"},"bot")," or ",(0,r.kt)(u,{mdxType:"NormalCode"},"thisBot"),"."),(0,r.kt)("h4",{id:"examples"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Set the current bot\'s color to "green".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'thisBot.tags.color = "green";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Whisper to the "myShout" tag on this bot.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'whisper(thisBot, "myShout");\n')),(0,r.kt)("h3",{id:"that"},(0,r.kt)("inlineCode",{parentName:"h3"},"that")),(0,r.kt)("p",null,'The data which was included in a shout or whisper. It is also known as an "argument".\nIt can be any ',(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/types"},"kind of JavaScript data"),".\nThis includes strings, numbers, booleans, objects (Bots, arrays, etc.) and more."),(0,r.kt)("p",null,"Most listen tags specify what kind of data ",(0,r.kt)("inlineCode",{parentName:"p"},"that")," is.\nUsually it is an object that contains properties which describe the action in further detail."),(0,r.kt)("h4",{id:"examples-1"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)(T,{tag:"@onAnyBotClicked",mdxType:"TagLink"}),' listen tag specifies the bot which was clicked.\nYou could set the clicked bot\'s color to "green" using a tag mask.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'that.bot.masks.color = "green";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)(T,{tag:"@onBarcodeScanned",mdxType:"TagLink"})," listen tag only specifies the barcode string which was scanned.\nYou could toast it like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"os.toast(that);\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can include your own ",(0,r.kt)("inlineCode",{parentName:"li"},"that")," variable when you shout or whisper to other bots.")),(0,r.kt)("p",null,"First you have to have a script which sends the shout and argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// In a normal listener like @onClick\nconst myThatObject = {\n    message: "This is a custom message which I am including in the shout"\n};\nshout("myShout", myThatObject);\n')),(0,r.kt)("p",null,"Second you have to have a listener for your shout."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Put this in @myShout\nos.toast(that.message);\n")),(0,r.kt)("h3",{id:"tagname"},(0,r.kt)("inlineCode",{parentName:"h3"},"tagName")),(0,r.kt)("p",null,"The name of the tag that this listener is defined in.\nThis can be useful when you want to copy a listener between different tags\nbut still want to be able to tell which is which."),(0,r.kt)("h4",{id:"examples-2"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Toast the current tag name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"os.toast('Current tag ' + tagName);\n")),(0,r.kt)("h3",{id:"tags"},(0,r.kt)("inlineCode",{parentName:"h3"},"tags")),(0,r.kt)("p",null,"The tags object of ",(0,r.kt)("a",{parentName:"p",href:"#thisBot"},(0,r.kt)("inlineCode",{parentName:"a"},"thisBot")),".\nEssentially a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"thisBot.tags"),"."),(0,r.kt)("h4",{id:"examples-3"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Set the current bot\'s color to "green".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'tags.color = "green";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Delete the ",(0,r.kt)("inlineCode",{parentName:"li"},"myNumber")," tag.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"delete tags.myNumber;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Get a tag by a variable name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"tags.myTag = '123';\nlet tagToGet = 'myTag';\nlet myTagValue = tags[tagToGet];\n\n// toasts \"Type is number\"\nos.toast(\"Type is \" + typeof myTagValue);\n")),(0,r.kt)("h3",{id:"raw"},(0,r.kt)("inlineCode",{parentName:"h3"},"raw")),(0,r.kt)("p",null,'The "raw tags" object of ',(0,r.kt)("a",{parentName:"p",href:"#thisBot"},(0,r.kt)("inlineCode",{parentName:"a"},"thisBot")),".\nEssentially a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"thisBot.raw"),"."),(0,r.kt)("p",null,"Whereas the tags variable will convert strings to numerical or boolean values,\nthe raw variable provides the exact value that was stored.\nThis can be useful for copying because you can ensure that everything will be what it was originally."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Set the current bot\'s color to "green".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'raw.color = "green";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Delete the ",(0,r.kt)("inlineCode",{parentName:"li"},"myNumber")," tag.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"delete raw.myNumber;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Get a tag by a variable name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"tags.myTag = '123';\nlet tagToGet = 'myTag';\nlet myTagValue = raw[tagToGet];\n\n// toasts \"Type is string\"\nos.toast(\"Type is \" + typeof myTagValue);\n")),(0,r.kt)("h3",{id:"creatorbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"creatorBot")),(0,r.kt)("p",null,"The bot that is set as the ",(0,r.kt)(T,{tag:"creator",mdxType:"TagLink"})," of ",(0,r.kt)("a",{parentName:"p",href:"#thisBot"},(0,r.kt)("inlineCode",{parentName:"a"},"thisBot")),".\nEssentially a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"getBot('creator', tags.creator)"),"."),(0,r.kt)("p",null,"If there is no creator then ",(0,r.kt)("inlineCode",{parentName:"p"},"creatorBot")," will be null."),(0,r.kt)("h4",{id:"examples-4"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if ",(0,r.kt)("inlineCode",{parentName:"li"},"thisBot")," has a creator.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const hasCreator = !!creatorBot;\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Whisper to the creator bot.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"whisper(creatorBot, 'myWhisper');\n")),(0,r.kt)("h3",{id:"configbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"configBot")),(0,r.kt)("p",null,'The bot that configures the current browsing session.\nThis used to be called the "player bot" but was renamed to ',(0,r.kt)("inlineCode",{parentName:"p"},"configBot")," to better indicate what it is used for."),(0,r.kt)("p",null,"You can find the list of tags that CasualOS uses for the configBot ",(0,r.kt)("a",{parentName:"p",href:"/docs/tags#config-bot-tags"},"here"),"."),(0,r.kt)("h4",{id:"examples-5"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"sheetPortal"),' to "home".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'configBot.tags.sheetPortal = "home";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"gridPortal"),' to "myDimension".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'configBot.tags.gridPortal = "myDimension";\n')),(0,r.kt)("h3",{id:"gridportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"gridPortalBot")),(0,r.kt)("p",null,"The bot that is used to configure the ",(0,r.kt)(T,{tag:"gridPortal",mdxType:"TagLink"},"grid portal"),".\nBy default this is a ",(0,r.kt)("inlineCode",{parentName:"p"},"tempLocal")," bot that is generated automatically."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalColor",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalLocked",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannable",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMinX",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMaxX",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMinY",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMaxY",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalRotatable",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalCameraRotationX",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalCameraRotationY",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalZoomable",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalGridScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalSurfaceScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalShowFocusPoint",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalDisableCanvasTransparency",mdxType:"TagLink"}))),(0,r.kt)("h4",{id:"examples-6"},"Examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Set the grid portal color to "blue".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'gridPortalBot.tags.portalColor = "blue";\n')),(0,r.kt)("h3",{id:"sheetportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"sheetPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"sheetPortal",mdxType:"TagLink"},"sheet portal"),"."),(0,r.kt)("h3",{id:"minigridportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"miniGridPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"miniGridPortal",mdxType:"TagLink"},"miniGridPortal"),"."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalColor",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalLocked",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannable",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMinX",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMaxX",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMinY",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalPannableMaxY",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalRotatable",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalCameraRotationX",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalCameraRotationY",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalZoomable",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalGridScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalSurfaceScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"miniPortalHeight",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"miniPortalResizable",mdxType:"TagLink"}))),(0,r.kt)("h3",{id:"mapportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"mapPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"mapPortal",mdxType:"TagLink"},"map portal"),"."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"mapPortalBasemap",mdxType:"TagLink"}))),(0,r.kt)("h3",{id:"menuportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"menuPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"menuPortal",mdxType:"TagLink"},"menu portal"),"."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"menuPortalStyle",mdxType:"TagLink"}))),(0,r.kt)("h3",{id:"leftwristportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"leftWristPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"leftWristPortal",mdxType:"TagLink"},"left wrist portal"),"."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalGridScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalSurfaceScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"wristPortalHeight",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"wristPortalWidth",mdxType:"TagLink"}))),(0,r.kt)("h3",{id:"rightwristportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"rightWristPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"rightWristPortal",mdxType:"TagLink"},"right wrist portal"),"."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalGridScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"portalSurfaceScale",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"wristPortalHeight",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"wristPortalWidth",mdxType:"TagLink"}))),(0,r.kt)("h3",{id:"meetportalbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"meetPortalBot")),(0,r.kt)("p",null,"The bot that should be used to configure the ",(0,r.kt)(T,{tag:"meetPortal",mdxType:"TagLink"},"meet portal"),"."),(0,r.kt)("p",null,"Supports the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"meetPortalVisible",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"meetPortalAnchorPoint",mdxType:"TagLink"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(T,{tag:"meetPortalStyle",mdxType:"TagLink"}))))}y.isMDXComponent=!0}}]);