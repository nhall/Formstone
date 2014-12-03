{"template":"component.html","title":"Dropdown","demo":"<style>\n\t.demo .custom_select { max-width: 500px; }\n\t.demo .custom_select .fs-dropdown-selected { border-width: 2px; }\n\t.demo .custom_select .fs-dropdown-options { border-width: 0 2px 2px; padding: 1%; }\n\t.demo .custom_select .fs-dropdown-item { border-radius: 3px !important; border: none; margin: 0 0 1%; }\n\t.demo .custom_select .fs-dropdown-item:last-child { margin: 0; }\n</style>\n\n<script>\n\t$(function() {\n\t\t// All\n\t\t$(\".demo select\").dropdown();\n\t});\n\n\t/*\n\t\t// Disabled\n\t\t$(\".demo .toggle_select\").on(\"click\", toggleEnabled);\n\t\tif (!$(\".demo .select_disabled\").is(\":disabled\")) {\n\t\t\t$(\".demo .toggle_select\").text(\"Disable\");\n\t\t} else {\n\t\t\t$(\".demo .toggle_select\").text(\"Enable\");\n\t\t}\n\t\t// Disabled Option\n\t\t$(\".demo .toggle_select_option\").on(\"click\", toggleEnabledOption);\n\t\tif (!$(\".demo .select_disabled_option option\").eq(0).is(\":disabled\")) {\n\t\t\t$(\".demo .toggle_select_option\").text(\"Disable Option 'One'\");\n\t\t} else {\n\t\t\t$(\".demo .toggle_select_option\").text(\"Enable Option 'One'\");\n\t\t}\n\t\t$(window).one(\"pronto.load\", function() {\n\t\t\t$(\".demo select\").select(\"destroy\");\n\t\t\t$(\".demo .toggle_select\").off(\"click\");\n\t\t\t$(\".demo .toggle_select_option\").off(\"click\");\n\t\t});\n\n\tfunction toggleEnabled(e) {\n\t\te.preventDefault();\n\t\tif ($(\".demo .select_disabled\").is(\":disabled\")) {\n\t\t\t$(\".demo .select_disabled\").dropdown(\"enable\");\n\t\t\t$(\".demo .toggle_select\").text(\"Disable\");\n\t\t} else {\n\t\t\t$(\".demo .select_disabled\").dropdown(\"disable\");\n\t\t\t$(\".demo .toggle_select\").text(\"Enable\");\n\t\t}\n\t}\n\n\tfunction toggleEnabledOption(e) {\n\t\te.preventDefault();\n\t\tif ($(\".demo .select_disabled_option option\").eq(0).is(\":disabled\")) {\n\t\t\t$(\".demo .select_disabled_option\").dropdown(\"enable\", \"1\");\n\t\t\t$(\".demo .toggle_select_option\").text(\"Disable Option 'One'\");\n\t\t} else {\n\t\t\t$(\".demo .select_disabled_option\").dropdown(\"disable\", \"1\");\n\t\t\t$(\".demo .toggle_select_option\").text(\"Enable Option 'One'\");\n\t\t}\n\t}\n\t*/\n</script>\n\n<h4>Basic</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_basic\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_basic\" id=\"demo_basic\">\n\t\t\t<option>One</option>\n\t\t\t<option>Two</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Option Groups</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_groups\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_groups\" id=\"demo_groups\">\n\t\t\t<optgroup label=\"Group One\">\n\t\t\t\t<option value=\"1\">One</option>\n\t\t\t\t<option value=\"2\">Two</option>\n\t\t\t\t<option value=\"3\">Three</option>\n\t\t\t</optgroup>\n\t\t\t<optgroup label=\"Group One\">\n\t\t\t\t<option value=\"4\">Four</option>\n\t\t\t\t<option value=\"5\">Five</option>\n\t\t\t\t<option value=\"6\">Six</option>\n\t\t\t\t<option value=\"7\">Seven</option>\n\t\t\t</optgroup>\n\t\t\t<optgroup label=\"Group Three\">\n\t\t\t\t<option value=\"8\">Eight</option>\n\t\t\t\t<option value=\"9\">Nine</option>\n\t\t\t\t<option value=\"10\">Ten</option>\n\t\t\t</optgroup>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Multiple</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_multiple\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_multiple\" id=\"demo_multiple\" multiple>\n\t\t\t<option value=\"1\">One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t\t<option value=\"3\">Three</option>\n\t\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t\t<option value=\"6\">Six</option>\n\t\t\t<option value=\"7\">Seven</option>\n\t\t\t<option value=\"8\">Eight</option>\n\t\t\t<option value=\"9\">Nine</option>\n\t\t\t<option value=\"10\">Ten</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Default Label</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_label\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_label\" id=\"demo_label\" data-dropdown-options='{\"label\":\"Select A State\"}'>\n\t\t\t<option value=\"AL\">Alabama</option>\n\t\t\t<option value=\"AK\">Alaska</option>\n\t\t\t<option value=\"AZ\">Arizona</option>\n\t\t\t<option value=\"AR\">Arkansas</option>\n\t\t\t<option value=\"CA\">California</option>\n\t\t\t<option value=\"CO\">Colorado</option>\n\t\t\t<option value=\"CT\">Connecticut</option>\n\t\t\t<option value=\"DE\">Delaware</option>\n\t\t\t<option value=\"DC\">District Of Columbia</option>\n\t\t\t<option value=\"FL\">Florida</option>\n\t\t\t<option value=\"GA\">Georgia</option>\n\t\t\t<option value=\"HI\">Hawaii</option>\n\t\t\t<option value=\"ID\">Idaho</option>\n\t\t\t<option value=\"IL\">Illinois</option>\n\t\t\t<option value=\"IN\">Indiana</option>\n\t\t\t<option value=\"IA\">Iowa</option>\n\t\t\t<option value=\"KS\">Kansas</option>\n\t\t\t<option value=\"KY\">Kentucky</option>\n\t\t\t<option value=\"LA\">Louisiana</option>\n\t\t\t<option value=\"ME\">Maine</option>\n\t\t\t<option value=\"MD\">Maryland</option>\n\t\t\t<option value=\"MA\">Massachusetts</option>\n\t\t\t<option value=\"MI\">Michigan</option>\n\t\t\t<option value=\"MN\">Minnesota</option>\n\t\t\t<option value=\"MS\">Mississippi</option>\n\t\t\t<option value=\"MO\">Missouri</option>\n\t\t\t<option value=\"MT\">Montana</option>\n\t\t\t<option value=\"NE\">Nebraska</option>\n\t\t\t<option value=\"NV\">Nevada</option>\n\t\t\t<option value=\"NH\">New Hampshire</option>\n\t\t\t<option value=\"NJ\">New Jersey</option>\n\t\t\t<option value=\"NM\">New Mexico</option>\n\t\t\t<option value=\"NY\">New York</option>\n\t\t\t<option value=\"NC\">North Carolina</option>\n\t\t\t<option value=\"ND\">North Dakota</option>\n\t\t\t<option value=\"OH\">Ohio</option>\n\t\t\t<option value=\"OK\">Oklahoma</option>\n\t\t\t<option value=\"OR\">Oregon</option>\n\t\t\t<option value=\"PA\">Pennsylvania</option>\n\t\t\t<option value=\"RI\">Rhode Island</option>\n\t\t\t<option value=\"SC\">South Carolina</option>\n\t\t\t<option value=\"SD\">South Dakota</option>\n\t\t\t<option value=\"TN\">Tennessee</option>\n\t\t\t<option value=\"TX\">\tTexas</option>\n\t\t\t<option value=\"UT\">Utah</option>\n\t\t\t<option value=\"VT\">Vermont</option>\n\t\t\t<option value=\"VA\">Virginia</option>\n\t\t\t<option value=\"WA\">Washington</option>\n\t\t\t<option value=\"WV\">West Virginia</option>\n\t\t\t<option value=\"WI\">Wisconsin</option>\n\t\t\t<option value=\"WY\">Wyoming</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n<h4>Links</h4>\n<form action=\"#\" method=\"GET\" class=\"form demo_form\">\n\t<fieldset class=\"form_fieldset\">\n\t\t<label for=\"demo_links\" class=\"form_label\">Label</label>\n\t\t<select name=\"demo_links\" id=\"demo_links\" data-dropdown-options='{\"label\":\"Jump Sites\",\"links\":true}'>\n\t\t\t<option value=\"http://google.com\">Google Search</option>\n\t\t\t<option value=\"http://boingboing.com\">Boing\tBoing</option>\n\t\t\t<option value=\"http://cnn.com\">CNN News</option>\n\t\t</select>\n\t</fieldset>\n</form>\n\n\n<!-- EXTERNAL LINKS -->\n<!--\n<h2\t>External Links</h2>\n<p>The links can also open in \ta new windo\tw or tab:\t</p>\n\n\t<pre class=\"example\"><co\tde class=\"language-javas\tcript\">$(\"select\").dropdown({\nexternalLinks: true\n});</c\tode></pre>\n\n<h5>Demo</h5>\n<form action=\"#\" method=\"GET\">\n\t<select name=\"select_links_external\" data-dropdown-options\t='{\"label\":\"Ju\tmp Sites\",\"external\":\"true\"}'>\n\t\t\t<option value=\"http://google.com\">Google Search</option>\n\t\t<option value=\"http://boingboing.com\">Boing\tBoing</option>\n\t\t<option value=\"http://cnn.com\">CNN News</o\tption>\n\t</select>\n</form>\n\n<br>\n-->\n\n<!-- COVER -->\n<!--\n<h2>Cover</h\t2>\n<p>The options list can cover the handle, sort o\tf Safari-st\tyle:</p>\n\n<pre \tclass=\"example\"\t><code class=\"l\tanguage-javascript\">$(\"select\").dropdown({\ncover: true\n});</code></pr\te>\n\n<h5>Demo</h5>\n<form action=\"#\" method=\"GET\">\n\t<select name=\"select_cover\" data-dropdown-options='{\"cover\t\":\"true\"}'>\n\t\t\t<option value=\"1\">One</option>\n\t\t\t<option value=\"2\">Two</option>\n\t\t<option value=\"3\">Three</option>\n\t\t<\toption value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n</form>\n\n<br>\n-->\n\n<!-- CLASS\t -->\n<!--\n<h2>Class</h2>\n<p>Define a cu\tstom CSS class to have multiple vi\tsually dist\tinct Drop\tdowns \ton the same pag\te:</p>\n\n<pre cl\tass=\"example\"><code class=\"language-javascript\">$(\"select\").dropdown({\ncustomClass: \"custom\"\n});<\t/code></pre>\n\n<h5>Demo</h5>\n<form action=\"#\" method=\"GET\">\n\t<select name=\"select_custom\" data-dropdown-options='{\"cust\tomClass\":\"cust\tom\"}'>\n\t\t<option value=\"1\">One<\t/option>\n\t\t<option value=\"2\">Two</option>\n\t\t<option value=\"3\">Three</option>\n\t\t<\toption value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n</form>\n\n<br>\n-->\n\n<!-- DISAB\tLE -->\n<!--\n<h2>Disable</h2>\n<p>Dropdow\tn will automatically detect disabl\ted fields, \tbut you c\tan alw\tays manually trig\tger the disable o\tr enable event:</p>\n\n<pre class=\"example\"><code class=\"language-javascript\">$(\"select\").dropdown(\"disable\");\n\n$(\"select\").dro\tpdown(\"enable\");</code></pre>\n\n<h5>Demo</h5>\n<button class=\"button small toggle_select\">Enable</button>\n<form action=\"#\" method=\"GET\" c\tlass=\"clear_fi\tx\">\n\t<select name=\"select_disabled\" class=\"select_disabled\"\t disabled=\"disabled\">\n\t\t<option value=\"1\">One</op\ttion>\n\t\t<option value=\"2\">Two</option>\n\t\t<option value=\"3\">Three</option>\n\t\t<\toption value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n</form>\n\n<br>\n-->\n\n<!-- DISAB\tLE ITEM -->\n<!--\n<p>You can also disabl\te and enable individual options by\t passing th\tat option\t's val\tue:</p>\n\n<pre class=\"e\txample\"><code class=\"language-javascript\">$(\"select\").dropdown(\"disable\", \"value\");\n\n$(\"sel\tect\").dropdown(\"enable\", \"value\");</code></pre>\n\n<h5>Demo</h5>\n<button class=\"button small toggle_select_option\">Enable Option 'One'</button>\n<form actio\tn=\"#\" method=\"\tGET\">\n\t<select name=\"select_disabled_option\" class=\"select_disabled_option\">\n\t\t\t<option value=\"1\" disabled>One<\t/option>\n\t\t<option value=\"2\">Two</option>\n\t\t<option value=\"3\">Three</op\ttion>\n\t\t<option value=\"4\">Four</option>\n\t\t\t<option value=\"5\">Five</option>\n\t\t</select>\n</form>\n-->"}

# Dropdown

A jQuery plugin for custom select elements.

* [Options](#options)
* [Methods](#methods)
* [Demo](#demo)

## Options

Set instance options by passing a valid object at initialization, or to the public `defaults` method. Custom options for a specific instance can also be set by attaching a `data-dropdown-options` attribute to the target elment. This attribute should contain the properly formatted JSON object representing the custom options.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| cover | boolean | false | Cover handle with option set |
| customClass | string | '' | Class applied to instance |
| label | string | '' | Label displayed before selection |
| external | boolean | false | Open options as links in new window |
| links | boolean | false | Open options as links in same window |
| mobile | boolean | false | Force desktop interaction on mobile |
| trim | int | 0 | &nbsp; |

## Methods

Methods are publicly available to all active instances, unless otherwise stated.

### close

Closes target instance.

```javascript
$(".target").dropdown("close");
```

### defaults

Extends plugin default settings; effects instances created hereafter.

```javascript
$.dropdown("defaults", { ... });
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | object | {} | New plugin defaults |

### destroy

Removes plugin instance.

```javascript
$(".target").dropdown("destroy");
```

### disable

Disables target instance or option.

```javascript
$(".target").dropdown("disable", "1");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| option | string | null | Target option value |

### enable

Enables target instance or option.

```javascript
$(".target").dropdown("enable", "1");
```

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| option | string | null | Target option value |

### open

Opens target instance.

```javascript
$(".target").dropdown("open");
```

### update

Updates instance.

```javascript
$(".target").dropdown("update");
```
