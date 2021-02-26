(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"PossibleValuesTable",(function(){return p})),a.d(t,"PossibleValue",(function(){return f})),a.d(t,"PossibleValueCode",(function(){return g})),a.d(t,"AnyColorValues",(function(){return m})),a.d(t,"TagLink",(function(){return h})),a.d(t,"DataTagLink",(function(){return y})),a.d(t,"ListenTagLink",(function(){return O})),a.d(t,"ActionLink",(function(){return j})),a.d(t,"NormalCode",(function(){return T})),a.d(t,"LabelAnchorValues",(function(){return x})),a.d(t,"Badges",(function(){return v})),a.d(t,"Badge",(function(){return B})),a.d(t,"ReadOnlyBadge",(function(){return w})),a.d(t,"VideoBadge",(function(){return P})),a.d(t,"ConfigBotBadge",(function(){return C})),a.d(t,"HistoryBotBadge",(function(){return k})),a.d(t,"AutomaticBadge",(function(){return L})),a.d(t,"PagePortalBadge",(function(){return V})),a.d(t,"InventoryPortalBadge",(function(){return A})),a.d(t,"MenuPortalBadge",(function(){return M})),a.d(t,"MeetPortalBadge",(function(){return N})),a.d(t,"LeftWristPortalBadge",(function(){return S})),a.d(t,"RightWristPortalBadge",(function(){return _})),a.d(t,"SheetPortalBadge",(function(){return D})),a.d(t,"TagPortalBadge",(function(){return E})),a.d(t,"Alert",(function(){return W})),a.d(t,"Example",(function(){return H})),a.d(t,"ExampleIframe",(function(){return I})),a.d(t,"default",(function(){return F}));a(165),a(164);function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var r=a(2),o=a(9),i=a(0),l=a.n(i),c=a(160),s=a(162),u={},d={id:"components",title:"components",description:"export const PossibleValuesTable = ({children}) => (",source:"@site/docs/components.mdx",permalink:"/docs/components",editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/components.mdx"},b=[],p=function(e){var t=e.children;return Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Value"),Object(c.b)("th",null,"Description"))),Object(c.b)("tbody",null,t))},f=function(e){var t=e.value,a=e.children,n=Object(o.a)(e,["value","children"]);return Object(c.b)("tr",n,Object(c.b)("td",null,t),Object(c.b)("td",null,a))},g=function(e){var t=e.value,a=e.children,n=Object(o.a)(e,["value","children"]);return Object(c.b)(f,Object(r.a)({value:Object(c.b)("code",null,t)},n,{mdxType:"PossibleValue"}),a)},m=function(e){return n(e),Object(c.b)(l.a.Fragment,null,Object(c.b)(f,{value:"Any X11 Color",mdxType:"PossibleValue"},Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/X11_color_names",target:"_blank"},"X11 colors")," are a list of standard colors that web browsers support."),Object(c.b)(f,{value:"Any Hex Color",mdxType:"PossibleValue"},Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/Web_colors#Hex_triplet",target:"_blank"},"Hex colors")," are three or six digit numbers that specify a color by its red, green, and blue components."))},h=function(e){var t=e.tag;return t.startsWith("@")?Object(c.b)(O,{tag:t,mdxType:"ListenTagLink"}):Object(c.b)(y,{tag:t,mdxType:"DataTagLink"})},y=function(e){var t=e.tag;return Object(c.b)("a",{href:Object(s.a)("docs/tags")+"#"+t.replace(/\./g,"").toLowerCase()},Object(c.b)(T,{mdxType:"NormalCode"},"#",t))},O=function(e){var t=e.tag;return Object(c.b)("a",{href:Object(s.a)("docs/listen-tags")+"#"+t.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase()},Object(c.b)(T,{mdxType:"NormalCode"},t))},j=function(e){var t=e.action,a=e.children;return Object(c.b)("a",{href:Object(s.a)("docs/actions")+"#"+t.replace(/[\.\(\)\,\?]/g,"").replace(/\s/g,"-").toLowerCase()},a||Object(c.b)(T,{mdxType:"NormalCode"},t))},T=function(e){var t=e.children;return l.a.createElement.apply(l.a,["code",{}].concat(t))},x=function(e){return n(e),Object(c.b)(l.a.Fragment,null,Object(c.b)(g,{value:"top",mdxType:"PossibleValueCode"},"Top of the bot facing world oriented up. (default)"),Object(c.b)(g,{value:"front",mdxType:"PossibleValueCode"},"Front of the bot facing world oriented forward."),Object(c.b)(g,{value:"back",mdxType:"PossibleValueCode"},"Back of the bot facing world oriented back."),Object(c.b)(g,{value:"right",mdxType:"PossibleValueCode"},"Right of the bot facing world oriented right."),Object(c.b)(g,{value:"left",mdxType:"PossibleValueCode"},"Left of the bot facing world oriented left."),Object(c.b)(g,{value:"floating",mdxType:"PossibleValueCode"},"Floating above the bot."))},v=function(e){var t=e.children;return Object(c.b)("div",{className:"row badge-row"},Object(c.b)("div",{className:"col"},t))},B=function(e){var t=e.type,a=e.title,n=e.children;return Object(c.b)("span",{title:a,className:"badge badge--"+t},n)},w=function(e){return n(e),Object(c.b)(B,{type:"warning",mdxType:"Badge"},"Read-Only")},P=function(e){var t=e.url;return Object(c.b)(B,{type:"info",mdxType:"Badge"},Object(c.b)("a",{href:t,target:"_blank"},"Video"))},C=function(e){e.url;return Object(c.b)(B,{type:"primary",mdxType:"Badge"},"Config Bot")},k=function(e){e.url;return Object(c.b)(B,{type:"primary",mdxType:"Badge"},"History Bot")},L=function(e){e.url;return Object(c.b)(B,{type:"success",title:"This tag is automatically set by CasualOS.",mdxType:"Badge"},"Automatic")},V=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the page portal bot.",mdxType:"Badge"},"pagePortalBot")},A=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the inventory portal bot.",mdxType:"Badge"},"inventoryPortalBot")},M=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the menu portal bot.",mdxType:"Badge"},"menuPortalBot")},N=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the meet portal bot.",mdxType:"Badge"},"meetPortalBot")},S=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the left wrist portal bot.",mdxType:"Badge"},"leftWristPortalBot")},_=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the right wrist portal bot.",mdxType:"Badge"},"rightWristPortalBot")},D=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the sheet portal bot.",mdxType:"Badge"},"sheetPortalBot")},E=function(e){e.url;return Object(c.b)(B,{type:"normal",title:"This tag is available on the tag portal bot.",mdxType:"Badge"},"tagPortalBot")},W=function(e){var t=e.type,a=e.children;return Object(c.b)("div",{className:"alert alert--"+t,role:"alert"},a)},H=function(e){var t=e.code;return Object(c.b)(B,{type:"info",mdxType:"Badge"},Object(c.b)("a",{target:"_blank",href:"https://casualos.com?auxCode="+t},"Example"))},I=function(e){var t=e.code;return Object(c.b)("iframe",{className:"example",src:"https://casualos.com?auxCode="+t})},X={rightToc:b,PossibleValuesTable:p,PossibleValue:f,PossibleValueCode:g,AnyColorValues:m,TagLink:h,DataTagLink:y,ListenTagLink:O,ActionLink:j,NormalCode:T,LabelAnchorValues:x,Badges:v,Badge:B,ReadOnlyBadge:w,VideoBadge:P,ConfigBotBadge:C,HistoryBotBadge:k,AutomaticBadge:L,PagePortalBadge:V,Alert:W,Example:H,ExampleIframe:I};function F(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},X,a,{components:t,mdxType:"MDXLayout"}))}F.isMDXComponent=!0},145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),o=(a(0),a(160)),i=a(126),l={id:"introduction",title:"Getting started with Custom Portals",sidebar_label:"Getting Started",description:"Make your own portals."},c={id:"custom-portals/introduction",title:"Getting started with Custom Portals",description:"Make your own portals.",source:"@site/docs/custom-portals/introduction.mdx",permalink:"/docs/custom-portals/introduction",editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/custom-portals/introduction.mdx",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Variables",permalink:"/docs/variables"}},s=[{value:"Tag prefixes",id:"tag-prefixes",children:[]},{value:"Creating your first portal",id:"creating-your-first-portal",children:[]}],u={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Custom portals are a fairly new feature in CasualOS that lets you do anything a normal website can do while still taking advantage of bots and the CasualOS data model.\nUnlike ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/listen-tags"}),"Listen Tags"),", Custom Portals allow you to access the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"}),"Web Browser DOM")," to create experiences.\nIn this way, custom portals can be used to render bots in 3D (like the pagePortal) or in HTML (like the menuPortal) or in a different way (like the sheetPortal)."),Object(o.b)("p",null,"At their most basic, custom portals work by finding tags that start with a specific tag prefix and bundling them together into one big script.\nThis big script is then injected into an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"}),"iframe"),".\nBecause iframes are a separate execution environment, the script can do whatever it wants without affecting the rest of CasualOS.\nThis is different than listen tags which are executed inside CasualOS and are therefore restricted in what they can do."),Object(o.b)("h3",{id:"tag-prefixes"},"Tag prefixes"),Object(o.b)("p",null,'Tag prefixes are used by CasualOS to indicate that a tag value should be interpreted in a particular manner.\nFor example, the "@" symbol is used to specify that a value should be treated as a listen tag and the "\ud83e\uddec" emoji is used to specify that a value is JSON data.'),Object(o.b)("p",null,"Tag prefixes are also very easy to use: you just put the symbol/emoji at the beginning of the value."),Object(o.b)("p",null,"You can also define your own tag prefixes by using the ",Object(o.b)(i.ActionLink,{action:"portal.registerPrefix(prefix, options?)",mdxType:"ActionLink"})," function.\nWhenever making a custom portal, it is recommended that you also use your own tag prefix so that conflicts with other custom portals are not likely."),Object(o.b)("h3",{id:"creating-your-first-portal"},"Creating your first portal"),Object(o.b)("p",null,"Let's create a custom portal!"),Object(o.b)("p",null,"It is very easy to get started. First, register a tag prefix. Then open a portal from a tag."),Object(o.b)("p",null,"Let me show you how this is done in practice:"),Object(o.b)(i.ExampleIframe,{code:"customPortals01",mdxType:"ExampleIframe"}))}d.isMDXComponent=!0}}]);