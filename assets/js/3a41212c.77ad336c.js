"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[44440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,p=e.defaultValue,f=e.values,v=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,c.U)(),w=E.tabGroupChoices,N=E.setTabGroupChoices,C=(0,a.useState)(k),O=C[0],Z=C[1],D=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=w[v];null!=x&&x!==O&&h.some((function(e){return e.value===x}))&&Z(x)}var _=function(e){var t=e.currentTarget,n=D.indexOf(t),r=h[n].value;r!==O&&(T(t),Z(r),null!=v&&N(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;n=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var o,l=D.indexOf(e.currentTarget)-1;n=null!=(o=D[l])?o:D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return D.push(e)},onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>c});var r=n(67294),a=n(35742),o=n(14330),l=n(98576),i=n(61720),c=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(63366),a=n(87462),o=n(67294),l=n(10407),i=n(86010),c=(n(95999),n(52263)),s=n(91262),u=n(66412);const d="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleContainer_ZZiH",v="toggleIcon_OnrQ",g="showCode_O0Od";var b=n(72389),h=n(5434),y=["children","transformCode"];function k(){return o.createElement("div",null,"Loading...")}function E(e){var t=(0,b.Z)(),n=(0,o.useContext)(l.L2),r=n.code,i=n.language,c=n.theme,s=n.disabled,u=n.onChange;return o.createElement(l.uz,(0,a.Z)({key:String(t),code:r,language:i,theme:c,disabled:s,onChange:u},e,{className:m}))}function w(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),c=a[0],u=a[1],d=function(){u((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:p},o.createElement(s.Z,{fallback:o.createElement(k,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.i5,null),o.createElement(l.IF,null),o.createElement("div",{className:f},o.createElement("div",{className:(0,i.Z)(v),onClick:d},o.createElement(h.xoN,null),o.createElement("span",{className:g},c?"Hide":"Show"," Code"))))}))),c&&o.createElement(E,{preImports:r,showCode:c}))}function N(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,y)),i=((0,c.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,u.p)());return o.createElement("div",{className:d},o.createElement(l.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:i},n),o.createElement(w,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(32408),o=n(13925),l=n(77321),i=n(83279);const c=Object.assign({React:r,LinearGradient:i.Z},a,o,l,r)},96150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(37047),i=(n(65488),n(85162),n(96711)),c=n(47516),s=["components"],u={id:"dialog_actions",title:"Dialog.Actions"},d=void 0,m={unversionedId:"components/dialog_actions",id:"version-4.0.0-rc.7/components/dialog_actions",title:"Dialog.Actions",description:"Define Dialog Actions using this component.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Dialog.Actions.mdx",sourceDirName:"components",slug:"/components/dialog_actions",permalink:"/docs/components/dialog_actions",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Dialog.Actions.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"dialog_actions",title:"Dialog.Actions"},sidebar:"docs",previous:{title:"Dialog",permalink:"/docs/components/dialog"},next:{title:"Dialog.Button",permalink:"/docs/components/dialog_button"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Define Dialog Actions using this component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"import { Dialog } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(c.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"DialogActions"))),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add Enclosed components as an action to the dialog."))))))}g.isMDXComponent=!0}}]);