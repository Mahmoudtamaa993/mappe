(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{267:function(t,r,n){"use strict";var o=n(0),s=n(72),e=n(12),i=n(1),a=n(30),u=[],c=u.sort,l=i((function(){u.sort(void 0)})),f=i((function(){u.sort(null)})),p=a("sort");o({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?c.call(e(this)):c.call(e(this),s(t))}})},272:function(t,r,n){},287:function(t,r,n){"use strict";var o=n(272);n.n(o).a},295:function(t,r,n){"use strict";n.r(r);n(20),n(267),n(128);var o={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/works/")&&!t.frontmatter.works_index})).sort((function(t,r){return t.frontmatter.order-r.frontmatter.order}))}}},s=(n(287),n(29)),e=Object(s.a)(o,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"project-list"},t._l(t.posts,(function(r){return n("router-link",{key:r.title,staticClass:"post",style:{backgroundImage:"url("+r.frontmatter.thumbnail+")"},attrs:{to:r.path,tag:"div"}},[n("div",{staticClass:"info"},[n("h2",[t._v(t._s(r.frontmatter.title))])])])})),1)}),[],!1,null,"50ebf24e",null);r.default=e.exports}}]);