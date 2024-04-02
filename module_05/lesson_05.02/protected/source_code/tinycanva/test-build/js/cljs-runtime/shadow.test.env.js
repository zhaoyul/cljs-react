goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4529__auto__ = (function shadow$test$env$get_test_vars_$_iter__35371(s__35372){
return (new cljs.core.LazySeq(null,(function (){
var s__35372__$1 = s__35372;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35372__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__35377 = cljs.core.first(xs__6292__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(1),null);
var iterys__4525__auto__ = ((function (s__35372__$1,vec__35377,ns,ns_info,xs__6292__auto__,temp__5735__auto__){
return (function shadow$test$env$get_test_vars_$_iter__35371_$_iter__35373(s__35374){
return (new cljs.core.LazySeq(null,((function (s__35372__$1,vec__35377,ns,ns_info,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__35374__$1 = s__35374;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35374__$1);
if(temp__5735__auto____$1){
var s__35374__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35374__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35374__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35376 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35375 = (0);
while(true){
if((i__35375 < size__4528__auto__)){
var var$ = cljs.core._nth(c__4527__auto__,i__35375);
cljs.core.chunk_append(b__35376,var$);

var G__35464 = (i__35375 + (1));
i__35375 = G__35464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35376),shadow$test$env$get_test_vars_$_iter__35371_$_iter__35373(cljs.core.chunk_rest(s__35374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35376),null);
}
} else {
var var$ = cljs.core.first(s__35374__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__35371_$_iter__35373(cljs.core.rest(s__35374__$2)));
}
} else {
return null;
}
break;
}
});})(s__35372__$1,vec__35377,ns,ns_info,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__35372__$1,vec__35377,ns,ns_info,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$test$env$get_test_vars_$_iter__35371(cljs.core.rest(s__35372__$1)));
} else {
var G__35465 = cljs.core.rest(s__35372__$1);
s__35372__$1 = G__35465;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4529__auto__ = (function shadow$test$env$get_test_count_$_iter__35396(s__35397){
return (new cljs.core.LazySeq(null,(function (){
var s__35397__$1 = s__35397;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35397__$1);
if(temp__5735__auto__){
var s__35397__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35397__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35397__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35399 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35398 = (0);
while(true){
if((i__35398 < size__4528__auto__)){
var map__35404 = cljs.core._nth(c__4527__auto__,i__35398);
var map__35404__$1 = (((((!((map__35404 == null))))?(((((map__35404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35404):map__35404);
var test_ns = map__35404__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35404__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__35399,cljs.core.count(vars));

var G__35467 = (i__35398 + (1));
i__35398 = G__35467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35399),shadow$test$env$get_test_count_$_iter__35396(cljs.core.chunk_rest(s__35397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35399),null);
}
} else {
var map__35440 = cljs.core.first(s__35397__$2);
var map__35440__$1 = (((((!((map__35440 == null))))?(((((map__35440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35440):map__35440);
var test_ns = map__35440__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35440__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__35396(cljs.core.rest(s__35397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
