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
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Mange Users");
  }

  data.buffer.push("\n  <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Demo App</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Dashboard</a></li>\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li><a href=\"#activechart\">Linked Charts</a></li>\n            <li><a href=\"#about\">About</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>\n\n    <div class=\"container\">\n\n      ");
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

Ember.TEMPLATES["user/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("    <div class='userCreateForm'>\n            <div>\n                <label>User name</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div>\n                <br/>\n                <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("> ok </button>\n            </div>\n        </div>");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li>\n                 <span class=\"namefield\">  Name: ");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </span>\n                 <span>   Active: ");
  stack1 = helpers._triageMustache.call(depth0, "user.active", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </span>\n            </li>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <li>no users… :(</li>\n            ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push(" Add user ");
  }

  data.buffer.push("<div class='usersView'>    \n\n    \n\n        <div class=\"usersCount\">Total Users: ");
  stack1 = helpers._triageMustache.call(depth0, "usersCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n    <div class=\"listingContainer\">\n\n        <ul class=\"users-listing\">\n            ");
  stack1 = helpers.each.call(depth0, "user", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("create-btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.create", options) : helperMissing.call(depth0, "link-to", "users.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"usersubviews\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n\n</div>");
  return buffer;
  
});