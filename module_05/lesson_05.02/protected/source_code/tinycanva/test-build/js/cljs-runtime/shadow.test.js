goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__35761){
var vec__35762 = p__35761;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__35765 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__35765__$1 = (((G__35765 instanceof cljs.core.Keyword))?G__35765.fqn:null);
switch (G__35765__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__35767 = (function (){
var seq__35768 = cljs.core.seq(vars__$1);
var chunk__35769 = null;
var count__35770 = (0);
var i__35771 = (0);
while(true){
if((i__35771 < count__35770)){
var v = chunk__35769.cljs$core$IIndexed$_nth$arity$2(null,i__35771);
var temp__5735__auto___35836 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___35836)){
var t_35837 = temp__5735__auto___35836;
var G__35775_35838 = ((function (seq__35768,chunk__35769,count__35770,i__35771,t_35837,temp__5735__auto___35836,v,each_fixture_fn,G__35765,G__35765__$1,env,once_fixtures,each_fixtures,vec__35762,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_35837)));
});})(seq__35768,chunk__35769,count__35770,i__35771,t_35837,temp__5735__auto___35836,v,each_fixture_fn,G__35765,G__35765__$1,env,once_fixtures,each_fixtures,vec__35762,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__35775_35838) : each_fixture_fn.call(null,G__35775_35838));
} else {
}


var G__35840 = seq__35768;
var G__35841 = chunk__35769;
var G__35842 = count__35770;
var G__35843 = (i__35771 + (1));
seq__35768 = G__35840;
chunk__35769 = G__35841;
count__35770 = G__35842;
i__35771 = G__35843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35768);
if(temp__5735__auto__){
var seq__35768__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35768__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35768__$1);
var G__35846 = cljs.core.chunk_rest(seq__35768__$1);
var G__35847 = c__4556__auto__;
var G__35848 = cljs.core.count(c__4556__auto__);
var G__35849 = (0);
seq__35768 = G__35846;
chunk__35769 = G__35847;
count__35770 = G__35848;
i__35771 = G__35849;
continue;
} else {
var v = cljs.core.first(seq__35768__$1);
var temp__5735__auto___35851__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___35851__$1)){
var t_35852 = temp__5735__auto___35851__$1;
var G__35776_35853 = ((function (seq__35768,chunk__35769,count__35770,i__35771,t_35852,temp__5735__auto___35851__$1,v,seq__35768__$1,temp__5735__auto__,each_fixture_fn,G__35765,G__35765__$1,env,once_fixtures,each_fixtures,vec__35762,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_35852)));
});})(seq__35768,chunk__35769,count__35770,i__35771,t_35852,temp__5735__auto___35851__$1,v,seq__35768__$1,temp__5735__auto__,each_fixture_fn,G__35765,G__35765__$1,env,once_fixtures,each_fixtures,vec__35762,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__35776_35853) : each_fixture_fn.call(null,G__35776_35853));
} else {
}


var G__35854 = cljs.core.next(seq__35768__$1);
var G__35855 = null;
var G__35856 = (0);
var G__35857 = (0);
seq__35768 = G__35854;
chunk__35769 = G__35855;
count__35770 = G__35856;
i__35771 = G__35857;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__35766 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__35766.cljs$core$IFn$_invoke$arity$1 ? fexpr__35766.cljs$core$IFn$_invoke$arity$1(G__35767) : fexpr__35766.call(null,G__35767));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35765__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__35760_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__35760_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__35777 = shadow.test.env.get_test_ns_info(ns);
var map__35777__$1 = (((((!((map__35777 == null))))?(((((map__35777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35777):map__35777);
var test_ns = map__35777__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__35780,vars){
var map__35781 = p__35780;
var map__35781__$1 = (((((!((map__35781 == null))))?(((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35781):map__35781);
var env = map__35781__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35781__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__35784_35863 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__35787_35864 = null;
var count__35788_35865 = (0);
var i__35789_35866 = (0);
while(true){
if((i__35789_35866 < count__35788_35865)){
var vec__35801_35867 = chunk__35787_35864.cljs$core$IIndexed$_nth$arity$2(null,i__35789_35866);
var test_ns_35868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35801_35867,(0),null);
var ns_info_35869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35801_35867,(1),null);
var map__35804_35870 = ns_info_35869;
var map__35804_35871__$1 = (((((!((map__35804_35870 == null))))?(((((map__35804_35870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35804_35870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35804_35870):map__35804_35870);
var fixtures_35872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35804_35871__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___35873 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_35872);
if(cljs.core.truth_(temp__5735__auto___35873)){
var fix_35874 = temp__5735__auto___35873;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35868,fix_35874], 0));
} else {
}

var temp__5735__auto___35875 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_35872);
if(cljs.core.truth_(temp__5735__auto___35875)){
var fix_35876 = temp__5735__auto___35875;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35868,fix_35876], 0));
} else {
}


var G__35877 = seq__35784_35863;
var G__35878 = chunk__35787_35864;
var G__35879 = count__35788_35865;
var G__35880 = (i__35789_35866 + (1));
seq__35784_35863 = G__35877;
chunk__35787_35864 = G__35878;
count__35788_35865 = G__35879;
i__35789_35866 = G__35880;
continue;
} else {
var temp__5735__auto___35881 = cljs.core.seq(seq__35784_35863);
if(temp__5735__auto___35881){
var seq__35784_35882__$1 = temp__5735__auto___35881;
if(cljs.core.chunked_seq_QMARK_(seq__35784_35882__$1)){
var c__4556__auto___35883 = cljs.core.chunk_first(seq__35784_35882__$1);
var G__35884 = cljs.core.chunk_rest(seq__35784_35882__$1);
var G__35885 = c__4556__auto___35883;
var G__35886 = cljs.core.count(c__4556__auto___35883);
var G__35887 = (0);
seq__35784_35863 = G__35884;
chunk__35787_35864 = G__35885;
count__35788_35865 = G__35886;
i__35789_35866 = G__35887;
continue;
} else {
var vec__35806_35888 = cljs.core.first(seq__35784_35882__$1);
var test_ns_35889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35806_35888,(0),null);
var ns_info_35890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35806_35888,(1),null);
var map__35809_35891 = ns_info_35890;
var map__35809_35892__$1 = (((((!((map__35809_35891 == null))))?(((((map__35809_35891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35809_35891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35809_35891):map__35809_35891);
var fixtures_35893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809_35892__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___35894__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_35893);
if(cljs.core.truth_(temp__5735__auto___35894__$1)){
var fix_35895 = temp__5735__auto___35894__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35889,fix_35895], 0));
} else {
}

var temp__5735__auto___35896__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_35893);
if(cljs.core.truth_(temp__5735__auto___35896__$1)){
var fix_35897 = temp__5735__auto___35896__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_35889,fix_35897], 0));
} else {
}


var G__35898 = cljs.core.next(seq__35784_35882__$1);
var G__35899 = null;
var G__35900 = (0);
var G__35901 = (0);
seq__35784_35863 = G__35898;
chunk__35787_35864 = G__35899;
count__35788_35865 = G__35900;
i__35789_35866 = G__35901;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35779_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__35779_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__35811 = cljs.test.get_current_env();
var map__35811__$1 = (((((!((map__35811 == null))))?(((((map__35811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35811):map__35811);
var env = map__35811__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__35814 = arguments.length;
switch (G__35814) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__35817 = arguments.length;
switch (G__35817) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__35818 = shadow.test.env.get_test_ns_info(ns);
var map__35818__$1 = (((((!((map__35818 == null))))?(((((map__35818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35818):map__35818);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__35825 = arguments.length;
switch (G__35825) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35823_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__35823_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__35828 = arguments.length;
switch (G__35828) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35826_SHARP_){
var or__4126__auto__ = (re == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35826_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
