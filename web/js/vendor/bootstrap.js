// build time:Tue May 26 2020 06:46:45 GMT+0000 (Coordinated Universal Time)
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||e[0]==1&&e[1]==9&&e[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}}(jQuery);+function(t){"use strict";function e(){var t=document.createElement("bootstrap");var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e){if(t.style[i]!==undefined){return{end:e[i]}}}return false}t.fn.emulateTransitionEnd=function(e){var i=false;var o=this;t(this).one("bsTransitionEnd",function(){i=true});var s=function(){if(!i)t(o).trigger(t.support.transition.end)};setTimeout(s,e);return this};t(function(){t.support.transition=e();if(!t.support.transition)return;t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function(t){"use strict";var e='[data-dismiss="alert"]';var i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.3.1";i.TRANSITION_DURATION=150;i.prototype.close=function(e){var o=t(this);var s=o.attr("data-target");if(!s){s=o.attr("href");s=s&&s.replace(/.*(?=#[^\s]*$)/,"")}var n=t(s);if(e)e.preventDefault();if(!n.length){n=o.closest(".alert")}n.trigger(e=t.Event("close.bs.alert"));if(e.isDefaultPrevented())return;n.removeClass("in");function r(){n.detach().trigger("closed.bs.alert").remove()}t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",r).emulateTransitionEnd(i.TRANSITION_DURATION):r()};function o(e){return this.each(function(){var o=t(this);var s=o.data("bs.alert");if(!s)o.data("bs.alert",s=new i(this));if(typeof e=="string")s[e].call(o)})}var s=t.fn.alert;t.fn.alert=o;t.fn.alert.Constructor=i;t.fn.alert.noConflict=function(){t.fn.alert=s;return this};t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery);+function(t){"use strict";var e=function(i,o){this.$element=t(i);this.options=t.extend({},e.DEFAULTS,o);this.isLoading=false};e.VERSION="3.3.1";e.DEFAULTS={loadingText:"loading..."};e.prototype.setState=function(e){var i="disabled";var o=this.$element;var s=o.is("input")?"val":"html";var n=o.data();e=e+"Text";if(n.resetText==null)o.data("resetText",o[s]());setTimeout(t.proxy(function(){o[s](n[e]==null?this.options[e]:n[e]);if(e=="loadingText"){this.isLoading=true;o.addClass(i).attr(i,i)}else if(this.isLoading){this.isLoading=false;o.removeClass(i).removeAttr(i)}},this),0)};e.prototype.toggle=function(){var t=true;var e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");if(i.prop("type")=="radio"){if(i.prop("checked")&&this.$element.hasClass("active"))t=false;else e.find(".active").removeClass("active")}if(t)i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))}if(t)this.$element.toggleClass("active")};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.button");var n=typeof i=="object"&&i;if(!s)o.data("bs.button",s=new e(this,n));if(i=="toggle")s.toggle();else if(i)s.setState(i)})}var o=t.fn.button;t.fn.button=i;t.fn.button.Constructor=e;t.fn.button.noConflict=function(){t.fn.button=o;return this};t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var o=t(e.target);if(!o.hasClass("btn"))o=o.closest(".btn");i.call(o,"toggle");e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery);+function(t){"use strict";var e=function(e,i){this.$element=t(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=i;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this));this.options.pause=="hover"&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};e.VERSION="3.3.1";e.TRANSITION_DURATION=600;e.DEFAULTS={interval:5e3,pause:"hover",wrap:true,keyboard:true};e.prototype.keydown=function(t){if(/input|textarea/i.test(t.target.tagName))return;switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()};e.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval));return this};e.prototype.getItemIndex=function(t){this.$items=t.parent().children(".item");return this.$items.index(t||this.$active)};e.prototype.getItemForDirection=function(t,e){var i=t=="prev"?-1:1;var o=this.getItemIndex(e);var s=(o+i)%this.$items.length;return this.$items.eq(s)};e.prototype.to=function(t){var e=this;var i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(t>this.$items.length-1||t<0)return;if(this.sliding)return this.$element.one("slid.bs.carousel",function(){e.to(t)});if(i==t)return this.pause().cycle();return this.slide(t>i?"next":"prev",this.$items.eq(t))};e.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find(".next, .prev").length&&t.support.transition){this.$element.trigger(t.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};e.prototype.next=function(){if(this.sliding)return;return this.slide("next")};e.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")};e.prototype.slide=function(i,o){var s=this.$element.find(".item.active");var n=o||this.getItemForDirection(i,s);var r=this.interval;var a=i=="next"?"left":"right";var l=i=="next"?"first":"last";var h=this;if(!n.length){if(!this.options.wrap)return;n=this.$element.find(".item")[l]()}if(n.hasClass("active"))return this.sliding=false;var f=n[0];var d=t.Event("slide.bs.carousel",{relatedTarget:f,direction:a});this.$element.trigger(d);if(d.isDefaultPrevented())return;this.sliding=true;r&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(n)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:f,direction:a});if(t.support.transition&&this.$element.hasClass("slide")){n.addClass(i);n[0].offsetWidth;s.addClass(a);n.addClass(a);s.one("bsTransitionEnd",function(){n.removeClass([i,a].join(" ")).addClass("active");s.removeClass(["active",a].join(" "));h.sliding=false;setTimeout(function(){h.$element.trigger(c)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)}else{s.removeClass("active");n.addClass("active");this.sliding=false;this.$element.trigger(c)}r&&this.cycle();return this};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.carousel");var n=t.extend({},e.DEFAULTS,o.data(),typeof i=="object"&&i);var r=typeof i=="string"?i:n.slide;if(!s)o.data("bs.carousel",s=new e(this,n));if(typeof i=="number")s.to(i);else if(r)s[r]();else if(n.interval)s.pause().cycle()})}var o=t.fn.carousel;t.fn.carousel=i;t.fn.carousel.Constructor=e;t.fn.carousel.noConflict=function(){t.fn.carousel=o;return this};var s=function(e){var o;var s=t(this);var n=t(s.attr("data-target")||(o=s.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(!n.hasClass("carousel"))return;var r=t.extend({},n.data(),s.data());var a=s.attr("data-slide-to");if(a)r.interval=false;i.call(n,r);if(a){n.data("bs.carousel").to(a)}e.preventDefault()};t(document).on("click.bs.carousel.data-api","[data-slide]",s).on("click.bs.carousel.data-api","[data-slide-to]",s);t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery);+function(t){"use strict";var e=function(i,o){this.$element=t(i);this.options=t.extend({},e.DEFAULTS,o);this.$trigger=t(this.options.trigger).filter('[href="#'+i.id+'"], [data-target="#'+i.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}if(this.options.toggle)this.toggle()};e.VERSION="3.3.1";e.TRANSITION_DURATION=350;e.DEFAULTS={toggle:true,trigger:'[data-toggle="collapse"]'};e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"};e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var i;var s=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(s&&s.length){i=s.data("bs.collapse");if(i&&i.transitioning)return}var n=t.Event("show.bs.collapse");this.$element.trigger(n);if(n.isDefaultPrevented())return;if(s&&s.length){o.call(s,"hide");i||s.data("bs.collapse",null)}var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",true);this.$trigger.removeClass("collapsed").attr("aria-expanded",true);this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][l])};e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var i=t.Event("hide.bs.collapse");this.$element.trigger(i);if(i.isDefaultPrevented())return;var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);this.$trigger.addClass("collapsed").attr("aria-expanded",false);this.transitioning=1;var s=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return s.call(this);this.$element[o](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(e.TRANSITION_DURATION)};e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};e.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(e,o){var s=t(o);this.addAriaAndCollapsedClass(i(s),s)},this)).end()};e.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i);e.toggleClass("collapsed",!i).attr("aria-expanded",i)};function i(e){var i;var o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function o(i){return this.each(function(){var o=t(this);var s=o.data("bs.collapse");var n=t.extend({},e.DEFAULTS,o.data(),typeof i=="object"&&i);if(!s&&n.toggle&&i=="show")n.toggle=false;if(!s)o.data("bs.collapse",s=new e(this,n));if(typeof i=="string")s[i]()})}var s=t.fn.collapse;t.fn.collapse=o;t.fn.collapse.Constructor=e;t.fn.collapse.noConflict=function(){t.fn.collapse=s;return this};t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var s=t(this);if(!s.attr("data-target"))e.preventDefault();var n=i(s);var r=n.data("bs.collapse");var a=r?"toggle":t.extend({},s.data(),{trigger:this});o.call(n,a)})}(jQuery);+function(t){"use strict";var e=".dropdown-backdrop";var i='[data-toggle="dropdown"]';var o=function(e){t(e).on("click.bs.dropdown",this.toggle)};o.VERSION="3.3.1";o.prototype.toggle=function(e){var i=t(this);if(i.is(".disabled, :disabled"))return;var o=n(i);var r=o.hasClass("open");s();if(!r){if("ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length){t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",s)}var a={relatedTarget:this};o.trigger(e=t.Event("show.bs.dropdown",a));if(e.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true");o.toggleClass("open").trigger("shown.bs.dropdown",a)}return false};o.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return;var o=t(this);e.preventDefault();e.stopPropagation();if(o.is(".disabled, :disabled"))return;var s=n(o);var r=s.hasClass("open");if(!r&&e.which!=27||r&&e.which==27){if(e.which==27)s.find(i).trigger("focus");return o.trigger("click")}var a=" li:not(.divider):visible a";var l=s.find('[role="menu"]'+a+', [role="listbox"]'+a);if(!l.length)return;var h=l.index(e.target);if(e.which==38&&h>0)h--;if(e.which==40&&h<l.length-1)h++;if(!~h)h=0;l.eq(h).trigger("focus")};function s(o){if(o&&o.which===3)return;t(e).remove();t(i).each(function(){var e=t(this);var i=n(e);var s={relatedTarget:this};if(!i.hasClass("open"))return;i.trigger(o=t.Event("hide.bs.dropdown",s));if(o.isDefaultPrevented())return;e.attr("aria-expanded","false");i.removeClass("open").trigger("hidden.bs.dropdown",s)})}function n(e){var i=e.attr("data-target");if(!i){i=e.attr("href");i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")}var o=i&&t(i);return o&&o.length?o:e.parent()}function r(e){return this.each(function(){var i=t(this);var s=i.data("bs.dropdown");if(!s)i.data("bs.dropdown",s=new o(this));if(typeof e=="string")s[e].call(i)})}var a=t.fn.dropdown;t.fn.dropdown=r;t.fn.dropdown.Constructor=o;t.fn.dropdown.noConflict=function(){t.fn.dropdown=a;return this};t(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i,o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',o.prototype.keydown)}(jQuery);+function(t){"use strict";var e=function(e,i){this.options=i;this.$body=t(document.body);this.$element=t(e);this.$backdrop=this.isShown=null;this.scrollbarWidth=0;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};e.VERSION="3.3.1";e.TRANSITION_DURATION=300;e.BACKDROP_TRANSITION_DURATION=150;e.DEFAULTS={backdrop:true,keyboard:true,show:true};e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)};e.prototype.show=function(i){var o=this;var s=t.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(s);if(this.isShown||s.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass("modal-open");this.escape();this.resize();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this));this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");if(!o.$element.parent().length){o.$element.appendTo(o.$body)}o.$element.show().scrollTop(0);if(o.options.backdrop)o.adjustBackdrop();o.adjustDialog();if(s){o.$element[0].offsetWidth}o.$element.addClass("in").attr("aria-hidden",false);o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:i});s?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(e.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)})};e.prototype.hide=function(i){if(i)i.preventDefault();i=t.Event("hide.bs.modal");this.$element.trigger(i);if(!this.isShown||i.isDefaultPrevented())return;this.isShown=false;this.escape();this.resize();t(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal()};e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){if(this.$element[0]!==t.target&&!this.$element.has(t.target).length){this.$element.trigger("focus")}},this))};e.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){t.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")}};e.prototype.resize=function(){if(this.isShown){t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this))}else{t(window).off("resize.bs.modal")}};e.prototype.hideModal=function(){var t=this;this.$element.hide();this.backdrop(function(){t.$body.removeClass("modal-open");t.resetAdjustments();t.resetScrollbar();t.$element.trigger("hidden.bs.modal")})};e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};e.prototype.backdrop=function(i){var o=this;var s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;this.$backdrop=t('<div class="modal-backdrop '+s+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",t.proxy(function(t){if(t.target!==t.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(n)this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");if(!i)return;n?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):i()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){o.removeBackdrop();i&&i()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):r()}else if(i){i()}};e.prototype.handleUpdate=function(){if(this.options.backdrop)this.adjustBackdrop();this.adjustDialog()};e.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)};e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})};e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};e.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight;this.scrollbarWidth=this.measureScrollbar()};e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);if(this.bodyIsOverflowing)this.$body.css("padding-right",t+this.scrollbarWidth)};e.prototype.resetScrollbar=function(){this.$body.css("padding-right","")};e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure";this.$body.append(t);var e=t.offsetWidth-t.clientWidth;this.$body[0].removeChild(t);return e};function i(i,o){return this.each(function(){var s=t(this);var n=s.data("bs.modal");var r=t.extend({},e.DEFAULTS,s.data(),typeof i=="object"&&i);if(!n)s.data("bs.modal",n=new e(this,r));if(typeof i=="string")n[i](o);else if(r.show)n.show(o)})}var o=t.fn.modal;t.fn.modal=i;t.fn.modal.Constructor=e;t.fn.modal.noConflict=function(){t.fn.modal=o;return this};t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var o=t(this);var s=o.attr("href");var n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,""));var r=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());if(o.is("a"))e.preventDefault();n.one("show.bs.modal",function(t){if(t.isDefaultPrevented())return;n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})});i.call(n,r,this)})}(jQuery);+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",t,e)};e.VERSION="3.3.1";e.TRANSITION_DURATION=150;e.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};e.prototype.init=function(e,i,o){this.enabled=true;this.type=e;this.$element=t(i);this.options=this.getOptions(o);this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);var s=this.options.trigger.split(" ");for(var n=s.length;n--;){var r=s[n];if(r=="click"){this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))}else if(r!="manual"){var a=r=="hover"?"mouseenter":"focusin";var l=r=="hover"?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this));this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};e.prototype.getDefaults=function(){return e.DEFAULTS};e.prototype.getOptions=function(e){e=t.extend({},this.getDefaults(),this.$element.data(),e);if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}}return e};e.prototype.getDelegateOptions=function(){var e={};var i=this.getDefaults();this._options&&t.each(this._options,function(t,o){if(i[t]!=o)e[t]=o});return e};e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i&&i.$tip&&i.$tip.is(":visible")){i.hoverState="in";return}if(!i){i=new this.constructor(e.currentTarget,this.getDelegateOptions());t(e.currentTarget).data("bs."+this.type,i)}clearTimeout(i.timeout);i.hoverState="in";if(!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){if(i.hoverState=="in")i.show()},i.options.delay.show)};e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(!i){i=new this.constructor(e.currentTarget,this.getDelegateOptions());t(e.currentTarget).data("bs."+this.type,i)}clearTimeout(i.timeout);i.hoverState="out";if(!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){if(i.hoverState=="out")i.hide()},i.options.delay.hide)};e.prototype.show=function(){var i=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!o)return;var s=this;var n=this.tip();var r=this.getUID(this.type);this.setContent();n.attr("id",r);this.$element.attr("aria-describedby",r);if(this.options.animation)n.addClass("fade");var a=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement;var l=/\s?auto?\s?/i;var h=l.test(a);if(h)a=a.replace(l,"")||"top";n.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this);this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var f=this.getPosition();var d=n[0].offsetWidth;var p=n[0].offsetHeight;if(h){var c=a;var u=this.options.container?t(this.options.container):this.$element.parent();var v=this.getPosition(u);a=a=="bottom"&&f.bottom+p>v.bottom?"top":a=="top"&&f.top-p<v.top?"bottom":a=="right"&&f.right+d>v.width?"left":a=="left"&&f.left-d<v.left?"right":a;n.removeClass(c).addClass(a)}var g=this.getCalculatedOffset(a,f,d,p);this.applyPlacement(g,a);var m=function(){var t=s.hoverState;s.$element.trigger("shown.bs."+s.type);s.hoverState=null;if(t=="out")s.leave(s)};t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",m).emulateTransitionEnd(e.TRANSITION_DURATION):m()}};e.prototype.applyPlacement=function(e,i){var o=this.tip();var s=o[0].offsetWidth;var n=o[0].offsetHeight;var r=parseInt(o.css("margin-top"),10);var a=parseInt(o.css("margin-left"),10);if(isNaN(r))r=0;if(isNaN(a))a=0;e.top=e.top+r;e.left=e.left+a;t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0);o.addClass("in");var l=o[0].offsetWidth;var h=o[0].offsetHeight;if(i=="top"&&h!=n){e.top=e.top+n-h}var f=this.getViewportAdjustedDelta(i,e,l,h);if(f.left)e.left+=f.left;else e.top+=f.top;var d=/top|bottom/.test(i);var p=d?f.left*2-s+l:f.top*2-n+h;var c=d?"offsetWidth":"offsetHeight";o.offset(e);this.replaceArrow(p,o[0][c],d)};e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")};e.prototype.setContent=function(){var t=this.tip();var e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e);t.removeClass("fade in top bottom left right")};e.prototype.hide=function(i){var o=this;var s=this.tip();var n=t.Event("hide.bs."+this.type);function r(){if(o.hoverState!="in")s.detach();o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type);i&&i()}this.$element.trigger(n);if(n.isDefaultPrevented())return;s.removeClass("in");t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",r).emulateTransitionEnd(e.TRANSITION_DURATION):r();this.hoverState=null;return this};e.prototype.fixTitle=function(){var t=this.$element;if(t.attr("title")||typeof t.attr("data-original-title")!="string"){t.attr("data-original-title",t.attr("title")||"").attr("title","")}};e.prototype.hasContent=function(){return this.getTitle()};e.prototype.getPosition=function(e){e=e||this.$element;var i=e[0];var o=i.tagName=="BODY";var s=i.getBoundingClientRect();if(s.width==null){s=t.extend({},s,{width:s.right-s.left,height:s.bottom-s.top})}var n=o?{top:0,left:0}:e.offset();var r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()};var a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},s,r,a,n)};e.prototype.getCalculatedOffset=function(t,e,i,o){return t=="bottom"?{top:e.top+e.height,left:e.left+e.width/2-i/2}:t=="top"?{top:e.top-o,left:e.left+e.width/2-i/2}:t=="left"?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}};e.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s={top:0,left:0};if(!this.$viewport)return s;var n=this.options.viewport&&this.options.viewport.padding||0;var r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-n-r.scroll;var l=e.top+n-r.scroll+o;if(a<r.top){s.top=r.top-a}else if(l>r.top+r.height){s.top=r.top+r.height-l}}else{var h=e.left-n;var f=e.left+n+i;if(h<r.left){s.left=r.left-h}else if(f>r.width){s.left=r.left+r.width-f}}return s};e.prototype.getTitle=function(){var t;var e=this.$element;var i=this.options;t=e.attr("data-original-title")||(typeof i.title=="function"?i.title.call(e[0]):i.title);return t};e.prototype.getUID=function(t){do t+=~~(Math.random()*1e6);while(document.getElementById(t));return t};e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)};e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};e.prototype.enable=function(){this.enabled=true};e.prototype.disable=function(){this.enabled=false};e.prototype.toggleEnabled=function(){this.enabled=!this.enabled};e.prototype.toggle=function(e){var i=this;if(e){i=t(e.currentTarget).data("bs."+this.type);if(!i){i=new this.constructor(e.currentTarget,this.getDelegateOptions());t(e.currentTarget).data("bs."+this.type,i)}}i.tip().hasClass("in")?i.leave(i):i.enter(i)};e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout);this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.tooltip");var n=typeof i=="object"&&i;var r=n&&n.selector;if(!s&&i=="destroy")return;if(r){if(!s)o.data("bs.tooltip",s={});if(!s[r])s[r]=new e(this,n)}else{if(!s)o.data("bs.tooltip",s=new e(this,n))}if(typeof i=="string")s[i]()})}var o=t.fn.tooltip;t.fn.tooltip=i;t.fn.tooltip.Constructor=e;t.fn.tooltip.noConflict=function(){t.fn.tooltip=o;return this}}(jQuery);+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.1";e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype);e.prototype.constructor=e;e.prototype.getDefaults=function(){return e.DEFAULTS};e.prototype.setContent=function(){var t=this.tip();var e=this.getTitle();var i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e);t.find(".popover-content").children().detach().end()[this.options.html?typeof i=="string"?"html":"append":"text"](i);t.removeClass("fade top bottom left right in");if(!t.find(".popover-title").html())t.find(".popover-title").hide()};e.prototype.hasContent=function(){return this.getTitle()||this.getContent()};e.prototype.getContent=function(){var t=this.$element;var e=this.options;return t.attr("data-content")||(typeof e.content=="function"?e.content.call(t[0]):e.content)};e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};e.prototype.tip=function(){if(!this.$tip)this.$tip=t(this.options.template);return this.$tip};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.popover");var n=typeof i=="object"&&i;var r=n&&n.selector;if(!s&&i=="destroy")return;if(r){if(!s)o.data("bs.popover",s={});if(!s[r])s[r]=new e(this,n)}else{if(!s)o.data("bs.popover",s=new e(this,n))}if(typeof i=="string")s[i]()})}var o=t.fn.popover;t.fn.popover=i;t.fn.popover.Constructor=e;t.fn.popover.noConflict=function(){t.fn.popover=o;return this}}(jQuery);+function(t){"use strict";function e(i,o){var s=t.proxy(this.process,this);this.$body=t("body");this.$scrollElement=t(i).is("body")?t(window):t(i);this.options=t.extend({},e.DEFAULTS,o);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",s);this.refresh();this.process()}e.VERSION="3.3.1";e.DEFAULTS={offset:10};e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};e.prototype.refresh=function(){var e="offset";var i=0;if(!t.isWindow(this.$scrollElement[0])){e="position";i=this.$scrollElement.scrollTop()}this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();var o=this;this.$body.find(this.selector).map(function(){var o=t(this);var s=o.data("target")||o.attr("href");var n=/^#./.test(s)&&t(s);return n&&n.length&&n.is(":visible")&&[[n[e]().top+i,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){o.offsets.push(this[0]);o.targets.push(this[1])})};e.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset;var e=this.getScrollHeight();var i=this.options.offset+e-this.$scrollElement.height();var o=this.offsets;var s=this.targets;var n=this.activeTarget;var r;if(this.scrollHeight!=e){this.refresh()}if(t>=i){return n!=(r=s[s.length-1])&&this.activate(r)}if(n&&t<o[0]){this.activeTarget=null;return this.clear()}for(r=o.length;r--;){n!=s[r]&&t>=o[r]&&(!o[r+1]||t<=o[r+1])&&this.activate(s[r])}};e.prototype.activate=function(e){this.activeTarget=e;this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]';var o=t(i).parents("li").addClass("active");if(o.parent(".dropdown-menu").length){o=o.closest("li.dropdown").addClass("active")}o.trigger("activate.bs.scrollspy")};e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.scrollspy");var n=typeof i=="object"&&i;if(!s)o.data("bs.scrollspy",s=new e(this,n));if(typeof i=="string")s[i]()})}var o=t.fn.scrollspy;t.fn.scrollspy=i;t.fn.scrollspy.Constructor=e;
t.fn.scrollspy.noConflict=function(){t.fn.scrollspy=o;return this};t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery);+function(t){"use strict";var e=function(e){this.element=t(e)};e.VERSION="3.3.1";e.TRANSITION_DURATION=150;e.prototype.show=function(){var e=this.element;var i=e.closest("ul:not(.dropdown-menu)");var o=e.data("target");if(!o){o=e.attr("href");o=o&&o.replace(/.*(?=#[^\s]*$)/,"")}if(e.parent("li").hasClass("active"))return;var s=i.find(".active:last a");var n=t.Event("hide.bs.tab",{relatedTarget:e[0]});var r=t.Event("show.bs.tab",{relatedTarget:s[0]});s.trigger(n);e.trigger(r);if(r.isDefaultPrevented()||n.isDefaultPrevented())return;var a=t(o);this.activate(e.closest("li"),i);this.activate(a,a.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]});e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})};e.prototype.activate=function(i,o,s){var n=o.find("> .active");var r=s&&t.support.transition&&(n.length&&n.hasClass("fade")||!!o.find("> .fade").length);function a(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);if(r){i[0].offsetWidth;i.addClass("in")}else{i.removeClass("fade")}if(i.parent(".dropdown-menu")){i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)}s&&s()}n.length&&r?n.one("bsTransitionEnd",a).emulateTransitionEnd(e.TRANSITION_DURATION):a();n.removeClass("in")};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.tab");if(!s)o.data("bs.tab",s=new e(this));if(typeof i=="string")s[i]()})}var o=t.fn.tab;t.fn.tab=i;t.fn.tab.Constructor=e;t.fn.tab.noConflict=function(){t.fn.tab=o;return this};var s=function(e){e.preventDefault();i.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery);+function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o);this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this));this.$element=t(i);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};e.VERSION="3.3.1";e.RESET="affix affix-top affix-bottom";e.DEFAULTS={offset:0,target:window};e.prototype.getState=function(t,e,i,o){var s=this.$target.scrollTop();var n=this.$element.offset();var r=this.$target.height();if(i!=null&&this.affixed=="top")return s<i?"top":false;if(this.affixed=="bottom"){if(i!=null)return s+this.unpin<=n.top?false:"bottom";return s+r<=t-o?false:"bottom"}var a=this.affixed==null;var l=a?s:n.top;var h=a?r:e;if(i!=null&&l<=i)return"top";if(o!=null&&l+h>=t-o)return"bottom";return false};e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop();var i=this.$element.offset();return this.pinnedOffset=i.top-t};e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)};e.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var i=this.$element.height();var o=this.options.offset;var s=o.top;var n=o.bottom;var r=t("body").height();if(typeof o!="object")n=s=o;if(typeof s=="function")s=o.top(this.$element);if(typeof n=="function")n=o.bottom(this.$element);var a=this.getState(r,i,s,n);if(this.affixed!=a){if(this.unpin!=null)this.$element.css("top","");var l="affix"+(a?"-"+a:"");var h=t.Event(l+".bs.affix");this.$element.trigger(h);if(h.isDefaultPrevented())return;this.affixed=a;this.unpin=a=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}if(a=="bottom"){this.$element.offset({top:r-i-n})}};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.affix");var n=typeof i=="object"&&i;if(!s)o.data("bs.affix",s=new e(this,n));if(typeof i=="string")s[i]()})}var o=t.fn.affix;t.fn.affix=i;t.fn.affix.Constructor=e;t.fn.affix.noConflict=function(){t.fn.affix=o;return this};t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this);var o=e.data();o.offset=o.offset||{};if(o.offsetBottom!=null)o.offset.bottom=o.offsetBottom;if(o.offsetTop!=null)o.offset.top=o.offsetTop;i.call(e,o)})})}(jQuery);
//rebuild by neat 