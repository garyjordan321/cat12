(self.webpackChunkdtci_abcotv=self.webpackChunkdtci_abcotv||[]).push([[2433],{49470:(e,t,r)=>{var a=r(43693),i=r(74848);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(96540);var n,s=r(53131),c=r(35182),d=r(32485),p=r(5556),u=r(50505),h=r(46046),m=r(71063),b=s.TRUE,g=s.FALSE,f=s.NULL,y=s.emtpyObj,_="center";r(8450),n=c({displayName:"BackgroundImage",propTypes:{altText:p.string,ariaLabel:p.string,children:p.node,className:p.string,disableFocus:p.bool,height:p.oneOfType([p.number,p.string]),href:p.string,linkId:p.string,opacityTime:p.string,ratio:p.string,src:p.string,srcLowRes:p.string,style:p.object,target:p.string,type:p.string,width:p.oneOfType([p.number,p.string]),x:p.string,y:p.string,zoom:p.bool,zoomTime:p.string},mounted:g,getDefaultProps:function(){return{height:f,href:f,disableFocus:g,linkId:f,opacityTime:".5s",ratio:"16x9",src:"",srcLowRes:"",style:y,target:f,type:"div",width:f,x:_,y:_,zoom:b,zoomTime:".25s"}},getInitialState:function(){return{error:g,src:f}},componentDidMount:function(){var e=this||y;e.mounted=b,e.preloadImage()},componentDidUpdate:function(e,t){var r=this||y,a=(r.state||y).error,i=(r.props||y).src;if(!a)return e.src!==i?r.preloadImage():void 0},componentWillUnmount:function(){this.mounted=g},preloadImage:function(){var e,t=this||y,r=t.props||y,a=r.fallbackSrc,i=r.src,l=g;(e=new Image).onload=function(){if(t.mounted)try{t.setState({error:g,src:e.src})}catch(e){}e.onload=e.onerror=f,e=f},e.onerror=function(){t.mounted&&l?(t.setState({error:b}),e.onload=e.onerror=f,e=f):a&&(l=b,e.src=a)},i?e.src=i:a&&(l=b,e.src=a)},render:function(){var e,t,r=this||y,a=r.props||y,l=(r.state||y).src,n=a.altText,s=a.ariaLabel,c=a.children,p=a.className,b=a.disableFocus,g=a.fallbackSrc,_=a.src,P=a.height,v=a.href,j=a.linkId,x=a.ratio,O=a.srcLowRes,w=a.style,k=a.target,I=a.title,M=a.zoomTime,N=a.opacityTime,C=a.type,D=a.width,T=a.x,L=a.y,S=a.zoom,B=C,R={backgroundPosition:"".concat(T," ").concat(L),height:P?"".concat(P,"px"):f,transition:"transform ".concat(M," ease, opacity ").concat(N," ease"),width:D?"".concat(D,"px"):f},E=O&&m({},[R,{backgroundImage:'url("'.concat(O,'")')}]),W=l?m({},[R,{backgroundImage:'url("'.concat(l,'")')}]):y,z=n||I,H={},A="BackgroundImage__Image";return p=d("BackgroundImage",{"BackgroundImage--zoom":S,"BackgroundImage--inline-block":D||P,"BackgroundImage--fallback":l===g},p),e=d("".concat(A," BackgroundImage__Image--lowRes")),t=d("".concat(A," BackgroundImage__Image--highRes"),{"BackgroundImage__Image--visible":l}),!v&&n&&(H={role:"img","aria-label":n}),i.jsxs(B,{className:p,children:[v&&i.jsx(u,{className:"BackgroundImage__Link",href:v,id:j,target:k,"aria-label":s,disableFocus:b,children:(n||I)&&i.jsx("span",{className:"sr-only",children:z})}),i.jsx(h,{ratio:D||P?"auto":x,height:P,width:D,style:w}),E&&i.jsx("span",{className:e,style:E}),_&&i.jsx("span",o({className:t,style:W},H)),c]})}}),e.exports=n},10849:(e,t,r)=>{e.exports=r(49470)},63918:(e,t,r)=>{var a=r(74848),i=r(43693);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(96540);var n=r(35182),s=r(53131),c=r(66290),d=r(32485),p=r(5556),u=r(16570).PropTypes,h=r(10849),m=r(75705),b=r(53025),g=r(35458),f="blackout",y="live",_="video",P=s.cnum,v=c.evtCancel,j=s.emptyObj,x=s.strlc,O=s.TRUE,w=s.FALSE,k=s.UNDEF,I=i(i(i(i({},y,O),f,O),"reair",O),"on demand",O);function M(e){var t,r=e&&e.credit,i=e&&e.description,l=e&&e.subtitle,o=e&&e.title,n=e&&e.renderPill,s=e&&e.renderContinue,c=e&&e.metaLocked,d=e&&e.metaChannel,p=e&&e.metaTag;return(c||d||p?O:w)&&(t=a.jsxs("ul",{className:"MediaPlaceholder__Meta flex items-center",role:"list",children:[c&&a.jsx("li",{className:"MediaPlaceholder__Meta__Item MediaPlaceholder__Meta__Item--icon",role:"listItem",children:a.jsx(b,{icon:"locked"})}),d&&a.jsx("li",{className:"MediaPlaceholder__Meta__Item MediaPlaceholder__Meta__Item--channel",role:"listItem",children:d}),p&&a.jsx("li",{className:"MediaPlaceholder__Meta__Item MediaPlaceholder__Meta__Item--tag",role:"listItem",children:p})]})),o?a.jsxs("figcaption",{className:"MediaPlaceholder__Caption absolute bottom-0 left-0 right-0",children:[s||n,o&&a.jsx("h2",{className:"MediaPlaceholder__Caption__Title",children:o}),l&&a.jsx("h3",{className:"MediaPlaceholder__Caption__SubTitle",children:l}),i&&a.jsx("p",{className:"MediaPlaceholder__Caption__Description",children:i}),r&&a.jsx("div",{className:"MediaPlaceholder__Caption__Credit",children:r}),t]}):null}function N(e){var t=e&&e.ariaHidden||w,r=e&&e.pillAriaLabel||"",i=e&&e.label,l=e&&e.live,o=e&&e.isNew,n=e&&e.blackout,s=e&&e.displayedWithCaption,c=e&&e.continueWatching,p=e&&e.showRedDot,u=e&&e.displayLabelNormal||w,h=d("MediaPlaceholder__Pill  items-center",{"absolute flex":!s,"inline-flex":s,"MediaPlaceholder__Pill--live":!n&&l,"MediaPlaceholder__Pill--reddot":p,"MediaPlaceholder__Pill--new":o,"MediaPlaceholder__Pill--blackout":n&&!l,"MediaPlaceholder__Pill--blackoutlive":n&&l,"MediaPlaceholder__Pill--continue-watching":c,uppercase:(!n&&l||o||n&&!l||n&&l)&&!u});return a.jsx("div",{"aria-hidden":t,"aria-label":r,className:h,children:i})}r(34077);var C=n({displayName:"MediaPlaceholder",render:function(){var e,t,r,i,l,n,c,p=this||j,u=p.props||j,v=(p.context||j).translate||s.passThru,C=u.ariaHidden||w,D=u.ariaLabel,T=C?"":u.altText,L=u.children,S=u.credit,B=u.description,R=u.duration,E=u.pillAriaHidden!==k?u.pillAriaHidden:O,W=u.href,z=u.imgCredit,H=u.imgSrc,A=u.imgDefault,F=u.live,U=u.playlistStatus,K=u.blackout,q=u.isNew,G=u.onClick||null,J=u.onTouchStart||null,Q=u.pillMetaData,V=Q?x(Q.displayType):"",X=I[V],Y=u.scheduled,Z=u.showCaption,$=u.subtitle,ee=u.title,te=u.ratio,re=u.metaLocked,ae=u.metaChannel,ie=u.metaTag,le=u.tabIndex,oe=u.type,ne=u.size,se=u.statusOver,ce=u.useBackgroundImage,de=u.useLazy,pe=u.videoIcon||"controls__play",ue=oe===_?pe:"listen__solid",he=u.buttonDisplay,me=u.timeLeft,be=u.linkId,ge=P(u.progress,0),fe=me||ge||w,ye=d("MediaPlaceholder relative MediaPlaceholder--".concat(te),{"cursor-pointer":!se,"MediaPlaceholder--live":F,"MediaPlaceholder--sm":ne&&"sm"===ne,"MediaPlaceholder--button-hover":he&&"hover"===he},u.className),_e=d("MediaPlaceholder__Icon",{"MediaPlaceholder__Icon--video":oe===_}),Pe=d("MediaPlaceholder__ProgressBar__Container",{"MediaPlaceholder__ProgressBar__Container--relative":Z}),ve=Z,je=u&&u.fallback,xe="MediaPlaceholder__Image",Oe={};if(fe?c=a.jsxs("div",{className:Pe,children:[me&&a.jsx(N,{label:me,continueWatching:O,displayedWithCaption:ve,showRedDot:X}),ge&&a.jsx(g,{now:ge})]}):K?t=a.jsx(N,{label:K,blackout:O,live:F,displayedWithCaption:ve,showRedDot:X}):F?(l=v(u&&u.mediaPillLabel||"Live"),t=a.jsx(N,{label:l,live:O,displayedWithCaption:ve,showRedDot:X})):Y?t=a.jsx(N,{label:Y,displayedWithCaption:ve}):R&&(t=a.jsx(N,{ariaHidden:E,label:R,pillAriaLabel:"Duration: ".concat(R),displayedWithCaption:ve,showRedDot:X})),q&&(l=v(u&&u.mediaPillLabel||"new"),r=a.jsx(N,{label:l,isNew:O,displayedWithCaption:ve,showRedDot:X})),"hide"!==he&&(i=a.jsx("div",{className:"MediaPlaceholder__Button flex flex-center-all",children:a.jsx(b,{icon:ue,className:_e,focusable:w,ariaHidden:O,ariaLabel:D})})),Q){var we=Q.displayText,ke=Q.displayLabelNormal,Ie=V===f,Me=V===y;t=a.jsx(N,{ariaHidden:!!R,blackout:Ie,live:Me,isNew:q,label:we,displayedWithCaption:ve,displayLabelNormal:ke,showRedDot:X})}return e=a.jsx(M,{title:ee,subtitle:$,description:B,credit:S,renderContinue:c,renderPill:t,renderNewPill:r,metaLocked:re,metaChannel:ae,metaTag:ie}),n=ce?a.jsx(h,{altText:T,className:xe,disableFocus:O,href:W,ratio:te,src:H,srcLowRes:H,title:ee}):a.jsx(m,{ariaHidden:C,className:xe,href:W,src:H,srcDefault:A,alt:T,credit:z,ratio:te,fallback:je,useLazy:de}),Oe["aria-hidden"]=C,le!==k&&(Oe.tabIndex=le),a.jsxs("div",o(o({className:ye,onClick:G,onTouchStart:J},Oe),{},{onKeyPress:p.onKeyPress,"data-track-linkid":be,children:[n,a.jsxs("div",{className:"MediaPlaceholder__Overlay absolute-fill flex flex-center-all",children:[U&&a.jsx("div",{className:"MediaPlaceholder__PlaylistStatus",children:U}),r,i,!Z&&c,!Z&&t,Z&&e]}),a.jsx("div",{className:"MediaPlaceholder__PlaybackWrapper absolute-fill"}),L]}))},handleError:function(e){this.setState({errored:O})},getInitialState:function(){return{errored:w}},componentDidUpdate:function(e){this.props.onClick!==e.onClick&&this.state.errored&&this.setState({errored:w})},getDefaultProps:function(){return{live:w,displayedWithCaption:w,showCaption:w,ratio:"16x9",type:_}},onKeyPress:function(e){var t=(this.props||j).onClick,r=e||j,a=r.key;(t&&" "===a||"Enter"===a)&&(t(),v(r))},contextTypes:{translate:p.func},propTypes:{onClick:function(e){return"function"==typeof e},altText:p.string,ariaHidden:p.bool,ariaLabel:p.string,blackout:p.string,buttonDisplay:p.string,children:p.oneOfType([p.arrayOf(p.node),p.node]),className:p.string,credit:p.string,description:p.string,duration:p.string,href:p.string,videoIcon:p.string,imgCredit:p.string,imgDefault:p.string,imgSrc:p.oneOfType([p.array,u.observableArray,p.string]),live:p.bool,playlistStatus:p.string,scheduled:p.string,showCaption:p.bool,statusOver:p.bool,subtitle:p.string,title:p.string.isRequired,ratio:p.string,tabIndex:p.number,type:p.string,useBackgroundImage:p.bool,timeLeft:p.string,pillAriaHidden:p.bool,progress:p.oneOfType([p.number,p.string])}});e.exports=C},2433:(e,t,r)=>{e.exports=r(63918)},4658:(e,t,r)=>{var a=r(43693),i=r(74848);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var n=r(96540).cloneElement,s=r(5556),c=r(53131),d=r(55378),p=c.omit,u=r(32485),h=1e3,m=["className","children","isChild","min","max","now","striped"];function b(e){var t=e.now,r=e.min,a=e.max,l=e.label,o=e.striped,n=e.variant,s=u("ProgressBar",n&&"ProgressBar--".concat(n),{"ProgressBar--striped":o}),c="".concat(function(e,t,r){var a=r-t;if(0===a)return 0;var i=(e-t)/a*100;return Math.round(i*h)/h}(t,r,a),"%"),d={width:c,"--ProgressBar-width":c};return i.jsx("div",{className:s,style:d,role:"progressbar","aria-valuenow":t,"aria-valuemin":r,"aria-valuemax":a,"aria-label":l,tabIndex:0})}function g(e,t){return n(e,{isChild:!0,key:t})}function f(e){var t=e||c.emptyObj,r=t.isChild,a=t.children,l=u("ProgressBar__parent",t.className),n=p(t,m);return r?b(t):i.jsx("div",o(o({className:l},n),{},{children:a?d(a,g):b(t)}))}r(63409),f.defaultProps={min:0,max:100,now:0,striped:!1,isChild:!1},f.propTypes={min:s.number,max:s.number,now:s.number,striped:s.bool,label:s.string},e.exports=f},35458:(e,t,r)=>{e.exports=r(4658)},8450:(e,t,r)=>{"use strict";r.r(t)},34077:(e,t,r)=>{"use strict";r.r(t)},63409:(e,t,r)=>{"use strict";r.r(t)}}]);