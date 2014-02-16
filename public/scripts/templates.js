Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div>Ember Demo app</div>");
  
});

Ember.TEMPLATES["activechart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("	");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("Linked Charts via controller!"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },hashTypes:{'message': "STRING",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"},hashContexts:{'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n\n    <h2>Chart one</h2>\n    <div id=\"graph1\"></div>\n\n    <h2>Chart two</h2>\n    <div id=\"graph2\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("\n  <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Demo App</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Dashboard</a></li>\n            <li><a href=\"#activechart\">Linked Charts</a></li>\n            <li><a href=\"#about\">About</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>\n\n    <div class=\"container\">\n\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "bs-growl-notifications", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/chart-highcart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n	");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("Dashboard charts rendered!"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },hashTypes:{'message': "STRING",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"},hashContexts:{'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\n\n	<br />\n    ");
  data.buffer.push(escapeExpression((helper = helpers['chart-highchart'] || (depth0 && depth0['chart-highchart']),options={hash:{
    'chartSeries': ("modelOne"),
    'chartType': ("line"),
    'chartTitle': ("Sales 7 Days"),
    'yAxisTitle': ("Sales")
  },hashTypes:{'chartSeries': "ID",'chartType': "STRING",'chartTitle': "STRING",'yAxisTitle': "STRING"},hashContexts:{'chartSeries': depth0,'chartType': depth0,'chartTitle': depth0,'yAxisTitle': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "chart-highchart", options))));
  data.buffer.push("\n\n 	<br />\n    ");
  data.buffer.push(escapeExpression((helper = helpers['chart-highchart'] || (depth0 && depth0['chart-highchart']),options={hash:{
    'chartSeries': ("modelOne"),
    'chartType': ("column"),
    'chartTitle': ("Sales Volume"),
    'yAxisTitle': ("Sales")
  },hashTypes:{'chartSeries': "ID",'chartType': "STRING",'chartTitle': "STRING",'yAxisTitle': "STRING"},hashContexts:{'chartSeries': depth0,'chartType': depth0,'chartTitle': depth0,'yAxisTitle': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "chart-highchart", options))));
  data.buffer.push("\n");
  return buffer;
  
});