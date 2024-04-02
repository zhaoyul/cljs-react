goog.provide('app.domain.firebase');
var module$node_modules$firebase$dist$index_cjs=shadow.js.require("module$node_modules$firebase$dist$index_cjs", {});
var module$node_modules$firebase$auth$dist$index_cjs=shadow.js.require("module$node_modules$firebase$auth$dist$index_cjs", {});
/**
 * Convert Firebase user object to Clojure map
 */
app.domain.firebase.firebase_user__GT_user = (function app$domain$firebase$firebase_user__GT_user(user){
if(cljs.core.truth_(user)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uid","uid",-1447769400),user.uid,new cljs.core.Keyword(null,"display-name","display-name",694513143),user.displayName,new cljs.core.Keyword(null,"photo-url","photo-url",-1816449182),user.photoURL,new cljs.core.Keyword(null,"email","email",1415816706),user.email,new cljs.core.Keyword(null,"user-obj","user-obj",-1257396190),user], null);
} else {
return null;
}
});
app.domain.firebase.observe_auth_state = (function app$domain$firebase$observe_auth_state(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","set-loading-user-from-cache","app.domain.firebase/set-loading-user-from-cache",-1897326156),true], null));

return module$node_modules$firebase$dist$index_cjs.auth().onAuthStateChanged((function (user){
if(cljs.core.truth_(user)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","user-logged-in","app.domain.firebase/user-logged-in",471397198),app.domain.firebase.firebase_user__GT_user(user)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","user-logged-out","app.domain.firebase/user-logged-out",-815170611)], null));
}
}));
});
app.domain.firebase.init = (function app$domain$firebase$init(config){
if((module$node_modules$firebase$dist$index_cjs.apps.length === (0))){
module$node_modules$firebase$dist$index_cjs.initializeApp(cljs.core.clj__GT_js(config));

return app.domain.firebase.observe_auth_state();
} else {
return null;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","login-with-email","app.domain.firebase/login-with-email",1877114448),(function (cofx,p__40902){
var vec__40903 = p__40902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40903,(0),null);
var form_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40903,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword("app.domain.firebase","login-loading?","app.domain.firebase/login-loading?",472566375),true),new cljs.core.Keyword("firebase","email-auth","firebase/email-auth",-556750587),form_state], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","email-auth-error","app.domain.firebase/email-auth-error",1687190080),(function (db,p__40906){
var vec__40907 = p__40906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40907,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40907,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("app.domain.firebase","login-error","app.domain.firebase/login-error",-500825875),err.message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.domain.firebase","login-loading?","app.domain.firebase/login-loading?",472566375),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","user-logged-in","app.domain.firebase/user-logged-in",471397198),(function (db,p__40910){
var vec__40911 = p__40910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40911,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40911,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144),user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.domain.firebase","login-loading?","app.domain.firebase/login-loading?",472566375),false,new cljs.core.Keyword("app.domain.firebase","loading-user-from-cache?","app.domain.firebase/loading-user-from-cache?",-425404226),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","logout","app.domain.firebase/logout",58964261),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("firebase","logout","firebase/logout",-168204024),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","user-logged-out","app.domain.firebase/user-logged-out",-815170611),(function (db,p__40914){
var vec__40915 = p__40914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40915,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40915,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.domain.firebase","loading-loading?","app.domain.firebase/loading-loading?",1450578055),false,new cljs.core.Keyword("app.domain.firebase","loading-user-from-cache?","app.domain.firebase/loading-user-from-cache?",-425404226),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","set-loading-user-from-cache","app.domain.firebase/set-loading-user-from-cache",-1897326156),(function (db,p__40918){
var vec__40919 = p__40918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40919,(0),null);
var loading_user_from_cache_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40919,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("app.domain.firebase","loading-user-from-cache?","app.domain.firebase/loading-user-from-cache?",-425404226),loading_user_from_cache_QMARK_);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","create-graphic","app.domain.firebase/create-graphic",-1916429301),(function (p__40922,_){
var map__40923 = p__40922;
var map__40923__$1 = (((((!((map__40923 == null))))?(((((map__40923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40923):map__40923);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40923__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("app.domain.firebase","creating-graphic?","app.domain.firebase/creating-graphic?",966393468),true),new cljs.core.Keyword("firebase","add-to-list","firebase/add-to-list",-815371179),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),["/graphics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144).cljs$core$IFn$_invoke$arity$1(db)))].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),Date(),new cljs.core.Keyword(null,"name","name",1843675177),"Untitled"], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","create-graphic-success","app.domain.firebase/create-graphic-success",-1030466376)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","create-graphic-error","app.domain.firebase/create-graphic-error",-2107594934)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","create-graphic-success","app.domain.firebase/create-graphic-success",-1030466376),(function (p__40925,p__40926){
var map__40927 = p__40925;
var map__40927__$1 = (((((!((map__40927 == null))))?(((((map__40927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40927):map__40927);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40927__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40928 = p__40926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40928,(0),null);
var new_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40928,(1),null);
console.log(new_entry);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("app.domain.firebase","creating-graphic?","app.domain.firebase/creating-graphic?",966393468),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.domain.firebase","create-graphic-error","app.domain.firebase/create-graphic-error",-2107594934)], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","fetch-graphics","app.domain.firebase/fetch-graphics",1276651146)], null)], null);
}));
app.domain.firebase.create_graphic_error_handler = (function app$domain$firebase$create_graphic_error_handler(db,p__40932){
var vec__40933 = p__40932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40933,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40933,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("app.domain.firebase","creating-graphic?","app.domain.firebase/creating-graphic?",966393468)),new cljs.core.Keyword("app.domain.firebase","create-graphic-error","app.domain.firebase/create-graphic-error",-2107594934),error);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","create-graphic-error","app.domain.firebase/create-graphic-error",-2107594934),app.domain.firebase.create_graphic_error_handler);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","fetch-graphics","app.domain.firebase/fetch-graphics",1276651146),(function (p__40936,_){
var map__40937 = p__40936;
var map__40937__$1 = (((((!((map__40937 == null))))?(((((map__40937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40937):map__40937);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("app.domain.firebase","fetching-graphics?","app.domain.firebase/fetching-graphics?",2039584326),true),new cljs.core.Keyword("firebase","read","firebase/read",-498614194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),["/graphics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144).cljs$core$IFn$_invoke$arity$1(db)))].join(''),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","fetch-graphics-success","app.domain.firebase/fetch-graphics-success",-89253071)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","fetch-graphics-success","app.domain.firebase/fetch-graphics-success",-89253071),(function (db,p__40939){
var vec__40940 = p__40939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40940,(0),null);
var graphics = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40940,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("app.domain.firebase","fetching-graphics?","app.domain.firebase/fetching-graphics?",2039584326)),new cljs.core.Keyword("app.domain.firebase","graphics","app.domain.firebase/graphics",-718281775),graphics);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","delete-graphic","app.domain.firebase/delete-graphic",-355469771),(function (p__40943,p__40944){
var map__40945 = p__40943;
var map__40945__$1 = (((((!((map__40945 == null))))?(((((map__40945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40945):map__40945);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40945__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40946 = p__40944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40946,(0),null);
var graphic_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40946,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword("app.domain.firebase","deleting-graphic-ids","app.domain.firebase/deleting-graphic-ids",-154389786),cljs.core.conj,graphic_id),new cljs.core.Keyword("firebase","delete","firebase/delete",2013314291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),["/graphics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144).cljs$core$IFn$_invoke$arity$1(db))),"/",cljs.core.name(graphic_id)].join(''),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","delete-graphic-success","app.domain.firebase/delete-graphic-success",940353360),graphic_id], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","delete-graphic-success","app.domain.firebase/delete-graphic-success",940353360),(function (db,p__40951){
var vec__40952 = p__40951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40952,(0),null);
var graphic_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40952,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("app.domain.firebase","deleting-graphic-ids","app.domain.firebase/deleting-graphic-ids",-154389786),(function (p1__40950_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([graphic_id]),p1__40950_SHARP_);
})),new cljs.core.Keyword("app.domain.firebase","graphics","app.domain.firebase/graphics",-718281775),cljs.core.dissoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(graphic_id));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","update-graphic","app.domain.firebase/update-graphic",953901622),(function (p__40955,p__40956){
var map__40957 = p__40955;
var map__40957__$1 = (((((!((map__40957 == null))))?(((((map__40957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40957):map__40957);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40957__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40958 = p__40956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40958,(0),null);
var graphic_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40958,(1),null);
var new_graphic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40958,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("app.domain.firebase","updating-graphic?","app.domain.firebase/updating-graphic?",354872658),true),new cljs.core.Keyword("firebase","update","firebase/update",1623611603),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),["/graphics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144).cljs$core$IFn$_invoke$arity$1(db))),"/",cljs.core.name(graphic_id)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new_graphic,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","update-graphic-success","app.domain.firebase/update-graphic-success",2132694529),graphic_id,new_graphic], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","update-graphic-error","app.domain.firebase/update-graphic-error",1572335594)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","update-graphic-success","app.domain.firebase/update-graphic-success",2132694529),(function (db,p__40962){
var vec__40963 = p__40962;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40963,(0),null);
var graphic_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40963,(1),null);
var new_graphic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40963,(2),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","graphics","app.domain.firebase/graphics",-718281775),graphic_id,new cljs.core.Keyword(null,"fabric-json","fabric-json",-168417818)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fabric-json","fabric-json",-168417818).cljs$core$IFn$_invoke$arity$1(new_graphic))),new cljs.core.Keyword("app.domain.firebase","updating-graphic?","app.domain.firebase/updating-graphic?",354872658));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.domain.firebase","update-graphic-error","app.domain.firebase/update-graphic-error",1572335594),(function (db,p__40966){
var vec__40967 = p__40966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40967,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40967,(1),null);
console.log(err);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("app.domain.firebase","updating-graphic?","app.domain.firebase/updating-graphic?",354872658));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","email-auth","firebase/email-auth",-556750587),(function (p__40970){
var map__40971 = p__40970;
var map__40971__$1 = (((((!((map__40971 == null))))?(((((map__40971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40971):map__40971);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40971__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40971__$1,new cljs.core.Keyword(null,"password","password",417022471));
return module$node_modules$firebase$dist$index_cjs.auth().signInWithEmailAndPassword(email,password).catch((function (err){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","email-auth-error","app.domain.firebase/email-auth-error",1687190080),err], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","logout","firebase/logout",-168204024),(function (_){
return module$node_modules$firebase$dist$index_cjs.auth().signOut();
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","add-to-list","firebase/add-to-list",-815371179),(function (p__40973){
var map__40974 = p__40973;
var map__40974__$1 = (((((!((map__40974 == null))))?(((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40974):map__40974);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"node","node",581201198));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var ref = module$node_modules$firebase$dist$index_cjs.database().ref(node);
var new_entry = ref.push();
return new_entry.set(cljs.core.clj__GT_js(data)).then((function (){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,new_entry));
})).catch((function (error){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","read","firebase/read",-498614194),(function (p__40976){
var map__40977 = p__40976;
var map__40977__$1 = (((((!((map__40977 == null))))?(((((map__40977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40977):map__40977);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40977__$1,new cljs.core.Keyword(null,"node","node",581201198));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40977__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40977__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return module$node_modules$firebase$dist$index_cjs.database().ref(node).once("value").then((function (snapshot){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(snapshot.val(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
})).catch((function (error){
if(cljs.core.truth_(on_error)){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,error));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","delete","firebase/delete",2013314291),(function (p__40979){
var map__40980 = p__40979;
var map__40980__$1 = (((((!((map__40980 == null))))?(((((map__40980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40980):map__40980);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40980__$1,new cljs.core.Keyword(null,"node","node",581201198));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40980__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40980__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return module$node_modules$firebase$dist$index_cjs.database().ref(node).remove().then((function (){
if(cljs.core.truth_(on_success)){
return re_frame.core.dispatch(on_success);
} else {
return null;
}
})).catch((function (){
if(cljs.core.truth_(on_error)){
return re_frame.core.dispatch(on_error);
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","update","firebase/update",1623611603),(function (p__40983){
var map__40984 = p__40983;
var map__40984__$1 = (((((!((map__40984 == null))))?(((((map__40984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40984):map__40984);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"node","node",581201198));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return module$node_modules$firebase$dist$index_cjs.database().ref(node).update(cljs.core.clj__GT_js(data)).then((function (){
if(cljs.core.truth_(on_success)){
return re_frame.core.dispatch(on_success);
} else {
return null;
}
})).catch((function (p1__40982_SHARP_){
if(cljs.core.truth_(on_error)){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,p1__40982_SHARP_));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("firebase","effect-to-test","firebase/effect-to-test",-813384152),(function (p__40986){
var map__40987 = p__40986;
var map__40987__$1 = (((((!((map__40987 == null))))?(((((map__40987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40987):map__40987);
var throw_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40987__$1,new cljs.core.Keyword(null,"throw-error?","throw-error?",-2057013502));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40987__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40987__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return re_frame.core.dispatch((cljs.core.truth_(throw_error_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,new cljs.core.Keyword(null,"error-res","error-res",906186482)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,new cljs.core.Keyword(null,"success-res","success-res",-1998532274))));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","me","app.domain.firebase/me",1251772167),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("app.domain.firebase","user","app.domain.firebase/user",1817799144).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","login-loading?","app.domain.firebase/login-loading?",472566375),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("app.domain.firebase","login-loading?","app.domain.firebase/login-loading?",472566375).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","login-error","app.domain.firebase/login-error",-500825875),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__40989_SHARP_){
return new cljs.core.Keyword("app.domain.firebase","login-error","app.domain.firebase/login-error",-500825875).cljs$core$IFn$_invoke$arity$1(p1__40989_SHARP_);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","loading-user-from-cache?","app.domain.firebase/loading-user-from-cache?",-425404226),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__40990_SHARP_){
return new cljs.core.Keyword("app.domain.firebase","loading-user-from-cache?","app.domain.firebase/loading-user-from-cache?",-425404226).cljs$core$IFn$_invoke$arity$1(p1__40990_SHARP_);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","creating-graphic?","app.domain.firebase/creating-graphic?",966393468),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__40991_SHARP_){
return new cljs.core.Keyword("app.domain.firebase","creating-graphic?","app.domain.firebase/creating-graphic?",966393468).cljs$core$IFn$_invoke$arity$1(p1__40991_SHARP_);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","graphics","app.domain.firebase/graphics",-718281775),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__40992_SHARP_){
return cljs.core.select_keys(p1__40992_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","fetching-graphics?","app.domain.firebase/fetching-graphics?",2039584326),new cljs.core.Keyword("app.domain.firebase","graphics","app.domain.firebase/graphics",-718281775)], null));
})], 0));
/**
 * true if coll contains elm
 */
app.domain.firebase.in_QMARK_ = (function app$domain$firebase$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__40993_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__40993_SHARP_);
}),coll);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","deleting-graphic-id?","app.domain.firebase/deleting-graphic-id?",-2103593004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__40994){
var vec__40995 = p__40994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40995,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40995,(1),null);
return app.domain.firebase.in_QMARK_(new cljs.core.Keyword("app.domain.firebase","deleting-graphic-ids","app.domain.firebase/deleting-graphic-ids",-154389786).cljs$core$IFn$_invoke$arity$1(db),id);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","graphic-by-id","app.domain.firebase/graphic-by-id",446648728),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__40998){
var vec__40999 = p__40998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.domain.firebase","graphics","app.domain.firebase/graphics",-718281775),id], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.domain.firebase","updating-graphic?","app.domain.firebase/updating-graphic?",354872658),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__41002_SHARP_){
return new cljs.core.Keyword("app.domain.firebase","updating-graphic?","app.domain.firebase/updating-graphic?",354872658).cljs$core$IFn$_invoke$arity$1(p1__41002_SHARP_);
})], 0));

//# sourceMappingURL=app.domain.firebase.js.map
