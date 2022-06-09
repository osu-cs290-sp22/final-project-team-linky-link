(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['shirt'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <article class=\"image-box\">\n        <div class=\"image\">\n          <img class=\"shirt-image\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":3,"column":40},"end":{"line":3,"column":47}}}) : helper)))
    + "\" alt=\"Image of Padme's shirt\">\n        </div>\n        <button class=\"btn\" onclick=\"prev()\">Previous</button>\n        <button class=\"btn\" onclick=\"next()\">Next</button>\n      </article>";
},"useData":true});
})();