goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38416 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38417 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38417);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38514 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38514)){
var new_db_38515 = temp__5735__auto___38514;
var fexpr__38422_38516 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38422_38516.cljs$core$IFn$_invoke$arity$1 ? fexpr__38422_38516.cljs$core$IFn$_invoke$arity$1(new_db_38515) : fexpr__38422_38516.call(null,new_db_38515));
} else {
}

var seq__38423 = cljs.core.seq(effects_without_db);
var chunk__38424 = null;
var count__38425 = (0);
var i__38426 = (0);
while(true){
if((i__38426 < count__38425)){
var vec__38436 = chunk__38424.cljs$core$IIndexed$_nth$arity$2(null,i__38426);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38436,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38436,(1),null);
var temp__5733__auto___38517 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38517)){
var effect_fn_38518 = temp__5733__auto___38517;
(effect_fn_38518.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38518.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38518.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38519 = seq__38423;
var G__38520 = chunk__38424;
var G__38521 = count__38425;
var G__38522 = (i__38426 + (1));
seq__38423 = G__38519;
chunk__38424 = G__38520;
count__38425 = G__38521;
i__38426 = G__38522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38423);
if(temp__5735__auto__){
var seq__38423__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38423__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38423__$1);
var G__38527 = cljs.core.chunk_rest(seq__38423__$1);
var G__38528 = c__4556__auto__;
var G__38529 = cljs.core.count(c__4556__auto__);
var G__38530 = (0);
seq__38423 = G__38527;
chunk__38424 = G__38528;
count__38425 = G__38529;
i__38426 = G__38530;
continue;
} else {
var vec__38444 = cljs.core.first(seq__38423__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(1),null);
var temp__5733__auto___38531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38531)){
var effect_fn_38532 = temp__5733__auto___38531;
(effect_fn_38532.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38532.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38532.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38533 = cljs.core.next(seq__38423__$1);
var G__38534 = null;
var G__38535 = (0);
var G__38536 = (0);
seq__38423 = G__38533;
chunk__38424 = G__38534;
count__38425 = G__38535;
i__38426 = G__38536;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38139__auto___38537 = re_frame.interop.now();
var duration__38140__auto___38538 = (end__38139__auto___38537 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38140__auto___38538,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38139__auto___38537);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38416);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38539 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38539)){
var new_db_38540 = temp__5735__auto___38539;
var fexpr__38449_38541 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38449_38541.cljs$core$IFn$_invoke$arity$1 ? fexpr__38449_38541.cljs$core$IFn$_invoke$arity$1(new_db_38540) : fexpr__38449_38541.call(null,new_db_38540));
} else {
}

var seq__38450 = cljs.core.seq(effects_without_db);
var chunk__38451 = null;
var count__38452 = (0);
var i__38453 = (0);
while(true){
if((i__38453 < count__38452)){
var vec__38465 = chunk__38451.cljs$core$IIndexed$_nth$arity$2(null,i__38453);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38465,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38465,(1),null);
var temp__5733__auto___38542 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38542)){
var effect_fn_38543 = temp__5733__auto___38542;
(effect_fn_38543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38544 = seq__38450;
var G__38545 = chunk__38451;
var G__38546 = count__38452;
var G__38547 = (i__38453 + (1));
seq__38450 = G__38544;
chunk__38451 = G__38545;
count__38452 = G__38546;
i__38453 = G__38547;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38450);
if(temp__5735__auto__){
var seq__38450__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38450__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38450__$1);
var G__38548 = cljs.core.chunk_rest(seq__38450__$1);
var G__38549 = c__4556__auto__;
var G__38550 = cljs.core.count(c__4556__auto__);
var G__38551 = (0);
seq__38450 = G__38548;
chunk__38451 = G__38549;
count__38452 = G__38550;
i__38453 = G__38551;
continue;
} else {
var vec__38470 = cljs.core.first(seq__38450__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38470,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38470,(1),null);
var temp__5733__auto___38554 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38554)){
var effect_fn_38555 = temp__5733__auto___38554;
(effect_fn_38555.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38555.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38555.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38556 = cljs.core.next(seq__38450__$1);
var G__38557 = null;
var G__38558 = (0);
var G__38559 = (0);
seq__38450 = G__38556;
chunk__38451 = G__38557;
count__38452 = G__38558;
i__38453 = G__38559;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38474){
var map__38475 = p__38474;
var map__38475__$1 = (((((!((map__38475 == null))))?(((((map__38475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38475):map__38475);
var effect = map__38475__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38475__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38475__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38477 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38478 = null;
var count__38479 = (0);
var i__38480 = (0);
while(true){
if((i__38480 < count__38479)){
var effect = chunk__38478.cljs$core$IIndexed$_nth$arity$2(null,i__38480);
re_frame.fx.dispatch_later(effect);


var G__38563 = seq__38477;
var G__38564 = chunk__38478;
var G__38565 = count__38479;
var G__38566 = (i__38480 + (1));
seq__38477 = G__38563;
chunk__38478 = G__38564;
count__38479 = G__38565;
i__38480 = G__38566;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38477);
if(temp__5735__auto__){
var seq__38477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38477__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38477__$1);
var G__38567 = cljs.core.chunk_rest(seq__38477__$1);
var G__38568 = c__4556__auto__;
var G__38569 = cljs.core.count(c__4556__auto__);
var G__38570 = (0);
seq__38477 = G__38567;
chunk__38478 = G__38568;
count__38479 = G__38569;
i__38480 = G__38570;
continue;
} else {
var effect = cljs.core.first(seq__38477__$1);
re_frame.fx.dispatch_later(effect);


var G__38571 = cljs.core.next(seq__38477__$1);
var G__38572 = null;
var G__38573 = (0);
var G__38574 = (0);
seq__38477 = G__38571;
chunk__38478 = G__38572;
count__38479 = G__38573;
i__38480 = G__38574;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38486 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38487 = null;
var count__38488 = (0);
var i__38489 = (0);
while(true){
if((i__38489 < count__38488)){
var vec__38496 = chunk__38487.cljs$core$IIndexed$_nth$arity$2(null,i__38489);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38496,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38496,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38578 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38578)){
var effect_fn_38579 = temp__5733__auto___38578;
(effect_fn_38579.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38579.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38579.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38580 = seq__38486;
var G__38581 = chunk__38487;
var G__38582 = count__38488;
var G__38583 = (i__38489 + (1));
seq__38486 = G__38580;
chunk__38487 = G__38581;
count__38488 = G__38582;
i__38489 = G__38583;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38486);
if(temp__5735__auto__){
var seq__38486__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38486__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38486__$1);
var G__38584 = cljs.core.chunk_rest(seq__38486__$1);
var G__38585 = c__4556__auto__;
var G__38586 = cljs.core.count(c__4556__auto__);
var G__38587 = (0);
seq__38486 = G__38584;
chunk__38487 = G__38585;
count__38488 = G__38586;
i__38489 = G__38587;
continue;
} else {
var vec__38499 = cljs.core.first(seq__38486__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38590 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38590)){
var effect_fn_38591 = temp__5733__auto___38590;
(effect_fn_38591.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38591.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38591.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38592 = cljs.core.next(seq__38486__$1);
var G__38593 = null;
var G__38594 = (0);
var G__38595 = (0);
seq__38486 = G__38592;
chunk__38487 = G__38593;
count__38488 = G__38594;
i__38489 = G__38595;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38505 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38506 = null;
var count__38507 = (0);
var i__38508 = (0);
while(true){
if((i__38508 < count__38507)){
var event = chunk__38506.cljs$core$IIndexed$_nth$arity$2(null,i__38508);
re_frame.router.dispatch(event);


var G__38596 = seq__38505;
var G__38597 = chunk__38506;
var G__38598 = count__38507;
var G__38599 = (i__38508 + (1));
seq__38505 = G__38596;
chunk__38506 = G__38597;
count__38507 = G__38598;
i__38508 = G__38599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38505);
if(temp__5735__auto__){
var seq__38505__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38505__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38505__$1);
var G__38600 = cljs.core.chunk_rest(seq__38505__$1);
var G__38601 = c__4556__auto__;
var G__38602 = cljs.core.count(c__4556__auto__);
var G__38603 = (0);
seq__38505 = G__38600;
chunk__38506 = G__38601;
count__38507 = G__38602;
i__38508 = G__38603;
continue;
} else {
var event = cljs.core.first(seq__38505__$1);
re_frame.router.dispatch(event);


var G__38604 = cljs.core.next(seq__38505__$1);
var G__38605 = null;
var G__38606 = (0);
var G__38607 = (0);
seq__38505 = G__38604;
chunk__38506 = G__38605;
count__38507 = G__38606;
i__38508 = G__38607;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38510 = cljs.core.seq(value);
var chunk__38511 = null;
var count__38512 = (0);
var i__38513 = (0);
while(true){
if((i__38513 < count__38512)){
var event = chunk__38511.cljs$core$IIndexed$_nth$arity$2(null,i__38513);
clear_event(event);


var G__38612 = seq__38510;
var G__38613 = chunk__38511;
var G__38614 = count__38512;
var G__38615 = (i__38513 + (1));
seq__38510 = G__38612;
chunk__38511 = G__38613;
count__38512 = G__38614;
i__38513 = G__38615;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38510);
if(temp__5735__auto__){
var seq__38510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38510__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38510__$1);
var G__38620 = cljs.core.chunk_rest(seq__38510__$1);
var G__38621 = c__4556__auto__;
var G__38622 = cljs.core.count(c__4556__auto__);
var G__38623 = (0);
seq__38510 = G__38620;
chunk__38511 = G__38621;
count__38512 = G__38622;
i__38513 = G__38623;
continue;
} else {
var event = cljs.core.first(seq__38510__$1);
clear_event(event);


var G__38624 = cljs.core.next(seq__38510__$1);
var G__38625 = null;
var G__38626 = (0);
var G__38627 = (0);
seq__38510 = G__38624;
chunk__38511 = G__38625;
count__38512 = G__38626;
i__38513 = G__38627;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
