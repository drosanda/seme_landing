import $ from 'jquery';

var is_log = 1;
window.$ = $;
window.jQuery = $;

import NProgress from "nprogress";
window.NProgress = NProgress;

require("bootstrap-sass");


if(is_log){
  console.log("jquery loaded ?", $ instanceof Function);
}

