goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33303 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33303(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33305 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33305(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32588 = coll;
var G__32589 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32588,G__32589) : shadow.dom.lazy_native_coll_seq.call(null,G__32588,G__32589));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32600 = arguments.length;
switch (G__32600) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32603 = arguments.length;
switch (G__32603) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32607 = arguments.length;
switch (G__32607) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32612 = arguments.length;
switch (G__32612) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32615 = arguments.length;
switch (G__32615) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32624 = arguments.length;
switch (G__32624) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32632){if((e32632 instanceof Object)){
var e = e32632;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32632;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32633 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32634 = null;
var count__32635 = (0);
var i__32636 = (0);
while(true){
if((i__32636 < count__32635)){
var el = chunk__32634.cljs$core$IIndexed$_nth$arity$2(null,i__32636);
var handler_33331__$1 = ((function (seq__32633,chunk__32634,count__32635,i__32636,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32633,chunk__32634,count__32635,i__32636,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33331__$1);


var G__33332 = seq__32633;
var G__33333 = chunk__32634;
var G__33334 = count__32635;
var G__33335 = (i__32636 + (1));
seq__32633 = G__33332;
chunk__32634 = G__33333;
count__32635 = G__33334;
i__32636 = G__33335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32633);
if(temp__5735__auto__){
var seq__32633__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32633__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32633__$1);
var G__33338 = cljs.core.chunk_rest(seq__32633__$1);
var G__33339 = c__4556__auto__;
var G__33340 = cljs.core.count(c__4556__auto__);
var G__33341 = (0);
seq__32633 = G__33338;
chunk__32634 = G__33339;
count__32635 = G__33340;
i__32636 = G__33341;
continue;
} else {
var el = cljs.core.first(seq__32633__$1);
var handler_33343__$1 = ((function (seq__32633,chunk__32634,count__32635,i__32636,el,seq__32633__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32633,chunk__32634,count__32635,i__32636,el,seq__32633__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33343__$1);


var G__33344 = cljs.core.next(seq__32633__$1);
var G__33345 = null;
var G__33346 = (0);
var G__33347 = (0);
seq__32633 = G__33344;
chunk__32634 = G__33345;
count__32635 = G__33346;
i__32636 = G__33347;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32645 = arguments.length;
switch (G__32645) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32653 = cljs.core.seq(events);
var chunk__32654 = null;
var count__32655 = (0);
var i__32656 = (0);
while(true){
if((i__32656 < count__32655)){
var vec__32663 = chunk__32654.cljs$core$IIndexed$_nth$arity$2(null,i__32656);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32663,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32663,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33367 = seq__32653;
var G__33368 = chunk__32654;
var G__33369 = count__32655;
var G__33370 = (i__32656 + (1));
seq__32653 = G__33367;
chunk__32654 = G__33368;
count__32655 = G__33369;
i__32656 = G__33370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32653);
if(temp__5735__auto__){
var seq__32653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32653__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32653__$1);
var G__33371 = cljs.core.chunk_rest(seq__32653__$1);
var G__33372 = c__4556__auto__;
var G__33373 = cljs.core.count(c__4556__auto__);
var G__33374 = (0);
seq__32653 = G__33371;
chunk__32654 = G__33372;
count__32655 = G__33373;
i__32656 = G__33374;
continue;
} else {
var vec__32667 = cljs.core.first(seq__32653__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32667,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33375 = cljs.core.next(seq__32653__$1);
var G__33376 = null;
var G__33377 = (0);
var G__33378 = (0);
seq__32653 = G__33375;
chunk__32654 = G__33376;
count__32655 = G__33377;
i__32656 = G__33378;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32673 = cljs.core.seq(styles);
var chunk__32674 = null;
var count__32675 = (0);
var i__32676 = (0);
while(true){
if((i__32676 < count__32675)){
var vec__32684 = chunk__32674.cljs$core$IIndexed$_nth$arity$2(null,i__32676);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32684,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32684,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33379 = seq__32673;
var G__33380 = chunk__32674;
var G__33381 = count__32675;
var G__33382 = (i__32676 + (1));
seq__32673 = G__33379;
chunk__32674 = G__33380;
count__32675 = G__33381;
i__32676 = G__33382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32673);
if(temp__5735__auto__){
var seq__32673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32673__$1);
var G__33383 = cljs.core.chunk_rest(seq__32673__$1);
var G__33384 = c__4556__auto__;
var G__33385 = cljs.core.count(c__4556__auto__);
var G__33386 = (0);
seq__32673 = G__33383;
chunk__32674 = G__33384;
count__32675 = G__33385;
i__32676 = G__33386;
continue;
} else {
var vec__32689 = cljs.core.first(seq__32673__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32689,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33388 = cljs.core.next(seq__32673__$1);
var G__33389 = null;
var G__33390 = (0);
var G__33391 = (0);
seq__32673 = G__33388;
chunk__32674 = G__33389;
count__32675 = G__33390;
i__32676 = G__33391;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32692_33394 = key;
var G__32692_33395__$1 = (((G__32692_33394 instanceof cljs.core.Keyword))?G__32692_33394.fqn:null);
switch (G__32692_33395__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33397 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33397,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33397,"aria-");
}
})())){
el.setAttribute(ks_33397,value);
} else {
(el[ks_33397] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32710){
var map__32711 = p__32710;
var map__32711__$1 = (((((!((map__32711 == null))))?(((((map__32711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32711):map__32711);
var props = map__32711__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32711__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32713 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32717 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32717,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32717;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32719 = arguments.length;
switch (G__32719) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32724){
var vec__32727 = p__32724;
var seq__32728 = cljs.core.seq(vec__32727);
var first__32729 = cljs.core.first(seq__32728);
var seq__32728__$1 = cljs.core.next(seq__32728);
var nn = first__32729;
var first__32729__$1 = cljs.core.first(seq__32728__$1);
var seq__32728__$2 = cljs.core.next(seq__32728__$1);
var np = first__32729__$1;
var nc = seq__32728__$2;
var node = vec__32727;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32732 = nn;
var G__32733 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32732,G__32733) : create_fn.call(null,G__32732,G__32733));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32735 = nn;
var G__32736 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32735,G__32736) : create_fn.call(null,G__32735,G__32736));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32739 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32739,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32739,(1),null);
var seq__32742_33405 = cljs.core.seq(node_children);
var chunk__32743_33406 = null;
var count__32744_33407 = (0);
var i__32745_33408 = (0);
while(true){
if((i__32745_33408 < count__32744_33407)){
var child_struct_33409 = chunk__32743_33406.cljs$core$IIndexed$_nth$arity$2(null,i__32745_33408);
var children_33411 = shadow.dom.dom_node(child_struct_33409);
if(cljs.core.seq_QMARK_(children_33411)){
var seq__32765_33413 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33411));
var chunk__32767_33414 = null;
var count__32768_33415 = (0);
var i__32769_33416 = (0);
while(true){
if((i__32769_33416 < count__32768_33415)){
var child_33417 = chunk__32767_33414.cljs$core$IIndexed$_nth$arity$2(null,i__32769_33416);
if(cljs.core.truth_(child_33417)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33417);


var G__33419 = seq__32765_33413;
var G__33420 = chunk__32767_33414;
var G__33421 = count__32768_33415;
var G__33422 = (i__32769_33416 + (1));
seq__32765_33413 = G__33419;
chunk__32767_33414 = G__33420;
count__32768_33415 = G__33421;
i__32769_33416 = G__33422;
continue;
} else {
var G__33424 = seq__32765_33413;
var G__33425 = chunk__32767_33414;
var G__33426 = count__32768_33415;
var G__33427 = (i__32769_33416 + (1));
seq__32765_33413 = G__33424;
chunk__32767_33414 = G__33425;
count__32768_33415 = G__33426;
i__32769_33416 = G__33427;
continue;
}
} else {
var temp__5735__auto___33428 = cljs.core.seq(seq__32765_33413);
if(temp__5735__auto___33428){
var seq__32765_33436__$1 = temp__5735__auto___33428;
if(cljs.core.chunked_seq_QMARK_(seq__32765_33436__$1)){
var c__4556__auto___33437 = cljs.core.chunk_first(seq__32765_33436__$1);
var G__33438 = cljs.core.chunk_rest(seq__32765_33436__$1);
var G__33439 = c__4556__auto___33437;
var G__33440 = cljs.core.count(c__4556__auto___33437);
var G__33441 = (0);
seq__32765_33413 = G__33438;
chunk__32767_33414 = G__33439;
count__32768_33415 = G__33440;
i__32769_33416 = G__33441;
continue;
} else {
var child_33442 = cljs.core.first(seq__32765_33436__$1);
if(cljs.core.truth_(child_33442)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33442);


var G__33443 = cljs.core.next(seq__32765_33436__$1);
var G__33444 = null;
var G__33445 = (0);
var G__33446 = (0);
seq__32765_33413 = G__33443;
chunk__32767_33414 = G__33444;
count__32768_33415 = G__33445;
i__32769_33416 = G__33446;
continue;
} else {
var G__33447 = cljs.core.next(seq__32765_33436__$1);
var G__33448 = null;
var G__33449 = (0);
var G__33450 = (0);
seq__32765_33413 = G__33447;
chunk__32767_33414 = G__33448;
count__32768_33415 = G__33449;
i__32769_33416 = G__33450;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33411);
}


var G__33451 = seq__32742_33405;
var G__33452 = chunk__32743_33406;
var G__33453 = count__32744_33407;
var G__33454 = (i__32745_33408 + (1));
seq__32742_33405 = G__33451;
chunk__32743_33406 = G__33452;
count__32744_33407 = G__33453;
i__32745_33408 = G__33454;
continue;
} else {
var temp__5735__auto___33455 = cljs.core.seq(seq__32742_33405);
if(temp__5735__auto___33455){
var seq__32742_33456__$1 = temp__5735__auto___33455;
if(cljs.core.chunked_seq_QMARK_(seq__32742_33456__$1)){
var c__4556__auto___33457 = cljs.core.chunk_first(seq__32742_33456__$1);
var G__33458 = cljs.core.chunk_rest(seq__32742_33456__$1);
var G__33459 = c__4556__auto___33457;
var G__33460 = cljs.core.count(c__4556__auto___33457);
var G__33461 = (0);
seq__32742_33405 = G__33458;
chunk__32743_33406 = G__33459;
count__32744_33407 = G__33460;
i__32745_33408 = G__33461;
continue;
} else {
var child_struct_33462 = cljs.core.first(seq__32742_33456__$1);
var children_33464 = shadow.dom.dom_node(child_struct_33462);
if(cljs.core.seq_QMARK_(children_33464)){
var seq__32772_33465 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33464));
var chunk__32774_33466 = null;
var count__32775_33467 = (0);
var i__32776_33468 = (0);
while(true){
if((i__32776_33468 < count__32775_33467)){
var child_33469 = chunk__32774_33466.cljs$core$IIndexed$_nth$arity$2(null,i__32776_33468);
if(cljs.core.truth_(child_33469)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33469);


var G__33470 = seq__32772_33465;
var G__33471 = chunk__32774_33466;
var G__33472 = count__32775_33467;
var G__33473 = (i__32776_33468 + (1));
seq__32772_33465 = G__33470;
chunk__32774_33466 = G__33471;
count__32775_33467 = G__33472;
i__32776_33468 = G__33473;
continue;
} else {
var G__33474 = seq__32772_33465;
var G__33475 = chunk__32774_33466;
var G__33476 = count__32775_33467;
var G__33477 = (i__32776_33468 + (1));
seq__32772_33465 = G__33474;
chunk__32774_33466 = G__33475;
count__32775_33467 = G__33476;
i__32776_33468 = G__33477;
continue;
}
} else {
var temp__5735__auto___33478__$1 = cljs.core.seq(seq__32772_33465);
if(temp__5735__auto___33478__$1){
var seq__32772_33479__$1 = temp__5735__auto___33478__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32772_33479__$1)){
var c__4556__auto___33480 = cljs.core.chunk_first(seq__32772_33479__$1);
var G__33481 = cljs.core.chunk_rest(seq__32772_33479__$1);
var G__33482 = c__4556__auto___33480;
var G__33483 = cljs.core.count(c__4556__auto___33480);
var G__33484 = (0);
seq__32772_33465 = G__33481;
chunk__32774_33466 = G__33482;
count__32775_33467 = G__33483;
i__32776_33468 = G__33484;
continue;
} else {
var child_33485 = cljs.core.first(seq__32772_33479__$1);
if(cljs.core.truth_(child_33485)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33485);


var G__33486 = cljs.core.next(seq__32772_33479__$1);
var G__33487 = null;
var G__33488 = (0);
var G__33489 = (0);
seq__32772_33465 = G__33486;
chunk__32774_33466 = G__33487;
count__32775_33467 = G__33488;
i__32776_33468 = G__33489;
continue;
} else {
var G__33490 = cljs.core.next(seq__32772_33479__$1);
var G__33491 = null;
var G__33492 = (0);
var G__33493 = (0);
seq__32772_33465 = G__33490;
chunk__32774_33466 = G__33491;
count__32775_33467 = G__33492;
i__32776_33468 = G__33493;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33464);
}


var G__33494 = cljs.core.next(seq__32742_33456__$1);
var G__33495 = null;
var G__33496 = (0);
var G__33497 = (0);
seq__32742_33405 = G__33494;
chunk__32743_33406 = G__33495;
count__32744_33407 = G__33496;
i__32745_33408 = G__33497;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32782 = cljs.core.seq(node);
var chunk__32783 = null;
var count__32784 = (0);
var i__32785 = (0);
while(true){
if((i__32785 < count__32784)){
var n = chunk__32783.cljs$core$IIndexed$_nth$arity$2(null,i__32785);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33506 = seq__32782;
var G__33507 = chunk__32783;
var G__33508 = count__32784;
var G__33509 = (i__32785 + (1));
seq__32782 = G__33506;
chunk__32783 = G__33507;
count__32784 = G__33508;
i__32785 = G__33509;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32782);
if(temp__5735__auto__){
var seq__32782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32782__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32782__$1);
var G__33511 = cljs.core.chunk_rest(seq__32782__$1);
var G__33512 = c__4556__auto__;
var G__33513 = cljs.core.count(c__4556__auto__);
var G__33514 = (0);
seq__32782 = G__33511;
chunk__32783 = G__33512;
count__32784 = G__33513;
i__32785 = G__33514;
continue;
} else {
var n = cljs.core.first(seq__32782__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33515 = cljs.core.next(seq__32782__$1);
var G__33516 = null;
var G__33517 = (0);
var G__33518 = (0);
seq__32782 = G__33515;
chunk__32783 = G__33516;
count__32784 = G__33517;
i__32785 = G__33518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32794 = arguments.length;
switch (G__32794) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32796 = arguments.length;
switch (G__32796) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32817 = arguments.length;
switch (G__32817) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33526 = arguments.length;
var i__4737__auto___33527 = (0);
while(true){
if((i__4737__auto___33527 < len__4736__auto___33526)){
args__4742__auto__.push((arguments[i__4737__auto___33527]));

var G__33529 = (i__4737__auto___33527 + (1));
i__4737__auto___33527 = G__33529;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32832_33531 = cljs.core.seq(nodes);
var chunk__32833_33532 = null;
var count__32834_33533 = (0);
var i__32835_33534 = (0);
while(true){
if((i__32835_33534 < count__32834_33533)){
var node_33535 = chunk__32833_33532.cljs$core$IIndexed$_nth$arity$2(null,i__32835_33534);
fragment.appendChild(shadow.dom._to_dom(node_33535));


var G__33537 = seq__32832_33531;
var G__33538 = chunk__32833_33532;
var G__33539 = count__32834_33533;
var G__33540 = (i__32835_33534 + (1));
seq__32832_33531 = G__33537;
chunk__32833_33532 = G__33538;
count__32834_33533 = G__33539;
i__32835_33534 = G__33540;
continue;
} else {
var temp__5735__auto___33541 = cljs.core.seq(seq__32832_33531);
if(temp__5735__auto___33541){
var seq__32832_33542__$1 = temp__5735__auto___33541;
if(cljs.core.chunked_seq_QMARK_(seq__32832_33542__$1)){
var c__4556__auto___33543 = cljs.core.chunk_first(seq__32832_33542__$1);
var G__33545 = cljs.core.chunk_rest(seq__32832_33542__$1);
var G__33546 = c__4556__auto___33543;
var G__33547 = cljs.core.count(c__4556__auto___33543);
var G__33548 = (0);
seq__32832_33531 = G__33545;
chunk__32833_33532 = G__33546;
count__32834_33533 = G__33547;
i__32835_33534 = G__33548;
continue;
} else {
var node_33550 = cljs.core.first(seq__32832_33542__$1);
fragment.appendChild(shadow.dom._to_dom(node_33550));


var G__33551 = cljs.core.next(seq__32832_33542__$1);
var G__33552 = null;
var G__33553 = (0);
var G__33554 = (0);
seq__32832_33531 = G__33551;
chunk__32833_33532 = G__33552;
count__32834_33533 = G__33553;
i__32835_33534 = G__33554;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32831){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32831));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32855_33557 = cljs.core.seq(scripts);
var chunk__32856_33558 = null;
var count__32857_33559 = (0);
var i__32858_33560 = (0);
while(true){
if((i__32858_33560 < count__32857_33559)){
var vec__32868_33561 = chunk__32856_33558.cljs$core$IIndexed$_nth$arity$2(null,i__32858_33560);
var script_tag_33562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32868_33561,(0),null);
var script_body_33563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32868_33561,(1),null);
eval(script_body_33563);


var G__33564 = seq__32855_33557;
var G__33565 = chunk__32856_33558;
var G__33566 = count__32857_33559;
var G__33567 = (i__32858_33560 + (1));
seq__32855_33557 = G__33564;
chunk__32856_33558 = G__33565;
count__32857_33559 = G__33566;
i__32858_33560 = G__33567;
continue;
} else {
var temp__5735__auto___33568 = cljs.core.seq(seq__32855_33557);
if(temp__5735__auto___33568){
var seq__32855_33569__$1 = temp__5735__auto___33568;
if(cljs.core.chunked_seq_QMARK_(seq__32855_33569__$1)){
var c__4556__auto___33570 = cljs.core.chunk_first(seq__32855_33569__$1);
var G__33571 = cljs.core.chunk_rest(seq__32855_33569__$1);
var G__33572 = c__4556__auto___33570;
var G__33573 = cljs.core.count(c__4556__auto___33570);
var G__33574 = (0);
seq__32855_33557 = G__33571;
chunk__32856_33558 = G__33572;
count__32857_33559 = G__33573;
i__32858_33560 = G__33574;
continue;
} else {
var vec__32872_33575 = cljs.core.first(seq__32855_33569__$1);
var script_tag_33576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32872_33575,(0),null);
var script_body_33577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32872_33575,(1),null);
eval(script_body_33577);


var G__33589 = cljs.core.next(seq__32855_33569__$1);
var G__33590 = null;
var G__33591 = (0);
var G__33592 = (0);
seq__32855_33557 = G__33589;
chunk__32856_33558 = G__33590;
count__32857_33559 = G__33591;
i__32858_33560 = G__33592;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32876){
var vec__32877 = p__32876;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32877,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32877,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32891 = arguments.length;
switch (G__32891) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32899 = cljs.core.seq(style_keys);
var chunk__32901 = null;
var count__32902 = (0);
var i__32903 = (0);
while(true){
if((i__32903 < count__32902)){
var it = chunk__32901.cljs$core$IIndexed$_nth$arity$2(null,i__32903);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33594 = seq__32899;
var G__33595 = chunk__32901;
var G__33596 = count__32902;
var G__33597 = (i__32903 + (1));
seq__32899 = G__33594;
chunk__32901 = G__33595;
count__32902 = G__33596;
i__32903 = G__33597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32899);
if(temp__5735__auto__){
var seq__32899__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32899__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32899__$1);
var G__33598 = cljs.core.chunk_rest(seq__32899__$1);
var G__33599 = c__4556__auto__;
var G__33600 = cljs.core.count(c__4556__auto__);
var G__33601 = (0);
seq__32899 = G__33598;
chunk__32901 = G__33599;
count__32902 = G__33600;
i__32903 = G__33601;
continue;
} else {
var it = cljs.core.first(seq__32899__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33602 = cljs.core.next(seq__32899__$1);
var G__33603 = null;
var G__33604 = (0);
var G__33605 = (0);
seq__32899 = G__33602;
chunk__32901 = G__33603;
count__32902 = G__33604;
i__32903 = G__33605;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32907,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32922 = k32907;
var G__32922__$1 = (((G__32922 instanceof cljs.core.Keyword))?G__32922.fqn:null);
switch (G__32922__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32907,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32923){
var vec__32924 = p__32923;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32906){
var self__ = this;
var G__32906__$1 = this;
return (new cljs.core.RecordIter((0),G__32906__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32908,other32909){
var self__ = this;
var this32908__$1 = this;
return (((!((other32909 == null)))) && ((this32908__$1.constructor === other32909.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32908__$1.x,other32909.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32908__$1.y,other32909.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32908__$1.__extmap,other32909.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32906){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32960 = cljs.core.keyword_identical_QMARK_;
var expr__32961 = k__4388__auto__;
if(cljs.core.truth_((pred__32960.cljs$core$IFn$_invoke$arity$2 ? pred__32960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32961) : pred__32960.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32961)))){
return (new shadow.dom.Coordinate(G__32906,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32960.cljs$core$IFn$_invoke$arity$2 ? pred__32960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32961) : pred__32960.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32961)))){
return (new shadow.dom.Coordinate(self__.x,G__32906,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32906),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32906){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32906,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32910){
var extmap__4419__auto__ = (function (){var G__32974 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32910,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32910)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32974);
} else {
return G__32974;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32910),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32910),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32984,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32993 = k32984;
var G__32993__$1 = (((G__32993 instanceof cljs.core.Keyword))?G__32993.fqn:null);
switch (G__32993__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32984,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32998){
var vec__32999 = p__32998;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32983){
var self__ = this;
var G__32983__$1 = this;
return (new cljs.core.RecordIter((0),G__32983__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32985,other32986){
var self__ = this;
var this32985__$1 = this;
return (((!((other32986 == null)))) && ((this32985__$1.constructor === other32986.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32985__$1.w,other32986.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32985__$1.h,other32986.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32985__$1.__extmap,other32986.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32983){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33034 = cljs.core.keyword_identical_QMARK_;
var expr__33035 = k__4388__auto__;
if(cljs.core.truth_((pred__33034.cljs$core$IFn$_invoke$arity$2 ? pred__33034.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33035) : pred__33034.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33035)))){
return (new shadow.dom.Size(G__32983,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33034.cljs$core$IFn$_invoke$arity$2 ? pred__33034.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33035) : pred__33034.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33035)))){
return (new shadow.dom.Size(self__.w,G__32983,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32983),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32983){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32983,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32988){
var extmap__4419__auto__ = (function (){var G__33047 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32988,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33047);
} else {
return G__33047;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32988),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32988),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33652 = (i + (1));
var G__33653 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33652;
ret = G__33653;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33066){
var vec__33067 = p__33066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33067,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33071 = arguments.length;
switch (G__33071) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33667 = ps;
var G__33668 = (i + (1));
el__$1 = G__33667;
i = G__33668;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33141 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33144_33673 = cljs.core.seq(props);
var chunk__33145_33674 = null;
var count__33146_33675 = (0);
var i__33147_33676 = (0);
while(true){
if((i__33147_33676 < count__33146_33675)){
var vec__33172_33678 = chunk__33145_33674.cljs$core$IIndexed$_nth$arity$2(null,i__33147_33676);
var k_33679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172_33678,(0),null);
var v_33680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172_33678,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33679);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33679),v_33680);


var G__33685 = seq__33144_33673;
var G__33686 = chunk__33145_33674;
var G__33687 = count__33146_33675;
var G__33688 = (i__33147_33676 + (1));
seq__33144_33673 = G__33685;
chunk__33145_33674 = G__33686;
count__33146_33675 = G__33687;
i__33147_33676 = G__33688;
continue;
} else {
var temp__5735__auto___33690 = cljs.core.seq(seq__33144_33673);
if(temp__5735__auto___33690){
var seq__33144_33692__$1 = temp__5735__auto___33690;
if(cljs.core.chunked_seq_QMARK_(seq__33144_33692__$1)){
var c__4556__auto___33693 = cljs.core.chunk_first(seq__33144_33692__$1);
var G__33694 = cljs.core.chunk_rest(seq__33144_33692__$1);
var G__33695 = c__4556__auto___33693;
var G__33696 = cljs.core.count(c__4556__auto___33693);
var G__33697 = (0);
seq__33144_33673 = G__33694;
chunk__33145_33674 = G__33695;
count__33146_33675 = G__33696;
i__33147_33676 = G__33697;
continue;
} else {
var vec__33175_33698 = cljs.core.first(seq__33144_33692__$1);
var k_33699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33175_33698,(0),null);
var v_33700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33175_33698,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33699);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33699),v_33700);


var G__33703 = cljs.core.next(seq__33144_33692__$1);
var G__33704 = null;
var G__33705 = (0);
var G__33706 = (0);
seq__33144_33673 = G__33703;
chunk__33145_33674 = G__33704;
count__33146_33675 = G__33705;
i__33147_33676 = G__33706;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33185 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(1),null);
var seq__33189_33712 = cljs.core.seq(node_children);
var chunk__33191_33713 = null;
var count__33192_33714 = (0);
var i__33193_33715 = (0);
while(true){
if((i__33193_33715 < count__33192_33714)){
var child_struct_33720 = chunk__33191_33713.cljs$core$IIndexed$_nth$arity$2(null,i__33193_33715);
if((!((child_struct_33720 == null)))){
if(typeof child_struct_33720 === 'string'){
var text_33721 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33721),child_struct_33720].join(''));
} else {
var children_33723 = shadow.dom.svg_node(child_struct_33720);
if(cljs.core.seq_QMARK_(children_33723)){
var seq__33218_33724 = cljs.core.seq(children_33723);
var chunk__33220_33725 = null;
var count__33221_33726 = (0);
var i__33222_33727 = (0);
while(true){
if((i__33222_33727 < count__33221_33726)){
var child_33730 = chunk__33220_33725.cljs$core$IIndexed$_nth$arity$2(null,i__33222_33727);
if(cljs.core.truth_(child_33730)){
node.appendChild(child_33730);


var G__33731 = seq__33218_33724;
var G__33732 = chunk__33220_33725;
var G__33733 = count__33221_33726;
var G__33734 = (i__33222_33727 + (1));
seq__33218_33724 = G__33731;
chunk__33220_33725 = G__33732;
count__33221_33726 = G__33733;
i__33222_33727 = G__33734;
continue;
} else {
var G__33737 = seq__33218_33724;
var G__33738 = chunk__33220_33725;
var G__33739 = count__33221_33726;
var G__33740 = (i__33222_33727 + (1));
seq__33218_33724 = G__33737;
chunk__33220_33725 = G__33738;
count__33221_33726 = G__33739;
i__33222_33727 = G__33740;
continue;
}
} else {
var temp__5735__auto___33741 = cljs.core.seq(seq__33218_33724);
if(temp__5735__auto___33741){
var seq__33218_33742__$1 = temp__5735__auto___33741;
if(cljs.core.chunked_seq_QMARK_(seq__33218_33742__$1)){
var c__4556__auto___33745 = cljs.core.chunk_first(seq__33218_33742__$1);
var G__33746 = cljs.core.chunk_rest(seq__33218_33742__$1);
var G__33747 = c__4556__auto___33745;
var G__33748 = cljs.core.count(c__4556__auto___33745);
var G__33749 = (0);
seq__33218_33724 = G__33746;
chunk__33220_33725 = G__33747;
count__33221_33726 = G__33748;
i__33222_33727 = G__33749;
continue;
} else {
var child_33750 = cljs.core.first(seq__33218_33742__$1);
if(cljs.core.truth_(child_33750)){
node.appendChild(child_33750);


var G__33751 = cljs.core.next(seq__33218_33742__$1);
var G__33752 = null;
var G__33753 = (0);
var G__33754 = (0);
seq__33218_33724 = G__33751;
chunk__33220_33725 = G__33752;
count__33221_33726 = G__33753;
i__33222_33727 = G__33754;
continue;
} else {
var G__33755 = cljs.core.next(seq__33218_33742__$1);
var G__33756 = null;
var G__33757 = (0);
var G__33758 = (0);
seq__33218_33724 = G__33755;
chunk__33220_33725 = G__33756;
count__33221_33726 = G__33757;
i__33222_33727 = G__33758;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33723);
}
}


var G__33759 = seq__33189_33712;
var G__33760 = chunk__33191_33713;
var G__33761 = count__33192_33714;
var G__33762 = (i__33193_33715 + (1));
seq__33189_33712 = G__33759;
chunk__33191_33713 = G__33760;
count__33192_33714 = G__33761;
i__33193_33715 = G__33762;
continue;
} else {
var G__33763 = seq__33189_33712;
var G__33764 = chunk__33191_33713;
var G__33765 = count__33192_33714;
var G__33766 = (i__33193_33715 + (1));
seq__33189_33712 = G__33763;
chunk__33191_33713 = G__33764;
count__33192_33714 = G__33765;
i__33193_33715 = G__33766;
continue;
}
} else {
var temp__5735__auto___33767 = cljs.core.seq(seq__33189_33712);
if(temp__5735__auto___33767){
var seq__33189_33768__$1 = temp__5735__auto___33767;
if(cljs.core.chunked_seq_QMARK_(seq__33189_33768__$1)){
var c__4556__auto___33769 = cljs.core.chunk_first(seq__33189_33768__$1);
var G__33770 = cljs.core.chunk_rest(seq__33189_33768__$1);
var G__33771 = c__4556__auto___33769;
var G__33772 = cljs.core.count(c__4556__auto___33769);
var G__33773 = (0);
seq__33189_33712 = G__33770;
chunk__33191_33713 = G__33771;
count__33192_33714 = G__33772;
i__33193_33715 = G__33773;
continue;
} else {
var child_struct_33774 = cljs.core.first(seq__33189_33768__$1);
if((!((child_struct_33774 == null)))){
if(typeof child_struct_33774 === 'string'){
var text_33775 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33775),child_struct_33774].join(''));
} else {
var children_33776 = shadow.dom.svg_node(child_struct_33774);
if(cljs.core.seq_QMARK_(children_33776)){
var seq__33243_33777 = cljs.core.seq(children_33776);
var chunk__33245_33778 = null;
var count__33246_33779 = (0);
var i__33247_33780 = (0);
while(true){
if((i__33247_33780 < count__33246_33779)){
var child_33781 = chunk__33245_33778.cljs$core$IIndexed$_nth$arity$2(null,i__33247_33780);
if(cljs.core.truth_(child_33781)){
node.appendChild(child_33781);


var G__33782 = seq__33243_33777;
var G__33783 = chunk__33245_33778;
var G__33784 = count__33246_33779;
var G__33785 = (i__33247_33780 + (1));
seq__33243_33777 = G__33782;
chunk__33245_33778 = G__33783;
count__33246_33779 = G__33784;
i__33247_33780 = G__33785;
continue;
} else {
var G__33786 = seq__33243_33777;
var G__33787 = chunk__33245_33778;
var G__33788 = count__33246_33779;
var G__33789 = (i__33247_33780 + (1));
seq__33243_33777 = G__33786;
chunk__33245_33778 = G__33787;
count__33246_33779 = G__33788;
i__33247_33780 = G__33789;
continue;
}
} else {
var temp__5735__auto___33790__$1 = cljs.core.seq(seq__33243_33777);
if(temp__5735__auto___33790__$1){
var seq__33243_33792__$1 = temp__5735__auto___33790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33243_33792__$1)){
var c__4556__auto___33793 = cljs.core.chunk_first(seq__33243_33792__$1);
var G__33794 = cljs.core.chunk_rest(seq__33243_33792__$1);
var G__33795 = c__4556__auto___33793;
var G__33796 = cljs.core.count(c__4556__auto___33793);
var G__33797 = (0);
seq__33243_33777 = G__33794;
chunk__33245_33778 = G__33795;
count__33246_33779 = G__33796;
i__33247_33780 = G__33797;
continue;
} else {
var child_33798 = cljs.core.first(seq__33243_33792__$1);
if(cljs.core.truth_(child_33798)){
node.appendChild(child_33798);


var G__33799 = cljs.core.next(seq__33243_33792__$1);
var G__33800 = null;
var G__33801 = (0);
var G__33802 = (0);
seq__33243_33777 = G__33799;
chunk__33245_33778 = G__33800;
count__33246_33779 = G__33801;
i__33247_33780 = G__33802;
continue;
} else {
var G__33803 = cljs.core.next(seq__33243_33792__$1);
var G__33804 = null;
var G__33805 = (0);
var G__33806 = (0);
seq__33243_33777 = G__33803;
chunk__33245_33778 = G__33804;
count__33246_33779 = G__33805;
i__33247_33780 = G__33806;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33776);
}
}


var G__33807 = cljs.core.next(seq__33189_33768__$1);
var G__33808 = null;
var G__33809 = (0);
var G__33810 = (0);
seq__33189_33712 = G__33807;
chunk__33191_33713 = G__33808;
count__33192_33714 = G__33809;
i__33193_33715 = G__33810;
continue;
} else {
var G__33813 = cljs.core.next(seq__33189_33768__$1);
var G__33814 = null;
var G__33815 = (0);
var G__33816 = (0);
seq__33189_33712 = G__33813;
chunk__33191_33713 = G__33814;
count__33192_33714 = G__33815;
i__33193_33715 = G__33816;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33821 = arguments.length;
var i__4737__auto___33822 = (0);
while(true){
if((i__4737__auto___33822 < len__4736__auto___33821)){
args__4742__auto__.push((arguments[i__4737__auto___33822]));

var G__33826 = (i__4737__auto___33822 + (1));
i__4737__auto___33822 = G__33826;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33249){
var G__33250 = cljs.core.first(seq33249);
var seq33249__$1 = cljs.core.next(seq33249);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33250,seq33249__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33262 = arguments.length;
switch (G__33262) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30617__auto___33834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_33275){
var state_val_33276 = (state_33275[(1)]);
if((state_val_33276 === (1))){
var state_33275__$1 = state_33275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33275__$1,(2),once_or_cleanup);
} else {
if((state_val_33276 === (2))){
var inst_33272 = (state_33275[(2)]);
var inst_33273 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33275__$1 = (function (){var statearr_33281 = state_33275;
(statearr_33281[(7)] = inst_33272);

return statearr_33281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33275__$1,inst_33273);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30367__auto__ = null;
var shadow$dom$state_machine__30367__auto____0 = (function (){
var statearr_33283 = [null,null,null,null,null,null,null,null];
(statearr_33283[(0)] = shadow$dom$state_machine__30367__auto__);

(statearr_33283[(1)] = (1));

return statearr_33283;
});
var shadow$dom$state_machine__30367__auto____1 = (function (state_33275){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_33275);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e33284){var ex__30370__auto__ = e33284;
var statearr_33285_33836 = state_33275;
(statearr_33285_33836[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_33275[(4)]))){
var statearr_33286_33844 = state_33275;
(statearr_33286_33844[(1)] = cljs.core.first((state_33275[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33846 = state_33275;
state_33275 = G__33846;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
shadow$dom$state_machine__30367__auto__ = function(state_33275){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30367__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30367__auto____1.call(this,state_33275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30367__auto____0;
shadow$dom$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30367__auto____1;
return shadow$dom$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_33288 = f__30618__auto__();
(statearr_33288[(6)] = c__30617__auto___33834);

return statearr_33288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
