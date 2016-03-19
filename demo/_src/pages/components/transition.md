{"template":"component.html","title":"Transition","demo":"<style>\r\n\t.transitions { margin: 0 0 20px; }\r\n\t.transition_track { background: #fff; border: 1px solid #455a64; margin: 20px 0; }\r\n\t.transition { background-color: #00bcd4; height: 30px; width: 10%;\r\n\t\t-webkit-transition: margin 0.5s ease, height 0.5s linear 0.5s;\r\n\t\t\t\ttransition: margin 0.5s ease, height 0.5s linear 0.5s;\r\n\t}\r\n\t.transition.move { margin-left: 90%; }\r\n\t.transition_property.move {\r\n\t\theight: 50px;\r\n\t}\r\n\r\n\t.output { display: inline-block; margin: 0 0 0 10px; }\r\n</style>\r\n\r\n<script>\r\n\t$(function() {\r\n\t\t$(\".transition_basic\").transition({\r\n\t\t\talways: true\r\n\t\t}, complete);\r\n\r\n\t\t$(\".transition_parent\").transition({\r\n\t\t\talways: true,\r\n\t\t\ttarget: \".transition_delegate\",\r\n\t\t}, complete);\r\n\r\n\t\t$(\".transition_property\").transition({\r\n\t\t\talways: true,\r\n\t\t\tproperty: \"height\",\r\n\t\t}, complete);\r\n\r\n\t\t$(\".trigger\").on(\"click\", start);\r\n\t});\r\n\r\n\tfunction start() {\r\n\t\tvar $target = $(this).parent(\".transitions\").find(\".transition\");\r\n\r\n\t\tif (!$target.hasClass(\"animating\")) {\r\n\t\t\t$target.toggleClass(\"move\")\r\n\t\t\t\t   .addClass(\"animating\");\r\n\r\n\t\t\toutput($target, \" \");\r\n\t\t}\r\n\t}\r\n\r\n\tfunction complete() {\r\n\t\tvar $target = $(this);\r\n\r\n\t\tif (!$target.hasClass(\"transition\")) {\r\n\t\t\t$target = $(this).find(\".transition\");\r\n\t\t}\r\n\r\n\t\t$target.removeClass(\"animating\");\r\n\t\toutput($target, \"Complete\");\r\n\t}\r\n\r\n\tfunction output($target, text) {\r\n\t\t$target.parents(\".transitions\").find(\".output\").text(text);\r\n\t}\r\n</script>\r\n\r\n<h4>Basic</h4>\r\n<div class=\"transitions\">\r\n\t<div class=\"transition_track\">\r\n\t\t<div class=\"transition transition_basic\"></div>\r\n\t</div>\r\n\t<button class=\"button trigger\">Start</button>\r\n\t<div class=\"output\">&nbsp;</div>\r\n</div>\r\n<br>\r\n<h4>Delegation</h4>\r\n<div class=\"transitions\">\r\n\t<div class=\"transition_track transition_parent\">\r\n\t\t<div class=\"transition transition_delegate\"></div>\r\n\t</div>\r\n\t<button class=\"button trigger\">Start</button>\r\n\t<div class=\"output\">&nbsp;</div>\r\n</div>\r\n<br>\r\n<h4>Property</h4>\r\n<div class=\"transitions\">\r\n\t<div class=\"transition_track\">\r\n\t\t<div class=\"transition transition_property\"></div>\r\n\t</div>\r\n\t<button class=\"button trigger\">Start</button>\r\n\t<div class=\"output\">&nbsp;</div>\r\n</div>","asset_root":"../","year":2016}

 #Transition Demo
<p class="back_link"><a href="http://beta.formstone.it/components/transition">View Documentation</a></p>