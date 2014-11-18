/*! 
 * Formstone v0.0.1 - 2014-11-18 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(a){a.touches=[],a.tap&&this.on(k.touchStart,a,e).on(k.click,a,h),a.pan&&this.on([k.touchStart,k.mouseDown].join(" "),a,e),a.scale&&this.on([k.touchStart].join(" "),a,e)}function d(){this.off(k.namespace)}function e(b){b.stopPropagation();var c=b.data,d="undefined"!=typeof b.originalEvent.touches?b.originalEvent.touches[0]:null;if(c.clicked=!1,c.startE=b.originalEvent,c.startX=d?d.pageX:b.pageX,c.startY=d?d.pageY:b.pageY,c.tap&&c.$el.on(k.touchMove,c,f).on([k.touchEnd,k.touchCancel].join(" "),c,g),c.pan&&(l.killEvent(b),m.on([k.touchMove,k.mouseMove].join(" "),c,f).on([k.touchEnd,k.touchCancel,k.mouseUp].join(" "),c,g),c.$el.trigger(i(k.panStart,b,c.startX,c.startY))),c.scale){if(b.originalEvent.pointerId){var e=!1;for(var h in c.touches)c.touches[h].id===b.originalEvent.pointerId&&(e=!0,c.touches[h].pageX=c.startE.pageX,c.touches[h].pageY=c.startE.pageY);e||c.touches.push({id:c.startE.pointerId,pageX:c.startE.pageX,pageY:c.startE.pageY})}else c.touches=b.originalEvent.touches;if(c.touches.length>=2){c.pinchStartX0=c.touches[0].pageX,c.pinchStartY0=c.touches[0].pageY,c.pinchStartX1=c.touches[1].pageX,c.pinchStartY1=c.touches[1].pageY,c.pinchStartX=(c.pinchStartX0+c.pinchStartX1)/2,c.pinchStartY=(c.pinchStartY0+c.pinchStartY1)/2,c.pinchDeltaStart=Math.sqrt(Math.pow(c.pinchStartX1-c.pinchStartX0,2)+Math.pow(c.pinchStartY1-c.pinchStartY0,2)),c.$el.on(k.touchMove,c,f).on([k.touchEnd,k.touchCancel].join(" "),c,g);var j=a.Event(k.scaleStart,{pageX:c.pinchStartX,pageY:c.pinchStartY,originalEvent:c.startE});c.$el.trigger(j)}}}function f(b){var c=b.data,d="undefined"!=typeof b.originalEvent.touches?b.originalEvent.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY;if(c.tap&&(Math.abs(e-c.startX)>10||Math.abs(f-c.startY)>10)&&c.$el.off([k.touchMove,k.touchEnd,k.touchCancel].join(" ")),c.pan&&c.$el.trigger(i(k.pan,b,e,f)),c.scale){c.pinchEndX0=c.touches[0].pageX,c.pinchEndY0=c.touches[0].pageY,c.pinchEndX1=c.touches[1].pageX,c.pinchEndY1=c.touches[1].pageY,c.pinchDeltaEnd=Math.sqrt(Math.pow(c.pinchEndX1-c.pinchEndX0,2)+Math.pow(c.pinchEndY1-c.pinchEndY0,2)),c.scale=c.pinchDeltaEnd/c.pinchDeltaStart,c.pinchEndX=(c.pinchEndX0+c.pinchEndX1)/2,c.pinchEndY=(c.pinchEndY0+c.pinchEndY1)/2;var g=a.Event(k.scale,{pageX:c.pinchEndX,pageY:c.pinchEndY,scale:c.scale,originalEvent:c.startE});c.$el.trigger(g)}}function g(a){var b=a.data;if(b.tap&&(b.$el.off([k.touchMove,k.touchEnd,k.touchCancel,k.mouseMove,k.mouseUp].join(" ")),b.startE.preventDefault(),h(a)),b.pan){{var c="undefined"!=typeof a.originalEvent.touches?a.originalEvent.touches[0]:null;c?c.pageX:a.pageX,c?c.pageY:a.pageY}m.off([k.touchMove,k.touchEnd,k.touchCancel,k.mouseMove,k.mouseUp].join(" ")),b.$el.trigger(i(k.panEnd,a,b.startX,b.startY))}if(b.scale)if(a.originalEvent.pointerId)for(var d in b.touches)b.touches[d].id===a.originalEvent.pointerId&&b.touches.splice(d,1);else b.touches=a.originalEvent.touches}function h(a){l.killEvent(a);var b=a.data;if(!b.clicked){"click"!==a.type&&(b.clicked=!0);var c=b.startE?b.startX:a.pageX,d=b.startE?b.startY:a.pageY;b.$el.trigger(i(k.tap,b.oe,c,d))}}function i(b,c,d,e){return a.Event(b,{pageX:d,pageY:e,originalEvent:c})}var j=b.Plugin("touch",{widget:!0,defaults:{pan:!1,swipe:!1,scale:!1,tap:!1},methods:{_construct:c,_destruct:d}}),k=j.events,l=j.functions,m=b.$window;k.tap="tap",k.pan="pan",k.panStart="panstart",k.panEnd="panend",k.scale="scale",k.scaleStart="scalestart",k.scaleEnd="scaleend"}(jQuery,Formstone);