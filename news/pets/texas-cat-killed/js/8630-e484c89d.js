(self.webpackChunkdtci_abcotv=self.webpackChunkdtci_abcotv||[]).push([[8630],{54317:(e,t,i)=>{var o=i(43693),r=i(74848);function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}i(96540);var a,s=i(35182),l=i(5556),c=i(33011);i(96398),(a=s({displayName:"FeaturedImage",render:function(){var e=(this||{}).props||{};return r.jsx(c,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e))}})).contextTypes={theme:l.string},a.defaultProps={truncateText:"...",lines:2,showMore:!1,showMoreText:"Read More"},a.propTypes={className:l.string,imageSrc:l.oneOfType([l.string,l.array,l.object]),imageAlt:l.string,imageSrcDefault:l.string,caption:l.string,sourceLogo:l.string,sourceTitle:l.string,sourceLogoAlt:l.string,showMore:l.bool,showMoreText:l.string,align:l.string,truncateText:l.string,lines:l.number,useHorizontalRule:l.string},e.exports=a},45376:(e,t,i)=>{e.exports=i(54317)},48589:(e,t,i)=>{var o,r=i(74848),n=i(96540),a=i(35182),s="FeaturedMedia",l=i(53131).empty,c=i(8741).getNewsArticleVideoJSONLD,d=i(45376),g=i(66457),u=i(32485),m="9x16";i(7230),o=a({displayName:s,componentName:s,render:function(){var e=this.props,t=e&&e.schemaVideoContent,i=e&&e.constants,o=e&&e.video,a=e&&e.image,s=e&&e.layoutSize,p=e&&e.windowWidth,h=e&&e.useLazy,b=e&&e.showMoreText,x=a&&a.altText,T=a&&a.caption,y=a&&a.ratio,S=a&&a.subTitle,w=e&&e.sourceLogo||"",f=e&&e.sourceLogoAlt,L=e&&e.sourceTitle,v=e&&e.isFeaturedPlaying,z=e&&e.buttonDisplay,M=e&&e.lines,E=a&&a.credit,j=a&&a.imgSrc,I=a&&a.srcDefault,R=e&&e.title||o&&o.title||"",H=e&&e.description||o&&o.description,D=o&&o.duration,P=o&&o.live,A=o&&o.mediaPillLabel,N=!l(o),O=e&&e.handleVideoClick,V=u("FeaturedMedia",{FeaturedMedia_1x1:"1x1"===y,FeaturedMedia_9x16:y===m}),B=u("FeaturedVideo",{FeaturedVideo_1x1:"1x1"===y,FeaturedVideo_9x16:y===m}),W=r.jsx(d,{imageAlt:x,imageSrc:j,imageSrcDefault:I,caption:T,sourceLogo:w,sourceLogoAlt:f,sourceTitle:L||E,className:E,showMoreText:b}),k=N&&r.jsxs(n.Fragment,{children:[t&&r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:"".concat(c(t,i))}}),r.jsx("div",{className:V,children:r.jsx(g,{imgSrc:j,imgDefault:I,title:R,subTitle:S,description:H||T,sourceLogo:w,sourceLogoAlt:f,sourceTitle:L,credit:E,isPlaying:v,duration:D,ratio:y,aspectRatio:y,layoutSize:s,live:P,lines:M,mediaPillLabel:A,className:B,useLazy:h,windowWidth:p,showMoreText:b,buttonDisplay:z,toggleVideo:O,videoTabIndex:0})})]});return r.jsx("div",{children:N?k:W})}}),e.exports=o},81055:(e,t,i)=>{e.exports=i(48589)},52421:(e,t,i)=>{var o=i(74848),r=(i(96540),i(32485)),n=i(5556),a=i(23671),s=i(88364),l="DESKTOP",c="TABLET",d="MOBILE",g=a.THEMES.DARK;function u(e,t){var i,n=(t&&t.theme||"")===g,a=e&&e.className,s=e&&e.belowHeader,u=e&&e.belowParagraph,m=e&&e.aboveHeader,p=e&&e.align,h=e&&e.layoutSize,b=h&&h===d,x=h&&h===c,T=h&&h===l,y=e&&e.children||null,S=e&&e.useHorizontalRule,w=o.jsx("hr",{className:"InlineElement--hr"}),f="top"===S||"both"===S,L="bottom"===S||"both"===S,v=e&&e.ariaLabel,z=e&&e.ariaLive,M=e&&e.embeddedWidth;return a=r("InlineElement",{"InlineElement--dark":n,"InlineElement--left":"left"==p,"InlineElement--right":"right"==p,"InlineElement--large":"large"==p,"InlineElement--below-header":"source"==v&&s,"InlineElement--below-paragraph":("source"==v||"markup"==v||"Image"==v)&&u,"InlineElement--page-width":"pageWidth"==p,"InlineElement--browser-width":"browserWidth"==p,"InlineElement--content-width":"contentWidth"==p||"full"==p,"InlineElement--above-header":m,"InlineElement--mobile":b,"InlineElement--tablet":x,"InlineElement--desktop":T},a),M&&b&&(i={width:M+"px"}),o.jsxs("aside",{className:a,"aria-label":v||null,"aria-live":z||null,style:i,children:[f&&w,y,L&&w]})}i(68806),u.contextTypes={theme:n.string},u.defaultProps={layoutSize:"DESKTOP",align:"contentWidth"},u.propTypes={className:n.string,align:n.string,belowHeader:n.bool,belowParagraph:n.bool,useHorizontalRule:n.string,layoutSize:n.string,embeddedWidth:n.number},e.exports=s(u,{breakpoint:[l,c,d]})},77036:(e,t,i)=>{e.exports=i(52421)},31889:(e,t,i)=>{var o=i(74848),r=(i(96540),i(5556)),n=i(32485),a=i(53131),s=i(58156),l=i(77036),c=i(43276),d=i(31861),g=i(75705),u=i(43132),m=d(g),p=d(u),h=i(23671),b=a.emptyObj,x=a.TRUE,T=a.FALSE,y=a.passThru,S=a.strlc,w=h.THEMES.DARK,f="auto";function L(e,t){var i=s(t,"context.translate",y),r=e||b,a=r.align,d=r.ariaHidden,g=r.ariaLabel||i("Image"),u=r.belowHeader,h=r.belowParagraph,L=r.caption,v=r.credit||"",z=r.disableRichText,M=r.elementType,E=r.hasCopyright,j=r.headline,I=r.hideEndBug,R=r.href,H=r.imageAlt,D=r.imageSrc,P=r.imageSrcDefault,A=r.lines,N=r.positionMetaBottom,O=r.showMoreText,V=r.sourceLogo,B=r.sourceLogoAlt,W=r.sourceLogoSize,k=r.sourceTitle,_=S(r.theme)||t.theme,F=r.truncateText,C=r.useHorizontalRule,K=r.useServerSanitizeText,U=r.windowWidth,q=_===w,J=L||v||j||k?x:T,G=n("InlineImage",r.className,{"InlineImage--dark":q}),Q=r.deferImages,X=Q?p:m;return o.jsx(l,{align:a,belowHeader:u,belowParagraph:h,className:G,useHorizontalRule:C,windowWidth:U,ariaLabel:g&&!d?g:null,children:o.jsx(X,{className:"InlineImage--image",hasCopyright:E,src:D,srcDefault:P,alt:H,ratio:f,figure:J,href:R,useLazy:Q,children:J&&o.jsx(c,{credit:v,disableRichText:z,elementType:M,hideEndBug:I,lines:A,logoAlt:B,logoSize:W,logoSrc:V,meta:k,positionMetaBottom:N,showMoreText:O,text:L,theme:_,title:j,truncateText:F,useServerSanitizeText:K,windowWidth:U})})})}i(59706),L.contextTypes={theme:r.string,translate:r.func},L.defaultProps={aspectRatio:f,lines:2,showMoreText:"Read More",sourceLogoSize:"xs",truncateText:"..."},L.propTypes={align:r.string,ariaHidden:r.bool,aspectRatio:r.string,belowHeader:r.bool,belowParagraph:r.bool,caption:r.string,className:r.string,credit:r.string,deferImages:r.bool,elementType:r.string,hideEndBug:r.bool,href:r.string,imageAlt:r.string.isRequired,imageSrc:r.oneOfType([r.string,r.array,r.object]).isRequired,imageSrcDefault:r.string,lines:r.number,positionMetaBottom:r.bool,showMoreText:r.string,sourceLogo:r.string,sourceLogoAlt:r.string,sourceLogoSize:r.string,sourceTitle:r.string,theme:r.string,truncateText:r.string,useHorizontalRule:r.string,disableRichText:r.bool,useServerSanitizeText:r.bool,windowWidth:r.number},e.exports=L},33011:(e,t,i)=>{e.exports=i(31889)},61929:(e,t,i)=>{var o=i(74848),r=(i(96540),i(5556)),n=i(32485),a=i(53131),s=i(77036),l=i(7403),c=i(23671),d=a.emptyObj,g=a.FALSE,u=a.passThru,m=a.strlc,p=c.THEMES.DARK,h="9x16";function b(e,t){var i=e||d,r=t||d,a=m(i.theme)||r.theme,c=r.translate||u,g=i.align,b=i.ariaHidden,x=i.ariaLabel||c("Video"),T=i.credit,y=i.description,S=i.disableRichText,w=i.duration,f=i.elementType,L=i.fallback,v=i.imgDefault,z=i.imgSrc,M=i.isPlaying,E=i.layoutSize,j=i.lines,I=i.live,R=i.MediaComponent,H=i.mediaPillLabel,D=i.positionMetaBottom,P=i.showMoreText,A=i.sourceLogo,N=i.sourceLogoAlt,O=i.sourceLogoSize,V=i.sourceTitle,B=i.subTitle,W=i.title,k=i.toggleVideo,_=i.truncateText,F=i.useHorizontalRule,C=i.useLazy,K=i.useServerSanitizeText,U=i.windowWidth,q=i.aspectRatio,J=i.ratio||q,G=i.buttonDisplay,Q=i.videoTabIndex,X=a===p,Y=T&&!M,Z=n("InlineVideo",i.className,{"InlineVideo--dark":X}),$=n("",{"height-contain":h===J,ratio_1x1:"1x1"===q,ratio_9x16:q===h});return o.jsx(s,{align:g,className:Z,layoutSize:E,useHorizontalRule:F,windowWidth:U,ariaLabel:!b&&x?x:null,children:o.jsx(l,{ariaHidden:b,className:$,credit:Y&&T,description:y,duration:w,elementType:f,fallback:L,imgDefault:v,imgSrc:z,lines:j,live:I,logoAlt:N,logoSize:O,logoSrc:A,MediaComponent:R,mediaPillLabel:H,positionMetaBottom:D,ratio:J,showMoreText:P,sourceTitle:V,subtitle:B,text:y,theme:a,title:W,toggleVideo:k,truncateText:_,disableRichText:S,useServerSanitizeText:K,windowWidth:U,useLazy:C,buttonDisplay:G,videoTabIndex:Q})})}i(65546),b.contextTypes={theme:r.string,translate:r.func},b.defaultProps={aspectRatio:"16x9",lines:2,live:g,showMoreText:"Read More",sourceLogoSize:"xs",truncateText:"..."},b.propTypes={align:r.string,ariaHidden:r.bool,className:r.string,credit:r.string,description:r.string,duration:r.string,elementType:r.string,imgDefault:r.string,imgSrc:r.oneOfType([r.string,r.array,r.object]),lines:r.number,MediaComponent:r.elementType,positionMetaBottom:r.bool,ratio:r.string,showMoreText:r.string,sourceLogo:r.string,sourceLogoAlt:r.string,sourceLogoSize:r.string,sourceTitle:r.string,subTitle:r.string,theme:r.string,title:r.string,toggleVideo:r.func,truncateText:r.string,useHorizontalRule:r.string,disableRichText:r.bool,useServerSanitizeText:r.bool,windowWidth:r.number,videoTabIndex:r.number},e.exports=b},66457:(e,t,i)=>{e.exports=i(61929)},43132:(e,t,i)=>{var o=i(30986),r=i(68042);e.exports=r(o,{offsetBottom:750})},81262:(e,t,i)=>{var o=i(74848),r=(i(96540),i(5556)),n=i(32485),a=i(53131),s=i(2433),l=i(43276),c=i(23671),d=a.emptyObj,g=a.FALSE,u=a.strlc,m=c.THEMES.DARK,p=a.TRUE;function h(e,t){var i=t||d,r=e||d,a=r.alignHeading,c=r.className,g=r.credit,h=r.description,b=r.disableRichText,x=r.duration,T=r.elementType,y=r.fallback,S=r.heading,w=r.hideEndBug,f=r.imgDefault,L=r.imgSrc,v=r.isPlaying,z=r.lines,M=r.live,E=r.mediaPillLabel,j=r.positionMetaBottom,I=r.ratio,R=r.showMoreText,H=r.sourceLogo,D=r.sourceLogoAlt,P=r.sourceLogoSize,A=r.sourceTitle,N=r.subTitle,O=u(r.theme)||i.theme,V=r.title,B=r.truncateText,W=r.useLazy,k=r.useServerSanitizeText,_=r.windowWidth,F=r.buttonDisplay,C=r.videoTabIndex,K=O===m,U=g&&!v,q=r.toggleVideo,J=n("SingleVideo",c),G=n("SingleVideo__Heading",{"SingleVideo__Heading--left":"left"===a,"SingleVideo__Heading--dark":K}),Q=r.MediaComponent||s;return o.jsxs("div",{className:J,children:[S&&o.jsx("div",{className:G,children:S}),o.jsx(Q,{className:c,description:h,duration:x,fallback:y,imgDefault:f,imgSrc:L,live:M,mediaPillLabel:E,onClick:q,ratio:I,subtitle:N,title:V,useLazy:W,buttonDisplay:F,tabIndex:C}),(V||h||U||A)&&o.jsx(l,{credit:U&&g,disableRichText:b,elementType:T,hideEndBug:w,lines:z,logoAlt:D,logoSize:P,logoSrc:H,meta:A,positionMetaBottom:j,showMoreText:R,text:h,theme:O,title:V,titleAriaHidden:p,truncateText:B,useServerSanitizeText:k,windowWidth:_})]})}i(40221),h.contextTypes={theme:r.string},h.defaultProps={lines:2,live:g,ratio:"16x9",showMoreText:"Read More",sourceLogoSize:"xs",truncateText:"..."},h.propTypes={alignHeading:r.string,className:r.string,credit:r.string,description:r.string,disableRichText:r.bool,duration:r.string,elementType:r.string,imgDefault:r.string,imgSrc:r.oneOfType([r.string,r.array,r.object]),lines:r.number,MediaComponent:r.elementType,positionMetaBottom:r.bool,ratio:r.string,showMoreText:r.string,sourceLogo:r.string,sourceLogoAlt:r.string,sourceLogoSize:r.string,sourceTitle:r.string,subTitle:r.string,theme:r.string,title:r.string,toggleVideo:r.func,truncateText:r.string,useServerSanitizeText:r.bool,windowWidth:r.number,videoTabIndex:r.number},e.exports=h},7403:(e,t,i)=>{e.exports=i(81262)},68042:(e,t,i)=>{e.exports=i(52572)},52572:(e,t,i)=>{var o=i(74848),r=i(96540).createElement,n=i(35182),a=i(53131),s=i(71063),l=i(58156),c=i(82561),d=a.emptyObj,g=a.FALSE,u=a.TRUE;e.exports=function(e,t){var i="withLazyLoadInView_"+(e.displayName||e.componentName||e.name||"AnonymousComponent"),a=t||d,m=a.threshold||0,p=a.offsetBottom||300;return n({displayName:i,getInitialState:function(){return{useLazy:u}},render:function(){var t=this,i=l(t,"state.useLazy"),n=s({},t.props),a=t.onEnter,d=n.children;return n.useLazy=i,n.startLoading=!i,d&&delete n.children,o.jsxs(o.Fragment,{children:[o.jsx(c,{dontSpy:!i,onEnter:a,onEnterTop:a,threshold:m,offsetBottom:p}),r(e,n,d)]})},onEnter:function(){this.setState({useLazy:g})}})}},96398:(e,t,i)=>{"use strict";i.r(t)},7230:(e,t,i)=>{"use strict";i.r(t)},68806:(e,t,i)=>{"use strict";i.r(t)},59706:(e,t,i)=>{"use strict";i.r(t)},65546:(e,t,i)=>{"use strict";i.r(t)},40221:(e,t,i)=>{"use strict";i.r(t)}}]);