goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35133,p__35134){
var map__35135 = p__35133;
var map__35135__$1 = (((((!((map__35135 == null))))?(((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35135):map__35135);
var svc = map__35135__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35136 = p__35134;
var map__35136__$1 = (((((!((map__35136 == null))))?(((((map__35136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35136):map__35136);
var msg = map__35136__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35136__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35136__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35136__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35136__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35145,p__35146){
var map__35147 = p__35145;
var map__35147__$1 = (((((!((map__35147 == null))))?(((((map__35147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35147):map__35147);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35147__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35148 = p__35146;
var map__35148__$1 = (((((!((map__35148 == null))))?(((((map__35148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35148):map__35148);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35148__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35157,p__35158){
var map__35159 = p__35157;
var map__35159__$1 = (((((!((map__35159 == null))))?(((((map__35159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35159):map__35159);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35159__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35160 = p__35158;
var map__35160__$1 = (((((!((map__35160 == null))))?(((((map__35160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35160):map__35160);
var msg = map__35160__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35160__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35169,tid){
var map__35170 = p__35169;
var map__35170__$1 = (((((!((map__35170 == null))))?(((((map__35170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35170):map__35170);
var svc = map__35170__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35170__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35178 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35179 = null;
var count__35180 = (0);
var i__35181 = (0);
while(true){
if((i__35181 < count__35180)){
var vec__35195 = chunk__35179.cljs$core$IIndexed$_nth$arity$2(null,i__35181);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35195,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35195,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35208 = seq__35178;
var G__35209 = chunk__35179;
var G__35210 = count__35180;
var G__35211 = (i__35181 + (1));
seq__35178 = G__35208;
chunk__35179 = G__35209;
count__35180 = G__35210;
i__35181 = G__35211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35178);
if(temp__5735__auto__){
var seq__35178__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35178__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35178__$1);
var G__35212 = cljs.core.chunk_rest(seq__35178__$1);
var G__35213 = c__4556__auto__;
var G__35214 = cljs.core.count(c__4556__auto__);
var G__35215 = (0);
seq__35178 = G__35212;
chunk__35179 = G__35213;
count__35180 = G__35214;
i__35181 = G__35215;
continue;
} else {
var vec__35198 = cljs.core.first(seq__35178__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35198,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35198,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35216 = cljs.core.next(seq__35178__$1);
var G__35217 = null;
var G__35218 = (0);
var G__35219 = (0);
seq__35178 = G__35216;
chunk__35179 = G__35217;
count__35180 = G__35218;
i__35181 = G__35219;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35172_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35172_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35173_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35173_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35174_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35174_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35175_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35175_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35204){
var map__35205 = p__35204;
var map__35205__$1 = (((((!((map__35205 == null))))?(((((map__35205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35205):map__35205);
var svc = map__35205__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
