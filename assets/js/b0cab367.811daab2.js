"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5296,3722],{71871:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15236:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),r=n(67294),o=n(5730),i=n(34875),l=n(86010);const s="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,A=e.className,C=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:C.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=C.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=C[0])?void 0:o.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var D=(0,i.UB)(),y=D.tabGroupChoices,h=D.setTabGroupChoices,b=(0,r.useState)(g),E=b[0],B=b[1],F=[],k=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==E&&f.some((function(e){return e.value===T}))&&B(T)}var w=function(e){var t=e.currentTarget,n=F.indexOf(t),a=f[n].value;a!==E&&(k(t),B(a),null!=m&&h(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;n=F[a]||F[0];break;case"ArrowLeft":var r=F.indexOf(e.currentTarget)-1;n=F[r]||F[F.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},A)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return F.push(e)},onKeyDown:x,onFocus:w,onClick:w},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(C.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},91005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"component_usage/Card",id:"version-4.0.0-rc.1/component_usage/Card",title:"Card",description:"",source:"@site/versioned_docs/version-4.0.0-rc.1/component_usage/Card.mdx",sourceDirName:"component_usage",slug:"/component_usage/Card",permalink:"/docs/component_usage/Card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/component_usage/Card.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Card","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%2C%20Image%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Card%2C%20Button%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20users%20%3D%20%5B%0A%7B%0A%20%20name%3A%20'brynn'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F1H_7AxP0.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'thot%20leader'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages.pexels.com%2Fphotos%2F598745%2Fpexels-photo-598745.jpeg%3Fcrop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26auto%3Dcompress%26cs%3Dtinysrgb'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'jsa'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FbUkmHPKs.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'talhaconcepts'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F4.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'andy%20vitale'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FNY9hnAbp.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'katy%20friedson'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FM%2FMV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE%40._V1_UY256_CR16%2C0%2C172%2C256_AL_.jpg'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20CardsComponentsProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Cards%3A%20React.FunctionComponent%3CCardsComponentsProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3ECARD%20WITH%20DIVIDER%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7Busers.map((u%2C%20i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20key%3D%7Bi%7D%20style%3D%7Bstyles.user%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.image%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20u.avatar%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.name%7D%3E%7Bu.name%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%20containerStyle%3D%7B%7B%20marginTop%3A%2015%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EFONTS%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h1%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h2%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h2%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h3%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h3%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h4%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h4%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%3ENormal%20Text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EHELLO%20WORLD%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Image%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20padding%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20marginBottom%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20idea%20with%20React%20Native%20Elements%20is%20more%20about%20component%0A%20%20%20%20%20%20%20%20%20%20%20%20structure%20than%20actual%20design.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22code%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23ffffff%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginLeft%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22VIEW%20NOW%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Afonts%3A%20%7B%0A%20%20marginBottom%3A%208%2C%0A%7D%2C%0Auser%3A%20%7B%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginBottom%3A%206%2C%0A%7D%2C%0Aimage%3A%20%7B%0A%20%20width%3A%2030%2C%0A%20%20height%3A%2030%2C%0A%20%20marginRight%3A%2010%2C%0A%7D%2C%0Aname%3A%20%7B%0A%20%20fontSize%3A%2016%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Cards%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0},29433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>A,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(15236),n(71871),n(33671),n(91005)),l=["components"],s={id:"card",title:"Card"},c=void 0,u={unversionedId:"components/card",id:"version-4.0.0-rc.1/components/card",title:"Card",description:"Cards are a great way to display information, usually containing content and actions about a single subject.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/Card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/docs/components/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/Card.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"card",title:"Card"},sidebar:"docs",previous:{title:"ButtonGroup",permalink:"/docs/components/buttongroup"},next:{title:"Card.Divider",permalink:"/docs/components/card_divider"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],m={toc:p};function A(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cards are a great way to display information, usually containing content and actions about a single subject.\nCards can contain images, buttons, text and more.\nCards are mainly used for informative purpose."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.default,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Outer container style.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Inner container style."))))))}A.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,A=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(A,i(i({ref:t},u),{},{components:n})):a.createElement(A,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);