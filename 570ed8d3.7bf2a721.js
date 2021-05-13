(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"PossibleValuesTable",(function(){return p})),a.d(t,"PossibleValue",(function(){return m})),a.d(t,"PossibleValueCode",(function(){return g})),a.d(t,"AnyColorValues",(function(){return f})),a.d(t,"AnyCursorValues",(function(){return h})),a.d(t,"TagLink",(function(){return y})),a.d(t,"DataTagLink",(function(){return O})),a.d(t,"ListenTagLink",(function(){return j})),a.d(t,"ActionLink",(function(){return x})),a.d(t,"NormalCode",(function(){return T})),a.d(t,"LabelAnchorValues",(function(){return v})),a.d(t,"Badges",(function(){return P})),a.d(t,"Badge",(function(){return w})),a.d(t,"ReadOnlyBadge",(function(){return C})),a.d(t,"VideoBadge",(function(){return V})),a.d(t,"ConfigBotBadge",(function(){return B})),a.d(t,"HistoryBotBadge",(function(){return k})),a.d(t,"AutomaticBadge",(function(){return z})),a.d(t,"PagePortalBadge",(function(){return L})),a.d(t,"InventoryPortalBadge",(function(){return A})),a.d(t,"MenuPortalBadge",(function(){return M})),a.d(t,"MeetPortalBadge",(function(){return N})),a.d(t,"LeftWristPortalBadge",(function(){return S})),a.d(t,"RightWristPortalBadge",(function(){return _})),a.d(t,"SheetPortalBadge",(function(){return D})),a.d(t,"TagPortalBadge",(function(){return I})),a.d(t,"ImuPortalBadge",(function(){return E})),a.d(t,"Alert",(function(){return W})),a.d(t,"Example",(function(){return F})),a.d(t,"ExampleIframe",(function(){return H})),a.d(t,"default",(function(){return R}));a(165),a(164);function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var r=a(2),n=a(9),l=a(0),i=a.n(l),s=a(160),u=a(162),c={},b={id:"components",title:"components",description:"export const PossibleValuesTable = ({children}) => (",source:"@site/docs/components.mdx",permalink:"/docs/components",editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/components.mdx"},d=[],p=function(e){var t=e.children;return Object(s.b)("table",null,Object(s.b)("thead",null,Object(s.b)("tr",null,Object(s.b)("th",null,"Value"),Object(s.b)("th",null,"Description"))),Object(s.b)("tbody",null,t))},m=function(e){var t=e.value,a=e.children,o=Object(n.a)(e,["value","children"]);return Object(s.b)("tr",o,Object(s.b)("td",null,t),Object(s.b)("td",null,a))},g=function(e){var t=e.value,a=e.children,o=Object(n.a)(e,["value","children"]);return Object(s.b)(m,Object(r.a)({value:Object(s.b)("code",null,t)},o,{mdxType:"PossibleValue"}),a)},f=function(e){return o(e),Object(s.b)(i.a.Fragment,null,Object(s.b)(m,{value:"Any X11 Color",mdxType:"PossibleValue"},Object(s.b)("a",{href:"https://en.wikipedia.org/wiki/X11_color_names",target:"_blank"},"X11 colors")," are a list of standard colors that web browsers support."),Object(s.b)(m,{value:"Any Hex Color",mdxType:"PossibleValue"},Object(s.b)("a",{href:"https://en.wikipedia.org/wiki/Web_colors#Hex_triplet",target:"_blank"},"Hex colors")," are three or six digit numbers that specify a color by its red, green, and blue components."))},h=function(e){return o(e),Object(s.b)(i.a.Fragment,null,Object(s.b)(g,{value:"auto",mdxType:"PossibleValueCode"},"The cursor automatically changes its look based on the context. For page portal bots, this means that the arrow cursor is used. For menu portal bots, this means that the pointer is used when the bot has a ",Object(s.b)(y,{tag:"@onClick",mdxType:"TagLink"})," and the arrow is used otherwise. (default)"),Object(s.b)(g,{value:"default",mdxType:"PossibleValueCode"},"The cursor looks like the default cursor for the platform. Generally, this means the arrow cursor."),Object(s.b)(g,{value:"none",mdxType:"PossibleValueCode"},"The cursor is invisible."),Object(s.b)(g,{value:"wait",mdxType:"PossibleValueCode"},"wait"),Object(s.b)(g,{value:"context-menu",mdxType:"PossibleValueCode"},"context-menu"),Object(s.b)(g,{value:"help",mdxType:"PossibleValueCode"},"help"),Object(s.b)(g,{value:"pointer",mdxType:"PossibleValueCode"},"pointer"),Object(s.b)(g,{value:"progress",mdxType:"PossibleValueCode"},"progress"),Object(s.b)(g,{value:"cell",mdxType:"PossibleValueCode"},"cell"),Object(s.b)(g,{value:"crosshair",mdxType:"PossibleValueCode"},"crosshair"),Object(s.b)(g,{value:"text",mdxType:"PossibleValueCode"},"text"),Object(s.b)(g,{value:"vertical-text",mdxType:"PossibleValueCode"},"vertical-text"),Object(s.b)(g,{value:"alias",mdxType:"PossibleValueCode"},"alias"),Object(s.b)(g,{value:"copy",mdxType:"PossibleValueCode"},"copy"),Object(s.b)(g,{value:"move",mdxType:"PossibleValueCode"},"move"),Object(s.b)(g,{value:"no-drop",mdxType:"PossibleValueCode"},"no-drop"),Object(s.b)(g,{value:"not-allowed",mdxType:"PossibleValueCode"},"not-allowed"),Object(s.b)(g,{value:"grab",mdxType:"PossibleValueCode"},"grab"),Object(s.b)(g,{value:"grabbing",mdxType:"PossibleValueCode"},"grabbing"),Object(s.b)(g,{value:"all-scroll",mdxType:"PossibleValueCode"},"all-scroll"),Object(s.b)(g,{value:"col-resize",mdxType:"PossibleValueCode"},"col-resize"),Object(s.b)(g,{value:"row-resize",mdxType:"PossibleValueCode"},"row-resize"),Object(s.b)(g,{value:"n-resize",mdxType:"PossibleValueCode"},"n-resize"),Object(s.b)(g,{value:"e-resize",mdxType:"PossibleValueCode"},"e-resize"),Object(s.b)(g,{value:"s-resize",mdxType:"PossibleValueCode"},"s-resize"),Object(s.b)(g,{value:"w-resize",mdxType:"PossibleValueCode"},"w-resize"),Object(s.b)(g,{value:"ne-resize",mdxType:"PossibleValueCode"},"ne-resize"),Object(s.b)(g,{value:"nw-resize",mdxType:"PossibleValueCode"},"nw-resize"),Object(s.b)(g,{value:"se-resize",mdxType:"PossibleValueCode"},"se-resize"),Object(s.b)(g,{value:"sw-resize",mdxType:"PossibleValueCode"},"sw-resize"),Object(s.b)(g,{value:"ew-resize",mdxType:"PossibleValueCode"},"ew-resize"),Object(s.b)(g,{value:"ns-resize",mdxType:"PossibleValueCode"},"ns-resize"),Object(s.b)(g,{value:"nesw-resize",mdxType:"PossibleValueCode"},"nesw-resize"),Object(s.b)(g,{value:"nwse-resize",mdxType:"PossibleValueCode"},"nwse-resize"),Object(s.b)(g,{value:"zoom-in",mdxType:"PossibleValueCode"},"zoom-in"),Object(s.b)(g,{value:"zoom-out",mdxType:"PossibleValueCode"},"zoom-out"),Object(s.b)(m,{value:"Any URL",mdxType:"PossibleValue"},"The image at the given URL will be used as the cursor. Images should be 32x32 pixels or smaller otherwise they may not work."))},y=function(e){var t=e.tag;return t.startsWith("@")?Object(s.b)(j,{tag:t,mdxType:"ListenTagLink"}):Object(s.b)(O,{tag:t,mdxType:"DataTagLink"})},O=function(e){var t=e.tag;return Object(s.b)("a",{href:Object(u.a)("docs/tags")+"#"+t.replace(/\./g,"").toLowerCase()},Object(s.b)(T,{mdxType:"NormalCode"},"#",t))},j=function(e){var t=e.tag;return Object(s.b)("a",{href:Object(u.a)("docs/listen-tags/tags")+"#"+t.replace(/[\.\(\)\@\[\]]/g,"").toLowerCase()},Object(s.b)(T,{mdxType:"NormalCode"},t))},x=function(e){var t=e.action,a=e.children;return Object(s.b)("a",{href:Object(u.a)("docs/actions")+"#"+t.replace(/[\.\(\)\,\?]/g,"").replace(/\s/g,"-").toLowerCase()},a||Object(s.b)(T,{mdxType:"NormalCode"},t))},T=function(e){var t=e.children;return i.a.createElement.apply(i.a,["code",{}].concat(t))},v=function(e){return o(e),Object(s.b)(i.a.Fragment,null,Object(s.b)(g,{value:"top",mdxType:"PossibleValueCode"},"Top of the bot facing world oriented up. (default)"),Object(s.b)(g,{value:"front",mdxType:"PossibleValueCode"},"Front of the bot facing world oriented forward."),Object(s.b)(g,{value:"back",mdxType:"PossibleValueCode"},"Back of the bot facing world oriented back."),Object(s.b)(g,{value:"right",mdxType:"PossibleValueCode"},"Right of the bot facing world oriented right."),Object(s.b)(g,{value:"left",mdxType:"PossibleValueCode"},"Left of the bot facing world oriented left."),Object(s.b)(g,{value:"floating",mdxType:"PossibleValueCode"},"Floating above the bot."))},P=function(e){var t=e.children;return Object(s.b)("div",{className:"row badge-row"},Object(s.b)("div",{className:"col"},t))},w=function(e){var t=e.type,a=e.title,o=e.children;return Object(s.b)("span",{title:a,className:"badge badge--"+t},o)},C=function(e){return o(e),Object(s.b)(w,{type:"warning",mdxType:"Badge"},"Read-Only")},V=function(e){var t=e.url;return Object(s.b)(w,{type:"info",mdxType:"Badge"},Object(s.b)("a",{href:t,target:"_blank"},"Video"))},B=function(e){e.url;return Object(s.b)(w,{type:"primary",mdxType:"Badge"},"Config Bot")},k=function(e){e.url;return Object(s.b)(w,{type:"primary",mdxType:"Badge"},"History Bot")},z=function(e){e.url;return Object(s.b)(w,{type:"success",title:"This tag is automatically set by CasualOS.",mdxType:"Badge"},"Automatic")},L=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the page portal bot.",mdxType:"Badge"},"pagePortalBot")},A=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the inventory portal bot.",mdxType:"Badge"},"inventoryPortalBot")},M=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the menu portal bot.",mdxType:"Badge"},"menuPortalBot")},N=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the meet portal bot.",mdxType:"Badge"},"meetPortalBot")},S=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the left wrist portal bot.",mdxType:"Badge"},"leftWristPortalBot")},_=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the right wrist portal bot.",mdxType:"Badge"},"rightWristPortalBot")},D=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the sheet portal bot.",mdxType:"Badge"},"sheetPortalBot")},I=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the tag portal bot.",mdxType:"Badge"},"tagPortalBot")},E=function(e){e.url;return Object(s.b)(w,{type:"normal",title:"This tag is available on the IMU portal bot.",mdxType:"Badge"},"imuPortalBot")},W=function(e){var t=e.type,a=e.children;return Object(s.b)("div",{className:"alert alert--"+t,role:"alert"},a)},F=function(e){var t=e.code;return Object(s.b)(w,{type:"info",mdxType:"Badge"},Object(s.b)("a",{target:"_blank",href:"https://casualos.com?auxCode="+t},"Example"))},H=function(e){var t=e.code;return Object(s.b)("iframe",{className:"example",src:"https://casualos.com?auxCode="+t})},U={rightToc:d,PossibleValuesTable:p,PossibleValue:m,PossibleValueCode:g,AnyColorValues:f,AnyCursorValues:h,TagLink:y,DataTagLink:O,ListenTagLink:j,ActionLink:x,NormalCode:T,LabelAnchorValues:v,Badges:P,Badge:w,ReadOnlyBadge:C,VideoBadge:V,ConfigBotBadge:B,HistoryBotBadge:k,AutomaticBadge:z,PagePortalBadge:L,Alert:W,Example:F,ExampleIframe:H};function R(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},U,a,{components:t,mdxType:"MDXLayout"}))}R.isMDXComponent=!0},145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return b}));var o=a(2),r=a(9),n=(a(0),a(160)),l=a(126),i={id:"introduction",title:"Getting started with Custom Portals",sidebar_label:"Getting Started",description:"Make your own portals."},s={id:"custom-portals/introduction",title:"Getting started with Custom Portals",description:"Make your own portals.",source:"@site/docs/custom-portals/introduction.mdx",permalink:"/docs/custom-portals/introduction",editUrl:"https://github.com/casual-simulation/casualos/tree/develop/docs/docs/custom-portals/introduction.mdx",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Actions",permalink:"/docs/actions"}},u=[{value:"Tag prefixes",id:"tag-prefixes",children:[]},{value:"Creating your first portal",id:"creating-your-first-portal",children:[]}],c={rightToc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Custom portals are a fairly new feature in CasualOS that lets you do anything a normal website can do while still taking advantage of bots and the CasualOS data model.\nUnlike ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"../listen-tags.mdx"}),"Listen Tags"),", Custom Portals allow you to access the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"}),"Web Browser DOM")," to create experiences.\nIn this way, custom portals can be used to render bots in 3D (like the pagePortal) or in HTML (like the menuPortal) or in a different way (like the sheetPortal)."),Object(n.b)("p",null,"At their most basic, custom portals work by finding tags that start with a specific tag prefix and bundling them together into one big script.\nThis big script is then injected into an ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"}),"iframe"),".\nBecause iframes are a separate execution environment, the script can do whatever it wants without affecting the rest of CasualOS.\nThis is different than listen tags which are executed inside CasualOS and are therefore restricted in what they can do."),Object(n.b)("h3",{id:"tag-prefixes"},"Tag prefixes"),Object(n.b)("p",null,'Tag prefixes are used by CasualOS to indicate that a tag value should be interpreted in a particular manner.\nFor example, the "@" symbol is used to specify that a value should be treated as a listen tag and the "\ud83e\uddec" emoji is used to specify that a value is JSON data.'),Object(n.b)("p",null,"Tag prefixes are also very easy to use: you just put the symbol/emoji at the beginning of the value."),Object(n.b)("p",null,"You can also define your own tag prefixes by using the ",Object(n.b)(l.ActionLink,{action:"portal.registerPrefix(prefix, options?)",mdxType:"ActionLink"})," function.\nWhenever making a custom portal, it is recommended that you also use your own tag prefix so that conflicts with other custom portals are not likely."),Object(n.b)("h3",{id:"creating-your-first-portal"},"Creating your first portal"),Object(n.b)("p",null,"Let's create a custom portal!"),Object(n.b)("p",null,"It is very easy to get started. First, register a tag prefix. Then open a portal from a tag."),Object(n.b)("p",null,"Let me show you how this is done in practice:"),Object(n.b)(l.ExampleIframe,{code:"customPortals01",mdxType:"ExampleIframe"}))}b.isMDXComponent=!0}}]);