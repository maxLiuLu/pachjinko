System.register("chunks:///_virtual/main",["./Start.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Start.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ResMgr.ts"],(function(r){var t,e,n,i,o,c,a,u,s,l,f,h,p;return{setters:[function(r){t=r.applyDecoratedDescriptor,e=r.inheritsLoose,n=r.initializerDefineProperty,i=r.assertThisInitialized,o=r.asyncToGenerator,c=r.regeneratorRuntime},function(r){a=r.cclegacy,u=r._decorator,s=r.Label,l=r.Button,f=r.director,h=r.Component},function(r){p=r.ResMgr}],execute:function(){var d,g,m,v,y,P,w;a._RF.push({},"88d2ctfR2ROq6LRGm98MYvb","Start",void 0);var b=u.ccclass,S=u.property;r("Start",(d=b("Start"),g=S(s),m=S(l),d((P=t((y=function(r){function t(){for(var t,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return t=r.call.apply(r,[this].concat(o))||this,n(t,"mPercent",P,i(t)),n(t,"mBtn",w,i(t)),t}e(t,r);var a=t.prototype;return a.onLoad=function(){console.warn("version 1.0.4")},a.start=function(){var r=o(c().mark((function r(){var t,e,n,i=this;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return this.mBtn.node.active=!1,t=0,e=function(){t=Math.min(t+.015,.3),i.SetProgrees(t)},this.schedule(e,.1),r.next=6,this.loadBundle("pachjinko");case 6:return n=r.sent,this.unschedule(e),r.next=10,this.loadDirWithProgress(n,["prefabs","music"]);case 10:this.SetProgrees(1);case 11:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}(),a.loadDirWithProgress=function(r,t){var e=this;return new Promise((function(n){var i=new Array(t.length).fill(0),o=new Array(t.length).fill(0),c=0,a=function(r){r&&console.error("loadDir error:",r),++c>=t.length&&n()};t.forEach((function(t,n){r.loadDir(t,(function(r,t){return function(r,t,n){i[r]=t,o[r]=n;var c=o.reduce((function(r,t){return r+t}),0),a=i.reduce((function(r,t){return r+t}),0),u=c>0?a/c:0;e.SetProgrees(.3+.7*u)}(n,r,t)}),a)}))}))},a.loadBundle=function(){var r=o(c().mark((function r(t){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){p.LoadBundle(t,r)})));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),a.SetProgrees=function(r){var t=Math.floor(100*r);this.mPercent.string=t+"%",1==r&&(this.mPercent.string="点击屏幕开始游戏",this.mBtn.node.active=!0)},a.OnClick=function(){f.loadScene("Pachjinko")},t}(h)).prototype,"mPercent",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(y.prototype,"mBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=y))||v));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});