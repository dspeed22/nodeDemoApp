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
  data.buffer.push("\r\n\r\n    <h2>Chart one</h2>\r\n    <div id=\"graph1\"></div>\r\n\r\n    <h2>Chart two</h2>\r\n    <div id=\"graph2\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("\r\n  <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">Demo App</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"active\"><a href=\"#\">Dashboard</a></li>\r\n            <li><a href=\"#activechart\">Linked Charts</a></li>\r\n            <li><a href=\"#about\">About</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n\r\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n    </div>");
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


  data.buffer.push("\r\n	");
  data.buffer.push(escapeExpression((helper = helpers['bs-alert'] || (depth0 && depth0['bs-alert']),options={hash:{
    'message': ("Dashboard charts rendered!"),
    'type': ("info"),
    'dismissAfter': (2),
    'fade': (true)
  },hashTypes:{'message': "STRING",'type': "STRING",'dismissAfter': "INTEGER",'fade': "BOOLEAN"},hashContexts:{'message': depth0,'type': depth0,'dismissAfter': depth0,'fade': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-alert", options))));
  data.buffer.push("\r\n\r\n    <h2>Chart one</h2>\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['chart-highchart'] || (depth0 && depth0['chart-highchart']),options={hash:{
    'chartSeries': ("modelOne"),
    'chartType': ("line")
  },hashTypes:{'chartSeries': "ID",'chartType': "STRING"},hashContexts:{'chartSeries': depth0,'chartType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "chart-highchart", options))));
  data.buffer.push("\r\n\r\n    <h2>Chart two</h2>\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers['chart-highchart'] || (depth0 && depth0['chart-highchart']),options={hash:{
    'chartSeries': ("modelOne"),
    'chartType': ("column")
  },hashTypes:{'chartSeries': "ID",'chartType': "STRING"},hashContexts:{'chartSeries': depth0,'chartType': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "chart-highchart", options))));
  data.buffer.push("\r\n");
  return buffer;
  
});