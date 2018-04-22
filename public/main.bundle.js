webpackJsonp(["main"],{

/***/ "../config/database.js":
/***/ (function(module, exports) {

module.exports = {
  // configure the code below with your username, password and mlab database information
  database: 'mongodb://hakim:hakim123@ds145208.mlab.com:45208/productdb-shoppingmart',
  //mongodb://<dbuser>:<dbpassword>@ds145208.mlab.com:45208/productdb-shoppingmart
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: 'yoursecret',
  //domain:'http://localhost:8080/'
  domain:''
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #868e96;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #868e96;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n@-ms-viewport {\n  width: device-width;\n}\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\ndfn {\n  font-style: italic;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\na,\narea,\nbutton,\n[role=\"button\"],\ninput:not([type=\"range\"]),\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n}\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\nbutton {\n  border-radius: 0;\n}\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit;\n}\nh1, .h1 {\n  font-size: 2.5rem;\n}\nh2, .h2 {\n  font-size: 2rem;\n}\nh3, .h3 {\n  font-size: 1.75rem;\n}\nh4, .h4 {\n  font-size: 1.5rem;\n}\nh5, .h5 {\n  font-size: 1.25rem;\n}\nh6, .h6 {\n  font-size: 1rem;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 5px;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96;\n}\n.blockquote-footer::before {\n  content: \"\\2014 \\00A0\";\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 90%;\n  color: #868e96;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f8f9fa;\n  border-radius: 0.25rem;\n}\na > code {\n  padding: 0;\n  color: inherit;\n  background-color: inherit;\n}\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  color: #212529;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=\"col-\"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -ms-flex-positive: 1;\n      -webkit-box-flex: 1;\n          flex-grow: 1;\n  max-width: 100%;\n}\n.col-auto {\n  -ms-flex: 0 0 auto;\n      -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n      -webkit-box-flex: 0;\n          flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n      -webkit-box-flex: 0;\n          flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n.col-3 {\n  -ms-flex: 0 0 25%;\n      -webkit-box-flex: 0;\n          flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n      -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n      -webkit-box-flex: 0;\n          flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n.col-6 {\n  -ms-flex: 0 0 50%;\n      -webkit-box-flex: 0;\n          flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n      -webkit-box-flex: 0;\n          flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n      -webkit-box-flex: 0;\n          flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n.col-9 {\n  -ms-flex: 0 0 75%;\n      -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n      -webkit-box-flex: 0;\n          flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n      -webkit-box-flex: 0;\n          flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n.col-12 {\n  -ms-flex: 0 0 100%;\n      -webkit-box-flex: 0;\n          flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first {\n  -ms-flex-order: -1;\n      -webkit-box-ordinal-group: 0;\n          order: -1;\n}\n.order-1 {\n  -ms-flex-order: 1;\n      -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n.order-2 {\n  -ms-flex-order: 2;\n      -webkit-box-ordinal-group: 3;\n          order: 2;\n}\n.order-3 {\n  -ms-flex-order: 3;\n      -webkit-box-ordinal-group: 4;\n          order: 3;\n}\n.order-4 {\n  -ms-flex-order: 4;\n      -webkit-box-ordinal-group: 5;\n          order: 4;\n}\n.order-5 {\n  -ms-flex-order: 5;\n      -webkit-box-ordinal-group: 6;\n          order: 5;\n}\n.order-6 {\n  -ms-flex-order: 6;\n      -webkit-box-ordinal-group: 7;\n          order: 6;\n}\n.order-7 {\n  -ms-flex-order: 7;\n      -webkit-box-ordinal-group: 8;\n          order: 7;\n}\n.order-8 {\n  -ms-flex-order: 8;\n      -webkit-box-ordinal-group: 9;\n          order: 8;\n}\n.order-9 {\n  -ms-flex-order: 9;\n      -webkit-box-ordinal-group: 10;\n          order: 9;\n}\n.order-10 {\n  -ms-flex-order: 10;\n      -webkit-box-ordinal-group: 11;\n          order: 10;\n}\n.order-11 {\n  -ms-flex-order: 11;\n      -webkit-box-ordinal-group: 12;\n          order: 11;\n}\n.order-12 {\n  -ms-flex-order: 12;\n      -webkit-box-ordinal-group: 13;\n          order: 12;\n}\n.offset-1 {\n  margin-left: 8.333333%;\n}\n.offset-2 {\n  margin-left: 16.666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.333333%;\n}\n.offset-5 {\n  margin-left: 41.666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.333333%;\n}\n.offset-8 {\n  margin-left: 66.666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.333333%;\n}\n.offset-11 {\n  margin-left: 91.666667%;\n}\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -ms-flex-positive: 1;\n        -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n        -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n        -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n        -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n        -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n        -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -ms-flex-order: -1;\n        -webkit-box-ordinal-group: 0;\n            order: -1;\n  }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n        -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n        -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n        -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n        -webkit-box-ordinal-group: 5;\n            order: 4;\n  }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n        -webkit-box-ordinal-group: 6;\n            order: 5;\n  }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n        -webkit-box-ordinal-group: 7;\n            order: 6;\n  }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n        -webkit-box-ordinal-group: 8;\n            order: 7;\n  }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n        -webkit-box-ordinal-group: 9;\n            order: 8;\n  }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n        -webkit-box-ordinal-group: 10;\n            order: 9;\n  }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n        -webkit-box-ordinal-group: 11;\n            order: 10;\n  }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n        -webkit-box-ordinal-group: 12;\n            order: 11;\n  }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n        -webkit-box-ordinal-group: 13;\n            order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -ms-flex-positive: 1;\n        -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n        -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n        -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n        -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n        -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n        -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -ms-flex-order: -1;\n        -webkit-box-ordinal-group: 0;\n            order: -1;\n  }\n  .order-md-1 {\n    -ms-flex-order: 1;\n        -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n  .order-md-2 {\n    -ms-flex-order: 2;\n        -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n  .order-md-3 {\n    -ms-flex-order: 3;\n        -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n  .order-md-4 {\n    -ms-flex-order: 4;\n        -webkit-box-ordinal-group: 5;\n            order: 4;\n  }\n  .order-md-5 {\n    -ms-flex-order: 5;\n        -webkit-box-ordinal-group: 6;\n            order: 5;\n  }\n  .order-md-6 {\n    -ms-flex-order: 6;\n        -webkit-box-ordinal-group: 7;\n            order: 6;\n  }\n  .order-md-7 {\n    -ms-flex-order: 7;\n        -webkit-box-ordinal-group: 8;\n            order: 7;\n  }\n  .order-md-8 {\n    -ms-flex-order: 8;\n        -webkit-box-ordinal-group: 9;\n            order: 8;\n  }\n  .order-md-9 {\n    -ms-flex-order: 9;\n        -webkit-box-ordinal-group: 10;\n            order: 9;\n  }\n  .order-md-10 {\n    -ms-flex-order: 10;\n        -webkit-box-ordinal-group: 11;\n            order: 10;\n  }\n  .order-md-11 {\n    -ms-flex-order: 11;\n        -webkit-box-ordinal-group: 12;\n            order: 11;\n  }\n  .order-md-12 {\n    -ms-flex-order: 12;\n        -webkit-box-ordinal-group: 13;\n            order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -ms-flex-positive: 1;\n        -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n        -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n        -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n        -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n        -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n        -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -ms-flex-order: -1;\n        -webkit-box-ordinal-group: 0;\n            order: -1;\n  }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n        -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n        -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n        -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n        -webkit-box-ordinal-group: 5;\n            order: 4;\n  }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n        -webkit-box-ordinal-group: 6;\n            order: 5;\n  }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n        -webkit-box-ordinal-group: 7;\n            order: 6;\n  }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n        -webkit-box-ordinal-group: 8;\n            order: 7;\n  }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n        -webkit-box-ordinal-group: 9;\n            order: 8;\n  }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n        -webkit-box-ordinal-group: 10;\n            order: 9;\n  }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n        -webkit-box-ordinal-group: 11;\n            order: 10;\n  }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n        -webkit-box-ordinal-group: 12;\n            order: 11;\n  }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n        -webkit-box-ordinal-group: 13;\n            order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -ms-flex-positive: 1;\n        -webkit-box-flex: 1;\n            flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n        -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n        -webkit-box-flex: 0;\n            flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n        -webkit-box-flex: 0;\n            flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n        -webkit-box-flex: 0;\n            flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n        -webkit-box-flex: 0;\n            flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n        -webkit-box-flex: 0;\n            flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n        -webkit-box-flex: 0;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -ms-flex-order: -1;\n        -webkit-box-ordinal-group: 0;\n            order: -1;\n  }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n        -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n        -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n        -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n        -webkit-box-ordinal-group: 5;\n            order: 4;\n  }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n        -webkit-box-ordinal-group: 6;\n            order: 5;\n  }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n        -webkit-box-ordinal-group: 7;\n            order: 6;\n  }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n        -webkit-box-ordinal-group: 8;\n            order: 7;\n  }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n        -webkit-box-ordinal-group: 9;\n            order: 8;\n  }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n        -webkit-box-ordinal-group: 10;\n            order: 9;\n  }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n        -webkit-box-ordinal-group: 11;\n            order: 10;\n  }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n        -webkit-box-ordinal-group: 12;\n            order: 11;\n  }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n        -webkit-box-ordinal-group: 13;\n            order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #e9ecef;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #e9ecef;\n}\n.table tbody + tbody {\n  border-top: 2px solid #e9ecef;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n.table-bordered {\n  border: 1px solid #e9ecef;\n}\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #e9ecef;\n}\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2;\n}\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6;\n}\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #cfd2d6;\n}\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e;\n}\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #e9ecef;\n}\n.table-dark {\n  color: #fff;\n  background-color: #212529;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #32383e;\n}\n.table-dark.table-bordered {\n  border: 0;\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover tbody tr:hover {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n@media (max-width: 575px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm.table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 767px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md.table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 991px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg.table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 1199px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl.table-bordered {\n    border: 0;\n  }\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.table-responsive.table-bordered {\n  border: 0;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: none;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control::-webkit-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control::-ms-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n}\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-file,\n.form-control-range {\n  display: block;\n}\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.col-form-legend {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n}\n.form-control-plaintext {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n.input-group-sm > .form-control-plaintext.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n.input-group-lg > .form-control-plaintext.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-plaintext.btn {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px);\n}\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px);\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col,\n.form-row > [class*=\"col-\"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form-check.disabled .form-check-label {\n  color: #868e96;\n}\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n}\n.form-check-input {\n  position: absolute;\n  margin-top: 0.25rem;\n  margin-left: -1.25rem;\n}\n.form-check-inline {\n  display: inline-block;\n  margin-right: 0.75rem;\n}\n.form-check-inline .form-check-label {\n  vertical-align: middle;\n}\n.valid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #28a745;\n}\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem;\n}\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745;\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n.custom-select:valid:focus,\n.custom-select.is-valid:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-control:valid ~ .valid-feedback,\n.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n.form-control.is-valid ~ .valid-tooltip, .was-validated\n.custom-select:valid ~ .valid-feedback,\n.was-validated\n.custom-select:valid ~ .valid-tooltip,\n.custom-select.is-valid ~ .valid-feedback,\n.custom-select.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .form-check-input:valid + .form-check-label, .form-check-input.is-valid + .form-check-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-indicator, .custom-control-input.is-valid ~ .custom-control-indicator {\n  background-color: rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-control-input:valid ~ .custom-control-description, .custom-control-input.is-valid ~ .custom-control-description {\n  color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-control, .custom-file-input.is-valid ~ .custom-file-control {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-control::before, .custom-file-input.is-valid ~ .custom-file-control::before {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:valid:focus, .custom-file-input.is-valid:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.invalid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #dc3545;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem;\n}\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n.custom-select:invalid:focus,\n.custom-select.is-invalid:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-control:invalid ~ .invalid-feedback,\n.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n.form-control.is-invalid ~ .invalid-tooltip, .was-validated\n.custom-select:invalid ~ .invalid-feedback,\n.was-validated\n.custom-select:invalid ~ .invalid-tooltip,\n.custom-select.is-invalid ~ .invalid-feedback,\n.custom-select.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .form-check-input:invalid + .form-check-label, .form-check-input.is-invalid + .form-check-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-indicator, .custom-control-input.is-invalid ~ .custom-control-indicator {\n  background-color: rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-description, .custom-control-input.is-invalid ~ .custom-control-description {\n  color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-control, .custom-file-input.is-invalid ~ .custom-file-control {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-control::before, .custom-file-input.is-invalid ~ .custom-file-control::before {\n  border-color: inherit;\n}\n.was-validated .custom-file-input:invalid:focus, .custom-file-input.is-invalid:focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.form-inline {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n}\n.form-inline .form-check {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .form-inline label {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-align: center;\n        -webkit-box-align: center;\n            align-items: center;\n    -ms-flex-pack: center;\n        -webkit-box-pack: center;\n            justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex: 0 0 auto;\n        -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    -ms-flex-flow: row wrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -ms-flex-align: center;\n        -webkit-box-align: center;\n            align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-align: center;\n        -webkit-box-align: center;\n            align-items: center;\n    -ms-flex-pack: center;\n        -webkit-box-pack: center;\n            justify-content: center;\n    width: auto;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .form-inline .form-check-label {\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-align: center;\n        -webkit-box-align: center;\n            align-items: center;\n    -ms-flex-pack: center;\n        -webkit-box-pack: center;\n            justify-content: center;\n    padding-left: 0;\n  }\n  .form-inline .custom-control-indicator {\n    position: static;\n    display: inline-block;\n    margin-right: 0.25rem;\n    vertical-align: text-bottom;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn:focus, .btn:hover {\n  text-decoration: none;\n}\n.btn:focus, .btn.focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity: .65;\n}\n.btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\n  background-image: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n.btn-primary:focus, .btn-primary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #727b84;\n  border-color: #6c757d;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-secondary:not([disabled]):not(.disabled):active, .btn-secondary:not([disabled]):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #666e76;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:not([disabled]):not(.disabled):active, .btn-success:not([disabled]):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:not([disabled]):not(.disabled):active, .btn-info:not([disabled]):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-warning {\n  color: #111;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #111;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:not([disabled]):not(.disabled):active, .btn-warning:not([disabled]):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #111;\n  background-color: #d39e00;\n  border-color: #c69500;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:not([disabled]):not(.disabled):active, .btn-danger:not([disabled]):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-light {\n  color: #111;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #111;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:not([disabled]):not(.disabled):active, .btn-light:not([disabled]):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #111;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:not([disabled]):not(.disabled):active, .btn-dark:not([disabled]):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n.btn-outline-primary:not([disabled]):not(.disabled):active, .btn-outline-primary:not([disabled]):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #868e96;\n  background-color: transparent;\n}\n.btn-outline-secondary:not([disabled]):not(.disabled):active, .btn-outline-secondary:not([disabled]):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n}\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n.btn-outline-success:not([disabled]):not(.disabled):active, .btn-outline-success:not([disabled]):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n.btn-outline-info:not([disabled]):not(.disabled):active, .btn-outline-info:not([disabled]):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n.btn-outline-warning:not([disabled]):not(.disabled):active, .btn-outline-warning:not([disabled]):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ffc107;\n  border-color: #ffc107;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n.btn-outline-danger:not([disabled]):not(.disabled):active, .btn-outline-danger:not([disabled]):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n.btn-outline-light:not([disabled]):not(.disabled):active, .btn-outline-light:not([disabled]):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n.btn-outline-dark:not([disabled]):not(.disabled):active, .btn-outline-dark:not([disabled]):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent;\n}\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n  background-color: transparent;\n  border-color: transparent;\n}\n.btn-link:focus, .btn-link.focus {\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #868e96;\n}\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.show {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.show {\n  display: block;\n}\ntr.collapse.show {\n  display: table-row;\n}\ntbody.collapse.show {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0;\n}\n.dropdown-item:focus, .dropdown-item:hover {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #868e96;\n  background-color: transparent;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -ms-flex: 0 1 auto;\n      -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 2;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group,\n.btn-group-vertical .btn + .btn,\n.btn-group-vertical .btn + .btn-group,\n.btn-group-vertical .btn-group + .btn,\n.btn-group-vertical .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: start;\n      -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn + .dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.btn + .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical {\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  -ms-flex-align: start;\n      -webkit-box-align: start;\n          align-items: flex-start;\n  -ms-flex-pack: center;\n      -webkit-box-pack: center;\n          justify-content: center;\n}\n.btn-group-vertical .btn,\n.btn-group-vertical .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: stretch;\n      -webkit-box-align: stretch;\n          align-items: stretch;\n  width: 100%;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n  z-index: 3;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap;\n}\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-addon.form-control-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n.input-group-addon.form-control-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:not(:last-child),\n.input-group-addon:not(:last-child),\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group > .btn,\n.input-group-btn:not(:last-child) > .dropdown-toggle,\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:not(:last-child) {\n  border-right: 0;\n}\n.input-group .form-control:not(:first-child),\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-control + .input-group-addon:not(:first-child) {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  -ms-flex-align: stretch;\n      -webkit-box-align: stretch;\n          align-items: stretch;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n  z-index: 3;\n}\n.input-group-btn:first-child > .btn + .btn {\n  margin-left: 0;\n}\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group {\n  z-index: 2;\n  margin-left: 0;\n}\n.input-group-btn:not(:first-child) > .btn:first-child,\n.input-group-btn:not(:first-child) > .btn-group:first-child {\n  margin-left: -1px;\n}\n.input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n.input-group-btn:not(:first-child) > .btn-group:focus,\n.input-group-btn:not(:first-child) > .btn-group:active,\n.input-group-btn:not(:first-child) > .btn-group:hover {\n  z-index: 3;\n}\n.custom-control {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: 1rem;\n}\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #007bff;\n}\n.custom-control-input:focus ~ .custom-control-indicator {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-control-input:active ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #b3d7ff;\n}\n.custom-control-input:disabled ~ .custom-control-indicator {\n  background-color: #e9ecef;\n}\n.custom-control-input:disabled ~ .custom-control-description {\n  color: #868e96;\n}\n.custom-control-indicator {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.custom-checkbox .custom-control-indicator {\n  border-radius: 0.25rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #007bff;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\n}\n.custom-radio .custom-control-indicator {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.custom-controls-stacked {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.custom-controls-stacked .custom-control {\n  margin-bottom: 0.25rem;\n}\n.custom-controls-stacked .custom-control + .custom-control {\n  margin-left: 0;\n}\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: none;\n}\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.custom-select[multiple] {\n  height: auto;\n  background-image: none;\n}\n.custom-select:disabled {\n  color: #868e96;\n  background-color: #e9ecef;\n}\n.custom-select::-ms-expand {\n  opacity: 0;\n}\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%;\n}\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-control {\n  -webkit-box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff;\n          box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff;\n}\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-control:lang(en):empty::after {\n  content: \"Choose file...\";\n}\n.custom-file-control::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  z-index: 6;\n  display: block;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n.custom-file-control:lang(en)::before {\n  content: \"Browse\";\n}\n.nav {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link:focus, .nav-link:hover {\n  text-decoration: none;\n}\n.nav-link.disabled {\n  color: #868e96;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n  border-color: #e9ecef #e9ecef #ddd;\n}\n.nav-tabs .nav-link.disabled {\n  color: #868e96;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #ddd #ddd #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n.nav-fill .nav-item {\n  -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -ms-flex-positive: 1;\n      -webkit-box-flex: 1;\n          flex-grow: 1;\n  text-align: center;\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.navbar {\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: justify;\n      -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar > .container,\n.navbar > .container-fluid {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: justify;\n      -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand:focus, .navbar-brand:hover {\n  text-decoration: none;\n}\n.navbar-nav {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      -webkit-box-flex: 1;\n          flex-grow: 1;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n}\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler:focus, .navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n@media (max-width: 575px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -ms-flex-flow: row nowrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    -ms-flex-pack: start;\n        -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -ms-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-sm .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -ms-flex-flow: row nowrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    -ms-flex-pack: start;\n        -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -ms-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-md .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n@media (max-width: 991px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -ms-flex-flow: row nowrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    -ms-flex-pack: start;\n        -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -ms-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-lg .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n@media (max-width: 1199px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -ms-flex-flow: row nowrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n    -ms-flex-pack: start;\n        -webkit-box-pack: start;\n            justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -ms-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n    right: 0;\n    left: auto;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem;\n  }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xl .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n  }\n}\n.navbar-expand {\n  -ms-flex-flow: row nowrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -ms-flex-pack: start;\n      -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-expand .navbar-nav {\n  -ms-flex-direction: row;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: .5rem;\n  padding-left: .5rem;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n.navbar-expand .navbar-collapse {\n  display: -ms-flexbox !important;\n  display: -webkit-box !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-expand .dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n}\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n.navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {\n  color: #fff;\n}\n.card {\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.card-body {\n  -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.card-title {\n  margin-bottom: 0.75rem;\n}\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n.card-text:last-child {\n  margin-bottom: 0;\n}\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0;\n}\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n}\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card-deck {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.card-deck .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-deck {\n    -ms-flex-flow: row wrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex: 1 0 0%;\n        -webkit-box-flex: 1;\n            flex: 1 0 0%;\n    -ms-flex-direction: column;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n.card-group {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.card-group .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-group {\n    -ms-flex-flow: row wrap;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            flex-flow: row wrap;\n  }\n  .card-group .card {\n    -ms-flex: 1 0 0%;\n        -webkit-box-flex: 1;\n            flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group .card:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group .card:first-child .card-img-top {\n    border-top-right-radius: 0;\n  }\n  .card-group .card:first-child .card-img-bottom {\n    border-bottom-right-radius: 0;\n  }\n  .card-group .card:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group .card:last-child .card-img-top {\n    border-top-left-radius: 0;\n  }\n  .card-group .card:last-child .card-img-bottom {\n    border-bottom-left-radius: 0;\n  }\n  .card-group .card:only-child {\n    border-radius: 0.25rem;\n  }\n  .card-group .card:only-child .card-img-top {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n  .card-group .card:only-child .card-img-bottom {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .card-group .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius: 0;\n  }\n  .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n  .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom {\n    border-radius: 0;\n  }\n}\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n.breadcrumb {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #868e96;\n  content: \"/\";\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n.breadcrumb-item.active {\n  color: #868e96;\n}\n.pagination {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active .page-link {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.page-link:focus, .page-link:hover {\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #ddd;\n}\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\n.badge-primary[href]:focus, .badge-primary[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0062cc;\n}\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96;\n}\n.badge-secondary[href]:focus, .badge-secondary[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #6c757d;\n}\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n.badge-success[href]:focus, .badge-success[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1e7e34;\n}\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n.badge-info[href]:focus, .badge-info[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #117a8b;\n}\n.badge-warning {\n  color: #111;\n  background-color: #ffc107;\n}\n.badge-warning[href]:focus, .badge-warning[href]:hover {\n  color: #111;\n  text-decoration: none;\n  background-color: #d39e00;\n}\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\n.badge-danger[href]:focus, .badge-danger[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #bd2130;\n}\n.badge-light {\n  color: #111;\n  background-color: #f8f9fa;\n}\n.badge-light[href]:focus, .badge-light[href]:hover {\n  color: #111;\n  text-decoration: none;\n  background-color: #dae0e5;\n}\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n.badge-dark[href]:focus, .badge-dark[href]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #1d2124;\n}\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.alert-heading {\n  color: inherit;\n}\n.alert-link {\n  font-weight: 700;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-primary hr {\n  border-top-color: #9fcdff;\n}\n.alert-primary .alert-link {\n  color: #002752;\n}\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2;\n}\n.alert-secondary hr {\n  border-top-color: #cfd2d6;\n}\n.alert-secondary .alert-link {\n  color: #2e3133;\n}\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n.alert-info .alert-link {\n  color: #062c33;\n}\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n.alert-warning .alert-link {\n  color: #533f03;\n}\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n.alert-danger .alert-link {\n  color: #491217;\n}\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n.alert-light .alert-link {\n  color: #686868;\n}\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n.alert-dark .alert-link {\n  color: #040505;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress-bar {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: center;\n      -webkit-box-pack: center;\n          justify-content: center;\n  color: #fff;\n  background-color: #007bff;\n}\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite;\n}\n.media {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: start;\n      -webkit-box-align: start;\n          align-items: flex-start;\n}\n.media-body {\n  -ms-flex: 1;\n      -webkit-box-flex: 1;\n          flex: 1;\n}\n.list-group {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:focus, .list-group-item-action:hover {\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-group-item:focus, .list-group-item:hover {\n  text-decoration: none;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #868e96;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0;\n}\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0;\n}\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #004085;\n}\na.list-group-item-primary:focus, a.list-group-item-primary:hover,\nbutton.list-group-item-primary:focus,\nbutton.list-group-item-primary:hover {\n  color: #004085;\n  background-color: #9fcdff;\n}\na.list-group-item-primary.active,\nbutton.list-group-item-primary.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2;\n}\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e;\n}\na.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\nbutton.list-group-item-secondary:focus,\nbutton.list-group-item-secondary:hover {\n  color: #464a4e;\n  background-color: #cfd2d6;\n}\na.list-group-item-secondary.active,\nbutton.list-group-item-secondary.active {\n  color: #fff;\n  background-color: #464a4e;\n  border-color: #464a4e;\n}\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #155724;\n}\na.list-group-item-success:focus, a.list-group-item-success:hover,\nbutton.list-group-item-success:focus,\nbutton.list-group-item-success:hover {\n  color: #155724;\n  background-color: #b1dfbb;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #0c5460;\n}\na.list-group-item-info:focus, a.list-group-item-info:hover,\nbutton.list-group-item-info:focus,\nbutton.list-group-item-info:hover {\n  color: #0c5460;\n  background-color: #abdde5;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856404;\n}\na.list-group-item-warning:focus, a.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover {\n  color: #856404;\n  background-color: #ffe8a1;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #721c24;\n}\na.list-group-item-danger:focus, a.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182;\n}\na.list-group-item-light:focus, a.list-group-item-light:hover,\nbutton.list-group-item-light:focus,\nbutton.list-group-item-light:hover {\n  color: #818182;\n  background-color: #ececf6;\n}\na.list-group-item-light.active,\nbutton.list-group-item-light.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21;\n}\na.list-group-item-dark:focus, a.list-group-item-dark:hover,\nbutton.list-group-item-dark:focus,\nbutton.list-group-item-dark:hover {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\na.list-group-item-dark.active,\nbutton.list-group-item-dark.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n.close:focus, .close:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\nbutton.close {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  transition: -webkit-transform 0.3s ease-out;\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.show .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n  pointer-events: none;\n}\n.modal-content {\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          flex-direction: column;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-header {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: start;\n      -webkit-box-align: start;\n          align-items: flex-start;\n  -ms-flex-pack: justify;\n      -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.modal-header .close {\n  padding: 15px;\n  margin: -15px -15px -15px auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body {\n  position: relative;\n  -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 15px;\n}\n.modal-footer {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: end;\n      -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 15px;\n  border-top: 1px solid #e9ecef;\n}\n.modal-footer > :not(:first-child) {\n  margin-left: .25rem;\n}\n.modal-footer > :not(:last-child) {\n  margin-right: .25rem;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto;\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n}\n.tooltip .arrow::before {\n  position: absolute;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.bs-tooltip-top, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 5px 0;\n}\n.tooltip.bs-tooltip-top .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n  bottom: 0;\n}\n.tooltip.bs-tooltip-top .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n  margin-left: -3px;\n  content: \"\";\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.bs-tooltip-right, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 5px;\n}\n.tooltip.bs-tooltip-right .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n  left: 0;\n}\n.tooltip.bs-tooltip-right .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n  margin-top: -3px;\n  content: \"\";\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.bs-tooltip-bottom, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 5px 0;\n}\n.tooltip.bs-tooltip-bottom .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n  top: 0;\n}\n.tooltip.bs-tooltip-bottom .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n  margin-left: -3px;\n  content: \"\";\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bs-tooltip-left, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 5px;\n}\n.tooltip.bs-tooltip-left .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n  right: 0;\n}\n.tooltip.bs-tooltip-left .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n  right: 0;\n  margin-top: -3px;\n  content: \"\";\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.popover .arrow::before,\n.popover .arrow::after {\n  position: absolute;\n  display: block;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover .arrow::before {\n  content: \"\";\n  border-width: 0.8rem;\n}\n.popover .arrow::after {\n  content: \"\";\n  border-width: 0.8rem;\n}\n.popover.bs-popover-top, .popover.bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.8rem;\n}\n.popover.bs-popover-top .arrow, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow {\n  bottom: 0;\n}\n.popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n.popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n  border-bottom-width: 0;\n}\n.popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n  bottom: -0.8rem;\n  margin-left: -0.8rem;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n  bottom: calc((0.8rem - 1px) * -1);\n  margin-left: -0.8rem;\n  border-top-color: #fff;\n}\n.popover.bs-popover-right, .popover.bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.8rem;\n}\n.popover.bs-popover-right .arrow, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow {\n  left: 0;\n}\n.popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n.popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n  margin-top: -0.8rem;\n  border-left-width: 0;\n}\n.popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n  left: -0.8rem;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n  left: calc((0.8rem - 1px) * -1);\n  border-right-color: #fff;\n}\n.popover.bs-popover-bottom, .popover.bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.8rem;\n}\n.popover.bs-popover-bottom .arrow, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n  top: 0;\n}\n.popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n.popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  margin-left: -0.8rem;\n  border-top-width: 0;\n}\n.popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n  top: -0.8rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  top: calc((0.8rem - 1px) * -1);\n  border-bottom-color: #fff;\n}\n.popover.bs-popover-bottom .popover-header::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 20px;\n  margin-left: -10px;\n  content: \"\";\n  border-bottom: 1px solid #f7f7f7;\n}\n.popover.bs-popover-left, .popover.bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.8rem;\n}\n.popover.bs-popover-left .arrow, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow {\n  right: 0;\n}\n.popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n.popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n  margin-top: -0.8rem;\n  border-right-width: 0;\n}\n.popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n  right: -0.8rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n  right: calc((0.8rem - 1px) * -1);\n  border-left-color: #fff;\n}\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  transition: -webkit-transform 0.6s ease;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0;\n}\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next,\n  .active.carousel-item-right {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-prev,\n  .active.carousel-item-left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      -webkit-box-align: center;\n          align-items: center;\n  -ms-flex-pack: center;\n      -webkit-box-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n}\n.carousel-control-prev:focus, .carousel-control-prev:hover,\n.carousel-control-next:focus,\n.carousel-control-next:hover {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%;\n}\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-pack: center;\n      -webkit-box-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n  position: relative;\n  -ms-flex: 0 1 auto;\n      -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.carousel-indicators li::before {\n  position: absolute;\n  top: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: \"\";\n}\n.carousel-indicators li::after {\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 10px;\n  content: \"\";\n}\n.carousel-indicators .active {\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.bg-primary {\n  background-color: #007bff !important;\n}\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #0062cc !important;\n}\n.bg-secondary {\n  background-color: #868e96 !important;\n}\na.bg-secondary:focus, a.bg-secondary:hover {\n  background-color: #6c757d !important;\n}\n.bg-success {\n  background-color: #28a745 !important;\n}\na.bg-success:focus, a.bg-success:hover {\n  background-color: #1e7e34 !important;\n}\n.bg-info {\n  background-color: #17a2b8 !important;\n}\na.bg-info:focus, a.bg-info:hover {\n  background-color: #117a8b !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n}\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #d39e00 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #bd2130 !important;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\na.bg-light:focus, a.bg-light:hover {\n  background-color: #dae0e5 !important;\n}\n.bg-dark {\n  background-color: #343a40 !important;\n}\na.bg-dark:focus, a.bg-dark:hover {\n  background-color: #1d2124 !important;\n}\n.bg-white {\n  background-color: #fff !important;\n}\n.bg-transparent {\n  background-color: transparent !important;\n}\n.border {\n  border: 1px solid #e9ecef !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-right-0 {\n  border-right: 0 !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-left-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  border-color: #007bff !important;\n}\n.border-secondary {\n  border-color: #868e96 !important;\n}\n.border-success {\n  border-color: #28a745 !important;\n}\n.border-info {\n  border-color: #17a2b8 !important;\n}\n.border-warning {\n  border-color: #ffc107 !important;\n}\n.border-danger {\n  border-color: #dc3545 !important;\n}\n.border-light {\n  border-color: #f8f9fa !important;\n}\n.border-dark {\n  border-color: #343a40 !important;\n}\n.border-white {\n  border-color: #fff !important;\n}\n.rounded {\n  border-radius: 0.25rem !important;\n}\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.rounded-0 {\n  border-radius: 0 !important;\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.d-none {\n  display: none !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: -ms-flexbox !important;\n  display: -webkit-box !important;\n  display: flex !important;\n}\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: -webkit-inline-box !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: -webkit-inline-box !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: -webkit-inline-box !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -ms-flexbox !important;\n    display: -webkit-box !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: -webkit-inline-box !important;\n    display: inline-flex !important;\n  }\n}\n.d-print-block {\n  display: none !important;\n}\n@media print {\n  .d-print-block {\n    display: block !important;\n  }\n}\n.d-print-inline {\n  display: none !important;\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n}\n.d-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%;\n}\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n.flex-row {\n  -ms-flex-direction: row !important;\n      -webkit-box-orient: horizontal !important;\n      -webkit-box-direction: normal !important;\n          flex-direction: row !important;\n}\n.flex-column {\n  -ms-flex-direction: column !important;\n      -webkit-box-orient: vertical !important;\n      -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n}\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n      -webkit-box-orient: horizontal !important;\n      -webkit-box-direction: reverse !important;\n          flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n      -webkit-box-orient: vertical !important;\n      -webkit-box-direction: reverse !important;\n          flex-direction: column-reverse !important;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important;\n}\n.justify-content-start {\n  -ms-flex-pack: start !important;\n      -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n}\n.justify-content-end {\n  -ms-flex-pack: end !important;\n      -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n.justify-content-center {\n  -ms-flex-pack: center !important;\n      -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n      -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important;\n}\n.align-items-start {\n  -ms-flex-align: start !important;\n      -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n.align-items-end {\n  -ms-flex-align: end !important;\n      -webkit-box-align: end !important;\n          align-items: flex-end !important;\n}\n.align-items-center {\n  -ms-flex-align: center !important;\n      -webkit-box-align: center !important;\n          align-items: center !important;\n}\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n      -webkit-box-align: baseline !important;\n          align-items: baseline !important;\n}\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n      -webkit-box-align: stretch !important;\n          align-items: stretch !important;\n}\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important;\n}\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important;\n}\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important;\n}\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important;\n}\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important;\n}\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important;\n}\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      -ms-grid-row-align: auto !important;\n      align-self: auto !important;\n}\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n}\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important;\n}\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important;\n}\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important;\n}\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      -ms-grid-row-align: stretch !important;\n      align-self: stretch !important;\n}\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -ms-flex-direction: row !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -ms-flex-direction: column !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-sm-start {\n    -ms-flex-pack: start !important;\n        -webkit-box-pack: start !important;\n            justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -ms-flex-pack: end !important;\n        -webkit-box-pack: end !important;\n            justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -ms-flex-pack: center !important;\n        -webkit-box-pack: center !important;\n            justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -ms-flex-pack: justify !important;\n        -webkit-box-pack: justify !important;\n            justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -ms-flex-align: start !important;\n        -webkit-box-align: start !important;\n            align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -ms-flex-align: end !important;\n        -webkit-box-align: end !important;\n            align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -ms-flex-align: center !important;\n        -webkit-box-align: center !important;\n            align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -ms-flex-align: baseline !important;\n        -webkit-box-align: baseline !important;\n            align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -ms-flex-align: stretch !important;\n        -webkit-box-align: stretch !important;\n            align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    -ms-flex-direction: row !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: row !important;\n  }\n  .flex-md-column {\n    -ms-flex-direction: column !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-md-start {\n    -ms-flex-pack: start !important;\n        -webkit-box-pack: start !important;\n            justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -ms-flex-pack: end !important;\n        -webkit-box-pack: end !important;\n            justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -ms-flex-pack: center !important;\n        -webkit-box-pack: center !important;\n            justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -ms-flex-pack: justify !important;\n        -webkit-box-pack: justify !important;\n            justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -ms-flex-align: start !important;\n        -webkit-box-align: start !important;\n            align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -ms-flex-align: end !important;\n        -webkit-box-align: end !important;\n            align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -ms-flex-align: center !important;\n        -webkit-box-align: center !important;\n            align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -ms-flex-align: baseline !important;\n        -webkit-box-align: baseline !important;\n            align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -ms-flex-align: stretch !important;\n        -webkit-box-align: stretch !important;\n            align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -ms-flex-direction: row !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -ms-flex-direction: column !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-lg-start {\n    -ms-flex-pack: start !important;\n        -webkit-box-pack: start !important;\n            justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -ms-flex-pack: end !important;\n        -webkit-box-pack: end !important;\n            justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -ms-flex-pack: center !important;\n        -webkit-box-pack: center !important;\n            justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -ms-flex-pack: justify !important;\n        -webkit-box-pack: justify !important;\n            justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -ms-flex-align: start !important;\n        -webkit-box-align: start !important;\n            align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -ms-flex-align: end !important;\n        -webkit-box-align: end !important;\n            align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n        -webkit-box-align: center !important;\n            align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -ms-flex-align: baseline !important;\n        -webkit-box-align: baseline !important;\n            align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -ms-flex-align: stretch !important;\n        -webkit-box-align: stretch !important;\n            align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -ms-flex-direction: row !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -ms-flex-direction: column !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n        -webkit-box-orient: horizontal !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n        -webkit-box-orient: vertical !important;\n        -webkit-box-direction: reverse !important;\n            flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xl-start {\n    -ms-flex-pack: start !important;\n        -webkit-box-pack: start !important;\n            justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -ms-flex-pack: end !important;\n        -webkit-box-pack: end !important;\n            justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -ms-flex-pack: center !important;\n        -webkit-box-pack: center !important;\n            justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -ms-flex-pack: justify !important;\n        -webkit-box-pack: justify !important;\n            justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -ms-flex-align: start !important;\n        -webkit-box-align: start !important;\n            align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -ms-flex-align: end !important;\n        -webkit-box-align: end !important;\n            align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -ms-flex-align: center !important;\n        -webkit-box-align: center !important;\n            align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -ms-flex-align: baseline !important;\n        -webkit-box-align: baseline !important;\n            align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -ms-flex-align: stretch !important;\n        -webkit-box-align: stretch !important;\n            align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important;\n  }\n}\n.float-left {\n  float: left !important;\n}\n.float-right {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #007bff !important;\n}\na.text-primary:focus, a.text-primary:hover {\n  color: #0062cc !important;\n}\n.text-secondary {\n  color: #868e96 !important;\n}\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important;\n}\n.text-light {\n  color: #f8f9fa !important;\n}\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important;\n}\n.text-dark {\n  color: #343a40 !important;\n}\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important;\n}\n.text-muted {\n  color: #868e96 !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n.container{\r\n    padding-top: 70px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AngularMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_admin_admin_orders_admin_orders_component__ = __webpack_require__("./src/app/components/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_components_admin_admin_products_admin_products_component__ = __webpack_require__("./src/app/components/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_home_admin_home_component__ = __webpack_require__("./src/app/components/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_category_admin_category_component__ = __webpack_require__("./src/app/components/admin/admin-category/admin-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_shared_category_list_category_list_component__ = __webpack_require__("./src/app/components/shared/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_components_products_product_filter_product_filter_component__ = __webpack_require__("./src/app/components/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_components_product_card_product_card_component__ = __webpack_require__("./src/app/components/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_components_products_products_component__ = __webpack_require__("./src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["H" /* MatTooltipModule */],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_28_app_components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'products/:category', component: __WEBPACK_IMPORTED_MODULE_28_app_components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_28_app_components_products_products_component__["a" /* ProductsComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */] },
    { path: 'admin/manage-products', component: __WEBPACK_IMPORTED_MODULE_18_app_components_admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */] },
    { path: 'admin/manage-category', component: __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_category_admin_category_component__["a" /* AdminCategoryComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17_app_components_admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_18_app_components_admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_category_admin_category_component__["a" /* AdminCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_28_app_components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_22_app_components_products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_23_app_components_product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_home_admin_home_component__["a" /* AdminHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_category_admin_category_component__["a" /* AdminCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_shared_category_list_category_list_component__["a" /* CategoryListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                AngularMaterialModule,
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_table__["m" /* CdkTableModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_25__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_29_app_services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_30_app_services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_0__services_shopping_cart_service__["a" /* ShoppingCartService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-category/admin-category.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  .mat-header-cell.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n  \r\n  .nav-link{\r\n    margin:15px;\r\n    background-color: #ffeb3b52;\r\n    cursor: pointer;\r\n    color: purple !important;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/admin/admin-category/admin-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <a class=\"nav-link list-group-item\" (click)=\"showForm(undefined)\" [style.display]=\"!isShowForm ?'block':'none'\">Add new Category</a>\r\n</div>\r\n<div class=\"row\">\r\n    <div *ngIf=\"isShowForm\" class=\"col-6\">\r\n        <form #f=\"ngForm\" (ngSubmit)=\"saveCategory(f.value)\">\r\n            <div class=\"form-group\">\r\n              <label for=\"key\">Key</label>\r\n              <input type=\"text\" [(ngModel)]=\"category.key\"  \r\n              class=\"form-control\" id=\"key\" name=\"category.key\" aria-describedby=\"title\" \r\n              placeholder=\"Enter Category Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" [(ngModel)]=\"category.title\" name=\"category.title\" rows=\"4\" \r\n                class=\"form-control\" id=\"title\" aria-describedby=\"Description\" \r\n                placeholder=\"Enter Description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"category\">Is Category a featured category?</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"category.featured\" name=\"category.featured\" id=\"featured\">\r\n                  <option  value=\"true\">True</option>\r\n                  <option  value=\"false\">False</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"imageUrl\">Category Image</label>\r\n                <input type=\"text\" [(ngModel)]=\"category.imageUrl\" name=\"category.imageUrl\" rows=\"4\" \r\n                class=\"form-control\" id=\"imageUrl\" aria-describedby=\"Description\" \r\n                placeholder=\"Enter Category Image URL\">\r\n              </div>\r\n    \r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"form-control offset-2 col-6 btn btn-primary\">Save Changes</button>\r\n              </div>\r\n              \r\n    \r\n          </form>\r\n    \r\n    \r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n        <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n      \r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"key\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Key </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.key}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <!-- Title Column -->\r\n          <ng-container matColumnDef=\"title\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <!-- Featured Column -->\r\n          <ng-container matColumnDef=\"Featured\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Featured </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.featured}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <!--Image Url Column -->\r\n          <ng-container matColumnDef=\"imageUrl\">\r\n            <mat-header-cell *matHeaderCellDef> Image Url </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" > {{element.imageUrl}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Update\">\r\n            <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <a (click)=\"showForm(element)\" class=\"nav-link\" >Edit</a>  </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Delete\">\r\n            <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <a (click)=\"deleteCategory(element._id)\" class=\"nav-link\" >Delete</a>  </mat-cell>\r\n          </ng-container>\r\n      \r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator\r\n                 [pageSize]=\"10\"\r\n                 [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n      </div>\r\n\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <a class=\"col-6\" id=\"addCategory\" (click)=\"showForm($event)\">Add new Category</a>\r\n        <a class=\"col-6\" id=\"updateCategory\" (click)=\"showForm($event)\" >Update the existing category</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-12\">\r\n    <div *ngIf=\"showAddCategoryForm\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\"saveCategory(f.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"key\">Key</label>\r\n          <input type=\"text\" [(ngModel)]=\"key\" name=\"key\" \r\n          class=\"form-control\" id=\"key\" name=\"key\" aria-describedby=\"title\" \r\n          placeholder=\"Enter Category Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"title\">Title</label>\r\n            <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" rows=\"4\" \r\n            class=\"form-control\" id=\"title\" aria-describedby=\"Description\" \r\n            placeholder=\"Enter Description\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"category\">Is Category a featured category?</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"featured\" name=\"featured\" id=\"featured\">\r\n              <option  value=\"true\">True</option>\r\n              <option  value=\"false\">False</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"imageUrl\">Category Image</label>\r\n            <input type=\"text\" [(ngModel)]=\"imageUrl\" name=\"imageUrl\" rows=\"4\" \r\n            class=\"form-control\" id=\"imageUrl\" aria-describedby=\"Description\" \r\n            placeholder=\"Enter Category Image URL\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      </form>\r\n    </div>\r\n    <div *ngIf=\"showUpdateCategoryForm\">\r\n        <div class=\"form-group\">\r\n            \r\n            <category-list></category-list>\r\n        \r\n        </div>   \r\n        \r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/admin/admin-category/admin-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminCategoryComponent = (function () {
    function AdminCategoryComponent(categoryService, routerService) {
        var _this = this;
        this.categoryService = categoryService;
        this.routerService = routerService;
        // tableResource: DataTableResource<Category>;
        // items: Category[] = [];
        // itemCount: number;
        this.displayedColumns = ['key', 'title', 'Featured', 'imageUrl', 'Update', 'Delete'];
        this.isShowForm = false;
        this.subscription = this.categoryService.getAll()
            .subscribe(function (categoryList) {
            _this.categories = categoryList;
            _this.initializeTable(_this.categories);
        });
    }
    AdminCategoryComponent.prototype.ngOnInit = function () {
    };
    AdminCategoryComponent.prototype.initializeTable = function (categories) {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableDataSource */](categories);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    AdminCategoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminCategoryComponent.prototype.showForm = function (element) {
        if (element == undefined) {
            this.category = {
                _id: '',
                key: '',
                title: '',
                featured: '',
                imageUrl: ''
            };
            console.log(this.category);
        }
        else {
            this.category = {
                _id: element._id,
                key: element.key,
                title: element.title,
                featured: element.featured,
                imageUrl: element.imageUrl
            };
        }
        // }
        console.log(element);
        this.isShowForm = !this.isShowForm;
    };
    AdminCategoryComponent.prototype.saveCategory = function (a) {
        var _this = this;
        this.isShowForm = false;
        console.log(a);
        console.log(this.category);
        this.categoryService.saveCategory(this.category).subscribe(function (data) {
            console.log('category saved successfully !!!!!');
            if (data) {
                console.log(data);
                _this.initializeTable(_this.categories);
            }
        });
    };
    AdminCategoryComponent.prototype.deleteCategory = function (categoryId) {
        var _this = this;
        if (confirm('Do you really want to delete this category')) {
            this.categoryService.deleteCategory(categoryId).subscribe(function (data) {
                _this.routerService.navigate(['/admin/manage-category']);
                if (data) {
                    console.log(data);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */])
    ], AdminCategoryComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */])
    ], AdminCategoryComponent.prototype, "paginator", void 0);
    AdminCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-admin-category',
            template: __webpack_require__("./src/app/components/admin/admin-category/admin-category.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin-category/admin-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AdminCategoryComponent);
    return AdminCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.css":
/***/ (function(module, exports) {

module.exports = "a:hover{\r\n    cursor: pointer\r\n}"

/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <ul class=\"list-group\">\n      <li  class=\"list-group-item\">\n          <!-- <li class=\"nav-item\"> -->\n          <a routerLink=\"manage-products\" class=\"nav-link\" id=\"productLink\" >Manage Product</a>\n        </li>\n\n      <li  class=\"list-group-item\">\n        <!-- <li class=\"nav-item\"> -->\n        <a routerLink=\"manage-category\" class=\"nav-link\" id=\"categoryLink\" >Manage Category</a>\n        \n      </li>\n             </ul>\n\n    </div>"

/***/ }),

/***/ "./src/app/components/admin/admin-home/admin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHomeComponent = (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__("./src/app/components/admin/admin-home/admin-home.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminOrdersComponent = (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__("./src/app/components/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-products/admin-products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <a class=\"nav-link list-group-item\" (click)=\"showForm(undefined)\" \n  [style.display]=\"!isShowForm ?'block':'none'\">Add new Product</a>\n</div>\n<div class=\"row\">\n    <div *ngIf=\"isShowForm\" class=\"col-6\">\n        <form #f=\"ngForm\" (ngSubmit)=\"saveCategory(f.value)\">\n            <div class=\"form-group\">\n              <label for=\"key\">Title</label>\n              <input type=\"text\" [(ngModel)]=\"product.title\"  \n              class=\"form-control\" id=\"title\" name=\"product.title\" aria-describedby=\"title\" \n              placeholder=\"Enter Product Name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"title\">Description</label>\n                <input type=\"text\" [(ngModel)]=\"product.description\" name=\"product.description\" rows=\"4\" \n                class=\"form-control\" id=\"description\" aria-describedby=\"Description\" \n                placeholder=\"Enter Description\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"category\">Price</label>\n                <input type=\"text\" [(ngModel)]=\"product.price\" name=\"product.price\" rows=\"4\" \n                class=\"form-control\" id=\"price\" aria-describedby=\"Price\" \n                placeholder=\"Enter price\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <input type=\"text\" [(ngModel)]=\"product.category\" name=\"product.category\" rows=\"4\" \n                class=\"form-control\" id=\"category\" aria-describedby=\"category\" \n                placeholder=\"Enter category\">\n              </div>\n              \n              <div class=\"form-group\">\n                <label for=\"imageUrl\">Image</label>\n                <input type=\"text\" [(ngModel)]=\"product.imageUrl\" name=\"product.imageUrl\" rows=\"4\" \n                class=\"form-control\" id=\"imageUrl\" aria-describedby=\"Image Name\" \n                placeholder=\"Enter Image name\">\n              </div>\n    \n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"form-control offset-2 col-6 btn btn-primary\">Save Changes</button>\n              </div>\n              \n    \n          </form>\n    \n    \n    </div>\n    \n</div>\n\n\n<div class=\"example-container mat-elevation-z8\">\n        <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field>\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\n      \n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n      \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"key\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Sno </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">1 </mat-cell>\n          </ng-container>\n      \n          <!-- Title Column -->\n          <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Product Title </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\n          </ng-container>\n      \n          <!-- Featured Column -->\n          <ng-container matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"Update\">\n            <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a (click)=\"showForm(element)\" class=\"nav-link\" >Edit</a>  </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Delete\">\n            <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a (click)=\"deleteCategory(element._id)\" class=\"nav-link\" >Delete</a>  </mat-cell>\n          </ng-container>\n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 20]\"\n                 [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n      </div>\n"

/***/ }),

/***/ "./src/app/components/admin/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminProductsComponent = (function () {
    function AdminProductsComponent(productService, routerService) {
        var _this = this;
        this.productService = productService;
        this.routerService = routerService;
        // tableResource: DataTableResource<Category>;
        // items: Category[] = [];
        // itemCount: number;
        this.displayedColumns = ['key', 'title', 'price', 'Update', 'Delete'];
        this.isShowForm = false;
        this.subscription = this.productService.getAll()
            .subscribe(function (productList) {
            _this.products = productList;
            _this.initializeTable(_this.products);
        });
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.initializeTable = function (products) {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableDataSource */](products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    AdminProductsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdminProductsComponent.prototype.showForm = function (element) {
        if (element == undefined) {
            this.product = {
                _id: '',
                title: '',
                description: '',
                price: 0,
                category: '',
                imageUrl: ''
            };
            console.log(this.product);
        }
        else {
            this.product = {
                _id: element._id,
                description: element.description,
                title: element.title,
                price: element.price,
                category: element.category,
                imageUrl: element.imageUrl
            };
        }
        // }
        console.log(element);
        this.isShowForm = !this.isShowForm;
    };
    AdminProductsComponent.prototype.saveCategory = function (a) {
        var _this = this;
        this.isShowForm = false;
        console.log(a);
        console.log(this.product);
        this.productService.saveProduct(this.product).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.initializeTable(_this.products);
            }
        });
    };
    AdminProductsComponent.prototype.deleteCategory = function (productId) {
        if (confirm('Do you really want to delete this category')) {
            this.productService.deleteProduct(productId).subscribe(function (data) {
                if (data) {
                    console.log(data);
                }
                // })
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */])
    ], AdminProductsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatPaginator */])
    ], AdminProductsComponent.prototype, "paginator", void 0);
    AdminProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__("./src/app/components/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-link{\r\n    font-size:18px;\r\n}\r\n/* .fixed-top{\r\n    height: 70px;\r\n} */\r\n.bg-light{\r\n    background-color: #6a1f77 !important \r\n}\r\n.navbar-light .navbar-nav .nav-link{\r\n    color:rgba(255, 193, 59, 0.91)\r\n}\r\n.navbar-light .navbar-toggler-icon{\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(251, 193, 59, 0.91)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='20' d='M4 7h22M4 15h22M4 23h22'/></svg>\")\r\n}\r\n.address{\r\n    color:white;\r\n    padding-left:15px;\r\n}\r\n.address{\r\n    margin-left:10px !important;\r\n}\r\n.hide-arrow{\r\n    font-size:0rem;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n      \n  <div class=\"col-2\">\n      <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../../../assets/img/logo.jpg\" \n        style=\"width:72px; height: 53px;\" title=\"logo\" ></a>\n   </div>\n  <div class=\"col-6\">\n      <div class=\"address\"><span>{{userLocation?.extra.neighborhood}} \n        <br> \n        {{userLocation?.city}} </span></div>\n  </div>\n  <div class=\"col-2\">\n      <div class=\"btn-group\">\n          <a class=\"btn-default dropdown-toggle hide-arrow\" \n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> \n          <img src=\"../../../assets/img/my-account.png\" style=\"height:40px;width:40px;\">\n          </a>\n         <div class=\"dropdown-menu\">\n           <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n           <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n         </div>\n        </div>\n  </div>\n  <div class=\"col-2\">\n      <a class=\"\" routerLink=\"/\">\n        <img src=\"../../../assets/img/shopping-cart-logo.png\" style=\"height:40px;width:40px;\">\n        </a>\n  </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(authService, router, location, shoppigCart, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.shoppigCart = shoppigCart;
        this.flashMessage = flashMessage;
        this.cordinates = {
            latitude: '',
            longitude: ''
        };
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                self.cordinates = {
                    latitude: position.coords.latitude.toString(),
                    longitude: position.coords.longitude.toString()
                };
                self.location.getLocation(self.cordinates).subscribe(function (data) {
                    console.log(data);
                    self.userLocation = data[0];
                    console.log(self.userLocation.extra.premise, ',', self.userLocation.city);
                });
            });
        }
        else {
            console.log('No support for geolocation');
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngOnChanges = function () {
        console.log('form nav bar');
        console.log(this.shoppigCart.cart.cartTotal);
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/product-card/product-card.component.css":
/***/ (function(module, exports) {

module.exports = "\n.card { \n  margin-bottom: 30px;\n}\n\n.card-footer {\n  padding: 0;\n}\n\n.productImage{\n  width: 100%;\n  height: 250px;\n}\n\n@media (max-width:480px){\n  .productImage {\n    max-width: 100%;\n    height: 200px;\n  }\n}"

/***/ }),

/***/ "./src/app/components/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n    <img *ngIf=\"product.imageUrl\" class=\"card-img-top productImage\" \n    [src]=\"relativePath+product.imageUrl\" alt=\"{{ product.title }}\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{ product.title }}</h4>\n      <p class=\"card-text\">{{ product.price | currency:'RS':true }}</p>\n      <p class=\"card-text\">{{product.description}}</p>\n      \n    </div>\n\n    <div class=\"card-footer\">\n      <button \n        *ngIf=\"getQuantity() == 0; else updateQuantity\"\n        (click)=\"addToCart()\"\n        class=\"btn btn-primary btn-block\">Add to Cart</button>\n      <ng-template #updateQuantity>\n        \n          <div class=\"row no-gutters\">\n              <div class=\"col-2\">\n                <button \n                  (click)=\"removeFromCart()\"\n                  class=\"btn btn-primary btn-block\">-</button> \n              </div>\n              <div class=\"col text-center quantity\" [innerHTML]=\"getQuantity()\">\n                \n              </div>\n              <div class=\"col-2\">\n                <button \n                  (click)=\"addToCart()\"\n                  class=\"btn btn-primary btn-block\">+</button> \n              </div>\n            </div>\n      </ng-template>\n    </div>\n  </div>    \n  "

/***/ }),

/***/ "./src/app/components/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardComponent = (function () {
    function ProductCardComponent(shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.relativePath = './../../../../assets/img/';
        this.cart = this.shoppingCart.createShoppingCart();
        console.log(this.cart.cartId);
        console.log(this.cart.itemMap);
    }
    ProductCardComponent.prototype.getQuantity = function () {
        this.updateCart();
        console.log(this.cart.itemMap.get(this.product._id));
        if (this.cart.itemMap.get(this.product._id))
            return this.cart.itemMap.get(this.product._id);
        else
            return 0;
    };
    ProductCardComponent.prototype.updateCart = function () {
        this.cart = this.shoppingCart.cart;
    };
    ProductCardComponent.prototype.removeFromCart = function () {
        this.shoppingCart.removeItem(this.product._id);
        return this.getQuantity();
    };
    ProductCardComponent.prototype.addToCart = function () {
        this.shoppingCart.addItem(this.product._id);
        return this.getQuantity();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'product-card',
            template: __webpack_require__("./src/app/components/product-card/product-card.component.html"),
            styles: [__webpack_require__("./src/app/components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/components/products/product-filter/product-filter.component.css":
/***/ (function(module, exports) {

module.exports = "\n.sticky-top { \n  top: 80px;\n  \n}\n.product-filter {\n  padding-top: 20px;\n}\n/* Shrinking the sidebar from 250px to 80px and center aligining its content*/\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center;\n}\n/* Toggling the sidebar header content, hide the big heading [h3] and showing the small heading [strong] and vice versa*/\n#sidebar .sidebar-header strong {\n  display: none;\n}\n#sidebar.active .sidebar-header h3 {\n  display: none;\n}\n#sidebar.active .sidebar-header strong {\n  display: block;\n}\n#sidebar ul li a {\n  text-align: left;\n}\n#sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em;\n}\n#sidebar.active ul li a i {\n  margin-right:  0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n}\n/* Same dropdown links padding*/\n#sidebar.active ul ul a {\n  padding: 10px !important;\n}\n/* Changing the arrow position to bottom center position, \n translateX(50%) works with right: 50% \n to accurately  center the arrow */\n#sidebar.active a[aria-expanded=\"false\"]::before, #sidebar.active a[aria-expanded=\"true\"]::before {\n  top: auto;\n  bottom: 5px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}"

/***/ }),

/***/ "./src/app/components/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-none d-md-block\">\n  <div class=\"sticky-top\">\n    <div class=\"list-group\">\n        <a\n          class=\"list-group-item list-group-item-action\"\n          routerLink=\"/products\"\n          >All Categories</a>\n          \n        <a \n          *ngFor=\"let c of categories$ | async\" \n          [routerLink]=\"['/products/',c.key]\"\n          class=\"list-group-item list-group-item-action\"\n          [routerLinkActive]=\"'active'\"\n          >\n          {{ c.title }}\n        </a>\n      </div>\n  </div>\n</div>\n  \n\n<div class=\"d-block d-sm-none\">\n  <div ngbDropdown class=\"dropdown product-filter\">\n    <button ngbDropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\" \n    id=\"dropdownMenuButton\" data-toggle=\"dropdown\" >\n     Category\n    </button>\n    <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a \n      *ngFor=\"let c of categories$ | async\" \n      [routerLink]=\"['/products/',c.key]\"\n      class=\"list-group-item list-group-item-action\"\n      [routerLinkActive]=\"'active'\"\n      >\n      {{ c.title }}\n    </a>\n    </div>\n  </div>\n\n  <br>\n<br>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__("./src/app/components/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__("./src/app/components/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_category_service__["a" /* CategoryService */]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/***/ (function(module, exports) {

module.exports = "a{\r\n    color:green\r\n}"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-3 col-12\">\n    <product-filter></product-filter>\n  </div>\n  <div class=\"col-md-offset-1 col-md-9 col-12\">\n      <div class=\"row\">\n          <ng-container *ngFor=\"let p of products|async\">\n      \n              <div class=\"col-6 col-md-4\">\n                \n              <product-card [product]=\"p\"></product-card>\n            </div>\n            \n          </ng-container>\n        </div>\n        \n        <app-admin-orders></app-admin-orders>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    function ProductsComponent(route, productService, categoryService) {
        this.route = route;
        this.productService = productService;
        this.categoryService = categoryService;
        this.filteredProducts = [];
        //this.categories$=categoryService.getAll();
        //this.products=this.productService.getAll();
        //console.log(this.products)
    }
    // async ngOnInit() {
    //   this.cart$ = await this.shoppingCartService.getCart();
    //   this.populateProducts();
    // }
    ProductsComponent.prototype.populateProducts = function () {
        this.products = this.productService.getAll();
        // .map(products => {
        //   this.products = products;
        //   return this.route.queryParamMap;
        // })
        // .subscribe(params => {
        //   this.category = params.get('category');
        //   this.applyFilter();      
        // });
    };
    ProductsComponent.prototype.applyFilter = function () {
        //  this.filteredProducts = (this.category) ? 
        //this.products.filter(p => p.category === this.category) : 
        // this.products;
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this.route.paramMap');
        this.products = this.route.paramMap.switchMap(function (params) {
            if (params.get('category') == undefined)
                return _this.productService.getProductByCategory('perfume');
            else
                return _this.productService.getProductByCategory(params.get('category'));
        });
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/components/products/products.component.html"),
            styles: [__webpack_require__("./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4_app_services_category_service__["a" /* CategoryService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" \n    class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else if (data.msg == "exists") {
                _this.flashMessage.show('This user already exists please try registering with some different user id', { cssClass: 'alert-danger', timeout: 8000 });
                _this.router.navigate(['/register']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/category-list/category-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<select class=\"form-control\" name=\"category\" id=\"category\">\n    <option *ngFor=\"let c of categories$ | async\"  [value]=\"c.key\">{{c.title }}</option>\n  </select>"

/***/ }),

/***/ "./src/app/components/shared/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    CategoryListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('category'),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "category", void 0);
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'category-list',
            template: __webpack_require__("./src/app/components/shared/category-list/category-list.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_app_services_category_service__["a" /* CategoryService */]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/model/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.cartId;
        this.itemMap = new Map();
    }
    ShoppingCart.prototype.getCartTotal = function () {
        var _this = this;
        this.Products.forEach(function (p) {
            var count = _this.itemMap.get(p._id);
            _this.cartTotal = _this.cartTotal + (p.price * count);
        });
        return this.cartTotal;
    };
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = __webpack_require__("../config/database.js");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.domain = config.domain;
    }
    CategoryService.prototype.getAll = function () {
        var url = this.domain + "category/getallcategories";
        //return this.db.list('/categories',).valueChanges();
        return this.http.get(url)
            .map(function (response) {
            var categories = response.json();
            return categories;
        });
    };
    CategoryService.prototype.saveCategory = function (category) {
        console.log(category);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "category/addcategory";
        return this.http.post(url, category, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.deleteCategory = function (categoryKey) {
        console.log(categoryKey);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "category/deletecategory/" + categoryKey;
        return this.http.delete(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = __webpack_require__("../config/database.js");
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.domain = config.domain;
        this.url = this.domain + "location/getlocation";
    }
    LocationService.prototype.getLocation = function (cordinates) {
        console.log('location service called successfully');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url, cordinates, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LocationService.prototype, "userLocation", void 0);
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var config = __webpack_require__("../config/database.js");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.domain = config.domain;
    }
    ProductService.prototype.getCategories = function () {
        //return this.db.list('/categories').valueChanges();
        return null;
    };
    ProductService.prototype.saveProduct = function (product) {
        console.log(product);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "product/addproduct";
        return this.http.post(url, product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.create = function (product) {
        // return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        var url = this.domain + "product/getallproducts";
        //return this.db.list('/categories',).valueChanges();
        return this.http.get(url)
            .map(function (response) {
            var res = response.json();
            var categories = response.json();
            return categories;
        });
        //return null;
    };
    ProductService.prototype.get = function (productId) {
        //return this.db.object('/products/' + productId).valueChanges();
        return null;
    };
    ProductService.prototype.getProductByCategory = function (categoryname) {
        var url = this.domain + "product/getproductsbycategory/" + categoryname;
        //return this.db.list('/categories',).valueChanges();
        return this.http.get(url).map(function (response) {
            var body = response.json();
            return body || {};
        });
    };
    ProductService.prototype.update = function (productId, product) {
        //return this.db.object('/products/' + productId).update(product);
        return null;
    };
    ProductService.prototype.deleteProduct = function (productId) {
        console.log(productId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.domain + "product/deleteproduct/" + productId;
        return this.http.delete(url, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            res.json();
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_shopping_cart__ = __webpack_require__("./src/app/model/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var config = __webpack_require__("../config/database.js");
var ShoppingCartService = (function () {
    function ShoppingCartService(http) {
        this.http = http;
        this.domain = config.domain;
    }
    ShoppingCartService.prototype.createShoppingCart = function () {
        var _this = this;
        this.cart = new __WEBPACK_IMPORTED_MODULE_1__model_shopping_cart__["a" /* ShoppingCart */]();
        var url = this.domain + "cart/createShoppingCart";
        this.http.get(url).map(function (response) {
            _this.cart = response.json();
        });
        return this.cart;
    };
    ShoppingCartService.prototype.addItem = function (productId) {
        console.log(productId);
        var count = this.cart.itemMap.get(productId);
        if (count > 0)
            this.cart.itemMap.set(productId, ++count);
        else
            this.cart.itemMap.set(productId, 1);
        console.log(this.cart.itemMap.get(productId));
        return this.cart.itemMap.get(productId);
    };
    ShoppingCartService.prototype.removeItem = function (productId) {
        var count = this.cart.itemMap.get(productId);
        if (count > 0)
            this.cart.itemMap.set(productId, --count);
        else
            this.cart.itemMap.set(productId, 0);
        return this.cart.itemMap.get(productId);
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map