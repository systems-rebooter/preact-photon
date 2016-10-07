(function(global,factory){if(typeof define === 'function' && define.amd){define(['exports','preact'],factory);}else if(typeof exports !== 'undefined'){factory(exports,require('preact'));}else {var mod={exports:{}};factory(mod.exports,global.preact);global.preactPhoton = mod.exports;}})(this,function(exports,_preact){'use strict';exports.__esModule = true;var _extends=Object.assign || function(target){for(var i=1;i < arguments.length;i++) {var source=arguments[i];for(var key in source) {if(Object.prototype.hasOwnProperty.call(source,key)){target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj) {if(keys.indexOf(i) >= 0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i] = obj[i];}return target;}var EMPTY={};var component=function component(render){return function(){var props=arguments.length <= 0 || arguments[0] === undefined?EMPTY:arguments[0];return render(props);};};var c=function c(){var _ref;for(var _len=arguments.length,args=Array(_len),_key=0;_key < _len;_key++) {args[_key] = arguments[_key];}return (_ref = []).concat.apply(_ref,args.filter(function(x){return x;})).join(' ');};var componentNode=function componentNode(Name,classes){return component(function(_ref2){var children=_ref2.children;var props=_objectWithoutProperties(_ref2,['children']);return _preact.h(Name,_extends({},props,{'class':c(props['class'],classes)}),children);});};var Header=componentNode('header',['toolbar toolbar-header']);exports.Header = Header;var Footer=componentNode('footer',['toolbar toolbar-footer']);exports.Footer = Footer;var Title=componentNode('h1','title');exports.Title = Title;var ButtonGroup=componentNode('div','btn-group');exports.ButtonGroup = ButtonGroup;var Button=component(function(_ref3){var className=_ref3['class'];var children=_ref3.children;var icon=_ref3.icon;var type=_ref3.type;var primary=_ref3.primary;var dropdown=_ref3.dropdown;var mini=_ref3.mini;var large=_ref3.large;var form=_ref3.form;var props=_objectWithoutProperties(_ref3,['class','children','icon','type','primary','dropdown','mini','large','form']);return _preact.h('button',_extends({},props,{'class':c(className,'btn btn-' + (type || (primary?'primary':'default')),dropdown && 'btn-dropdown',large && 'btn-large',mini && 'btn-mini',form && 'btn-form')}),icon?_preact.h(Icon,{name:icon,text:children && children.length?true:null}):null,children);});exports.Button = Button;var Icon=component(function(_ref4){var className=_ref4['class'];var text=_ref4.text;var name=_ref4.name;var children=_ref4.children;var props=_objectWithoutProperties(_ref4,['class','text','name','children']);return _preact.h('span',_extends({},props,{'class':c(className,'icon icon-' + name,text && 'icon-text')}),children);});exports.Icon = Icon;var TabGroup=componentNode('div','tab-group');exports.TabGroup = TabGroup;var Tab=component(function(_ref5){var className=_ref5['class'];var close=_ref5.close;var children=_ref5.children;var props=_objectWithoutProperties(_ref5,['class','close','children']);return _preact.h('div',{'class':c(className,'tab-item')},String(close) === 'false'?null:_preact.h(Icon,{name:'cancel','class':'icon-close-tab'}),children);});exports.Tab = Tab;TabGroup.Item = Tab;var NavGroup=componentNode('nav','nav-group');exports.NavGroup = NavGroup;NavGroup.Title = componentNode('h5','nav-group-title');NavGroup.Item = component(function(_ref6){var className=_ref6['class'];var icon=_ref6.icon;var children=_ref6.children;var props=_objectWithoutProperties(_ref6,['class','icon','children']);return _preact.h('span',_extends({},props,{'class':c(className,'nav-group-item')}),icon?_preact.h(Icon,{name:icon}):null,children);});var ListGroup=componentNode('ul','list-group');exports.ListGroup = ListGroup;ListGroup.Header = componentNode('li','list-group-header');ListGroup.Item = componentNode('li','list-group-item');var Form=componentNode('form');Form.Group = componentNode('div','form-group');Form.CheckBox = component(function(_ref7){var className=_ref7['class'];var name=_ref7.name;var checked=_ref7.checked;var value=_ref7.value;var label=_ref7.label;var children=_ref7.children;var props=_objectWithoutProperties(_ref7,['class','name','checked','value','label','children']);return _preact.h('div',_extends({},props,{'class':c(className,'checkbox')}),_preact.h('label',null,_preact.h('input',{type:'checkbox',name:name,checked:checked,value:value}),label || null,children));});Form.Radio = component(function(_ref8){var className=_ref8['class'];var name=_ref8.name;var checked=_ref8.checked;var value=_ref8.value;var label=_ref8.label;var children=_ref8.children;var props=_objectWithoutProperties(_ref8,['class','name','checked','value','label','children']);return _preact.h('div',_extends({},props,{'class':c(className,'radio')}),_preact.h('label',null,_preact.h('input',{type:'radio',name:name,checked:checked,value:value}),label || null,children));});Form.Actions = componentNode('div','form-actions');var Table=component(function(_ref9){var className=_ref9['class'];var striped=_ref9.striped;var children=_ref9.children;var props=_objectWithoutProperties(_ref9,['class','striped','children']);return _preact.h('table',_extends({},props,{'class':c(className,striped && 'table-striped')}),children);});exports.Table = Table;});

//# sourceMappingURL=preact-photon.js.map