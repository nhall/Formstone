/*! Formstone v0.0.1 [lightbox.js] 2014-12-03 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){a.formatter=n,this.on(L.click,a,g)}function e(){i(),this.off(L.namespace)}function f(b,c){b instanceof a&&g.apply(N,[{data:a.extend({},{$object:b},I,c||{})}])}function g(c){if(!Q){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",j=e&&e[0].hash?e[0].hash||"":"",k=g.toLowerCase().split(".").pop().split(/\#|\?/),m=k[0],n=e?e.data(J.raw.namespace+"-type"):"",p="image"===n||a.inArray(m,d.extensions)>-1||"data:image"===g.substr(0,10),q=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,s="url"===n||!p&&!q&&"http"===g.substr(0,4)&&!j,t="element"===n||!p&&!q&&!s&&"#"===j.substr(0,1),A="undefined"!=typeof f;if(t&&(g=j),!(p||q||s||t||A))return;if(M.killEvent(c),Q=a.extend({},{visible:!1,resizeTimer:null,touchTimer:null,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),Q.margin*=2,Q.type=p?"image":q?"video":"element",p||q){var B=e.data("gallery");B&&(Q.gallery.active=!0,Q.gallery.id=B,Q.gallery.$items=a("a[data-gallery= "+Q.gallery.id+"], a[rel= "+Q.gallery.id+"]"),Q.gallery.index=Q.gallery.$items.index(Q.$el),Q.gallery.total=Q.gallery.$items.length-1)}var C="";Q.isMobile||(C+='<div class="'+[J.raw.overlay,Q.customClass].join(" ")+'"></div>');var D=[J.raw.base,J.raw.loading,J.raw.animating,Q.customClass];Q.fixed&&D.push(J.raw.fixed),Q.isMobile&&D.push(J.raw.mobile),s&&D.push(J.raw.iframed),(t||A)&&D.push(J.raw.inline),C+='<div class="'+D.join(" ")+'">',C+='<span class="'+J.raw.close+'">'+Q.labels.close+"</span>",C+='<span class="'+J.raw.loading_icon+'"></span>',C+='<div class="'+J.raw.container+'">',C+='<div class="'+J.raw.content+'">',(p||q)&&(C+='<div class="'+J.raw.meta+'">',Q.gallery.active&&(C+='<div class="'+[J.raw.control,J.raw.control_previous].join(" ")+'">'+Q.labels.previous+"</div>",C+='<div class="'+[J.raw.control,J.raw.control_next].join(" ")+'">'+Q.labels.next+"</div>",C+='<p class="'+J.raw.position+'"',Q.gallery.total<1&&(C+=' style="display: none;"'),C+=">",C+='<span class="'+J.raw.position_current+'">'+(Q.gallery.index+1)+"</span> ",C+=Q.labels.count,C+=' <span class="'+J.raw.position_total+'">'+(Q.gallery.total+1)+"</span>",C+="</p>"),C+='<div class="'+J.raw.caption+'">',C+=Q.formatter.call(e,d),C+="</div></div>"),C+="</div></div></div>",P.append(C),Q.$overlay=a(J.overlay),Q.$lightbox=a(J.base),Q.$close=a(J.close),Q.$container=a(J.container),Q.$content=a(J.content),Q.$meta=a(J.meta),Q.$position=a(J.position),Q.$caption=a(J.caption),Q.$controls=a(J.control),Q.paddingVertical=Q.isMobile?Q.$close.outerHeight()/2:parseInt(Q.$lightbox.css("paddingTop"),10)+parseInt(Q.$lightbox.css("paddingBottom"),10),Q.paddingHorizontal=Q.isMobile?0:parseInt(Q.$lightbox.css("paddingLeft"),10)+parseInt(Q.$lightbox.css("paddingRight"),10),Q.contentHeight=Q.$lightbox.outerHeight()-Q.paddingVertical,Q.contentWidth=Q.$lightbox.outerWidth()-Q.paddingHorizontal,Q.controlHeight=Q.$controls.outerHeight(),l(),Q.gallery.active&&v(),O.on(L.resize,h).on(L.keyDown,w),P.on(L.clickTouchStart,[J.overlay,J.close].join(", "),i).on(L.touchMove,M.killEvent),Q.gallery.active&&Q.$lightbox.on(L.clickTouchStart,J.control,u),Q.$lightbox.transition({property:"opacity"},function(){p?o(g):q?r(g):s?y(g):t?x(g):A&&z(Q.$object)}),P.addClass(J.raw.open)}}function h(a){"object"!=typeof a&&(Q.targetHeight=arguments[0],Q.targetWidth=arguments[1]),"element"===Q.type?A(Q.$content.find("> :first-child")):"image"===Q.type?p():"video"===Q.type&&s(),k()}function i(a){M.killEvent(a),Q&&(Q.$lightbox.transition({property:"opacity"},function(){Q.$lightbox.off(L.namespace),Q.$container.off(L.namespace),O.off(L.namespace),P.off(L.namespace),Q.$overlay.remove(),Q.$lightbox.remove(),Q=null,O.trigger(L.close)}).addClass(J.raw.animating),P.removeClass(J.raw.open),M.clearTimer(Q.resizeTimer))}function j(){{var a=m();Q.isMobile?0:Q.duration}Q.isMobile||Q.$controls.css({marginTop:(Q.contentHeight-Q.controlHeight-Q.metaHeight)/2}),!Q.visible&&Q.isMobile&&Q.gallery.active&&Q.$content.on(L.touchStart,J.image,C),(Q.isMobile||Q.fixed)&&P.addClass(J.raw.open),Q.$lightbox.transition({property:"height"},function(){Q.$container.transition({property:"opacity"},function(){Q.$lightbox.removeClass(J.raw.animating),Q.isAnimating=!1}),Q.$lightbox.removeClass(J.raw.loading),Q.visible=!0,O.trigger(L.open),Q.gallery.active&&t()}),Q.isMobile||Q.$lightbox.css({height:Q.contentHeight+Q.paddingVertical,width:Q.contentWidth+Q.paddingHorizontal,top:Q.fixed?0:a.top});var b=Q.oldContentHeight!==Q.contentHeight||Q.oldContentWidth!==Q.contentWidth;(Q.isMobile||!b)&&Q.$lightbox.transition("resolve"),Q.oldContentHeight=Q.contentHeight,Q.oldContentWidth=Q.contentWidth}function k(){if(Q.visible&&!Q.isMobile){var a=m();Q.$controls.css({marginTop:(Q.contentHeight-Q.controlHeight-Q.metaHeight)/2}),Q.$lightbox.css({height:Q.contentHeight+Q.paddingVertical,width:Q.contentWidth+Q.paddingHorizontal,top:Q.fixed?0:a.top})}}function l(){var a=m();Q.$lightbox.css({top:Q.fixed?0:a.top})}function m(){if(Q.isMobile)return{left:0,top:0};var a={left:(O.width()-Q.contentWidth-Q.paddingHorizontal)/2,top:Q.top<=0?(O.height()-Q.contentHeight-Q.paddingVertical)/2:Q.top};return Q.fixed!==!0&&(a.top+=O.scrollTop()),a}function n(){var a=this.attr("title");return a!==c&&""!==a.trim()?'<p class="caption">'+a.trim()+"</p>":""}function o(b){Q.$image=a("<img>"),Q.$image.one(L.load,function(){var a=F(Q.$image);Q.naturalHeight=a.naturalHeight,Q.naturalWidth=a.naturalWidth,Q.retina&&(Q.naturalHeight/=2,Q.naturalWidth/=2),Q.$content.prepend(Q.$image),""===Q.$caption.html()?Q.$caption.hide():Q.$caption.show(),p(),j()}).error(B).attr("src",b).addClass(J.raw.image),(Q.$image[0].complete||4===Q.$image[0].readyState)&&Q.$image.trigger(L.load)}function p(){var a=0;for(Q.windowHeight=Q.viewportHeight=O.height()-Q.paddingVertical,Q.windowWidth=Q.viewportWidth=O.width()-Q.paddingHorizontal,Q.contentHeight=1/0,Q.contentWidth=1/0,Q.imageMarginTop=0,Q.imageMarginLeft=0;Q.contentHeight>Q.viewportHeight&&2>a;)Q.imageHeight=0===a?Q.naturalHeight:Q.$image.outerHeight(),Q.imageWidth=0===a?Q.naturalWidth:Q.$image.outerWidth(),Q.metaHeight=0===a?0:Q.metaHeight,0===a&&(Q.ratioHorizontal=Q.imageHeight/Q.imageWidth,Q.ratioVertical=Q.imageWidth/Q.imageHeight,Q.isWide=Q.imageWidth>Q.imageHeight),Q.imageHeight<Q.minHeight&&(Q.minHeight=Q.imageHeight),Q.imageWidth<Q.minWidth&&(Q.minWidth=Q.imageWidth),Q.isMobile?(Q.$meta.css({width:Q.windowWidth}),Q.metaHeight=Q.$meta.outerHeight(!0),Q.contentHeight=Q.viewportHeight-Q.paddingVertical,Q.contentWidth=Q.viewportWidth-Q.paddingHorizontal,q(),Q.imageMarginTop=(Q.contentHeight-Q.targetImageHeight-Q.metaHeight)/2,Q.imageMarginLeft=(Q.contentWidth-Q.targetImageWidth)/2):(0===a&&(Q.viewportHeight-=Q.margin+Q.paddingVertical,Q.viewportWidth-=Q.margin+Q.paddingHorizontal),Q.viewportHeight-=Q.metaHeight,q(),Q.contentHeight=Q.targetImageHeight,Q.contentWidth=Q.targetImageWidth),Q.$meta.css({width:Q.contentWidth}),Q.$image.css({height:Q.targetImageHeight,width:Q.targetImageWidth,marginTop:Q.imageMarginTop,marginLeft:Q.imageMarginLeft}),Q.isMobile||(Q.metaHeight=Q.$meta.outerHeight(!0),Q.contentHeight+=Q.metaHeight),a++}function q(){var a=Q.isMobile?Q.contentHeight-Q.metaHeight:Q.viewportHeight,b=Q.isMobile?Q.contentWidth:Q.viewportWidth;Q.isWide?(Q.targetImageWidth=b,Q.targetImageHeight=Q.targetImageWidth*Q.ratioHorizontal,Q.targetImageHeight>a&&(Q.targetImageHeight=a,Q.targetImageWidth=Q.targetImageHeight*Q.ratioVertical)):(Q.targetImageHeight=a,Q.targetImageWidth=Q.targetImageHeight*Q.ratioVertical,Q.targetImageWidth>b&&(Q.targetImageWidth=b,Q.targetImageHeight=Q.targetImageWidth*Q.ratioHorizontal)),(Q.targetImageWidth>Q.imageWidth||Q.targetImageHeight>Q.imageHeight)&&(Q.targetImageHeight=Q.imageHeight,Q.targetImageWidth=Q.imageWidth),(Q.targetImageWidth<Q.minWidth||Q.targetImageHeight<Q.minHeight)&&(Q.targetImageWidth<Q.minWidth?(Q.targetImageWidth=Q.minWidth,Q.targetImageHeight=Q.targetImageWidth*Q.ratioHorizontal):(Q.targetImageHeight=Q.minHeight,Q.targetImageWidth=Q.targetImageHeight*Q.ratioVertical))}function r(b){Q.$videoWrapper=a('<div class="'+J.raw.videoWrapper+'"></div>'),Q.$video=a('<iframe class="'+J.raw.video+'" seamless="seamless"></iframe>'),Q.$video.attr("src",b).addClass(J.raw.video).prependTo(Q.$videoWrapper),Q.$content.prepend(Q.$videoWrapper),s(),j()}function s(){Q.windowHeight=Q.viewportHeight=Q.contentHeight=O.height()-Q.paddingVertical,Q.windowWidth=Q.viewportWidth=Q.contentWidth=O.width()-Q.paddingHorizontal,Q.videoMarginTop=0,Q.videoMarginLeft=0,Q.isMobile?(Q.$meta.css({width:Q.windowWidth}),Q.metaHeight=Q.$meta.outerHeight(!0),Q.viewportHeight-=Q.metaHeight,Q.targetVideoWidth=Q.viewportWidth,Q.targetVideoHeight=Q.targetVideoWidth*Q.videoRatio,Q.targetVideoHeight>Q.viewportHeight&&(Q.targetVideoHeight=Q.viewportHeight,Q.targetVideoWidth=Q.targetVideoHeight/Q.videoRatio),Q.videoMarginTop=(Q.viewportHeight-Q.targetVideoHeight)/2,Q.videoMarginLeft=(Q.viewportWidth-Q.targetVideoWidth)/2):(Q.viewportHeight=Q.windowHeight-Q.margin,Q.viewportWidth=Q.windowWidth-Q.margin,Q.targetVideoWidth=Q.videoWidth>Q.viewportWidth?Q.viewportWidth:Q.videoWidth,Q.targetVideoWidth<Q.minWidth&&(Q.targetVideoWidth=Q.minWidth),Q.targetVideoHeight=Q.targetVideoWidth*Q.videoRatio,Q.contentHeight=Q.targetVideoHeight,Q.contentWidth=Q.targetVideoWidth),Q.$meta.css({width:Q.contentWidth}),Q.$videoWrapper.css({height:Q.targetVideoHeight,width:Q.targetVideoWidth,marginTop:Q.videoMarginTop,marginLeft:Q.videoMarginLeft}),Q.isMobile||(Q.metaHeight=Q.$meta.outerHeight(!0),Q.contentHeight=Q.targetVideoHeight+Q.metaHeight)}function t(){var b="";Q.gallery.index>0&&(b=Q.gallery.$items.eq(Q.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),Q.gallery.index<Q.gallery.total&&(b=Q.gallery.$items.eq(Q.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function u(b){M.killEvent(b);var c=a(b.currentTarget);Q.isAnimating||c.hasClass(J.raw.control_disabled)||(Q.isAnimating=!0,Q.gallery.index+=c.hasClass(J.raw.control_next)?1:-1,Q.gallery.index>Q.gallery.total&&(Q.gallery.index=Q.gallery.total),Q.gallery.index<0&&(Q.gallery.index=0),Q.$lightbox.addClass([J.raw.loading,J.raw.animating].join(" ")),Q.$container.transition({property:"opacity"},function(){"undefined"!=typeof Q.$image&&Q.$image.remove(),"undefined"!=typeof Q.$videoWrapper&&Q.$videoWrapper.remove(),Q.$el=Q.gallery.$items.eq(Q.gallery.index),Q.$caption.html(Q.formatter.call(Q.$el,Q)),Q.$position.find(J.position_current).html(Q.gallery.index+1);var a=Q.$el.attr("href"),b=a.indexOf("youtube.com/embed")>-1||a.indexOf("player.vimeo.com/video")>-1;b?r(a):o(a),v()}))}function v(){Q.$controls.removeClass(J.raw.control_disabled),0===Q.gallery.index&&Q.$controls.filter(J.control_previous).addClass(K.control_disabled),Q.gallery.index===Q.gallery.total&&Q.$controls.filter(J.control_next).addClass(K.control_disabled)}function w(a){!Q.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&Q.$close.trigger(L.click):(M.killEvent(a),Q.$controls.filter(37===a.keyCode?J.control_previous:J.control_next).trigger(L.click))}function x(b){var c=a(b).find("> :first-child").clone();z(c)}function y(b){b+=b.indexOf("?")>-1?"&"+Q.requestKey+"=true":"?"+Q.requestKey+"=true";var c=a('<iframe class="'+J.raw.iframe+'" src="'+b+'"></iframe>');z(c)}function z(a){Q.$content.append(a),A(a),j()}function A(a){Q.windowHeight=O.height()-Q.paddingVertical,Q.windowWidth=O.width()-Q.paddingHorizontal,Q.objectHeight=a.outerHeight(!0),Q.objectWidth=a.outerWidth(!0),Q.targetHeight=Q.targetHeight||(Q.$el?Q.$el.data(H+"-height"):null),Q.targetWidth=Q.targetWidth||(Q.$el?Q.$el.data(H+"-width"):null),Q.maxHeight=Q.windowHeight<0?Q.minHeight:Q.windowHeight,Q.isIframe=a.is("iframe"),Q.objectMarginTop=0,Q.objectMarginLeft=0,Q.isMobile||(Q.windowHeight-=Q.margin,Q.windowWidth-=Q.margin),Q.contentHeight=Q.targetHeight?Q.targetHeight:Q.isIframe||Q.isMobile?Q.windowHeight:Q.objectHeight,Q.contentWidth=Q.targetWidth?Q.targetWidth:Q.isIframe||Q.isMobile?Q.windowWidth:Q.objectWidth,(Q.isIframe||Q.isObject)&&Q.isMobile?(Q.contentHeight=Q.windowHeight,Q.contentWidth=Q.windowWidth):Q.isObject&&(Q.contentHeight=Q.contentHeight>Q.windowHeight?Q.windowHeight:Q.contentHeight,Q.contentWidth=Q.contentWidth>Q.windowWidth?Q.windowWidth:Q.contentWidth)}function B(){var b=a('<div class="'+J.raw.error+'"><p>Error Loading Resource</p></div>');Q.type="element",Q.$meta.remove(),Q.$image.off(L.namespace),z(b)}function C(a){if(M.killEvent(a),M.clearTimer(Q.touchTimer),!Q.isAnimating){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;Q.xStart=b?b.pageX:a.clientX,Q.leftPosition=0,Q.touchMax=1/0,Q.touchMin=-1/0,Q.edge=.25*Q.contentWidth,0===Q.gallery.index&&(Q.touchMax=0),Q.gallery.index===Q.gallery.total&&(Q.touchMin=0),Q.$lightbox.on(L.touchMove,D).one(L.touchEnd,E)}}function D(a){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;Q.delta=Q.xStart-(b?b.pageX:a.clientX),Q.delta>20&&M.killEvent(a),Q.canSwipe=!0;var c=-Q.delta;c<Q.touchMin&&(c=Q.touchMin,Q.canSwipe=!1),c>Q.touchMax&&(c=Q.touchMax,Q.canSwipe=!1),Q.$image.css({transform:"translate3D("+c+"px,0,0)"}),Q.touchTimer=M.startTimer(Q.touchTimer,300,function(){E(a)})}function E(a){M.killEvent(a),M.clearTimer(Q.touchTimer),Q.$lightbox.off([L.touchMove,L.touchEnd].join("")),Q.delta&&(Q.$lightbox.addClass(J.raw.animating),Q.swipe=!1,Q.canSwipe&&(Q.delta>Q.edge||Q.delta<-Q.edge)?(Q.swipe=!0,Q.$image.css(Q.delta<=Q.leftPosition?{transform:"translate3D("+Q.contentWidth+"px,0,0)"}:{transform:"translate3D("+-Q.contentWidth+"px,0,0)"})):Q.$image.css({transform:"translate3D(0,0,0)"}),Q.swipe&&Q.$controls.filter(Q.delta<=Q.leftPosition?J.control_previous:J.control_next).trigger(L.click),M.startTimer(Q.resetTimer,Q.duration,function(){Q.$lightbox.removeClass(J.raw.animating)}))}function F(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}var G=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:a.noop,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},classes:["loading","animating","fixed","mobile","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","meta","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption","iframe","error"],methods:{_construct:d,_destruct:e,resize:h},utilities:{_initialize:f,close:i}}),H=G.namespace,I=G.defaults,J=G.classes,K=J.raw,L=G.events,M=G.functions,N=b.window,O=b.$window,P=null,Q=null;L.open="open",L.close="close",a(function(){P=b.$body})}(jQuery,Formstone);