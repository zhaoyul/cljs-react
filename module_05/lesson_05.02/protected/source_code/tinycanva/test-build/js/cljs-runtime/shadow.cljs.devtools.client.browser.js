goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35575 = arguments.length;
var i__4737__auto___35576 = (0);
while(true){
if((i__4737__auto___35576 < len__4736__auto___35575)){
args__4742__auto__.push((arguments[i__4737__auto___35576]));

var G__35577 = (i__4737__auto___35576 + (1));
i__4737__auto___35576 = G__35577;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35369){
var G__35370 = cljs.core.first(seq35369);
var seq35369__$1 = cljs.core.next(seq35369);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35370,seq35369__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35380 = cljs.core.seq(sources);
var chunk__35381 = null;
var count__35382 = (0);
var i__35383 = (0);
while(true){
if((i__35383 < count__35382)){
var map__35390 = chunk__35381.cljs$core$IIndexed$_nth$arity$2(null,i__35383);
var map__35390__$1 = (((((!((map__35390 == null))))?(((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35390):map__35390);
var src = map__35390__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35392){var e_35580 = e35392;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35580);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35580.message)].join('')));
}

var G__35582 = seq__35380;
var G__35583 = chunk__35381;
var G__35584 = count__35382;
var G__35585 = (i__35383 + (1));
seq__35380 = G__35582;
chunk__35381 = G__35583;
count__35382 = G__35584;
i__35383 = G__35585;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35380);
if(temp__5735__auto__){
var seq__35380__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35380__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35380__$1);
var G__35586 = cljs.core.chunk_rest(seq__35380__$1);
var G__35587 = c__4556__auto__;
var G__35588 = cljs.core.count(c__4556__auto__);
var G__35589 = (0);
seq__35380 = G__35586;
chunk__35381 = G__35587;
count__35382 = G__35588;
i__35383 = G__35589;
continue;
} else {
var map__35393 = cljs.core.first(seq__35380__$1);
var map__35393__$1 = (((((!((map__35393 == null))))?(((((map__35393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35393):map__35393);
var src = map__35393__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35393__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35393__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35393__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35393__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35395){var e_35590 = e35395;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35590);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35590.message)].join('')));
}

var G__35591 = cljs.core.next(seq__35380__$1);
var G__35592 = null;
var G__35593 = (0);
var G__35594 = (0);
seq__35380 = G__35591;
chunk__35381 = G__35592;
count__35382 = G__35593;
i__35383 = G__35594;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35400 = cljs.core.seq(js_requires);
var chunk__35401 = null;
var count__35402 = (0);
var i__35403 = (0);
while(true){
if((i__35403 < count__35402)){
var js_ns = chunk__35401.cljs$core$IIndexed$_nth$arity$2(null,i__35403);
var require_str_35598 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35598);


var G__35599 = seq__35400;
var G__35600 = chunk__35401;
var G__35601 = count__35402;
var G__35602 = (i__35403 + (1));
seq__35400 = G__35599;
chunk__35401 = G__35600;
count__35402 = G__35601;
i__35403 = G__35602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35400);
if(temp__5735__auto__){
var seq__35400__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35400__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35400__$1);
var G__35603 = cljs.core.chunk_rest(seq__35400__$1);
var G__35604 = c__4556__auto__;
var G__35605 = cljs.core.count(c__4556__auto__);
var G__35606 = (0);
seq__35400 = G__35603;
chunk__35401 = G__35604;
count__35402 = G__35605;
i__35403 = G__35606;
continue;
} else {
var js_ns = cljs.core.first(seq__35400__$1);
var require_str_35607 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35607);


var G__35608 = cljs.core.next(seq__35400__$1);
var G__35609 = null;
var G__35610 = (0);
var G__35611 = (0);
seq__35400 = G__35608;
chunk__35401 = G__35609;
count__35402 = G__35610;
i__35403 = G__35611;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35407){
var map__35408 = p__35407;
var map__35408__$1 = (((((!((map__35408 == null))))?(((((map__35408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35408):map__35408);
var msg = map__35408__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35408__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35408__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35412(s__35413){
return (new cljs.core.LazySeq(null,(function (){
var s__35413__$1 = s__35413;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35413__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35419 = cljs.core.first(xs__6292__auto__);
var map__35419__$1 = (((((!((map__35419 == null))))?(((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35419):map__35419);
var src = map__35419__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35419__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35413__$1,map__35419,map__35419__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35408,map__35408__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35412_$_iter__35414(s__35415){
return (new cljs.core.LazySeq(null,((function (s__35413__$1,map__35419,map__35419__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35408,map__35408__$1,msg,info,reload_info){
return (function (){
var s__35415__$1 = s__35415;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35415__$1);
if(temp__5735__auto____$1){
var s__35415__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35415__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35415__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35417 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35416 = (0);
while(true){
if((i__35416 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35416);
cljs.core.chunk_append(b__35417,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35612 = (i__35416 + (1));
i__35416 = G__35612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35417),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35412_$_iter__35414(cljs.core.chunk_rest(s__35415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35417),null);
}
} else {
var warning = cljs.core.first(s__35415__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35412_$_iter__35414(cljs.core.rest(s__35415__$2)));
}
} else {
return null;
}
break;
}
});})(s__35413__$1,map__35419,map__35419__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35408,map__35408__$1,msg,info,reload_info))
,null,null));
});})(s__35413__$1,map__35419,map__35419__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35408,map__35408__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35412(cljs.core.rest(s__35413__$1)));
} else {
var G__35613 = cljs.core.rest(s__35413__$1);
s__35413__$1 = G__35613;
continue;
}
} else {
var G__35614 = cljs.core.rest(s__35413__$1);
s__35413__$1 = G__35614;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35425_35615 = cljs.core.seq(warnings);
var chunk__35426_35616 = null;
var count__35427_35617 = (0);
var i__35428_35618 = (0);
while(true){
if((i__35428_35618 < count__35427_35617)){
var map__35433_35619 = chunk__35426_35616.cljs$core$IIndexed$_nth$arity$2(null,i__35428_35618);
var map__35433_35620__$1 = (((((!((map__35433_35619 == null))))?(((((map__35433_35619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35433_35619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35433_35619):map__35433_35619);
var w_35621 = map__35433_35620__$1;
var msg_35622__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433_35620__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433_35620__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433_35620__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433_35620__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35625)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35623),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35624),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35622__$1)].join(''));


var G__35628 = seq__35425_35615;
var G__35629 = chunk__35426_35616;
var G__35630 = count__35427_35617;
var G__35631 = (i__35428_35618 + (1));
seq__35425_35615 = G__35628;
chunk__35426_35616 = G__35629;
count__35427_35617 = G__35630;
i__35428_35618 = G__35631;
continue;
} else {
var temp__5735__auto___35633 = cljs.core.seq(seq__35425_35615);
if(temp__5735__auto___35633){
var seq__35425_35634__$1 = temp__5735__auto___35633;
if(cljs.core.chunked_seq_QMARK_(seq__35425_35634__$1)){
var c__4556__auto___35636 = cljs.core.chunk_first(seq__35425_35634__$1);
var G__35637 = cljs.core.chunk_rest(seq__35425_35634__$1);
var G__35638 = c__4556__auto___35636;
var G__35639 = cljs.core.count(c__4556__auto___35636);
var G__35640 = (0);
seq__35425_35615 = G__35637;
chunk__35426_35616 = G__35638;
count__35427_35617 = G__35639;
i__35428_35618 = G__35640;
continue;
} else {
var map__35436_35641 = cljs.core.first(seq__35425_35634__$1);
var map__35436_35642__$1 = (((((!((map__35436_35641 == null))))?(((((map__35436_35641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35436_35641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35436_35641):map__35436_35641);
var w_35643 = map__35436_35642__$1;
var msg_35644__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35436_35642__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35436_35642__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35436_35642__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35436_35642__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35647)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35645),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35646),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35644__$1)].join(''));


var G__35648 = cljs.core.next(seq__35425_35634__$1);
var G__35649 = null;
var G__35650 = (0);
var G__35651 = (0);
seq__35425_35615 = G__35648;
chunk__35426_35616 = G__35649;
count__35427_35617 = G__35650;
i__35428_35618 = G__35651;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35406_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35406_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35443){
var map__35444 = p__35443;
var map__35444__$1 = (((((!((map__35444 == null))))?(((((map__35444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35444):map__35444);
var msg = map__35444__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35444__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35446 = cljs.core.seq(updates);
var chunk__35448 = null;
var count__35449 = (0);
var i__35450 = (0);
while(true){
if((i__35450 < count__35449)){
var path = chunk__35448.cljs$core$IIndexed$_nth$arity$2(null,i__35450);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35490_35652 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35493_35653 = null;
var count__35494_35654 = (0);
var i__35495_35655 = (0);
while(true){
if((i__35495_35655 < count__35494_35654)){
var node_35656 = chunk__35493_35653.cljs$core$IIndexed$_nth$arity$2(null,i__35495_35655);
var path_match_35657 = shadow.cljs.devtools.client.browser.match_paths(node_35656.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35657)){
var new_link_35658 = (function (){var G__35502 = node_35656.cloneNode(true);
G__35502.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35657),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35502;
})();
(new_link_35658.onload = ((function (seq__35490_35652,chunk__35493_35653,count__35494_35654,i__35495_35655,seq__35446,chunk__35448,count__35449,i__35450,new_link_35658,path_match_35657,node_35656,path,map__35444,map__35444__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35656);
});})(seq__35490_35652,chunk__35493_35653,count__35494_35654,i__35495_35655,seq__35446,chunk__35448,count__35449,i__35450,new_link_35658,path_match_35657,node_35656,path,map__35444,map__35444__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35657], 0));

goog.dom.insertSiblingAfter(new_link_35658,node_35656);


var G__35659 = seq__35490_35652;
var G__35660 = chunk__35493_35653;
var G__35661 = count__35494_35654;
var G__35662 = (i__35495_35655 + (1));
seq__35490_35652 = G__35659;
chunk__35493_35653 = G__35660;
count__35494_35654 = G__35661;
i__35495_35655 = G__35662;
continue;
} else {
var G__35663 = seq__35490_35652;
var G__35664 = chunk__35493_35653;
var G__35665 = count__35494_35654;
var G__35666 = (i__35495_35655 + (1));
seq__35490_35652 = G__35663;
chunk__35493_35653 = G__35664;
count__35494_35654 = G__35665;
i__35495_35655 = G__35666;
continue;
}
} else {
var temp__5735__auto___35667 = cljs.core.seq(seq__35490_35652);
if(temp__5735__auto___35667){
var seq__35490_35668__$1 = temp__5735__auto___35667;
if(cljs.core.chunked_seq_QMARK_(seq__35490_35668__$1)){
var c__4556__auto___35669 = cljs.core.chunk_first(seq__35490_35668__$1);
var G__35670 = cljs.core.chunk_rest(seq__35490_35668__$1);
var G__35671 = c__4556__auto___35669;
var G__35672 = cljs.core.count(c__4556__auto___35669);
var G__35673 = (0);
seq__35490_35652 = G__35670;
chunk__35493_35653 = G__35671;
count__35494_35654 = G__35672;
i__35495_35655 = G__35673;
continue;
} else {
var node_35674 = cljs.core.first(seq__35490_35668__$1);
var path_match_35675 = shadow.cljs.devtools.client.browser.match_paths(node_35674.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35675)){
var new_link_35676 = (function (){var G__35506 = node_35674.cloneNode(true);
G__35506.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35675),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35506;
})();
(new_link_35676.onload = ((function (seq__35490_35652,chunk__35493_35653,count__35494_35654,i__35495_35655,seq__35446,chunk__35448,count__35449,i__35450,new_link_35676,path_match_35675,node_35674,seq__35490_35668__$1,temp__5735__auto___35667,path,map__35444,map__35444__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35674);
});})(seq__35490_35652,chunk__35493_35653,count__35494_35654,i__35495_35655,seq__35446,chunk__35448,count__35449,i__35450,new_link_35676,path_match_35675,node_35674,seq__35490_35668__$1,temp__5735__auto___35667,path,map__35444,map__35444__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35675], 0));

goog.dom.insertSiblingAfter(new_link_35676,node_35674);


var G__35678 = cljs.core.next(seq__35490_35668__$1);
var G__35679 = null;
var G__35680 = (0);
var G__35681 = (0);
seq__35490_35652 = G__35678;
chunk__35493_35653 = G__35679;
count__35494_35654 = G__35680;
i__35495_35655 = G__35681;
continue;
} else {
var G__35682 = cljs.core.next(seq__35490_35668__$1);
var G__35683 = null;
var G__35684 = (0);
var G__35685 = (0);
seq__35490_35652 = G__35682;
chunk__35493_35653 = G__35683;
count__35494_35654 = G__35684;
i__35495_35655 = G__35685;
continue;
}
}
} else {
}
}
break;
}


var G__35686 = seq__35446;
var G__35687 = chunk__35448;
var G__35688 = count__35449;
var G__35689 = (i__35450 + (1));
seq__35446 = G__35686;
chunk__35448 = G__35687;
count__35449 = G__35688;
i__35450 = G__35689;
continue;
} else {
var G__35690 = seq__35446;
var G__35691 = chunk__35448;
var G__35692 = count__35449;
var G__35693 = (i__35450 + (1));
seq__35446 = G__35690;
chunk__35448 = G__35691;
count__35449 = G__35692;
i__35450 = G__35693;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35446);
if(temp__5735__auto__){
var seq__35446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35446__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35446__$1);
var G__35694 = cljs.core.chunk_rest(seq__35446__$1);
var G__35695 = c__4556__auto__;
var G__35696 = cljs.core.count(c__4556__auto__);
var G__35697 = (0);
seq__35446 = G__35694;
chunk__35448 = G__35695;
count__35449 = G__35696;
i__35450 = G__35697;
continue;
} else {
var path = cljs.core.first(seq__35446__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35508_35698 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35511_35699 = null;
var count__35512_35700 = (0);
var i__35513_35701 = (0);
while(true){
if((i__35513_35701 < count__35512_35700)){
var node_35702 = chunk__35511_35699.cljs$core$IIndexed$_nth$arity$2(null,i__35513_35701);
var path_match_35703 = shadow.cljs.devtools.client.browser.match_paths(node_35702.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35703)){
var new_link_35704 = (function (){var G__35520 = node_35702.cloneNode(true);
G__35520.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35703),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35520;
})();
(new_link_35704.onload = ((function (seq__35508_35698,chunk__35511_35699,count__35512_35700,i__35513_35701,seq__35446,chunk__35448,count__35449,i__35450,new_link_35704,path_match_35703,node_35702,path,seq__35446__$1,temp__5735__auto__,map__35444,map__35444__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35702);
});})(seq__35508_35698,chunk__35511_35699,count__35512_35700,i__35513_35701,seq__35446,chunk__35448,count__35449,i__35450,new_link_35704,path_match_35703,node_35702,path,seq__35446__$1,temp__5735__auto__,map__35444,map__35444__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35703], 0));

goog.dom.insertSiblingAfter(new_link_35704,node_35702);


var G__35705 = seq__35508_35698;
var G__35706 = chunk__35511_35699;
var G__35707 = count__35512_35700;
var G__35708 = (i__35513_35701 + (1));
seq__35508_35698 = G__35705;
chunk__35511_35699 = G__35706;
count__35512_35700 = G__35707;
i__35513_35701 = G__35708;
continue;
} else {
var G__35709 = seq__35508_35698;
var G__35710 = chunk__35511_35699;
var G__35711 = count__35512_35700;
var G__35712 = (i__35513_35701 + (1));
seq__35508_35698 = G__35709;
chunk__35511_35699 = G__35710;
count__35512_35700 = G__35711;
i__35513_35701 = G__35712;
continue;
}
} else {
var temp__5735__auto___35713__$1 = cljs.core.seq(seq__35508_35698);
if(temp__5735__auto___35713__$1){
var seq__35508_35714__$1 = temp__5735__auto___35713__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35508_35714__$1)){
var c__4556__auto___35715 = cljs.core.chunk_first(seq__35508_35714__$1);
var G__35716 = cljs.core.chunk_rest(seq__35508_35714__$1);
var G__35717 = c__4556__auto___35715;
var G__35718 = cljs.core.count(c__4556__auto___35715);
var G__35719 = (0);
seq__35508_35698 = G__35716;
chunk__35511_35699 = G__35717;
count__35512_35700 = G__35718;
i__35513_35701 = G__35719;
continue;
} else {
var node_35720 = cljs.core.first(seq__35508_35714__$1);
var path_match_35721 = shadow.cljs.devtools.client.browser.match_paths(node_35720.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35721)){
var new_link_35722 = (function (){var G__35521 = node_35720.cloneNode(true);
G__35521.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35721),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35521;
})();
(new_link_35722.onload = ((function (seq__35508_35698,chunk__35511_35699,count__35512_35700,i__35513_35701,seq__35446,chunk__35448,count__35449,i__35450,new_link_35722,path_match_35721,node_35720,seq__35508_35714__$1,temp__5735__auto___35713__$1,path,seq__35446__$1,temp__5735__auto__,map__35444,map__35444__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35720);
});})(seq__35508_35698,chunk__35511_35699,count__35512_35700,i__35513_35701,seq__35446,chunk__35448,count__35449,i__35450,new_link_35722,path_match_35721,node_35720,seq__35508_35714__$1,temp__5735__auto___35713__$1,path,seq__35446__$1,temp__5735__auto__,map__35444,map__35444__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35721], 0));

goog.dom.insertSiblingAfter(new_link_35722,node_35720);


var G__35723 = cljs.core.next(seq__35508_35714__$1);
var G__35724 = null;
var G__35725 = (0);
var G__35726 = (0);
seq__35508_35698 = G__35723;
chunk__35511_35699 = G__35724;
count__35512_35700 = G__35725;
i__35513_35701 = G__35726;
continue;
} else {
var G__35727 = cljs.core.next(seq__35508_35714__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35508_35698 = G__35727;
chunk__35511_35699 = G__35728;
count__35512_35700 = G__35729;
i__35513_35701 = G__35730;
continue;
}
}
} else {
}
}
break;
}


var G__35731 = cljs.core.next(seq__35446__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__35446 = G__35731;
chunk__35448 = G__35732;
count__35449 = G__35733;
i__35450 = G__35734;
continue;
} else {
var G__35735 = cljs.core.next(seq__35446__$1);
var G__35736 = null;
var G__35737 = (0);
var G__35738 = (0);
seq__35446 = G__35735;
chunk__35448 = G__35736;
count__35449 = G__35737;
i__35450 = G__35738;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35522){
var map__35523 = p__35522;
var map__35523__$1 = (((((!((map__35523 == null))))?(((((map__35523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35523):map__35523);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35527){
var map__35528 = p__35527;
var map__35528__$1 = (((((!((map__35528 == null))))?(((((map__35528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35528):map__35528);
var _ = map__35528__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35533,done,error){
var map__35534 = p__35533;
var map__35534__$1 = (((((!((map__35534 == null))))?(((((map__35534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35534):map__35534);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35534__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35537,done,error){
var map__35538 = p__35537;
var map__35538__$1 = (((((!((map__35538 == null))))?(((((map__35538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35538):map__35538);
var msg = map__35538__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35544){
var map__35545 = p__35544;
var map__35545__$1 = (((((!((map__35545 == null))))?(((((map__35545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35545):map__35545);
var src = map__35545__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35545__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35548 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35548) : done.call(null,G__35548));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35555){
var map__35556 = p__35555;
var map__35556__$1 = (((((!((map__35556 == null))))?(((((map__35556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35556):map__35556);
var msg__$1 = map__35556__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35556__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35558){var ex = e35558;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35559){
var map__35560 = p__35559;
var map__35560__$1 = (((((!((map__35560 == null))))?(((((map__35560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35560):map__35560);
var env = map__35560__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35564){
var map__35565 = p__35564;
var map__35565__$1 = (((((!((map__35565 == null))))?(((((map__35565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35565):map__35565);
var msg = map__35565__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35568){
var map__35569 = p__35568;
var map__35569__$1 = (((((!((map__35569 == null))))?(((((map__35569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35569):map__35569);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35571){
var map__35572 = p__35571;
var map__35572__$1 = (((((!((map__35572 == null))))?(((((map__35572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35572):map__35572);
var svc = map__35572__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35572__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
