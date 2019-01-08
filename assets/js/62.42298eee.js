(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{190:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("The sync store provides following public actions:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("Example usage:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),n("ul",[n("li",[n("code",[t._v(t._s(t.token))]),t._v(" - current user token")]),t._v(" "),n("li",[n("code",[t._v(t._s(t.cartId))]),t._v(" - current cart id")])]),t._v(" "),n("p",[t._v("An example URL with variables: "),n("code",[t._v("http://localhost:8080/api/cart/totals?token="+t._s(t.token)+"&cartId="+t._s(t.cartId))])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("Some types of network calls shouldn't have been queued. For example the shopping cart synchronization or other tasks that operate on the volatile data/state.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sync-vuex-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-vuex-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Sync Vuex Store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Sync Store is an auxiliary module for synchronizing the data with the backend. Tasks can be queued in the "),s("code",[this._v("localForage")]),this._v(" in case the Internet access is not available.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"queue-commit-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queue-commit-task","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("queue ({ commit }, task)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Queue network sync method. This is very similar to standard browser's "),s("code",[this._v("fetch()")]),this._v(" call but the difference is that the network call is queued and executed when the Internet is available.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("context\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sync/queue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endpoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/check/'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sku"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cors'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      product_sku"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sku"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      callback_event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'store:stock/stockAfterCheck'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      qty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("qty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_in_stock "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'out_of_stock'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      onlineCheckTaskId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if not online, cannot check the source of true here")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("callback_event")]),this._v(" is emitted after the results are received from the server party.\nThe "),s("code",[this._v("url")]),this._v(" can contain two dynamic variable placeholders that will be expanded to the actual values just before the execution:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("The task object and then the results are stored within the "),s("code",[this._v("tasksCollection")]),this._v(" indexedDb data table under the key of "),s("code",[this._v("task.task_id")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/vue-storefront/syncTasks-example.png",alt:"syncTasks local collection stores the tasks and the results"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpers","aria-hidden":"true"}},[this._v("#")]),this._v(" Helpers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In this case some modules ("),s("code",[this._v("cart.js")]),this._v(" for example) do use just some helper methods from sync store to synchronize the data immediately but keeping the common interface for the network calls:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("context\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sync/execute'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pull_endpoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sync the cart")]),t._v("\n      payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cors'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      silent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      force_client_state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" forceClientState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      callback_event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'store:cart/servercartAfterPulled'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("sync/execute")]),this._v(" can be used as an equivalent of "),s("code",[this._v("fetch()")]),this._v(".")])}],!1,null,null,null);e.options.__file="sync-store.md";s.default=e.exports}}]);