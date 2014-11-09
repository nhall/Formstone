
/**
 * @plugin
 * @name Formstone
 * @description Library core.
 */

var Formstone = this.Formstone = (function ($, window, document, undefined) {

	"use strict";

	// Namespace

	var Core = function() {
			this.Plugins = {};

			// Globals

			this.$window              = $(window);
			this.$document            = $(document);
			this.$body                = null;
			this.userAgent            = window.navigator.userAgent || window.navigator.vendor || window.opera;
			this.isFirefox            = /Firefox/i.test( this.userAgent );
			this.isChrome             = /Chrome/i.test(  this.userAgent );
			this.isSafari             = (/Safari/i.test( this.userAgent ) && !this.isChrome);
			this.isMobile             = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( this.userAgent );
			this.isFirefoxMobile      = (this.isFirefox && this.isMobile);
			this.transitionSupport    = false;
			this.matchMediaSupport    = !!(window.matchMedia);
			this.historySupport       = !!(window.history && window.history.pushState && window.history.replaceState);
			this.rafSupport           = !!(window.requestAnimationFrame && window.cancelAnimationFrame);
		},

		Formstone = new Core(),

		// Classes

		Classes = {
			base                 : "{ns}",
			element              : "{ns}-element"
		},

		// Events

		Events = {
			namespace            : ".{ns}",
			blur                 : "blur.{ns}",
			change               : "change.{ns}",
			click                : "click.{ns}",
			dblClick             : "dblclick.{ns}",
			drag                 : "drag.{ns}",
			dragEnd              : "dragend.{ns}",
			dragEnter            : "dragenter.{ns}",
			dragLeave            : "dragleave.{ns}",
			dragOver             : "dragover.{ns}",
			dragStart            : "dragstart.{ns}",
			drop                 : "drop.{ns}",
			error                : "error.{ns}",
			focus                : "focus.{ns}",
			focusIn              : "focusin.{ns}",
			focusOut             : "focusout.{ns}",
			input                : "input.{ns}",
			keyDown              : "keydown.{ns}",
			keyPress             : "keypress.{ns}",
			keyUp                : "keyup.{ns}",
			load                 : "load.{ns}",
			mouseDown            : "mousedown.{ns}",
			mouseEnter           : "mouseenter.{ns}",
			mouseLeave           : "mouseleave.{ns}",
			mouseMove            : "mousemove.{ns}",
			mouseOut             : "mouseout.{ns}",
			mouseOver            : "mouseover.{ns}",
			mouseUp              : "mouseup.{ns}",
			resize               : "resize.{ns}",
			scroll               : "scroll.{ns}",
			select               : "select.{ns}",
			touchCancel          : "touchcancel.{ns}",
			touchEnd             : "touchend.{ns}",
			touchLeave           : "touchleave.{ns}",
			touchMove            : "touchmove.{ns}",
			touchStart           : "touchstart.{ns}"
		};

	/**
	 * @method
	 * @name Plugin
	 * @description Builds a plugin and registers it with jQuery.
	 * @param namespace [string] "Plugin namespace"
	 * @param settings [object] "Plugin settings"
	 * @return [object] "Plugin properties. Includes `defaults`, `classes`, `events`, `functions` and `methods` keys"
	 * @example Formstone.Plugin("namespace", { ... });
	 */

	Core.prototype.Plugin = function(namespace, settings) {
		Formstone.Plugins[namespace] = (function(namespace, settings) {

			/**
			 * @method private
			 * @name initialize
			 * @description Creates plugin instance by adding base classname, creating data and scoping a _construct call.
			 * @param options [object] <{}> "Instance options"
			 */

			function initialize(options) {

				// Extend Defaults

				options = $.extend(true, {}, settings.defaults, options);

				// Maintain Chain

				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i);

					// Gaurd Against Exiting Instances

					if (!getData($element)) {

						// Extend w/ Local Options

						var data = $.extend(true, {
							$element: $element,
							$el: $element
						}, options, $element.data(namespace + "-options"));

						// Constructor

						settings.methods._construct.call($element, data);

						// Cache Instance

						$element.addClass(settings.classes.element)
						        .data(namespace, data);
					}

				}

				return $targets;
			}

			/**
			 * @method private
			 * @name destroy
			 * @description Removes plugin instance by scoping a _destruct call, and removing the base classname and data.
			 * @param data [object] <{}> "Instance data"
			 */

			/**
			 * @method widget
			 * @name destroy
			 * @description Removes plugin instance.
			 * @example $(".target").{ns}("destroy");
			 */

			function destroy(data) {
				iterate.apply(this, [ settings.methods._destruct ].concat(Array.prototype.slice.call(arguments, 1)));

				this.removeClass(settings.classes.element)
					.removeData(namespace);
			}

			/**
			 * @method private
			 * @name killEvent
			 * @description Stops event action and bubble.
			 * @param e [object] "Event data"
			 */

			function killEvent(e) {
				if (typeof e !== "undefined") {
					e.preventDefault();
					e.stopPropagation();
				}
			}

			/**
			 * @method private
			 * @name getData
			 * @description Creates class selector from text.
			 * @param $element [jQuery] "Target jQuery object"
			 * @return [object] "Instance data"
			 */

			function getData($element) {
				return $element.data(namespace);
			}

			/**
			 * @method private
			 * @name startTimer
			 * @description Starts an internal timer.
			 * @param timer [int] "Timer ID"
			 * @param time [int] "Time until execution"
			 * @param callback [function] "Function to execute"
			 * @return [int] "Timer ID"
			 */

			function startTimer(timer, time, callback) {
				clearTimer(timer);
				return setTimeout(callback, time);
			}

			/**
			 * @method private
			 * @name clearTimer
			 * @description Clears an internal timer.
			 * @param timer [int] "Timer ID"
			 */

			function clearTimer(timer) {
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
			}

			/**
			 * @method private
			 * @name getClassName
			 * @description Creates class selector from text.
			 * @param text [string] "Text to convert"
			 * @return [string] "Class selector"
			 */

			function getClassName(text) {
				return "." + text;
			}

			/**
			 * @method private
			 * @name iterate
			 * @description Loops scoped function calls over jQuery set with instance data as first parameter.
			 * @param func [function] "Function to execute"
			 * @return [jQuery] "jQuery set"
			 */

			function iterate(func) {
				var $targets = this;

				for (var i = 0, count = $targets.length; i < count; i++) {
					var $element = $targets.eq(i),
						data = getData($element);

					if (data) {
						func.apply($element, [ data ].concat(Array.prototype.slice.call(arguments, 1)));
					}
				}

				return $targets;
			}

			/**
			 * @method private
			 * @name delegateRoutine
			 * @description Delegates public methods.
			 * @param method [string] "Method to execute"
			 * @return [jQuery] "jQuery set"
			 */

			function delegateRoutine(method) {

				// Only allow "public" methods (no underscore prefix)

				if (settings.methods[method] && method.indexOf("_") !== 0) {

					// Wrap Public Methods

					return iterate.apply(this, [ settings.methods[method] ].concat(Array.prototype.slice.call(arguments, 1)));
				} else if (typeof method === 'object' || !method) {
					// Initialize

					return initialize.apply(this, arguments);
				}

				return this;
			}

			/**
			 * @method private
			 * @name setDefaults
			 * @description Extends plugin default settings.
			 * @param method [string] "Method to execute"
			 * @return [mixed] "Current context"
			 */

			/**
			 * @method widget
			 * @name defaults
			 * @description Extends plugin default settings; effects instances created hereafter.
			 * @param options [object] <{}> "New plugin defaults"
			 * @example $.{ns}("defaults", { ... });
			 */

			function setDefaults(method) {
				if (method === "defaults") {
					settings.defaults = $.extend(true, settings.defaults, arguments[1] || {});
				}

				return this;
			}

			// Locals

			settings.initialized = false;

			// Namespace Classes & Events

			settings.classes   = namespaceProperties("classes", namespace, Classes, settings.classes);
			settings.events    = namespaceProperties("events",  namespace, Events,  settings.events);

			// Extend Functions

			settings.functions = $.extend({
				getData         : getData,
				startTimer      : startTimer,
				clearTimer      : clearTimer,
				getClassName    : getClassName,
				killEvent       : killEvent
			}, settings.functions);

			// Extend Methods

			settings.methods = $.extend({

				// Private Methods

				_setup          : $.noop,    // Widget First Run
				_construct      : $.noop,    // Widget Constructor
				_destruct       : $.noop,    // Widget Destructor
				_delegate       : false,     // Utility Delegation

				// Public Methods

				destroy: destroy

			}, settings.methods);

			// Register Plugin

			if (settings.widget) {

				// Widget

				// Method Delegation: $(".selector").plugin("method", ...);
				$.fn[namespace]    = delegateRoutine;

				// Set Defaults:      $.plugin("defaults", { ... });
				$[namespace]       = setDefaults;
			} else {

				// Utility

				// Custom Delegation: $(".selector").plugin( ... );
				$[namespace]       = settings.methods._delegate || delegateRoutine;
			}

			// Run Setup

			$(function() {
				if (!settings.initialized) {
					settings.initialized    = true;
					settings.namespace      = namespace;

					settings.methods._setup.call(document);
				}
			});

			return settings;
		})(namespace, settings);

		return Formstone.Plugins[namespace];
	};

	// Namespace Properties

	function namespaceProperties(type, namespace, globalProps, customProps) {
		var _props = {},
			i;

		customProps = customProps || {};

		for (i in customProps) {
			if (customProps.hasOwnProperty(i)) {
				if (type === "classes") {
					// Custom classes
					_props[ customProps[i] ] = namespace + "-" + customProps[i];
				} else {
					// Custom events
					_props[ customProps[i] ] = customProps[i] + "." + namespace;
				}
			}
		}

		for (i in globalProps) {
			if (globalProps.hasOwnProperty(i)) {
				// From Globals
				_props[i] = globalProps[i].replace(/{ns}/g, namespace);
			}
		}

		return _props;
	}

	// Get Transition Event

	function getTransitionEvent() {
		var transitions = {
				"transition"          : "transitionend",
				"MozTransition"       : "transitionend",
				"OTransition"         : "otransitionend",
				"WebkitTransition"    : "webkitTransitionEnd"
			},
			event = "transitionend",
			test = document.createElement('div');

		for (var i in transitions) {
			if (transitions.hasOwnProperty(i) && i in test.style) {
				event = transitions[i];
				Formstone.transitionSupport = true;
			}
		}

		return event + ".{ns}";
	}

	// Document Ready

	$(function() {
		Formstone.$body = $("body");
	});

	// Custom Events

	Events.transitionEnd      = getTransitionEvent();
	Events.clickTouchStart    = Events.click + " " + Events.touchStart;

	return Formstone;

})(jQuery, this, document);


/**
 * @use

### Formstone Object

The Formstone core is a dependency of all javascript based components and will contain a few global values, as well as a simple plugin factory. The global Formstone object has access to the following keys:

```
$window					// Object, Reference to jQuery wrapped window
$document				// Object, Reference to jQuery wrapped document
$body					// Object, Reference to jQuery wrapped body tag

Plugins					// Object containing all registered plugins

historySupport			// Boolean, history api support, including push and pop state
matchMediaSupport		// Boolean, match media api support
rafSupport				// Boolean, request animation frame api support
transitionSupport		// Boolean, CSS3 transition support

userAgent				// Raw user agent string
isChrome				// Boolean, browser is Chrome
isFirefox				// Boolean, browser is FireFox
isSafari				// Boolean, browser is Safari
isMobile				// Boolean, browser is Mobile
isFirefoxMobile			// Boolean, browser is FireFox Mobile
```

### Plugin Factory

The `Formstone.Plugin` factory function is used to define a plugin. The factory will use the provided namespace to register the plugin with jQuery. The plugin is then available like any other:

```
$(“.selector”).plugin({
	option: value
});
```

### Plugin Types

There are two types of plugins that can be defined: Widget or Utility.

#### Widget

Widget plugins are implicitly tied to an element to enhance or change the interface. Examples of Widgets include input enhancements like Picker or Selecter. A simple Widget might look like:

```
;(function ($, Formstone, undefined) {

	function setUp() {
		// this = document
	}

	function construct(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	function destruct(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	function reset(data) {
		// this = jQuery wrapped target element
		// data = instance data
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("namespace", {
			widget: true,
			defaults: {
				option:    value
			},
			classes: [
				"visible"
			],
			methods: {
				_setup         setup,
				_construct:    construct,
				_destruct:     destruct,
				reset:         reset
			}
		}),

		// Localize References

		Classes      = Plugin.classes,
		Events       = Plugin.events,
		Functions    = Plugin.functions;

})(jQuery, Formstone);
```

As in the example above, Widgets can override three internal methods by pointing a key to the corresponding local function:

```
_setup					// Run once when document is ready, scoped to document
_construct				// Run at initialization of each instance, scoped to specific instance
_destruct				// Run at destruction of each instance, scoped to specific instance
```

When an instance is created or destroyed, the factory will automatically add or remove the instance's localized plugin data. This data is available as the first argument in any public method call, or by using the namespace to query for the data:

```
this.data("namespace");
```

Custom public methods can also be defined, provided their keys are not prefixed with an underscore (`_`). The underscore signifies a core method and should be avoided when defining public methods. The factory will scope any public method call to the target instance, as well as provide it's plugin data as the first argument followed by any addition arguments:

```
$(".selector").namespace("reset", 500);
```

A Widget can also operate as a singleton, like Boxer or Tipper. In this case, events are bound to the instance's target element, while DOM manipulations are tied to a single internal instance. This helps prevent unwanted duplication when the interface pattern calls for a single instance.

#### Utility

Utility plugins may interact with DOM nodes but are not necessarily tied to any specific elements. An example of a Utility is the media query event abstraction provided by Rubberband. A simple Utility plugin might look like:

```
;(function ($, Formstone, undefined) {

	function delegate() {
		// Manually handle public methods
	}

	// Register Plugin

	var Plugin = Formstone.Plugin("namespace", {
			methods: {
				_delegate:     delegate
			}
		}),

		// Internal Defaults

		Defaults = {
			option:    value
		},

		// Localize References

		Document = Formstone.$document[0];

})(jQuery, Formstone);
```

A utility can override the default method delegation by pointing the `_delegate` key to a custom function. The delegate function will need to manually handle any arguments passed. Otherwise, Utilities will use the same public method delegation system as Widgets.

```
$(".selector").namespace("reset", 500);
```

#### Plugin Object

Defining a plugin using the factory will return an object containing the follow keys:

```
namespace				// String, plugin namespace
initialized				// Boolean, initialized state
defaults				// Object, default options extended with initialization and local options
functions				// Object, private utility functions
methods					// Object, public methods
classes					// Object, namespaced classes strings
events					// Object, namespaced event strings
```

These values can then be localized in the scope of the plugin for optimal minimization:

```
var Plugin = Formstone.Plugin(“namespace”, {
		...
	}),
	Defaults     = Plugin.defaults,
	Functions    = Plugin.functions,
	Methods      = Plugin.methods,
	Classes      = Plugin.classes,
	Events       = Plugin.events;
```

This may seem strangely redundant at first, however multi-dimensional objects do not minimize efficiently. This is also one reason standard prototypal inheritance is not used when building a plugin, however this is not to say a specific plugin could not contain locally scoped prototypes. Plugin design is always up to the developer, the factory simply provides a consistent, DRY approach to the basic plugin pattern.

#### Classes

The `classes` object returned when defining a plugin will contain properly namespaced strings of both default and custom classes. Custom classes will become object keys, while the namespaced class will become the value:

```
var Plugin = Formstone.Plugin(“namespace”, {
	...
	classes: [
		"visible",
		"content"
	],
	...
});
```

```
base					// Default, "namespace"
element					// Default, "namespace-element"

visible					// Custom,  "namespace-visible"
content					// Custom,  "namespace-content"
```

#### Events

The `events` object returned when defining a plugin will contain properly namespaced strings of both default and custom events. Custom events will become object keys, while the namespaced event will become the value:

```
var Plugin = Formstone.Plugin(“namespace”, {
	...
	events: [
		"enable",
		"disable"
	],
	...
});
```

```
namespace				// Default, ".namespace",
click					// Default, "click.namespace",
clickTouchStart			// Default, "click.namespace touchstart.namespace",
dragEnter				// Default, "dragenter.namespace",
dragOver				// Default, "dragover.namespace",
dragLeave				// Default, "dragleave.namespace",
drop					// Default, "drop.namespace",
fileError				// Default, "fileError.namespace",
fileStart				// Default, "fileStart.namespace",
fileProgress			// Default, "fileProgress.namespace",
fileComplete			// Default, "fileComplete.namespace",
beforeUnload			// Default, "beforeunload.namespace",
complete				// Default, "complete.namespace",
start					// Default, "start.namespace",
change					// Default, "change.namespace",
keyDown					// Default, "keydown.namespace",
keyUp					// Default, "keyup.namespace",
keyPress				// Default, "keypress.namespace",
resize					// Default, "resize.namespace",
load					// Default, "load.namespace",
matchMedia				// Default, "matchmedia.namespace",
mouseEnter				// Default, "mouseenter.namespace",
mouseLeave				// Default, "mouseleave.namespace",
mouseOver				// Default, "mouseover.namespace",
mouseOut				// Default, "mouseout.namespace",
mouseMove				// Default, "mousemove.namespace",
touchStart				// Default, "touchstart.namespace",
touchMove				// Default, "touchmove.namespace",
touchEnd				// Default, "touchend.namespace"
transitionEnd			// Default, "transitionEnd.namespace"

enable					// Custom,  "enable.namespace"
disable					// Custom,  "disable.namespace"
```

 */