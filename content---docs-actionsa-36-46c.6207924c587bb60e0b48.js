(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));a(59),a(31),a(22),a(23),a(60),a(0);var n=a(172),o=a(140);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={id:"actions",title:"Actions",sidebar_label:"Actions",description:"Actions affect the data in bots and also do things to the outside world."},i=[{value:"Data Actions",id:"data-actions",children:[{value:"create(parent, ...mods)",id:"createparent-mods",children:[]},{value:"createTemp(parent, ...mods)",id:"createtempparent-mods",children:[]},{value:"destroy(bot)",id:"destroybot",children:[]}]},{value:"Event Actions",id:"event-actions",children:[{value:"shout(name, arg?)",id:"shoutname-arg",children:[]},{value:"whisper(bot, name, arg?)",id:"whisperbot-name-arg",children:[]}]},{value:"Player Actions",id:"player-actions",children:[{value:"player.replaceDragBot(botOrMod)",id:"playerreplacedragbotbotormod",children:[]}]}],l={rightToc:i},c="wrapper";function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"data-actions"},"Data Actions"),Object(n.b)("h3",{id:"createparent-mods"},Object(n.b)("inlineCode",{parentName:"h3"},"create(parent, ...mods)")),Object(n.b)(o.FunctionCode,{name:"create",mdxType:"FunctionCode"}),Object(n.b)("p",null,"Creates a new bot or combination of bots with the given ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"})," and mods. Also triggers ",Object(n.b)(o.TagLink,{tag:"onCreate()",mdxType:"TagLink"})," on all the created bots."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"first parameter")," is the bot or ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"})," that should be used as the ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"})," for the new bot(s).\nIf you specify ",Object(n.b)("inlineCode",{parentName:"p"},"null"),", then the new bot(s) will not have a ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"}),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"other parameters")," are mods that should be applied to the new bot(s).\nIf no other parameters are specified, then the new bot will have no data besides its ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"}),".\nIf an array of mods is used for a parameter, then one bot will be created for ",Object(n.b)("em",{parentName:"p"},"each unique combination of mods"),"."),Object(n.b)("h4",{id:"examples"},"Examples:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create an empty bot:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"let myNewBot = create();\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Create a red bot:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'let myRedBot = create(null, {\n    "aux.color": "red"\n});\n')),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Create a parent and a child bot:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'let myParentBot = create(null, {\n    "aux.label": "Parent"\n});\nlet myChildBot = create(myParentBot, {\n    "aux.label": "Child"\n});\n')),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Create a bot from multiple mods:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// myBot is placed in the "myContext" context and is colored green\nlet myBot = create(null, mod.addToContext("myContext"), {\n    "aux.color": "green"\n});\n')),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},"Create a red bot and a blue bot:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'let [myRedBot, myBlueBot] = create(null, [\n    {\n        "aux.color": "red"\n    },\n    {\n        "aux.color": "blue"\n    }\n]);\n')),Object(n.b)("h3",{id:"createtempparent-mods"},Object(n.b)("inlineCode",{parentName:"h3"},"createTemp(parent, ...mods)")),Object(n.b)(o.FunctionCode,{name:"createTemp",mdxType:"FunctionCode"}),Object(n.b)("p",null,"Creates a new temporary bot or combination of temporary bots with the given ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"})," and mods. Also triggers ",Object(n.b)(o.TagLink,{tag:"onCreate()",mdxType:"TagLink"})," on all the created bots."),Object(n.b)("p",null,"Temporary bots are bots which are not shared and are destroyed upon refresh."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"first parameter")," is the bot or ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"})," that should be used as the ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"})," for the new bot(s).\nIf you specify ",Object(n.b)("inlineCode",{parentName:"p"},"null"),", then the new bot(s) will not have a ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"}),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"other parameters")," are mods that should be applied to the new bot(s).\nIf no other parameters are specified, then the new bot will have no data besides its ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"}),".\nIf an array of mods is used for a parameter, then one bot will be created for ",Object(n.b)("em",{parentName:"p"},"each unique combination of mods"),"."),Object(n.b)(o.Alert,{type:"info",mdxType:"Alert"},"This function behaves exactly like ",Object(n.b)(o.ActionLink,{action:"create(parent, ...mods)",mdxType:"ActionLink"}),"."),Object(n.b)("h3",{id:"destroybot"},Object(n.b)("inlineCode",{parentName:"h3"},"destroy(bot)")),Object(n.b)(o.FunctionCode,{name:"destroy",mdxType:"FunctionCode"}),Object(n.b)("p",null,"Removes the given bot, list of bots, or bot by ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"})," and triggers ",Object(n.b)(o.TagLink,{tag:"onDestroy()",mdxType:"TagLink"})," for each of the destroyed bots."),Object(n.b)("p",null,"Note that only destroyable bots will be destroyed.\nBots which have ",Object(n.b)(o.TagLink,{tag:"aux.destroyable",mdxType:"TagLink"})," set to ",Object(n.b)("inlineCode",{parentName:"p"},"false")," will not be destroyed."),Object(n.b)("p",null,"Also note that all bots which have ",Object(n.b)(o.TagLink,{tag:"aux.creator",mdxType:"TagLink"})," set to the ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"})," of a destroyed bot will also be destroyed (unless they are not destroyable).\nThis happens recursively until there are no more bots to destroy."),Object(n.b)("h4",{id:"examples-1"},"Examples:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Destroying a single bot:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// Destroy a single bot that has #name set to "bob"\ndestroy(getBot("#name", "bob"));\n')),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Destroying a list of bots:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// Destroy all the bots that have #aux.color set to "red"\ndestroy(getBots("#aux.color", "red"));\n')),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Destroying a bot by its id")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// Destroy the bot with the #id: "config"\ndestroy("config");\n')),Object(n.b)("h2",{id:"event-actions"},"Event Actions"),Object(n.b)("h3",{id:"shoutname-arg"},Object(n.b)("inlineCode",{parentName:"h3"},"shout(name, arg?)")),Object(n.b)(o.FunctionCode,{name:"shout",mdxType:"FunctionCode"}),Object(n.b)("p",null,"Sends a shout to all bots that are ",Object(n.b)(o.TagLink,{tag:"aux.listening",mdxType:"TagLink"})," and have a ",Object(n.b)("a",r({parentName:"p"},{href:"docs/listen-tags"}),"listen tag")," for the specified name. Optionally includes a custom ",Object(n.b)("inlineCode",{parentName:"p"},"that")," argument.\nAlso triggers ",Object(n.b)(o.TagLink,{tag:"onListen()",mdxType:"TagLink"})," and ",Object(n.b)(o.TagLink,{tag:"onAnyListen()",mdxType:"TagLink"}),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"first parameter")," is the name of the shout. e.g. Using ",Object(n.b)("inlineCode",{parentName:"p"},'"onClick"')," for the name will trigger all ",Object(n.b)(o.TagLink,{tag:"onClick()",mdxType:"TagLink"})," listeners."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"second parameter")," is the ",Object(n.b)("inlineCode",{parentName:"p"},"that")," argument to send with the shout. You do not need to specify this parameter if you do not want to."),Object(n.b)("h4",{id:"examples-2"},"Examples:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Send a ",Object(n.b)("inlineCode",{parentName:"li"},"#reset()")," event to all bots:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'shout("reset");\n')),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Send a ",Object(n.b)("inlineCode",{parentName:"li"},"#hello()")," event with your name:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'shout("hello", "Bob");\n')),Object(n.b)("h3",{id:"whisperbot-name-arg"},Object(n.b)("inlineCode",{parentName:"h3"},"whisper(bot, name, arg?)")),Object(n.b)(o.FunctionCode,{name:"whisper",mdxType:"FunctionCode"}),Object(n.b)("p",null,"Sends a whisper to the specified bot(s) that are ",Object(n.b)(o.TagLink,{tag:"aux.listening",mdxType:"TagLink"})," and have a ",Object(n.b)("a",r({parentName:"p"},{href:"docs/listen-tags"}),"listen tag")," for the given name. Optionally includes a custom ",Object(n.b)("inlineCode",{parentName:"p"},"that")," argument.\nAlso triggers ",Object(n.b)(o.TagLink,{tag:"onListen()",mdxType:"TagLink"})," and ",Object(n.b)(o.TagLink,{tag:"onAnyListen()",mdxType:"TagLink"}),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"first parameter")," is the bot, array of bots, bot ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"}),", or array of bot ",Object(n.b)(o.TagLink,{tag:"id",mdxType:"TagLink"})," that the whisper should be sent to."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"second parameter")," is the name of the whisper. e.g. Using ",Object(n.b)("inlineCode",{parentName:"p"},'"onClick"')," for the name will trigger the ",Object(n.b)(o.TagLink,{tag:"onClick()",mdxType:"TagLink"})," listener for the specified bots."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"third parameter")," is the ",Object(n.b)("inlineCode",{parentName:"p"},"that")," argument to send with the shout. You do not need to specify this parameter if you do not want to."),Object(n.b)("h4",{id:"examples-3"},"Examples:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Send a ",Object(n.b)("inlineCode",{parentName:"li"},"#reset()")," event to all bots named ",Object(n.b)("inlineCode",{parentName:"li"},'"Bob"'),":")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'let bots = getBots("#name", "Bob");\nwhisper(bots, "reset");\n')),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Send a ",Object(n.b)("inlineCode",{parentName:"li"},"#setColor()")," event to ourself:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'whisper(this, "setColor", "red");\n')),Object(n.b)("h2",{id:"player-actions"},"Player Actions"),Object(n.b)("h3",{id:"playerreplacedragbotbotormod"},Object(n.b)("inlineCode",{parentName:"h3"},"player.replaceDragBot(botOrMod)")),Object(n.b)(o.FunctionCode,{name:"replaceDragBot",mdxType:"FunctionCode"}),Object(n.b)("p",null,"Replaces the bot that the user is dragging with the given bot or mod.\nOnly works if called from inside a ",Object(n.b)(o.TagLink,{tag:"onBotDrag()",mdxType:"TagLink"})," or ",Object(n.b)(o.TagLink,{tag:"onAnyBotDrag()",mdxType:"TagLink"})," listen tag."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"first parameter")," is the bot or mod that should be dragged.\nIf given a bot, then that bot's ",Object(n.b)(o.TagLink,{tag:"onBotDrag()",mdxType:"TagLink"})," will be skippped but ",Object(n.b)(o.TagLink,{tag:"onBotDrop()",mdxType:"TagLink"})," will be called."),Object(n.b)("h4",{id:"examples-4"},"Examples:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Drag a clone of this bot.")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"let clone = create(null, this);\nplayer.replaceDragBot(clone);\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Drag a mod that makes other bots red.")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'player.replaceDragBot({\n    "aux.color": "red"\n});\n')))}s.isMDXComponent=!0}}]);