(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['example'] = template({
  "compiler":[8,">= 4.3.0"],
  "main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "Handlebars <b>"
    + container.escapeExpression(((helper = (helper = helpers.doesWhat || (depth0 != null ? depth0.doesWhat : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"doesWhat","hash":{},"data":data,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":26}}}) : helper)))
    + "</b> precompiled!\r\n";
},
"useData":true
});
})();