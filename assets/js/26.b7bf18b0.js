(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{180:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Vue Storefront allows you to translate the whole UI using powerful "),s("a",{attrs:{href:"http://kazupon.github.io/vue-i18n/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),s("OutboundLink")],1),t._v(" library.")]),t._v(" "),s("p",[t._v("Please be aware of i18n issues while writing your own themes/extensions and keep the i18n support in mind, especially when creating Pull Requests to the core.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("When you're working with plain JS module you can simply use the translation helper:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),s("p",[t._v("For all helper methods and directives along with available parameters please do check the "),s("a",{attrs:{href:"http://kazupon.github.io/vue-i18n/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"internationalization-i18n-of-vue-storefront"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internationalization-i18n-of-vue-storefront","aria-hidden":"true"}},[this._v("#")]),this._v(" Internationalization (i18n) of Vue Storefront")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-i18n-in-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-i18n-in-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Using i18n in code")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" i18n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-storefront/i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEventBus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'notification'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" i18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Product has been added to the cart!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  action1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" i18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OK'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you're working with "),e("code",[this._v(".vue")]),this._v(" components the matter is even simpler with Vue directive "),e("code",[this._v("$t")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ $t('Size guide') }}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"working-with-translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-with-translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Working with translations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Translations are provided in "),e("code",[this._v("i18n/resource/i18n/en-US.csv")]),this._v(" file and can be extended / overriden in "),e("code",[this._v("theme/resource/i18n/en-US.csv")]),this._v(" accordingly.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Here's an example of "),e("code",[this._v("en-US.csv")]),this._v(" for "),e("code",[this._v("en-US")]),this._v(" locale:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-csv extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"customMessage","You can define or override translation messages here."\n"welcomeMessage", "Welcome to Vue Storefront theme starter!",\n"In case of any problems please take a look at the docs. If you haven\'t find what you were looking for in docs feel free to ask your question on our Slack", "In case of any problems please take a look at the docs. If you haven\'t find what you were looking for in docs feel free to ask your question on our Slack",\n"Here are some links that can help you with developing your own theme", "Here are some links that can help you with developing your own theme",\n"Project structure", "Project structure",\n"Working with themes", "Working with themes",\n"Working with components", "Working with components",\n"Working with data", "Working with data",\n"Vue Storefront Logo", "Vue Storefront Logo"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("when you create the "),e("code",[this._v("en-US.csv")]),this._v(" file within your "),e("code",[this._v("theme/resource/i18n/")]),this._v(" folder and override some messages like:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-csv extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"customMessage","You can define or override translation messages here."\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("... you may expect that "),e("code",[this._v("$t('customMessage)")]),this._v(" will return "),e("code",[this._v("You can define or override translation messages here.")]),this._v(" instead of "),e("code",[this._v("Here is the core message. that can be overwritten in the theme")]),this._v(". As simple as that! 😃")])}],!1,null,null,null);a.options.__file="translations.md";e.default=a.exports}}]);