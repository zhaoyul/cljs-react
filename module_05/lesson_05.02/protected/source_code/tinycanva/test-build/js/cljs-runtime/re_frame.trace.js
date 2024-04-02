goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38159){
var map__38160 = p__38159;
var map__38160__$1 = (((((!((map__38160 == null))))?(((((map__38160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38160):map__38160);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38160__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38160__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38160__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38160__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38162_38189 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38163_38190 = null;
var count__38164_38191 = (0);
var i__38165_38192 = (0);
while(true){
if((i__38165_38192 < count__38164_38191)){
var vec__38176_38193 = chunk__38163_38190.cljs$core$IIndexed$_nth$arity$2(null,i__38165_38192);
var k_38194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38176_38193,(0),null);
var cb_38195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38176_38193,(1),null);
try{var G__38180_38196 = cljs.core.deref(re_frame.trace.traces);
(cb_38195.cljs$core$IFn$_invoke$arity$1 ? cb_38195.cljs$core$IFn$_invoke$arity$1(G__38180_38196) : cb_38195.call(null,G__38180_38196));
}catch (e38179){var e_38197 = e38179;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38194,"while storing",cljs.core.deref(re_frame.trace.traces),e_38197], 0));
}

var G__38198 = seq__38162_38189;
var G__38199 = chunk__38163_38190;
var G__38200 = count__38164_38191;
var G__38201 = (i__38165_38192 + (1));
seq__38162_38189 = G__38198;
chunk__38163_38190 = G__38199;
count__38164_38191 = G__38200;
i__38165_38192 = G__38201;
continue;
} else {
var temp__5735__auto___38202 = cljs.core.seq(seq__38162_38189);
if(temp__5735__auto___38202){
var seq__38162_38204__$1 = temp__5735__auto___38202;
if(cljs.core.chunked_seq_QMARK_(seq__38162_38204__$1)){
var c__4556__auto___38205 = cljs.core.chunk_first(seq__38162_38204__$1);
var G__38210 = cljs.core.chunk_rest(seq__38162_38204__$1);
var G__38211 = c__4556__auto___38205;
var G__38212 = cljs.core.count(c__4556__auto___38205);
var G__38213 = (0);
seq__38162_38189 = G__38210;
chunk__38163_38190 = G__38211;
count__38164_38191 = G__38212;
i__38165_38192 = G__38213;
continue;
} else {
var vec__38181_38214 = cljs.core.first(seq__38162_38204__$1);
var k_38215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181_38214,(0),null);
var cb_38216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181_38214,(1),null);
try{var G__38185_38220 = cljs.core.deref(re_frame.trace.traces);
(cb_38216.cljs$core$IFn$_invoke$arity$1 ? cb_38216.cljs$core$IFn$_invoke$arity$1(G__38185_38220) : cb_38216.call(null,G__38185_38220));
}catch (e38184){var e_38221 = e38184;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38215,"while storing",cljs.core.deref(re_frame.trace.traces),e_38221], 0));
}

var G__38222 = cljs.core.next(seq__38162_38204__$1);
var G__38223 = null;
var G__38224 = (0);
var G__38225 = (0);
seq__38162_38189 = G__38222;
chunk__38163_38190 = G__38223;
count__38164_38191 = G__38224;
i__38165_38192 = G__38225;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
