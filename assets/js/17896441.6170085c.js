(self.webpackChunk=self.webpackChunk||[]).push([[918],{7565:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$t});var a=n(7294),r=n(1944),l=n(4700),o=a.createContext(null);function i(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(o.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e,t=c(),n=t.metadata,l=t.frontMatter,o=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:l.keywords,image:null!=(e=o.image)?e:l.image})}var u=n(6010),d=n(7524),m=n(3117),p=n(5999),v=n(9960);function f(e){var t=e.permalink,n=e.title,r=e.subLabel,l=e.isNext;return a.createElement(v.Z,{className:(0,u.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function h(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f,(0,m.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f,(0,m.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function g(){var e=c().metadata;return a.createElement(h,{previous:e.previous,next:e.next})}var b=n(2263),E=n(143),y=n(5281),k=n(373),N=n(4477);var L={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){var t=L[e.versionMetadata.banner];return a.createElement(t,e)}function Z(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(v.Z,{to:n,onClick:r},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){var t,n=e.className,r=e.versionMetadata,l=(0,b.Z)().siteConfig.title,o=(0,E.gA)({failfast:!0}).pluginId,i=(0,k.J)(o).savePreferredVersionName,c=(0,E.Jo)(o),s=c.latestDocSuggestion,d=c.latestVersionSuggestion,m=null!=s?s:(t=d).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,u.Z)(n,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(Z,{versionLabel:d.label,to:m.path,onClick:function(){return i(d.name)}})))}function T(e){var t=e.className,n=(0,N.E)();return n.banner?a.createElement(_,{className:t,versionMetadata:n}):null}function x(e){var t=e.className,n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,u.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function B(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){var t=e.lastUpdatedBy;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function H(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(B,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(w,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(102);const M="iconEdit_Z9Sw";var I=["className"];function S(e){var t=e.className,n=(0,A.Z)(e,I);return a.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(M,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function j(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(S,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const O="tag_zVej",U="tagRegular_sFm0",z="tagWithCount_h2kH";function V(e){var t=e.permalink,n=e.label,r=e.count;return a.createElement(v.Z,{href:t,className:(0,u.Z)(O,r?z:U)},n,r&&a.createElement("span",null,r))}const P="tags_jXut",D="tag_QGVx";function R(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,u.Z)(P,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:D},a.createElement(V,{label:t,permalink:n}))}))))}const W="lastUpdated_vwxv";function F(e){return a.createElement("div",{className:(0,u.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(R,e)))}function q(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,u.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(j,{editUrl:t})),a.createElement("div",{className:(0,u.Z)("col",W)},(n||r)&&a.createElement(H,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function G(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,o=e.tags,i=o.length>0,s=!!(t||n||l);return i||s?a.createElement("footer",{className:(0,u.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(F,{tags:o}),s&&a.createElement(q,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var $=n(6043),J=n(6668),Q=["parentIndex"];function Y(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,A.Z)(e,Q);n>=0?t[n].children.push(r):a.push(r)})),a}function X(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=X({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function K(e){var t=e.getBoundingClientRect();return t.top===t.bottom?K(e.parentNode):t}function ee(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return K(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(K(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function te(){var e=(0,a.useRef)(0),t=(0,J.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function ne(e){var t=(0,a.useRef)(void 0),n=te();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=ee(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function ae(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(ae,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}const re=a.memo(ae);var le=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function oe(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,i=e.linkActiveClassName,c=void 0===i?void 0:i,s=e.minHeadingLevel,u=e.maxHeadingLevel,d=(0,A.Z)(e,le),p=(0,J.L)(),v=null!=s?s:p.tableOfContents.minHeadingLevel,f=null!=u?u:p.tableOfContents.maxHeadingLevel,h=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return X({toc:Y(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return ne((0,a.useMemo)((function(){if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:f}}),[o,c,v,f])),a.createElement(re,(0,m.Z)({toc:h,className:r,linkClassName:o},d))}const ie="tocCollapsibleButton_TO0P",ce="tocCollapsibleButtonExpanded_MG3E";var se=["collapsed"];function ue(e){var t=e.collapsed,n=(0,A.Z)(e,se);return a.createElement("button",(0,m.Z)({type:"button"},n,{className:(0,u.Z)("clean-btn",ie,!t&&ce,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const de="tocCollapsible_ETCw",me="tocCollapsibleContent_vkbj",pe="tocCollapsibleExpanded_sAul";function ve(e){var t=e.toc,n=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,o=(0,$.u)({initialState:!0}),i=o.collapsed,c=o.toggleCollapsed;return a.createElement("div",{className:(0,u.Z)(de,!i&&pe,n)},a.createElement(ue,{collapsed:i,onClick:c}),a.createElement($.z,{lazy:!0,className:me,collapsed:i},a.createElement(oe,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const fe="tocMobile_ITEo";function he(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(ve,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(y.k.docs.docTocMobile,fe)})}const ge="tableOfContents_bqdL";var be=["className"];function Ee(e){var t=e.className,n=(0,A.Z)(e,be);return a.createElement("div",{className:(0,u.Z)(ge,"thin-scrollbar",t)},a.createElement(oe,(0,m.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function ye(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(Ee,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:y.k.docs.docTocDesktop})}const ke="anchorWithStickyNavbar_LWe7",Ne="anchorWithHideOnScrollNavbar_WYt5";var Le=["as","id"];function Ce(e){var t=e.as,n=e.id,r=(0,A.Z)(e,Le),l=(0,J.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,m.Z)({},r,{className:(0,u.Z)("anchor",l?Ne:ke),id:n}),r.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,m.Z)({},r,{id:void 0}))}var Ze=n(3905),_e=n(5742),Te=["mdxType","originalType"];var xe=n(2389),Be=n(2949);function we(){var e=(0,J.L)().prism,t=(0,Be.I)().colorMode,n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var He=n(8900),Ae=n(7594),Me=n.n(Ae),Ie=(0,He.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),Se=(0,He.Z)(/\{([\d,-]+)\}/,{range:1}),je={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Oe(e,t){var n=e.map((function(e){var n=je[e],a=n.start,r=n.end;return"(?:"+a+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function Ue(e,t){var n=e.replace(/\n$/,""),a=t.language,r=t.magicComments,l=t.metastring;if(l&&Se.test(l)){var o=l.match(Se).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var i=r[0].className,c=Me()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[i]]}));return{lineClassNames:Object.fromEntries(c),code:n}}if(void 0===a)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Oe(["js","jsBlock"],t);case"jsx":case"tsx":return Oe(["js","jsBlock","jsx"],t);case"html":return Oe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Oe(["bash"],t);case"markdown":case"md":return Oe(["html","jsx","bash"],t);default:return Oe(Object.keys(je),t)}}(a,r),u=n.split("\n"),d=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),f=0;f<u.length;){var h=u[f].match(s);if(h){var g=h.slice(1).find((function(e){return void 0!==e}));m[g]?d[m[g]].range+=f+",":p[g]?d[p[g]].start=f:v[g]&&(d[v[g]].range+=d[v[g]].start+"-"+(f-1)+","),u.splice(f,1)}else f+=1}n=u.join("\n");var b={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;Me()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}const ze="codeBlockContainer_Ckt0";var Ve=["as"];function Pe(e){var t=e.as,n=(0,A.Z)(e,Ve),r=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var a=e[0],r=e[1],l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(we());return a.createElement(t,(0,m.Z)({},n,{style:r,className:(0,u.Z)(n.className,ze,y.k.common.codeBlock)}))}const De={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Re(e){var t=e.children,n=e.className;return a.createElement(Pe,{as:"pre",tabIndex:0,className:(0,u.Z)(De.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:De.codeBlockLines},t))}var We={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Fe(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],i=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){i()}),[i]),function(e,t,n){void 0===n&&(n=We);var r=(0,l.zX)(t),o=(0,l.Ql)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const qe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Ge={Prism:n(7410).Z,theme:qe};function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Je(){return Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Je.apply(this,arguments)}var Qe=/\r\n|\r|\n/,Ye=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Xe=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Ke=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Je({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=Je({},n,{backgroundColor:null}),r};function et(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const tt=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),$e(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Ke(e.theme,e.language):void 0;return t.themeDict=n})),$e(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=Je({},et(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?Je({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),$e(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),$e(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=Je({},et(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?Je({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),$e(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,u=t[o],d=n[o][l];if("string"==typeof d?(u=o>0?u:["plain"],s=d):(u=Xe(u,d.type),d.alias&&(u=Xe(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(Qe),p=m.length;i.push({types:u,content:m[0]});for(var v=1;v<p;v++)Ye(i),c.push(i=[]),i.push({types:u,content:m[v]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return Ye(i),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),nt="codeLine_lJS_",at="codeLineNumber_Tfdd",rt="codeLineContent_feaV";function lt(e){var t=e.line,n=e.classNames,r=e.showLineNumbers,l=e.getLineProps,o=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,u.Z)(n,r&&nt)}),c=t.map((function(e,t){return a.createElement("span",(0,m.Z)({key:t},o({token:e,key:t})))}));return a.createElement("span",i,r?a.createElement(a.Fragment,null,a.createElement("span",{className:at}),a.createElement("span",{className:rt},c)):a.createElement(a.Fragment,null,c,a.createElement("br",null)))}const ot={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function it(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),l=r[0],o=r[1],i=(0,a.useRef)(void 0),c=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(t),o(!0),i.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":l?(0,p.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,ot.copyButton,l&&ot.copyButtonCopied),onClick:c},a.createElement("span",{className:ot.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:ot.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:ot.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const ct="wordWrapButtonIcon_Bwma",st="wordWrapButtonEnabled_EoeP";function ut(e){var t=e.className,n=e.onClick,r=e.isEnabled,l=(0,p.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,r&&st),"aria-label":l,title:l},a.createElement("svg",{className:ct,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function dt(e){var t,n,r,l,o,i,c,s,d,p,v,f=e.children,h=e.className,g=void 0===h?"":h,b=e.metastring,E=e.title,y=e.showLineNumbers,k=e.language,N=(0,J.L)().prism,L=N.defaultLanguage,C=N.magicComments,Z=null!=(t=null!=k?k:null==(n=g.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,_=we(),T=(r=(0,a.useState)(!1),l=r[0],o=r[1],i=(0,a.useState)(!1),c=i[0],s=i[1],d=(0,a.useRef)(null),p=(0,a.useCallback)((function(){var e=d.current.querySelector("code");l?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),o((function(e){return!e}))}),[d,l]),v=(0,a.useCallback)((function(){var e=d.current,t=e.scrollWidth>e.clientWidth||d.current.querySelector("code").hasAttribute("style");s(t)}),[d]),Fe(d,v),(0,a.useEffect)((function(){v()}),[l,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:d,isEnabled:l,isCodeScrollable:c,toggle:p}),x=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(Ie))?void 0:n.groups.title)?t:""}(b)||E,B=Ue(f,{metastring:b,language:Z,magicComments:C}),w=B.lineClassNames,H=B.code,A=null!=y?y:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(b);return a.createElement(Pe,{as:"div",className:(0,u.Z)(g,Z&&!g.includes("language-"+Z)&&"language-"+Z)},x&&a.createElement("div",{className:De.codeBlockTitle},x),a.createElement("div",{className:De.codeBlockContent},a.createElement(tt,(0,m.Z)({},Ge,{theme:_,code:H,language:null!=Z?Z:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,l=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,u.Z)(t,De.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,u.Z)(De.codeBlockLines,A&&De.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(lt,{key:t,line:e,getLineProps:r,getTokenProps:l,classNames:w[t],showLineNumbers:A})}))))})),a.createElement("div",{className:De.buttonGroup},(T.isEnabled||T.isCodeScrollable)&&a.createElement(ut,{className:De.codeButton,onClick:function(){return T.toggle()},isEnabled:T.isEnabled}),a.createElement(it,{className:De.codeButton,code:H}))))}var mt=["children"];function pt(e){var t=e.children,n=(0,A.Z)(e,mt),r=(0,xe.Z)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?dt:Re;return a.createElement(o,(0,m.Z)({key:String(r)},n),l)}const vt="details_lb9f",ft="isBrowser_bmU9",ht="collapsibleContent_i85q";var gt=["summary","children"];function bt(e){return!!e&&("SUMMARY"===e.tagName||bt(e.parentElement))}function Et(e,t){return!!e&&(e===t||Et(e.parentElement,t))}function yt(e){var t=e.summary,n=e.children,r=(0,A.Z)(e,gt),l=(0,xe.Z)(),o=(0,a.useRef)(null),i=(0,$.u)({initialState:!r.open}),c=i.collapsed,s=i.setCollapsed,d=(0,a.useState)(r.open),p=d[0],v=d[1];return a.createElement("details",(0,m.Z)({},r,{ref:o,open:p,"data-collapsed":c,className:(0,u.Z)(vt,l&&ft,r.className),onMouseDown:function(e){bt(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;bt(t)&&Et(t,o.current)&&(e.preventDefault(),c?(s(!1),v(!0)):s(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement($.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),v(!e)}},a.createElement("div",{className:ht},n)))}const kt="details_b_Ee";function Nt(e){var t=Object.assign({},e);return a.createElement(yt,(0,m.Z)({},t,{className:(0,u.Z)("alert alert--info",kt,t.className)}))}function Lt(e){return a.createElement(Ce,e)}const Ct="containsTaskList_mC6p";const Zt="img_ev3q";const _t="admonition_LlT9",Tt="admonitionHeading_tbUL",xt="admonitionIcon_kALy",Bt="admonitionContent_S0QG";var wt={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ht={secondary:"note",important:"info",success:"tip",warning:"danger"};function At(e){var t,n=function(e){var t=a.Children.toArray(e),n=t.find((function(e){var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:r}}(e.children),r=n.mdxAdmonitionTitle,l=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:r,children:l})}const Mt={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,A.Z)(n,Te));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(_e.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(pt,e)},a:function(e){return a.createElement(v.Z,e)},pre:function(e){var t;return a.createElement(pt,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(Nt,(0,m.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,m.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Ct))}));var t},img:function(e){return a.createElement("img",(0,m.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,Zt))}));var t},h1:function(e){return a.createElement(Lt,(0,m.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Lt,(0,m.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Lt,(0,m.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Lt,(0,m.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Lt,(0,m.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Lt,(0,m.Z)({as:"h6"},e))},admonition:function(e){var t=At(e),n=t.children,r=t.type,l=t.title,o=t.icon,i=function(e){var t,n=null!=(t=Ht[e])?t:e;return wt[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),wt.info)}(r),c=null!=l?l:i.label,s=i.iconComponent,d=null!=o?o:a.createElement(s,null);return a.createElement("div",{className:(0,u.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert","alert--"+i.infimaClassName,_t)},a.createElement("div",{className:Tt},a.createElement("span",{className:xt},d),c),a.createElement("div",{className:Bt},n))}};function It(e){var t=e.children;return a.createElement(Ze.Zo,{components:Mt},t)}function St(e){var t,n,r,l,o=e.children,i=(t=c(),n=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:n.title);return a.createElement("div",{className:(0,u.Z)(y.k.docs.docMarkdown,"markdown")},i&&a.createElement("header",null,a.createElement(Ce,{as:"h1"},i)),a.createElement(It,null,o))}var jt=n(3651),Ot=n(8596),Ut=n(4996);function zt(e){return a.createElement("svg",(0,m.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Vt={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Pt(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(v.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Dt(e){var t=e.children,n=e.active,r=e.index,l=e.addMicrodata;return a.createElement("li",(0,m.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Rt(){var e=(0,Ut.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(v.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,u.Z)("breadcrumbs__link",Vt.breadcrumbsItemLink),href:e},a.createElement(zt,{className:Vt.breadcrumbHomeIcon})))}function Wt(){var e=(0,jt.s1)(),t=(0,Ot.Ns)();return e?a.createElement("nav",{className:(0,u.Z)(y.k.docs.docBreadcrumbs,Vt.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Rt,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(Dt,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(Pt,{href:t.href,isLast:r},t.label))})))):null}const Ft="docItemContainer_Djhp",qt="docItemCol_VOVn";function Gt(e){var t,n,r,l,o,i,s=e.children,m=(t=c(),n=t.frontMatter,r=t.toc,l=(0,d.i)(),o=n.hide_table_of_contents,i=!o&&r.length>0,{hidden:o,mobile:i?a.createElement(he,null):void 0,desktop:!i||"desktop"!==l&&"ssr"!==l?void 0:a.createElement(ye,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,u.Z)("col",!m.hidden&&qt)},a.createElement(T,null),a.createElement("div",{className:Ft},a.createElement("article",null,a.createElement(Wt,null),a.createElement(x,null),m.mobile,a.createElement(St,null,s),a.createElement(G,null)),a.createElement(g,null))),m.desktop&&a.createElement("div",{className:"col col--3"},m.desktop))}function $t(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(i,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(s,null),a.createElement(Gt,null,a.createElement(n,null))))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>i,q:()=>o});var a=n(7294),r=n(4700),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);