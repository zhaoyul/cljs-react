goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30709 = arguments.length;
switch (G__30709) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30710 = (function (f,blockable,meta30711){
this.f = f;
this.blockable = blockable;
this.meta30711 = meta30711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30712,meta30711__$1){
var self__ = this;
var _30712__$1 = this;
return (new cljs.core.async.t_cljs$core$async30710(self__.f,self__.blockable,meta30711__$1));
}));

(cljs.core.async.t_cljs$core$async30710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30712){
var self__ = this;
var _30712__$1 = this;
return self__.meta30711;
}));

(cljs.core.async.t_cljs$core$async30710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30711","meta30711",-1248099028,null)], null);
}));

(cljs.core.async.t_cljs$core$async30710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30710");

(cljs.core.async.t_cljs$core$async30710.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30710.
 */
cljs.core.async.__GT_t_cljs$core$async30710 = (function cljs$core$async$__GT_t_cljs$core$async30710(f__$1,blockable__$1,meta30711){
return (new cljs.core.async.t_cljs$core$async30710(f__$1,blockable__$1,meta30711));
});

}

return (new cljs.core.async.t_cljs$core$async30710(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30728 = arguments.length;
switch (G__30728) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30730 = arguments.length;
switch (G__30730) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30732 = arguments.length;
switch (G__30732) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32594 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32594) : fn1.call(null,val_32594));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32594) : fn1.call(null,val_32594));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30734 = arguments.length;
switch (G__30734) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32599 = n;
var x_32601 = (0);
while(true){
if((x_32601 < n__4613__auto___32599)){
(a[x_32601] = x_32601);

var G__32610 = (x_32601 + (1));
x_32601 = G__32610;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30743 = (function (flag,meta30744){
this.flag = flag;
this.meta30744 = meta30744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30745,meta30744__$1){
var self__ = this;
var _30745__$1 = this;
return (new cljs.core.async.t_cljs$core$async30743(self__.flag,meta30744__$1));
}));

(cljs.core.async.t_cljs$core$async30743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30745){
var self__ = this;
var _30745__$1 = this;
return self__.meta30744;
}));

(cljs.core.async.t_cljs$core$async30743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30744","meta30744",-77387133,null)], null);
}));

(cljs.core.async.t_cljs$core$async30743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30743");

(cljs.core.async.t_cljs$core$async30743.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30743.
 */
cljs.core.async.__GT_t_cljs$core$async30743 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30743(flag__$1,meta30744){
return (new cljs.core.async.t_cljs$core$async30743(flag__$1,meta30744));
});

}

return (new cljs.core.async.t_cljs$core$async30743(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30762 = (function (flag,cb,meta30763){
this.flag = flag;
this.cb = cb;
this.meta30763 = meta30763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30764,meta30763__$1){
var self__ = this;
var _30764__$1 = this;
return (new cljs.core.async.t_cljs$core$async30762(self__.flag,self__.cb,meta30763__$1));
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30764){
var self__ = this;
var _30764__$1 = this;
return self__.meta30763;
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30763","meta30763",-711383455,null)], null);
}));

(cljs.core.async.t_cljs$core$async30762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30762");

(cljs.core.async.t_cljs$core$async30762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30762.
 */
cljs.core.async.__GT_t_cljs$core$async30762 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30762(flag__$1,cb__$1,meta30763){
return (new cljs.core.async.t_cljs$core$async30762(flag__$1,cb__$1,meta30763));
});

}

return (new cljs.core.async.t_cljs$core$async30762(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30785_SHARP_){
var G__30788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30788) : fret.call(null,G__30788));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30786_SHARP_){
var G__30789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30789) : fret.call(null,G__30789));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32617 = (i + (1));
i = G__32617;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32622 = arguments.length;
var i__4737__auto___32623 = (0);
while(true){
if((i__4737__auto___32623 < len__4736__auto___32622)){
args__4742__auto__.push((arguments[i__4737__auto___32623]));

var G__32625 = (i__4737__auto___32623 + (1));
i__4737__auto___32623 = G__32625;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30830){
var map__30831 = p__30830;
var map__30831__$1 = (((((!((map__30831 == null))))?(((((map__30831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30831):map__30831);
var opts = map__30831__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30824){
var G__30825 = cljs.core.first(seq30824);
var seq30824__$1 = cljs.core.next(seq30824);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30825,seq30824__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30849 = arguments.length;
switch (G__30849) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30617__auto___32637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_30968){
var state_val_30971 = (state_30968[(1)]);
if((state_val_30971 === (7))){
var inst_30957 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
var statearr_31001_32638 = state_30968__$1;
(statearr_31001_32638[(2)] = inst_30957);

(statearr_31001_32638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (1))){
var state_30968__$1 = state_30968;
var statearr_31003_32639 = state_30968__$1;
(statearr_31003_32639[(2)] = null);

(statearr_31003_32639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (4))){
var inst_30911 = (state_30968[(7)]);
var inst_30911__$1 = (state_30968[(2)]);
var inst_30930 = (inst_30911__$1 == null);
var state_30968__$1 = (function (){var statearr_31006 = state_30968;
(statearr_31006[(7)] = inst_30911__$1);

return statearr_31006;
})();
if(cljs.core.truth_(inst_30930)){
var statearr_31007_32640 = state_30968__$1;
(statearr_31007_32640[(1)] = (5));

} else {
var statearr_31008_32641 = state_30968__$1;
(statearr_31008_32641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (13))){
var state_30968__$1 = state_30968;
var statearr_31012_32642 = state_30968__$1;
(statearr_31012_32642[(2)] = null);

(statearr_31012_32642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (6))){
var inst_30911 = (state_30968[(7)]);
var state_30968__$1 = state_30968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30968__$1,(11),to,inst_30911);
} else {
if((state_val_30971 === (3))){
var inst_30959 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30968__$1,inst_30959);
} else {
if((state_val_30971 === (12))){
var state_30968__$1 = state_30968;
var statearr_31022_32644 = state_30968__$1;
(statearr_31022_32644[(2)] = null);

(statearr_31022_32644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (2))){
var state_30968__$1 = state_30968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30968__$1,(4),from);
} else {
if((state_val_30971 === (11))){
var inst_30946 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
if(cljs.core.truth_(inst_30946)){
var statearr_31029_32646 = state_30968__$1;
(statearr_31029_32646[(1)] = (12));

} else {
var statearr_31031_32647 = state_30968__$1;
(statearr_31031_32647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (9))){
var state_30968__$1 = state_30968;
var statearr_31034_32648 = state_30968__$1;
(statearr_31034_32648[(2)] = null);

(statearr_31034_32648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (5))){
var state_30968__$1 = state_30968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31035_32649 = state_30968__$1;
(statearr_31035_32649[(1)] = (8));

} else {
var statearr_31040_32650 = state_30968__$1;
(statearr_31040_32650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (14))){
var inst_30955 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
var statearr_31041_32651 = state_30968__$1;
(statearr_31041_32651[(2)] = inst_30955);

(statearr_31041_32651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (10))){
var inst_30942 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
var statearr_31044_32652 = state_30968__$1;
(statearr_31044_32652[(2)] = inst_30942);

(statearr_31044_32652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (8))){
var inst_30937 = cljs.core.async.close_BANG_(to);
var state_30968__$1 = state_30968;
var statearr_31045_32666 = state_30968__$1;
(statearr_31045_32666[(2)] = inst_30937);

(statearr_31045_32666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_31047 = [null,null,null,null,null,null,null,null];
(statearr_31047[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_31047[(1)] = (1));

return statearr_31047;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_30968){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_30968);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31048){var ex__30370__auto__ = e31048;
var statearr_31049_32670 = state_30968;
(statearr_31049_32670[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_30968[(4)]))){
var statearr_31050_32671 = state_30968;
(statearr_31050_32671[(1)] = cljs.core.first((state_30968[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32672 = state_30968;
state_30968 = G__32672;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_30968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_30968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31053 = f__30618__auto__();
(statearr_31053[(6)] = c__30617__auto___32637);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31079){
var vec__31080 = p__31079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31080,(1),null);
var job = vec__31080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30617__auto___32680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31087){
var state_val_31088 = (state_31087[(1)]);
if((state_val_31088 === (1))){
var state_31087__$1 = state_31087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31087__$1,(2),res,v);
} else {
if((state_val_31088 === (2))){
var inst_31084 = (state_31087[(2)]);
var inst_31085 = cljs.core.async.close_BANG_(res);
var state_31087__$1 = (function (){var statearr_31090 = state_31087;
(statearr_31090[(7)] = inst_31084);

return statearr_31090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31087__$1,inst_31085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0 = (function (){
var statearr_31091 = [null,null,null,null,null,null,null,null];
(statearr_31091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__);

(statearr_31091[(1)] = (1));

return statearr_31091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1 = (function (state_31087){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31087);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31092){var ex__30370__auto__ = e31092;
var statearr_31093_32687 = state_31087;
(statearr_31093_32687[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31087[(4)]))){
var statearr_31094_32688 = state_31087;
(statearr_31094_32688[(1)] = cljs.core.first((state_31087[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32694 = state_31087;
state_31087 = G__32694;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = function(state_31087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1.call(this,state_31087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31095 = f__30618__auto__();
(statearr_31095[(6)] = c__30617__auto___32680);

return statearr_31095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31096){
var vec__31097 = p__31096;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(1),null);
var job = vec__31097;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32696 = n;
var __32697 = (0);
while(true){
if((__32697 < n__4613__auto___32696)){
var G__31100_32698 = type;
var G__31100_32699__$1 = (((G__31100_32698 instanceof cljs.core.Keyword))?G__31100_32698.fqn:null);
switch (G__31100_32699__$1) {
case "compute":
var c__30617__auto___32701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32697,c__30617__auto___32701,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async){
return (function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = ((function (__32697,c__30617__auto___32701,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (1))){
var state_31115__$1 = state_31115;
var statearr_31118_32702 = state_31115__$1;
(statearr_31118_32702[(2)] = null);

(statearr_31118_32702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (2))){
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31115__$1,(4),jobs);
} else {
if((state_val_31116 === (3))){
var inst_31112 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31115__$1,inst_31112);
} else {
if((state_val_31116 === (4))){
var inst_31104 = (state_31115[(2)]);
var inst_31105 = process(inst_31104);
var state_31115__$1 = state_31115;
if(cljs.core.truth_(inst_31105)){
var statearr_31136_32704 = state_31115__$1;
(statearr_31136_32704[(1)] = (5));

} else {
var statearr_31137_32705 = state_31115__$1;
(statearr_31137_32705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (5))){
var state_31115__$1 = state_31115;
var statearr_31138_32706 = state_31115__$1;
(statearr_31138_32706[(2)] = null);

(statearr_31138_32706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var state_31115__$1 = state_31115;
var statearr_31139_32707 = state_31115__$1;
(statearr_31139_32707[(2)] = null);

(statearr_31139_32707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (7))){
var inst_31110 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31141_32708 = state_31115__$1;
(statearr_31141_32708[(2)] = inst_31110);

(statearr_31141_32708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32697,c__30617__auto___32701,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async))
;
return ((function (__32697,switch__30366__auto__,c__30617__auto___32701,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0 = (function (){
var statearr_31142 = [null,null,null,null,null,null,null];
(statearr_31142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__);

(statearr_31142[(1)] = (1));

return statearr_31142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1 = (function (state_31115){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31115);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31143){var ex__30370__auto__ = e31143;
var statearr_31144_32709 = state_31115;
(statearr_31144_32709[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31115[(4)]))){
var statearr_31145_32720 = state_31115;
(statearr_31145_32720[(1)] = cljs.core.first((state_31115[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32721 = state_31115;
state_31115 = G__32721;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__;
})()
;})(__32697,switch__30366__auto__,c__30617__auto___32701,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async))
})();
var state__30619__auto__ = (function (){var statearr_31146 = f__30618__auto__();
(statearr_31146[(6)] = c__30617__auto___32701);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
});})(__32697,c__30617__auto___32701,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async))
);


break;
case "async":
var c__30617__auto___32722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32697,c__30617__auto___32722,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async){
return (function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = ((function (__32697,c__30617__auto___32722,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async){
return (function (state_31159){
var state_val_31160 = (state_31159[(1)]);
if((state_val_31160 === (1))){
var state_31159__$1 = state_31159;
var statearr_31165_32723 = state_31159__$1;
(statearr_31165_32723[(2)] = null);

(statearr_31165_32723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (2))){
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31159__$1,(4),jobs);
} else {
if((state_val_31160 === (3))){
var inst_31157 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31159__$1,inst_31157);
} else {
if((state_val_31160 === (4))){
var inst_31149 = (state_31159[(2)]);
var inst_31150 = async(inst_31149);
var state_31159__$1 = state_31159;
if(cljs.core.truth_(inst_31150)){
var statearr_31166_32725 = state_31159__$1;
(statearr_31166_32725[(1)] = (5));

} else {
var statearr_31167_32726 = state_31159__$1;
(statearr_31167_32726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (5))){
var state_31159__$1 = state_31159;
var statearr_31169_32730 = state_31159__$1;
(statearr_31169_32730[(2)] = null);

(statearr_31169_32730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (6))){
var state_31159__$1 = state_31159;
var statearr_31170_32731 = state_31159__$1;
(statearr_31170_32731[(2)] = null);

(statearr_31170_32731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (7))){
var inst_31155 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31171_32734 = state_31159__$1;
(statearr_31171_32734[(2)] = inst_31155);

(statearr_31171_32734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32697,c__30617__auto___32722,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async))
;
return ((function (__32697,switch__30366__auto__,c__30617__auto___32722,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0 = (function (){
var statearr_31172 = [null,null,null,null,null,null,null];
(statearr_31172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__);

(statearr_31172[(1)] = (1));

return statearr_31172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1 = (function (state_31159){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31159);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31173){var ex__30370__auto__ = e31173;
var statearr_31174_32737 = state_31159;
(statearr_31174_32737[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31159[(4)]))){
var statearr_31175_32738 = state_31159;
(statearr_31175_32738[(1)] = cljs.core.first((state_31159[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32752 = state_31159;
state_31159 = G__32752;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = function(state_31159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1.call(this,state_31159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__;
})()
;})(__32697,switch__30366__auto__,c__30617__auto___32722,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async))
})();
var state__30619__auto__ = (function (){var statearr_31176 = f__30618__auto__();
(statearr_31176[(6)] = c__30617__auto___32722);

return statearr_31176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
});})(__32697,c__30617__auto___32722,G__31100_32698,G__31100_32699__$1,n__4613__auto___32696,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31100_32699__$1)].join('')));

}

var G__32759 = (__32697 + (1));
__32697 = G__32759;
continue;
} else {
}
break;
}

var c__30617__auto___32760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31198){
var state_val_31199 = (state_31198[(1)]);
if((state_val_31199 === (7))){
var inst_31194 = (state_31198[(2)]);
var state_31198__$1 = state_31198;
var statearr_31200_32761 = state_31198__$1;
(statearr_31200_32761[(2)] = inst_31194);

(statearr_31200_32761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31199 === (1))){
var state_31198__$1 = state_31198;
var statearr_31201_32762 = state_31198__$1;
(statearr_31201_32762[(2)] = null);

(statearr_31201_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31199 === (4))){
var inst_31179 = (state_31198[(7)]);
var inst_31179__$1 = (state_31198[(2)]);
var inst_31180 = (inst_31179__$1 == null);
var state_31198__$1 = (function (){var statearr_31202 = state_31198;
(statearr_31202[(7)] = inst_31179__$1);

return statearr_31202;
})();
if(cljs.core.truth_(inst_31180)){
var statearr_31203_32763 = state_31198__$1;
(statearr_31203_32763[(1)] = (5));

} else {
var statearr_31204_32764 = state_31198__$1;
(statearr_31204_32764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31199 === (6))){
var inst_31184 = (state_31198[(8)]);
var inst_31179 = (state_31198[(7)]);
var inst_31184__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31186 = [inst_31179,inst_31184__$1];
var inst_31187 = (new cljs.core.PersistentVector(null,2,(5),inst_31185,inst_31186,null));
var state_31198__$1 = (function (){var statearr_31205 = state_31198;
(statearr_31205[(8)] = inst_31184__$1);

return statearr_31205;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31198__$1,(8),jobs,inst_31187);
} else {
if((state_val_31199 === (3))){
var inst_31196 = (state_31198[(2)]);
var state_31198__$1 = state_31198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31198__$1,inst_31196);
} else {
if((state_val_31199 === (2))){
var state_31198__$1 = state_31198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31198__$1,(4),from);
} else {
if((state_val_31199 === (9))){
var inst_31191 = (state_31198[(2)]);
var state_31198__$1 = (function (){var statearr_31206 = state_31198;
(statearr_31206[(9)] = inst_31191);

return statearr_31206;
})();
var statearr_31207_32771 = state_31198__$1;
(statearr_31207_32771[(2)] = null);

(statearr_31207_32771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31199 === (5))){
var inst_31182 = cljs.core.async.close_BANG_(jobs);
var state_31198__$1 = state_31198;
var statearr_31208_32778 = state_31198__$1;
(statearr_31208_32778[(2)] = inst_31182);

(statearr_31208_32778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31199 === (8))){
var inst_31184 = (state_31198[(8)]);
var inst_31189 = (state_31198[(2)]);
var state_31198__$1 = (function (){var statearr_31209 = state_31198;
(statearr_31209[(10)] = inst_31189);

return statearr_31209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31198__$1,(9),results,inst_31184);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0 = (function (){
var statearr_31210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__);

(statearr_31210[(1)] = (1));

return statearr_31210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1 = (function (state_31198){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31198);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31211){var ex__30370__auto__ = e31211;
var statearr_31212_32780 = state_31198;
(statearr_31212_32780[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31198[(4)]))){
var statearr_31213_32781 = state_31198;
(statearr_31213_32781[(1)] = cljs.core.first((state_31198[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32786 = state_31198;
state_31198 = G__32786;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = function(state_31198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1.call(this,state_31198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31214 = f__30618__auto__();
(statearr_31214[(6)] = c__30617__auto___32760);

return statearr_31214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


var c__30617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31252){
var state_val_31253 = (state_31252[(1)]);
if((state_val_31253 === (7))){
var inst_31248 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31254_32787 = state_31252__$1;
(statearr_31254_32787[(2)] = inst_31248);

(statearr_31254_32787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (20))){
var state_31252__$1 = state_31252;
var statearr_31255_32788 = state_31252__$1;
(statearr_31255_32788[(2)] = null);

(statearr_31255_32788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (1))){
var state_31252__$1 = state_31252;
var statearr_31256_32789 = state_31252__$1;
(statearr_31256_32789[(2)] = null);

(statearr_31256_32789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (4))){
var inst_31217 = (state_31252[(7)]);
var inst_31217__$1 = (state_31252[(2)]);
var inst_31218 = (inst_31217__$1 == null);
var state_31252__$1 = (function (){var statearr_31257 = state_31252;
(statearr_31257[(7)] = inst_31217__$1);

return statearr_31257;
})();
if(cljs.core.truth_(inst_31218)){
var statearr_31258_32790 = state_31252__$1;
(statearr_31258_32790[(1)] = (5));

} else {
var statearr_31259_32791 = state_31252__$1;
(statearr_31259_32791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (15))){
var inst_31230 = (state_31252[(8)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31252__$1,(18),to,inst_31230);
} else {
if((state_val_31253 === (21))){
var inst_31243 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31260_32792 = state_31252__$1;
(statearr_31260_32792[(2)] = inst_31243);

(statearr_31260_32792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (13))){
var inst_31245 = (state_31252[(2)]);
var state_31252__$1 = (function (){var statearr_31261 = state_31252;
(statearr_31261[(9)] = inst_31245);

return statearr_31261;
})();
var statearr_31262_32797 = state_31252__$1;
(statearr_31262_32797[(2)] = null);

(statearr_31262_32797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (6))){
var inst_31217 = (state_31252[(7)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31252__$1,(11),inst_31217);
} else {
if((state_val_31253 === (17))){
var inst_31238 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
if(cljs.core.truth_(inst_31238)){
var statearr_31263_32798 = state_31252__$1;
(statearr_31263_32798[(1)] = (19));

} else {
var statearr_31264_32799 = state_31252__$1;
(statearr_31264_32799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (3))){
var inst_31250 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31252__$1,inst_31250);
} else {
if((state_val_31253 === (12))){
var inst_31227 = (state_31252[(10)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31252__$1,(14),inst_31227);
} else {
if((state_val_31253 === (2))){
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31252__$1,(4),results);
} else {
if((state_val_31253 === (19))){
var state_31252__$1 = state_31252;
var statearr_31265_32800 = state_31252__$1;
(statearr_31265_32800[(2)] = null);

(statearr_31265_32800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (11))){
var inst_31227 = (state_31252[(2)]);
var state_31252__$1 = (function (){var statearr_31266 = state_31252;
(statearr_31266[(10)] = inst_31227);

return statearr_31266;
})();
var statearr_31267_32801 = state_31252__$1;
(statearr_31267_32801[(2)] = null);

(statearr_31267_32801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (9))){
var state_31252__$1 = state_31252;
var statearr_31268_32802 = state_31252__$1;
(statearr_31268_32802[(2)] = null);

(statearr_31268_32802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (5))){
var state_31252__$1 = state_31252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31269_32803 = state_31252__$1;
(statearr_31269_32803[(1)] = (8));

} else {
var statearr_31270_32804 = state_31252__$1;
(statearr_31270_32804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (14))){
var inst_31230 = (state_31252[(8)]);
var inst_31230__$1 = (state_31252[(2)]);
var inst_31231 = (inst_31230__$1 == null);
var inst_31232 = cljs.core.not(inst_31231);
var state_31252__$1 = (function (){var statearr_31271 = state_31252;
(statearr_31271[(8)] = inst_31230__$1);

return statearr_31271;
})();
if(inst_31232){
var statearr_31272_32805 = state_31252__$1;
(statearr_31272_32805[(1)] = (15));

} else {
var statearr_31273_32806 = state_31252__$1;
(statearr_31273_32806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (16))){
var state_31252__$1 = state_31252;
var statearr_31274_32807 = state_31252__$1;
(statearr_31274_32807[(2)] = false);

(statearr_31274_32807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (10))){
var inst_31224 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31275_32808 = state_31252__$1;
(statearr_31275_32808[(2)] = inst_31224);

(statearr_31275_32808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (18))){
var inst_31235 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31276_32809 = state_31252__$1;
(statearr_31276_32809[(2)] = inst_31235);

(statearr_31276_32809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (8))){
var inst_31221 = cljs.core.async.close_BANG_(to);
var state_31252__$1 = state_31252;
var statearr_31277_32810 = state_31252__$1;
(statearr_31277_32810[(2)] = inst_31221);

(statearr_31277_32810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0 = (function (){
var statearr_31278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__);

(statearr_31278[(1)] = (1));

return statearr_31278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1 = (function (state_31252){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31252);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31279){var ex__30370__auto__ = e31279;
var statearr_31280_32811 = state_31252;
(statearr_31280_32811[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31252[(4)]))){
var statearr_31281_32812 = state_31252;
(statearr_31281_32812[(1)] = cljs.core.first((state_31252[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32813 = state_31252;
state_31252 = G__32813;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__ = function(state_31252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1.call(this,state_31252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31282 = f__30618__auto__();
(statearr_31282[(6)] = c__30617__auto__);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));

return c__30617__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31284 = arguments.length;
switch (G__31284) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31286 = arguments.length;
switch (G__31286) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31288 = arguments.length;
switch (G__31288) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30617__auto___32819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (7))){
var inst_31310 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31316_32820 = state_31314__$1;
(statearr_31316_32820[(2)] = inst_31310);

(statearr_31316_32820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (1))){
var state_31314__$1 = state_31314;
var statearr_31317_32821 = state_31314__$1;
(statearr_31317_32821[(2)] = null);

(statearr_31317_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (4))){
var inst_31291 = (state_31314[(7)]);
var inst_31291__$1 = (state_31314[(2)]);
var inst_31292 = (inst_31291__$1 == null);
var state_31314__$1 = (function (){var statearr_31318 = state_31314;
(statearr_31318[(7)] = inst_31291__$1);

return statearr_31318;
})();
if(cljs.core.truth_(inst_31292)){
var statearr_31319_32822 = state_31314__$1;
(statearr_31319_32822[(1)] = (5));

} else {
var statearr_31320_32823 = state_31314__$1;
(statearr_31320_32823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (13))){
var state_31314__$1 = state_31314;
var statearr_31321_32824 = state_31314__$1;
(statearr_31321_32824[(2)] = null);

(statearr_31321_32824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (6))){
var inst_31291 = (state_31314[(7)]);
var inst_31297 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31291) : p.call(null,inst_31291));
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31297)){
var statearr_31322_32825 = state_31314__$1;
(statearr_31322_32825[(1)] = (9));

} else {
var statearr_31323_32826 = state_31314__$1;
(statearr_31323_32826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (3))){
var inst_31312 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31314__$1,inst_31312);
} else {
if((state_val_31315 === (12))){
var state_31314__$1 = state_31314;
var statearr_31324_32827 = state_31314__$1;
(statearr_31324_32827[(2)] = null);

(statearr_31324_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (2))){
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31314__$1,(4),ch);
} else {
if((state_val_31315 === (11))){
var inst_31291 = (state_31314[(7)]);
var inst_31301 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31314__$1,(8),inst_31301,inst_31291);
} else {
if((state_val_31315 === (9))){
var state_31314__$1 = state_31314;
var statearr_31325_32828 = state_31314__$1;
(statearr_31325_32828[(2)] = tc);

(statearr_31325_32828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (5))){
var inst_31294 = cljs.core.async.close_BANG_(tc);
var inst_31295 = cljs.core.async.close_BANG_(fc);
var state_31314__$1 = (function (){var statearr_31326 = state_31314;
(statearr_31326[(8)] = inst_31294);

return statearr_31326;
})();
var statearr_31327_32829 = state_31314__$1;
(statearr_31327_32829[(2)] = inst_31295);

(statearr_31327_32829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (14))){
var inst_31308 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31328_32830 = state_31314__$1;
(statearr_31328_32830[(2)] = inst_31308);

(statearr_31328_32830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (10))){
var state_31314__$1 = state_31314;
var statearr_31329_32836 = state_31314__$1;
(statearr_31329_32836[(2)] = fc);

(statearr_31329_32836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (8))){
var inst_31303 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31303)){
var statearr_31330_32837 = state_31314__$1;
(statearr_31330_32837[(1)] = (12));

} else {
var statearr_31331_32838 = state_31314__$1;
(statearr_31331_32838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_31332 = [null,null,null,null,null,null,null,null,null];
(statearr_31332[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_31332[(1)] = (1));

return statearr_31332;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_31314){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31314);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31333){var ex__30370__auto__ = e31333;
var statearr_31334_32839 = state_31314;
(statearr_31334_32839[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31314[(4)]))){
var statearr_31335_32840 = state_31314;
(statearr_31335_32840[(1)] = cljs.core.first((state_31314[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32841 = state_31314;
state_31314 = G__32841;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31336 = f__30618__auto__();
(statearr_31336[(6)] = c__30617__auto___32819);

return statearr_31336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31358){
var state_val_31359 = (state_31358[(1)]);
if((state_val_31359 === (7))){
var inst_31354 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31360_32842 = state_31358__$1;
(statearr_31360_32842[(2)] = inst_31354);

(statearr_31360_32842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (1))){
var inst_31337 = init;
var inst_31338 = inst_31337;
var state_31358__$1 = (function (){var statearr_31361 = state_31358;
(statearr_31361[(7)] = inst_31338);

return statearr_31361;
})();
var statearr_31362_32843 = state_31358__$1;
(statearr_31362_32843[(2)] = null);

(statearr_31362_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (4))){
var inst_31341 = (state_31358[(8)]);
var inst_31341__$1 = (state_31358[(2)]);
var inst_31342 = (inst_31341__$1 == null);
var state_31358__$1 = (function (){var statearr_31363 = state_31358;
(statearr_31363[(8)] = inst_31341__$1);

return statearr_31363;
})();
if(cljs.core.truth_(inst_31342)){
var statearr_31364_32844 = state_31358__$1;
(statearr_31364_32844[(1)] = (5));

} else {
var statearr_31365_32845 = state_31358__$1;
(statearr_31365_32845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (6))){
var inst_31338 = (state_31358[(7)]);
var inst_31345 = (state_31358[(9)]);
var inst_31341 = (state_31358[(8)]);
var inst_31345__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31338,inst_31341) : f.call(null,inst_31338,inst_31341));
var inst_31346 = cljs.core.reduced_QMARK_(inst_31345__$1);
var state_31358__$1 = (function (){var statearr_31367 = state_31358;
(statearr_31367[(9)] = inst_31345__$1);

return statearr_31367;
})();
if(inst_31346){
var statearr_31368_32846 = state_31358__$1;
(statearr_31368_32846[(1)] = (8));

} else {
var statearr_31369_32847 = state_31358__$1;
(statearr_31369_32847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (3))){
var inst_31356 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31358__$1,inst_31356);
} else {
if((state_val_31359 === (2))){
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31358__$1,(4),ch);
} else {
if((state_val_31359 === (9))){
var inst_31345 = (state_31358[(9)]);
var inst_31338 = inst_31345;
var state_31358__$1 = (function (){var statearr_31370 = state_31358;
(statearr_31370[(7)] = inst_31338);

return statearr_31370;
})();
var statearr_31371_32848 = state_31358__$1;
(statearr_31371_32848[(2)] = null);

(statearr_31371_32848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (5))){
var inst_31338 = (state_31358[(7)]);
var state_31358__$1 = state_31358;
var statearr_31373_32849 = state_31358__$1;
(statearr_31373_32849[(2)] = inst_31338);

(statearr_31373_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (10))){
var inst_31352 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31374_32850 = state_31358__$1;
(statearr_31374_32850[(2)] = inst_31352);

(statearr_31374_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (8))){
var inst_31345 = (state_31358[(9)]);
var inst_31348 = cljs.core.deref(inst_31345);
var state_31358__$1 = state_31358;
var statearr_31375_32851 = state_31358__$1;
(statearr_31375_32851[(2)] = inst_31348);

(statearr_31375_32851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30367__auto____0 = (function (){
var statearr_31376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31376[(0)] = cljs$core$async$reduce_$_state_machine__30367__auto__);

(statearr_31376[(1)] = (1));

return statearr_31376;
});
var cljs$core$async$reduce_$_state_machine__30367__auto____1 = (function (state_31358){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31358);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31377){var ex__30370__auto__ = e31377;
var statearr_31378_32852 = state_31358;
(statearr_31378_32852[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31358[(4)]))){
var statearr_31379_32853 = state_31358;
(statearr_31379_32853[(1)] = cljs.core.first((state_31358[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32854 = state_31358;
state_31358 = G__32854;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30367__auto__ = function(state_31358){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30367__auto____1.call(this,state_31358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30367__auto____0;
cljs$core$async$reduce_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30367__auto____1;
return cljs$core$async$reduce_$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31380 = f__30618__auto__();
(statearr_31380[(6)] = c__30617__auto__);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));

return c__30617__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31388){
var state_val_31389 = (state_31388[(1)]);
if((state_val_31389 === (1))){
var inst_31381 = cljs.core.async.reduce(f__$1,init,ch);
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31388__$1,(2),inst_31381);
} else {
if((state_val_31389 === (2))){
var inst_31383 = (state_31388[(2)]);
var inst_31386 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31383) : f__$1.call(null,inst_31383));
var state_31388__$1 = state_31388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31388__$1,inst_31386);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30367__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30367__auto____0 = (function (){
var statearr_31394 = [null,null,null,null,null,null,null];
(statearr_31394[(0)] = cljs$core$async$transduce_$_state_machine__30367__auto__);

(statearr_31394[(1)] = (1));

return statearr_31394;
});
var cljs$core$async$transduce_$_state_machine__30367__auto____1 = (function (state_31388){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31388);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31397){var ex__30370__auto__ = e31397;
var statearr_31398_32865 = state_31388;
(statearr_31398_32865[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31388[(4)]))){
var statearr_31399_32866 = state_31388;
(statearr_31399_32866[(1)] = cljs.core.first((state_31388[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_31388;
state_31388 = G__32867;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30367__auto__ = function(state_31388){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30367__auto____1.call(this,state_31388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30367__auto____0;
cljs$core$async$transduce_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30367__auto____1;
return cljs$core$async$transduce_$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31400 = f__30618__auto__();
(statearr_31400[(6)] = c__30617__auto__);

return statearr_31400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));

return c__30617__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31402 = arguments.length;
switch (G__31402) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31441){
var state_val_31442 = (state_31441[(1)]);
if((state_val_31442 === (7))){
var inst_31423 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31443_32875 = state_31441__$1;
(statearr_31443_32875[(2)] = inst_31423);

(statearr_31443_32875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (1))){
var inst_31412 = cljs.core.seq(coll);
var inst_31413 = inst_31412;
var state_31441__$1 = (function (){var statearr_31444 = state_31441;
(statearr_31444[(7)] = inst_31413);

return statearr_31444;
})();
var statearr_31445_32880 = state_31441__$1;
(statearr_31445_32880[(2)] = null);

(statearr_31445_32880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (4))){
var inst_31413 = (state_31441[(7)]);
var inst_31417 = cljs.core.first(inst_31413);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31441__$1,(7),ch,inst_31417);
} else {
if((state_val_31442 === (13))){
var inst_31435 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31446_32881 = state_31441__$1;
(statearr_31446_32881[(2)] = inst_31435);

(statearr_31446_32881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (6))){
var inst_31426 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
if(cljs.core.truth_(inst_31426)){
var statearr_31447_32882 = state_31441__$1;
(statearr_31447_32882[(1)] = (8));

} else {
var statearr_31450_32883 = state_31441__$1;
(statearr_31450_32883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (3))){
var inst_31439 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31441__$1,inst_31439);
} else {
if((state_val_31442 === (12))){
var state_31441__$1 = state_31441;
var statearr_31453_32884 = state_31441__$1;
(statearr_31453_32884[(2)] = null);

(statearr_31453_32884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (2))){
var inst_31413 = (state_31441[(7)]);
var state_31441__$1 = state_31441;
if(cljs.core.truth_(inst_31413)){
var statearr_31454_32885 = state_31441__$1;
(statearr_31454_32885[(1)] = (4));

} else {
var statearr_31455_32886 = state_31441__$1;
(statearr_31455_32886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (11))){
var inst_31432 = cljs.core.async.close_BANG_(ch);
var state_31441__$1 = state_31441;
var statearr_31456_32887 = state_31441__$1;
(statearr_31456_32887[(2)] = inst_31432);

(statearr_31456_32887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (9))){
var state_31441__$1 = state_31441;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31457_32889 = state_31441__$1;
(statearr_31457_32889[(1)] = (11));

} else {
var statearr_31458_32890 = state_31441__$1;
(statearr_31458_32890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (5))){
var inst_31413 = (state_31441[(7)]);
var state_31441__$1 = state_31441;
var statearr_31459_32892 = state_31441__$1;
(statearr_31459_32892[(2)] = inst_31413);

(statearr_31459_32892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (10))){
var inst_31437 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31460_32893 = state_31441__$1;
(statearr_31460_32893[(2)] = inst_31437);

(statearr_31460_32893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (8))){
var inst_31413 = (state_31441[(7)]);
var inst_31428 = cljs.core.next(inst_31413);
var inst_31413__$1 = inst_31428;
var state_31441__$1 = (function (){var statearr_31461 = state_31441;
(statearr_31461[(7)] = inst_31413__$1);

return statearr_31461;
})();
var statearr_31462_32894 = state_31441__$1;
(statearr_31462_32894[(2)] = null);

(statearr_31462_32894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_31441){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31441);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31464){var ex__30370__auto__ = e31464;
var statearr_31465_32895 = state_31441;
(statearr_31465_32895[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31441[(4)]))){
var statearr_31466_32896 = state_31441;
(statearr_31466_32896[(1)] = cljs.core.first((state_31441[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32897 = state_31441;
state_31441 = G__32897;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_31441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_31441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31467 = f__30618__auto__();
(statearr_31467[(6)] = c__30617__auto__);

return statearr_31467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));

return c__30617__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31469 = arguments.length;
switch (G__31469) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32900 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32900(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32904 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32904(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32905 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32905(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32916 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32916(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31470 = (function (ch,cs,meta31471){
this.ch = ch;
this.cs = cs;
this.meta31471 = meta31471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31472,meta31471__$1){
var self__ = this;
var _31472__$1 = this;
return (new cljs.core.async.t_cljs$core$async31470(self__.ch,self__.cs,meta31471__$1));
}));

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31472){
var self__ = this;
var _31472__$1 = this;
return self__.meta31471;
}));

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31470.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31471","meta31471",-1019277940,null)], null);
}));

(cljs.core.async.t_cljs$core$async31470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31470");

(cljs.core.async.t_cljs$core$async31470.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31470.
 */
cljs.core.async.__GT_t_cljs$core$async31470 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31470(ch__$1,cs__$1,meta31471){
return (new cljs.core.async.t_cljs$core$async31470(ch__$1,cs__$1,meta31471));
});

}

return (new cljs.core.async.t_cljs$core$async31470(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30617__auto___32927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31605){
var state_val_31606 = (state_31605[(1)]);
if((state_val_31606 === (7))){
var inst_31601 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31607_32928 = state_31605__$1;
(statearr_31607_32928[(2)] = inst_31601);

(statearr_31607_32928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (20))){
var inst_31506 = (state_31605[(7)]);
var inst_31518 = cljs.core.first(inst_31506);
var inst_31519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31518,(0),null);
var inst_31520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31518,(1),null);
var state_31605__$1 = (function (){var statearr_31608 = state_31605;
(statearr_31608[(8)] = inst_31519);

return statearr_31608;
})();
if(cljs.core.truth_(inst_31520)){
var statearr_31609_32929 = state_31605__$1;
(statearr_31609_32929[(1)] = (22));

} else {
var statearr_31610_32930 = state_31605__$1;
(statearr_31610_32930[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (27))){
var inst_31555 = (state_31605[(9)]);
var inst_31548 = (state_31605[(10)]);
var inst_31475 = (state_31605[(11)]);
var inst_31550 = (state_31605[(12)]);
var inst_31555__$1 = cljs.core._nth(inst_31548,inst_31550);
var inst_31556 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31555__$1,inst_31475,done);
var state_31605__$1 = (function (){var statearr_31611 = state_31605;
(statearr_31611[(9)] = inst_31555__$1);

return statearr_31611;
})();
if(cljs.core.truth_(inst_31556)){
var statearr_31612_32931 = state_31605__$1;
(statearr_31612_32931[(1)] = (30));

} else {
var statearr_31613_32932 = state_31605__$1;
(statearr_31613_32932[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (1))){
var state_31605__$1 = state_31605;
var statearr_31614_32933 = state_31605__$1;
(statearr_31614_32933[(2)] = null);

(statearr_31614_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (24))){
var inst_31506 = (state_31605[(7)]);
var inst_31525 = (state_31605[(2)]);
var inst_31526 = cljs.core.next(inst_31506);
var inst_31484 = inst_31526;
var inst_31485 = null;
var inst_31486 = (0);
var inst_31487 = (0);
var state_31605__$1 = (function (){var statearr_31615 = state_31605;
(statearr_31615[(13)] = inst_31525);

(statearr_31615[(14)] = inst_31486);

(statearr_31615[(15)] = inst_31485);

(statearr_31615[(16)] = inst_31484);

(statearr_31615[(17)] = inst_31487);

return statearr_31615;
})();
var statearr_31616_32934 = state_31605__$1;
(statearr_31616_32934[(2)] = null);

(statearr_31616_32934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (39))){
var state_31605__$1 = state_31605;
var statearr_31620_32935 = state_31605__$1;
(statearr_31620_32935[(2)] = null);

(statearr_31620_32935[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (4))){
var inst_31475 = (state_31605[(11)]);
var inst_31475__$1 = (state_31605[(2)]);
var inst_31476 = (inst_31475__$1 == null);
var state_31605__$1 = (function (){var statearr_31621 = state_31605;
(statearr_31621[(11)] = inst_31475__$1);

return statearr_31621;
})();
if(cljs.core.truth_(inst_31476)){
var statearr_31622_32936 = state_31605__$1;
(statearr_31622_32936[(1)] = (5));

} else {
var statearr_31623_32938 = state_31605__$1;
(statearr_31623_32938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (15))){
var inst_31486 = (state_31605[(14)]);
var inst_31485 = (state_31605[(15)]);
var inst_31484 = (state_31605[(16)]);
var inst_31487 = (state_31605[(17)]);
var inst_31502 = (state_31605[(2)]);
var inst_31503 = (inst_31487 + (1));
var tmp31617 = inst_31486;
var tmp31618 = inst_31485;
var tmp31619 = inst_31484;
var inst_31484__$1 = tmp31619;
var inst_31485__$1 = tmp31618;
var inst_31486__$1 = tmp31617;
var inst_31487__$1 = inst_31503;
var state_31605__$1 = (function (){var statearr_31624 = state_31605;
(statearr_31624[(14)] = inst_31486__$1);

(statearr_31624[(15)] = inst_31485__$1);

(statearr_31624[(18)] = inst_31502);

(statearr_31624[(16)] = inst_31484__$1);

(statearr_31624[(17)] = inst_31487__$1);

return statearr_31624;
})();
var statearr_31625_32948 = state_31605__$1;
(statearr_31625_32948[(2)] = null);

(statearr_31625_32948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (21))){
var inst_31529 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31629_32951 = state_31605__$1;
(statearr_31629_32951[(2)] = inst_31529);

(statearr_31629_32951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (31))){
var inst_31555 = (state_31605[(9)]);
var inst_31559 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31555);
var state_31605__$1 = state_31605;
var statearr_31630_32952 = state_31605__$1;
(statearr_31630_32952[(2)] = inst_31559);

(statearr_31630_32952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (32))){
var inst_31549 = (state_31605[(19)]);
var inst_31547 = (state_31605[(20)]);
var inst_31548 = (state_31605[(10)]);
var inst_31550 = (state_31605[(12)]);
var inst_31561 = (state_31605[(2)]);
var inst_31562 = (inst_31550 + (1));
var tmp31626 = inst_31549;
var tmp31627 = inst_31547;
var tmp31628 = inst_31548;
var inst_31547__$1 = tmp31627;
var inst_31548__$1 = tmp31628;
var inst_31549__$1 = tmp31626;
var inst_31550__$1 = inst_31562;
var state_31605__$1 = (function (){var statearr_31631 = state_31605;
(statearr_31631[(21)] = inst_31561);

(statearr_31631[(19)] = inst_31549__$1);

(statearr_31631[(20)] = inst_31547__$1);

(statearr_31631[(10)] = inst_31548__$1);

(statearr_31631[(12)] = inst_31550__$1);

return statearr_31631;
})();
var statearr_31632_32953 = state_31605__$1;
(statearr_31632_32953[(2)] = null);

(statearr_31632_32953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (40))){
var inst_31574 = (state_31605[(22)]);
var inst_31578 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31574);
var state_31605__$1 = state_31605;
var statearr_31633_32954 = state_31605__$1;
(statearr_31633_32954[(2)] = inst_31578);

(statearr_31633_32954[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (33))){
var inst_31565 = (state_31605[(23)]);
var inst_31567 = cljs.core.chunked_seq_QMARK_(inst_31565);
var state_31605__$1 = state_31605;
if(inst_31567){
var statearr_31634_32955 = state_31605__$1;
(statearr_31634_32955[(1)] = (36));

} else {
var statearr_31635_32956 = state_31605__$1;
(statearr_31635_32956[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (13))){
var inst_31496 = (state_31605[(24)]);
var inst_31499 = cljs.core.async.close_BANG_(inst_31496);
var state_31605__$1 = state_31605;
var statearr_31636_32957 = state_31605__$1;
(statearr_31636_32957[(2)] = inst_31499);

(statearr_31636_32957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (22))){
var inst_31519 = (state_31605[(8)]);
var inst_31522 = cljs.core.async.close_BANG_(inst_31519);
var state_31605__$1 = state_31605;
var statearr_31637_32958 = state_31605__$1;
(statearr_31637_32958[(2)] = inst_31522);

(statearr_31637_32958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (36))){
var inst_31565 = (state_31605[(23)]);
var inst_31569 = cljs.core.chunk_first(inst_31565);
var inst_31570 = cljs.core.chunk_rest(inst_31565);
var inst_31571 = cljs.core.count(inst_31569);
var inst_31547 = inst_31570;
var inst_31548 = inst_31569;
var inst_31549 = inst_31571;
var inst_31550 = (0);
var state_31605__$1 = (function (){var statearr_31638 = state_31605;
(statearr_31638[(19)] = inst_31549);

(statearr_31638[(20)] = inst_31547);

(statearr_31638[(10)] = inst_31548);

(statearr_31638[(12)] = inst_31550);

return statearr_31638;
})();
var statearr_31639_32959 = state_31605__$1;
(statearr_31639_32959[(2)] = null);

(statearr_31639_32959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (41))){
var inst_31565 = (state_31605[(23)]);
var inst_31580 = (state_31605[(2)]);
var inst_31581 = cljs.core.next(inst_31565);
var inst_31547 = inst_31581;
var inst_31548 = null;
var inst_31549 = (0);
var inst_31550 = (0);
var state_31605__$1 = (function (){var statearr_31640 = state_31605;
(statearr_31640[(19)] = inst_31549);

(statearr_31640[(20)] = inst_31547);

(statearr_31640[(10)] = inst_31548);

(statearr_31640[(25)] = inst_31580);

(statearr_31640[(12)] = inst_31550);

return statearr_31640;
})();
var statearr_31641_32963 = state_31605__$1;
(statearr_31641_32963[(2)] = null);

(statearr_31641_32963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (43))){
var state_31605__$1 = state_31605;
var statearr_31642_32964 = state_31605__$1;
(statearr_31642_32964[(2)] = null);

(statearr_31642_32964[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (29))){
var inst_31589 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31643_32965 = state_31605__$1;
(statearr_31643_32965[(2)] = inst_31589);

(statearr_31643_32965[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (44))){
var inst_31598 = (state_31605[(2)]);
var state_31605__$1 = (function (){var statearr_31644 = state_31605;
(statearr_31644[(26)] = inst_31598);

return statearr_31644;
})();
var statearr_31645_32966 = state_31605__$1;
(statearr_31645_32966[(2)] = null);

(statearr_31645_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (6))){
var inst_31539 = (state_31605[(27)]);
var inst_31538 = cljs.core.deref(cs);
var inst_31539__$1 = cljs.core.keys(inst_31538);
var inst_31540 = cljs.core.count(inst_31539__$1);
var inst_31541 = cljs.core.reset_BANG_(dctr,inst_31540);
var inst_31546 = cljs.core.seq(inst_31539__$1);
var inst_31547 = inst_31546;
var inst_31548 = null;
var inst_31549 = (0);
var inst_31550 = (0);
var state_31605__$1 = (function (){var statearr_31646 = state_31605;
(statearr_31646[(19)] = inst_31549);

(statearr_31646[(20)] = inst_31547);

(statearr_31646[(28)] = inst_31541);

(statearr_31646[(10)] = inst_31548);

(statearr_31646[(12)] = inst_31550);

(statearr_31646[(27)] = inst_31539__$1);

return statearr_31646;
})();
var statearr_31647_32967 = state_31605__$1;
(statearr_31647_32967[(2)] = null);

(statearr_31647_32967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (28))){
var inst_31565 = (state_31605[(23)]);
var inst_31547 = (state_31605[(20)]);
var inst_31565__$1 = cljs.core.seq(inst_31547);
var state_31605__$1 = (function (){var statearr_31648 = state_31605;
(statearr_31648[(23)] = inst_31565__$1);

return statearr_31648;
})();
if(inst_31565__$1){
var statearr_31649_32968 = state_31605__$1;
(statearr_31649_32968[(1)] = (33));

} else {
var statearr_31650_32969 = state_31605__$1;
(statearr_31650_32969[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (25))){
var inst_31549 = (state_31605[(19)]);
var inst_31550 = (state_31605[(12)]);
var inst_31552 = (inst_31550 < inst_31549);
var inst_31553 = inst_31552;
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31553)){
var statearr_31651_32970 = state_31605__$1;
(statearr_31651_32970[(1)] = (27));

} else {
var statearr_31652_32971 = state_31605__$1;
(statearr_31652_32971[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (34))){
var state_31605__$1 = state_31605;
var statearr_31653_32972 = state_31605__$1;
(statearr_31653_32972[(2)] = null);

(statearr_31653_32972[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (17))){
var state_31605__$1 = state_31605;
var statearr_31654_32973 = state_31605__$1;
(statearr_31654_32973[(2)] = null);

(statearr_31654_32973[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (3))){
var inst_31603 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31605__$1,inst_31603);
} else {
if((state_val_31606 === (12))){
var inst_31534 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31655_32975 = state_31605__$1;
(statearr_31655_32975[(2)] = inst_31534);

(statearr_31655_32975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (2))){
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31605__$1,(4),ch);
} else {
if((state_val_31606 === (23))){
var state_31605__$1 = state_31605;
var statearr_31656_32982 = state_31605__$1;
(statearr_31656_32982[(2)] = null);

(statearr_31656_32982[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (35))){
var inst_31587 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31657_32987 = state_31605__$1;
(statearr_31657_32987[(2)] = inst_31587);

(statearr_31657_32987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (19))){
var inst_31506 = (state_31605[(7)]);
var inst_31510 = cljs.core.chunk_first(inst_31506);
var inst_31511 = cljs.core.chunk_rest(inst_31506);
var inst_31512 = cljs.core.count(inst_31510);
var inst_31484 = inst_31511;
var inst_31485 = inst_31510;
var inst_31486 = inst_31512;
var inst_31487 = (0);
var state_31605__$1 = (function (){var statearr_31658 = state_31605;
(statearr_31658[(14)] = inst_31486);

(statearr_31658[(15)] = inst_31485);

(statearr_31658[(16)] = inst_31484);

(statearr_31658[(17)] = inst_31487);

return statearr_31658;
})();
var statearr_31659_32989 = state_31605__$1;
(statearr_31659_32989[(2)] = null);

(statearr_31659_32989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (11))){
var inst_31484 = (state_31605[(16)]);
var inst_31506 = (state_31605[(7)]);
var inst_31506__$1 = cljs.core.seq(inst_31484);
var state_31605__$1 = (function (){var statearr_31660 = state_31605;
(statearr_31660[(7)] = inst_31506__$1);

return statearr_31660;
})();
if(inst_31506__$1){
var statearr_31661_32990 = state_31605__$1;
(statearr_31661_32990[(1)] = (16));

} else {
var statearr_31662_32991 = state_31605__$1;
(statearr_31662_32991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (9))){
var inst_31536 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31663_32992 = state_31605__$1;
(statearr_31663_32992[(2)] = inst_31536);

(statearr_31663_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (5))){
var inst_31482 = cljs.core.deref(cs);
var inst_31483 = cljs.core.seq(inst_31482);
var inst_31484 = inst_31483;
var inst_31485 = null;
var inst_31486 = (0);
var inst_31487 = (0);
var state_31605__$1 = (function (){var statearr_31664 = state_31605;
(statearr_31664[(14)] = inst_31486);

(statearr_31664[(15)] = inst_31485);

(statearr_31664[(16)] = inst_31484);

(statearr_31664[(17)] = inst_31487);

return statearr_31664;
})();
var statearr_31665_33002 = state_31605__$1;
(statearr_31665_33002[(2)] = null);

(statearr_31665_33002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (14))){
var state_31605__$1 = state_31605;
var statearr_31666_33003 = state_31605__$1;
(statearr_31666_33003[(2)] = null);

(statearr_31666_33003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (45))){
var inst_31595 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31667_33004 = state_31605__$1;
(statearr_31667_33004[(2)] = inst_31595);

(statearr_31667_33004[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (26))){
var inst_31539 = (state_31605[(27)]);
var inst_31591 = (state_31605[(2)]);
var inst_31592 = cljs.core.seq(inst_31539);
var state_31605__$1 = (function (){var statearr_31668 = state_31605;
(statearr_31668[(29)] = inst_31591);

return statearr_31668;
})();
if(inst_31592){
var statearr_31669_33005 = state_31605__$1;
(statearr_31669_33005[(1)] = (42));

} else {
var statearr_31670_33006 = state_31605__$1;
(statearr_31670_33006[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (16))){
var inst_31506 = (state_31605[(7)]);
var inst_31508 = cljs.core.chunked_seq_QMARK_(inst_31506);
var state_31605__$1 = state_31605;
if(inst_31508){
var statearr_31671_33016 = state_31605__$1;
(statearr_31671_33016[(1)] = (19));

} else {
var statearr_31672_33017 = state_31605__$1;
(statearr_31672_33017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (38))){
var inst_31584 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31673_33018 = state_31605__$1;
(statearr_31673_33018[(2)] = inst_31584);

(statearr_31673_33018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (30))){
var state_31605__$1 = state_31605;
var statearr_31674_33019 = state_31605__$1;
(statearr_31674_33019[(2)] = null);

(statearr_31674_33019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (10))){
var inst_31485 = (state_31605[(15)]);
var inst_31487 = (state_31605[(17)]);
var inst_31495 = cljs.core._nth(inst_31485,inst_31487);
var inst_31496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31495,(0),null);
var inst_31497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31495,(1),null);
var state_31605__$1 = (function (){var statearr_31675 = state_31605;
(statearr_31675[(24)] = inst_31496);

return statearr_31675;
})();
if(cljs.core.truth_(inst_31497)){
var statearr_31676_33020 = state_31605__$1;
(statearr_31676_33020[(1)] = (13));

} else {
var statearr_31677_33021 = state_31605__$1;
(statearr_31677_33021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (18))){
var inst_31532 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31678_33022 = state_31605__$1;
(statearr_31678_33022[(2)] = inst_31532);

(statearr_31678_33022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (42))){
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31605__$1,(45),dchan);
} else {
if((state_val_31606 === (37))){
var inst_31565 = (state_31605[(23)]);
var inst_31475 = (state_31605[(11)]);
var inst_31574 = (state_31605[(22)]);
var inst_31574__$1 = cljs.core.first(inst_31565);
var inst_31575 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31574__$1,inst_31475,done);
var state_31605__$1 = (function (){var statearr_31679 = state_31605;
(statearr_31679[(22)] = inst_31574__$1);

return statearr_31679;
})();
if(cljs.core.truth_(inst_31575)){
var statearr_31680_33026 = state_31605__$1;
(statearr_31680_33026[(1)] = (39));

} else {
var statearr_31681_33027 = state_31605__$1;
(statearr_31681_33027[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (8))){
var inst_31486 = (state_31605[(14)]);
var inst_31487 = (state_31605[(17)]);
var inst_31489 = (inst_31487 < inst_31486);
var inst_31490 = inst_31489;
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31490)){
var statearr_31682_33031 = state_31605__$1;
(statearr_31682_33031[(1)] = (10));

} else {
var statearr_31683_33032 = state_31605__$1;
(statearr_31683_33032[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30367__auto__ = null;
var cljs$core$async$mult_$_state_machine__30367__auto____0 = (function (){
var statearr_31684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31684[(0)] = cljs$core$async$mult_$_state_machine__30367__auto__);

(statearr_31684[(1)] = (1));

return statearr_31684;
});
var cljs$core$async$mult_$_state_machine__30367__auto____1 = (function (state_31605){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31605);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31685){var ex__30370__auto__ = e31685;
var statearr_31686_33033 = state_31605;
(statearr_31686_33033[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31605[(4)]))){
var statearr_31687_33040 = state_31605;
(statearr_31687_33040[(1)] = cljs.core.first((state_31605[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33041 = state_31605;
state_31605 = G__33041;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30367__auto__ = function(state_31605){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30367__auto____1.call(this,state_31605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30367__auto____0;
cljs$core$async$mult_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30367__auto____1;
return cljs$core$async$mult_$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31688 = f__30618__auto__();
(statearr_31688[(6)] = c__30617__auto___32927);

return statearr_31688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31690 = arguments.length;
switch (G__31690) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33043 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33043(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33046 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33046(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33048 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33048(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33052 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33052(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33053 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33053(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33056 = arguments.length;
var i__4737__auto___33057 = (0);
while(true){
if((i__4737__auto___33057 < len__4736__auto___33056)){
args__4742__auto__.push((arguments[i__4737__auto___33057]));

var G__33058 = (i__4737__auto___33057 + (1));
i__4737__auto___33057 = G__33058;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31695){
var map__31696 = p__31695;
var map__31696__$1 = (((((!((map__31696 == null))))?(((((map__31696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31696):map__31696);
var opts = map__31696__$1;
var statearr_31698_33063 = state;
(statearr_31698_33063[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31699_33064 = state;
(statearr_31699_33064[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31700_33065 = state;
(statearr_31700_33065[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31691){
var G__31692 = cljs.core.first(seq31691);
var seq31691__$1 = cljs.core.next(seq31691);
var G__31693 = cljs.core.first(seq31691__$1);
var seq31691__$2 = cljs.core.next(seq31691__$1);
var G__31694 = cljs.core.first(seq31691__$2);
var seq31691__$3 = cljs.core.next(seq31691__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31692,G__31693,G__31694,seq31691__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31701 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31702){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31702 = meta31702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31703,meta31702__$1){
var self__ = this;
var _31703__$1 = this;
return (new cljs.core.async.t_cljs$core$async31701(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31702__$1));
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31703){
var self__ = this;
var _31703__$1 = this;
return self__.meta31702;
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31701.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31702","meta31702",-2123662931,null)], null);
}));

(cljs.core.async.t_cljs$core$async31701.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31701");

(cljs.core.async.t_cljs$core$async31701.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31701");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31701.
 */
cljs.core.async.__GT_t_cljs$core$async31701 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31701(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31702){
return (new cljs.core.async.t_cljs$core$async31701(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31702));
});

}

return (new cljs.core.async.t_cljs$core$async31701(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30617__auto___33072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31805){
var state_val_31806 = (state_31805[(1)]);
if((state_val_31806 === (7))){
var inst_31720 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31807_33073 = state_31805__$1;
(statearr_31807_33073[(2)] = inst_31720);

(statearr_31807_33073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (20))){
var inst_31732 = (state_31805[(7)]);
var state_31805__$1 = state_31805;
var statearr_31808_33074 = state_31805__$1;
(statearr_31808_33074[(2)] = inst_31732);

(statearr_31808_33074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (27))){
var state_31805__$1 = state_31805;
var statearr_31809_33075 = state_31805__$1;
(statearr_31809_33075[(2)] = null);

(statearr_31809_33075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (1))){
var inst_31707 = (state_31805[(8)]);
var inst_31707__$1 = calc_state();
var inst_31709 = (inst_31707__$1 == null);
var inst_31710 = cljs.core.not(inst_31709);
var state_31805__$1 = (function (){var statearr_31810 = state_31805;
(statearr_31810[(8)] = inst_31707__$1);

return statearr_31810;
})();
if(inst_31710){
var statearr_31811_33076 = state_31805__$1;
(statearr_31811_33076[(1)] = (2));

} else {
var statearr_31812_33077 = state_31805__$1;
(statearr_31812_33077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (24))){
var inst_31779 = (state_31805[(9)]);
var inst_31756 = (state_31805[(10)]);
var inst_31765 = (state_31805[(11)]);
var inst_31779__$1 = (inst_31756.cljs$core$IFn$_invoke$arity$1 ? inst_31756.cljs$core$IFn$_invoke$arity$1(inst_31765) : inst_31756.call(null,inst_31765));
var state_31805__$1 = (function (){var statearr_31813 = state_31805;
(statearr_31813[(9)] = inst_31779__$1);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31779__$1)){
var statearr_31814_33079 = state_31805__$1;
(statearr_31814_33079[(1)] = (29));

} else {
var statearr_31815_33080 = state_31805__$1;
(statearr_31815_33080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (4))){
var inst_31723 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31723)){
var statearr_31816_33081 = state_31805__$1;
(statearr_31816_33081[(1)] = (8));

} else {
var statearr_31817_33082 = state_31805__$1;
(statearr_31817_33082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (15))){
var inst_31750 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31750)){
var statearr_31818_33083 = state_31805__$1;
(statearr_31818_33083[(1)] = (19));

} else {
var statearr_31819_33084 = state_31805__$1;
(statearr_31819_33084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (21))){
var inst_31755 = (state_31805[(12)]);
var inst_31755__$1 = (state_31805[(2)]);
var inst_31756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31755__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31755__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31755__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31805__$1 = (function (){var statearr_31820 = state_31805;
(statearr_31820[(12)] = inst_31755__$1);

(statearr_31820[(10)] = inst_31756);

(statearr_31820[(13)] = inst_31757);

return statearr_31820;
})();
return cljs.core.async.ioc_alts_BANG_(state_31805__$1,(22),inst_31758);
} else {
if((state_val_31806 === (31))){
var inst_31787 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31787)){
var statearr_31821_33085 = state_31805__$1;
(statearr_31821_33085[(1)] = (32));

} else {
var statearr_31822_33086 = state_31805__$1;
(statearr_31822_33086[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (32))){
var inst_31764 = (state_31805[(14)]);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31805__$1,(35),out,inst_31764);
} else {
if((state_val_31806 === (33))){
var inst_31755 = (state_31805[(12)]);
var inst_31732 = inst_31755;
var state_31805__$1 = (function (){var statearr_31823 = state_31805;
(statearr_31823[(7)] = inst_31732);

return statearr_31823;
})();
var statearr_31824_33087 = state_31805__$1;
(statearr_31824_33087[(2)] = null);

(statearr_31824_33087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (13))){
var inst_31732 = (state_31805[(7)]);
var inst_31739 = inst_31732.cljs$lang$protocol_mask$partition0$;
var inst_31740 = (inst_31739 & (64));
var inst_31741 = inst_31732.cljs$core$ISeq$;
var inst_31742 = (cljs.core.PROTOCOL_SENTINEL === inst_31741);
var inst_31743 = ((inst_31740) || (inst_31742));
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31743)){
var statearr_31825_33092 = state_31805__$1;
(statearr_31825_33092[(1)] = (16));

} else {
var statearr_31826_33093 = state_31805__$1;
(statearr_31826_33093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (22))){
var inst_31764 = (state_31805[(14)]);
var inst_31765 = (state_31805[(11)]);
var inst_31763 = (state_31805[(2)]);
var inst_31764__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31763,(0),null);
var inst_31765__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31763,(1),null);
var inst_31766 = (inst_31764__$1 == null);
var inst_31767 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31765__$1,change);
var inst_31768 = ((inst_31766) || (inst_31767));
var state_31805__$1 = (function (){var statearr_31827 = state_31805;
(statearr_31827[(14)] = inst_31764__$1);

(statearr_31827[(11)] = inst_31765__$1);

return statearr_31827;
})();
if(cljs.core.truth_(inst_31768)){
var statearr_31828_33107 = state_31805__$1;
(statearr_31828_33107[(1)] = (23));

} else {
var statearr_31829_33112 = state_31805__$1;
(statearr_31829_33112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (36))){
var inst_31755 = (state_31805[(12)]);
var inst_31732 = inst_31755;
var state_31805__$1 = (function (){var statearr_31830 = state_31805;
(statearr_31830[(7)] = inst_31732);

return statearr_31830;
})();
var statearr_31831_33117 = state_31805__$1;
(statearr_31831_33117[(2)] = null);

(statearr_31831_33117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (29))){
var inst_31779 = (state_31805[(9)]);
var state_31805__$1 = state_31805;
var statearr_31832_33125 = state_31805__$1;
(statearr_31832_33125[(2)] = inst_31779);

(statearr_31832_33125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (6))){
var state_31805__$1 = state_31805;
var statearr_31833_33128 = state_31805__$1;
(statearr_31833_33128[(2)] = false);

(statearr_31833_33128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (28))){
var inst_31775 = (state_31805[(2)]);
var inst_31776 = calc_state();
var inst_31732 = inst_31776;
var state_31805__$1 = (function (){var statearr_31834 = state_31805;
(statearr_31834[(7)] = inst_31732);

(statearr_31834[(15)] = inst_31775);

return statearr_31834;
})();
var statearr_31835_33151 = state_31805__$1;
(statearr_31835_33151[(2)] = null);

(statearr_31835_33151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (25))){
var inst_31801 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31836_33153 = state_31805__$1;
(statearr_31836_33153[(2)] = inst_31801);

(statearr_31836_33153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (34))){
var inst_31799 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31837_33154 = state_31805__$1;
(statearr_31837_33154[(2)] = inst_31799);

(statearr_31837_33154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (17))){
var state_31805__$1 = state_31805;
var statearr_31838_33155 = state_31805__$1;
(statearr_31838_33155[(2)] = false);

(statearr_31838_33155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (3))){
var state_31805__$1 = state_31805;
var statearr_31839_33156 = state_31805__$1;
(statearr_31839_33156[(2)] = false);

(statearr_31839_33156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (12))){
var inst_31803 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31805__$1,inst_31803);
} else {
if((state_val_31806 === (2))){
var inst_31707 = (state_31805[(8)]);
var inst_31712 = inst_31707.cljs$lang$protocol_mask$partition0$;
var inst_31713 = (inst_31712 & (64));
var inst_31714 = inst_31707.cljs$core$ISeq$;
var inst_31715 = (cljs.core.PROTOCOL_SENTINEL === inst_31714);
var inst_31716 = ((inst_31713) || (inst_31715));
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31716)){
var statearr_31840_33157 = state_31805__$1;
(statearr_31840_33157[(1)] = (5));

} else {
var statearr_31841_33158 = state_31805__$1;
(statearr_31841_33158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (23))){
var inst_31764 = (state_31805[(14)]);
var inst_31770 = (inst_31764 == null);
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31770)){
var statearr_31842_33159 = state_31805__$1;
(statearr_31842_33159[(1)] = (26));

} else {
var statearr_31843_33160 = state_31805__$1;
(statearr_31843_33160[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (35))){
var inst_31790 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
if(cljs.core.truth_(inst_31790)){
var statearr_31844_33162 = state_31805__$1;
(statearr_31844_33162[(1)] = (36));

} else {
var statearr_31845_33163 = state_31805__$1;
(statearr_31845_33163[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (19))){
var inst_31732 = (state_31805[(7)]);
var inst_31752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31732);
var state_31805__$1 = state_31805;
var statearr_31846_33164 = state_31805__$1;
(statearr_31846_33164[(2)] = inst_31752);

(statearr_31846_33164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (11))){
var inst_31732 = (state_31805[(7)]);
var inst_31736 = (inst_31732 == null);
var inst_31737 = cljs.core.not(inst_31736);
var state_31805__$1 = state_31805;
if(inst_31737){
var statearr_31847_33165 = state_31805__$1;
(statearr_31847_33165[(1)] = (13));

} else {
var statearr_31848_33169 = state_31805__$1;
(statearr_31848_33169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (9))){
var inst_31707 = (state_31805[(8)]);
var state_31805__$1 = state_31805;
var statearr_31849_33170 = state_31805__$1;
(statearr_31849_33170[(2)] = inst_31707);

(statearr_31849_33170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (5))){
var state_31805__$1 = state_31805;
var statearr_31850_33171 = state_31805__$1;
(statearr_31850_33171[(2)] = true);

(statearr_31850_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (14))){
var state_31805__$1 = state_31805;
var statearr_31851_33178 = state_31805__$1;
(statearr_31851_33178[(2)] = false);

(statearr_31851_33178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (26))){
var inst_31765 = (state_31805[(11)]);
var inst_31772 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31765);
var state_31805__$1 = state_31805;
var statearr_31852_33179 = state_31805__$1;
(statearr_31852_33179[(2)] = inst_31772);

(statearr_31852_33179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (16))){
var state_31805__$1 = state_31805;
var statearr_31853_33180 = state_31805__$1;
(statearr_31853_33180[(2)] = true);

(statearr_31853_33180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (38))){
var inst_31795 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31854_33181 = state_31805__$1;
(statearr_31854_33181[(2)] = inst_31795);

(statearr_31854_33181[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (30))){
var inst_31756 = (state_31805[(10)]);
var inst_31757 = (state_31805[(13)]);
var inst_31765 = (state_31805[(11)]);
var inst_31782 = cljs.core.empty_QMARK_(inst_31756);
var inst_31783 = (inst_31757.cljs$core$IFn$_invoke$arity$1 ? inst_31757.cljs$core$IFn$_invoke$arity$1(inst_31765) : inst_31757.call(null,inst_31765));
var inst_31784 = cljs.core.not(inst_31783);
var inst_31785 = ((inst_31782) && (inst_31784));
var state_31805__$1 = state_31805;
var statearr_31855_33183 = state_31805__$1;
(statearr_31855_33183[(2)] = inst_31785);

(statearr_31855_33183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (10))){
var inst_31707 = (state_31805[(8)]);
var inst_31728 = (state_31805[(2)]);
var inst_31729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31728,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31728,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31728,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31732 = inst_31707;
var state_31805__$1 = (function (){var statearr_31856 = state_31805;
(statearr_31856[(7)] = inst_31732);

(statearr_31856[(16)] = inst_31731);

(statearr_31856[(17)] = inst_31729);

(statearr_31856[(18)] = inst_31730);

return statearr_31856;
})();
var statearr_31857_33184 = state_31805__$1;
(statearr_31857_33184[(2)] = null);

(statearr_31857_33184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (18))){
var inst_31747 = (state_31805[(2)]);
var state_31805__$1 = state_31805;
var statearr_31858_33188 = state_31805__$1;
(statearr_31858_33188[(2)] = inst_31747);

(statearr_31858_33188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (37))){
var state_31805__$1 = state_31805;
var statearr_31859_33195 = state_31805__$1;
(statearr_31859_33195[(2)] = null);

(statearr_31859_33195[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31806 === (8))){
var inst_31707 = (state_31805[(8)]);
var inst_31725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31707);
var state_31805__$1 = state_31805;
var statearr_31860_33196 = state_31805__$1;
(statearr_31860_33196[(2)] = inst_31725);

(statearr_31860_33196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30367__auto__ = null;
var cljs$core$async$mix_$_state_machine__30367__auto____0 = (function (){
var statearr_31861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31861[(0)] = cljs$core$async$mix_$_state_machine__30367__auto__);

(statearr_31861[(1)] = (1));

return statearr_31861;
});
var cljs$core$async$mix_$_state_machine__30367__auto____1 = (function (state_31805){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31805);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31862){var ex__30370__auto__ = e31862;
var statearr_31863_33203 = state_31805;
(statearr_31863_33203[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31805[(4)]))){
var statearr_31864_33204 = state_31805;
(statearr_31864_33204[(1)] = cljs.core.first((state_31805[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33205 = state_31805;
state_31805 = G__33205;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30367__auto__ = function(state_31805){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30367__auto____1.call(this,state_31805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30367__auto____0;
cljs$core$async$mix_$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30367__auto____1;
return cljs$core$async$mix_$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31865 = f__30618__auto__();
(statearr_31865[(6)] = c__30617__auto___33072);

return statearr_31865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33206 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33206(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33207 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33207(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33208 = (function() {
var G__33209 = null;
var G__33209__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33209__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33209 = function(p,v){
switch(arguments.length){
case 1:
return G__33209__1.call(this,p);
case 2:
return G__33209__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33209.cljs$core$IFn$_invoke$arity$1 = G__33209__1;
G__33209.cljs$core$IFn$_invoke$arity$2 = G__33209__2;
return G__33209;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31867 = arguments.length;
switch (G__31867) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33208(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33208(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31870 = arguments.length;
switch (G__31870) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31868_SHARP_){
if(cljs.core.truth_((p1__31868_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31868_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31868_SHARP_.call(null,topic)))){
return p1__31868_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31868_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31871 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31872){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31872 = meta31872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31873,meta31872__$1){
var self__ = this;
var _31873__$1 = this;
return (new cljs.core.async.t_cljs$core$async31871(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31872__$1));
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31873){
var self__ = this;
var _31873__$1 = this;
return self__.meta31872;
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31872","meta31872",-1317787725,null)], null);
}));

(cljs.core.async.t_cljs$core$async31871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31871");

(cljs.core.async.t_cljs$core$async31871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31871.
 */
cljs.core.async.__GT_t_cljs$core$async31871 = (function cljs$core$async$__GT_t_cljs$core$async31871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31872){
return (new cljs.core.async.t_cljs$core$async31871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31872));
});

}

return (new cljs.core.async.t_cljs$core$async31871(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30617__auto___33224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_31945){
var state_val_31946 = (state_31945[(1)]);
if((state_val_31946 === (7))){
var inst_31941 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31947_33225 = state_31945__$1;
(statearr_31947_33225[(2)] = inst_31941);

(statearr_31947_33225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (20))){
var state_31945__$1 = state_31945;
var statearr_31948_33226 = state_31945__$1;
(statearr_31948_33226[(2)] = null);

(statearr_31948_33226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (1))){
var state_31945__$1 = state_31945;
var statearr_31949_33227 = state_31945__$1;
(statearr_31949_33227[(2)] = null);

(statearr_31949_33227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (24))){
var inst_31924 = (state_31945[(7)]);
var inst_31933 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31924);
var state_31945__$1 = state_31945;
var statearr_31950_33228 = state_31945__$1;
(statearr_31950_33228[(2)] = inst_31933);

(statearr_31950_33228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (4))){
var inst_31876 = (state_31945[(8)]);
var inst_31876__$1 = (state_31945[(2)]);
var inst_31877 = (inst_31876__$1 == null);
var state_31945__$1 = (function (){var statearr_31951 = state_31945;
(statearr_31951[(8)] = inst_31876__$1);

return statearr_31951;
})();
if(cljs.core.truth_(inst_31877)){
var statearr_31952_33229 = state_31945__$1;
(statearr_31952_33229[(1)] = (5));

} else {
var statearr_31953_33230 = state_31945__$1;
(statearr_31953_33230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (15))){
var inst_31918 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31954_33231 = state_31945__$1;
(statearr_31954_33231[(2)] = inst_31918);

(statearr_31954_33231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (21))){
var inst_31938 = (state_31945[(2)]);
var state_31945__$1 = (function (){var statearr_31955 = state_31945;
(statearr_31955[(9)] = inst_31938);

return statearr_31955;
})();
var statearr_31956_33232 = state_31945__$1;
(statearr_31956_33232[(2)] = null);

(statearr_31956_33232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (13))){
var inst_31900 = (state_31945[(10)]);
var inst_31902 = cljs.core.chunked_seq_QMARK_(inst_31900);
var state_31945__$1 = state_31945;
if(inst_31902){
var statearr_31957_33233 = state_31945__$1;
(statearr_31957_33233[(1)] = (16));

} else {
var statearr_31958_33234 = state_31945__$1;
(statearr_31958_33234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (22))){
var inst_31930 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
if(cljs.core.truth_(inst_31930)){
var statearr_31959_33235 = state_31945__$1;
(statearr_31959_33235[(1)] = (23));

} else {
var statearr_31960_33236 = state_31945__$1;
(statearr_31960_33236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (6))){
var inst_31926 = (state_31945[(11)]);
var inst_31876 = (state_31945[(8)]);
var inst_31924 = (state_31945[(7)]);
var inst_31924__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31876) : topic_fn.call(null,inst_31876));
var inst_31925 = cljs.core.deref(mults);
var inst_31926__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31925,inst_31924__$1);
var state_31945__$1 = (function (){var statearr_31961 = state_31945;
(statearr_31961[(11)] = inst_31926__$1);

(statearr_31961[(7)] = inst_31924__$1);

return statearr_31961;
})();
if(cljs.core.truth_(inst_31926__$1)){
var statearr_31962_33237 = state_31945__$1;
(statearr_31962_33237[(1)] = (19));

} else {
var statearr_31963_33238 = state_31945__$1;
(statearr_31963_33238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (25))){
var inst_31935 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31964_33239 = state_31945__$1;
(statearr_31964_33239[(2)] = inst_31935);

(statearr_31964_33239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (17))){
var inst_31900 = (state_31945[(10)]);
var inst_31909 = cljs.core.first(inst_31900);
var inst_31910 = cljs.core.async.muxch_STAR_(inst_31909);
var inst_31911 = cljs.core.async.close_BANG_(inst_31910);
var inst_31912 = cljs.core.next(inst_31900);
var inst_31886 = inst_31912;
var inst_31887 = null;
var inst_31888 = (0);
var inst_31889 = (0);
var state_31945__$1 = (function (){var statearr_31965 = state_31945;
(statearr_31965[(12)] = inst_31889);

(statearr_31965[(13)] = inst_31886);

(statearr_31965[(14)] = inst_31888);

(statearr_31965[(15)] = inst_31911);

(statearr_31965[(16)] = inst_31887);

return statearr_31965;
})();
var statearr_31966_33240 = state_31945__$1;
(statearr_31966_33240[(2)] = null);

(statearr_31966_33240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (3))){
var inst_31943 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31945__$1,inst_31943);
} else {
if((state_val_31946 === (12))){
var inst_31920 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31967_33241 = state_31945__$1;
(statearr_31967_33241[(2)] = inst_31920);

(statearr_31967_33241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (2))){
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31945__$1,(4),ch);
} else {
if((state_val_31946 === (23))){
var state_31945__$1 = state_31945;
var statearr_31968_33242 = state_31945__$1;
(statearr_31968_33242[(2)] = null);

(statearr_31968_33242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (19))){
var inst_31926 = (state_31945[(11)]);
var inst_31876 = (state_31945[(8)]);
var inst_31928 = cljs.core.async.muxch_STAR_(inst_31926);
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31945__$1,(22),inst_31928,inst_31876);
} else {
if((state_val_31946 === (11))){
var inst_31900 = (state_31945[(10)]);
var inst_31886 = (state_31945[(13)]);
var inst_31900__$1 = cljs.core.seq(inst_31886);
var state_31945__$1 = (function (){var statearr_31969 = state_31945;
(statearr_31969[(10)] = inst_31900__$1);

return statearr_31969;
})();
if(inst_31900__$1){
var statearr_31970_33251 = state_31945__$1;
(statearr_31970_33251[(1)] = (13));

} else {
var statearr_31971_33252 = state_31945__$1;
(statearr_31971_33252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (9))){
var inst_31922 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31972_33253 = state_31945__$1;
(statearr_31972_33253[(2)] = inst_31922);

(statearr_31972_33253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (5))){
var inst_31883 = cljs.core.deref(mults);
var inst_31884 = cljs.core.vals(inst_31883);
var inst_31885 = cljs.core.seq(inst_31884);
var inst_31886 = inst_31885;
var inst_31887 = null;
var inst_31888 = (0);
var inst_31889 = (0);
var state_31945__$1 = (function (){var statearr_31973 = state_31945;
(statearr_31973[(12)] = inst_31889);

(statearr_31973[(13)] = inst_31886);

(statearr_31973[(14)] = inst_31888);

(statearr_31973[(16)] = inst_31887);

return statearr_31973;
})();
var statearr_31974_33254 = state_31945__$1;
(statearr_31974_33254[(2)] = null);

(statearr_31974_33254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (14))){
var state_31945__$1 = state_31945;
var statearr_31978_33255 = state_31945__$1;
(statearr_31978_33255[(2)] = null);

(statearr_31978_33255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (16))){
var inst_31900 = (state_31945[(10)]);
var inst_31904 = cljs.core.chunk_first(inst_31900);
var inst_31905 = cljs.core.chunk_rest(inst_31900);
var inst_31906 = cljs.core.count(inst_31904);
var inst_31886 = inst_31905;
var inst_31887 = inst_31904;
var inst_31888 = inst_31906;
var inst_31889 = (0);
var state_31945__$1 = (function (){var statearr_31979 = state_31945;
(statearr_31979[(12)] = inst_31889);

(statearr_31979[(13)] = inst_31886);

(statearr_31979[(14)] = inst_31888);

(statearr_31979[(16)] = inst_31887);

return statearr_31979;
})();
var statearr_31980_33256 = state_31945__$1;
(statearr_31980_33256[(2)] = null);

(statearr_31980_33256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (10))){
var inst_31889 = (state_31945[(12)]);
var inst_31886 = (state_31945[(13)]);
var inst_31888 = (state_31945[(14)]);
var inst_31887 = (state_31945[(16)]);
var inst_31894 = cljs.core._nth(inst_31887,inst_31889);
var inst_31895 = cljs.core.async.muxch_STAR_(inst_31894);
var inst_31896 = cljs.core.async.close_BANG_(inst_31895);
var inst_31897 = (inst_31889 + (1));
var tmp31975 = inst_31886;
var tmp31976 = inst_31888;
var tmp31977 = inst_31887;
var inst_31886__$1 = tmp31975;
var inst_31887__$1 = tmp31977;
var inst_31888__$1 = tmp31976;
var inst_31889__$1 = inst_31897;
var state_31945__$1 = (function (){var statearr_31981 = state_31945;
(statearr_31981[(12)] = inst_31889__$1);

(statearr_31981[(13)] = inst_31886__$1);

(statearr_31981[(14)] = inst_31888__$1);

(statearr_31981[(17)] = inst_31896);

(statearr_31981[(16)] = inst_31887__$1);

return statearr_31981;
})();
var statearr_31982_33257 = state_31945__$1;
(statearr_31982_33257[(2)] = null);

(statearr_31982_33257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (18))){
var inst_31915 = (state_31945[(2)]);
var state_31945__$1 = state_31945;
var statearr_31983_33258 = state_31945__$1;
(statearr_31983_33258[(2)] = inst_31915);

(statearr_31983_33258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31946 === (8))){
var inst_31889 = (state_31945[(12)]);
var inst_31888 = (state_31945[(14)]);
var inst_31891 = (inst_31889 < inst_31888);
var inst_31892 = inst_31891;
var state_31945__$1 = state_31945;
if(cljs.core.truth_(inst_31892)){
var statearr_31984_33259 = state_31945__$1;
(statearr_31984_33259[(1)] = (10));

} else {
var statearr_31985_33260 = state_31945__$1;
(statearr_31985_33260[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_31986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31986[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_31986[(1)] = (1));

return statearr_31986;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_31945){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_31945);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e31987){var ex__30370__auto__ = e31987;
var statearr_31988_33263 = state_31945;
(statearr_31988_33263[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_31945[(4)]))){
var statearr_31989_33264 = state_31945;
(statearr_31989_33264[(1)] = cljs.core.first((state_31945[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33265 = state_31945;
state_31945 = G__33265;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_31945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_31945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_31990 = f__30618__auto__();
(statearr_31990[(6)] = c__30617__auto___33224);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31992 = arguments.length;
switch (G__31992) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31994 = arguments.length;
switch (G__31994) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31996 = arguments.length;
switch (G__31996) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30617__auto___33287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32039){
var state_val_32040 = (state_32039[(1)]);
if((state_val_32040 === (7))){
var state_32039__$1 = state_32039;
var statearr_32041_33289 = state_32039__$1;
(statearr_32041_33289[(2)] = null);

(statearr_32041_33289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (1))){
var state_32039__$1 = state_32039;
var statearr_32042_33290 = state_32039__$1;
(statearr_32042_33290[(2)] = null);

(statearr_32042_33290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (4))){
var inst_32000 = (state_32039[(7)]);
var inst_31999 = (state_32039[(8)]);
var inst_32002 = (inst_32000 < inst_31999);
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_32002)){
var statearr_32043_33291 = state_32039__$1;
(statearr_32043_33291[(1)] = (6));

} else {
var statearr_32044_33292 = state_32039__$1;
(statearr_32044_33292[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (15))){
var inst_32025 = (state_32039[(9)]);
var inst_32030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32025);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32039__$1,(17),out,inst_32030);
} else {
if((state_val_32040 === (13))){
var inst_32025 = (state_32039[(9)]);
var inst_32025__$1 = (state_32039[(2)]);
var inst_32026 = cljs.core.some(cljs.core.nil_QMARK_,inst_32025__$1);
var state_32039__$1 = (function (){var statearr_32045 = state_32039;
(statearr_32045[(9)] = inst_32025__$1);

return statearr_32045;
})();
if(cljs.core.truth_(inst_32026)){
var statearr_32046_33293 = state_32039__$1;
(statearr_32046_33293[(1)] = (14));

} else {
var statearr_32047_33294 = state_32039__$1;
(statearr_32047_33294[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (6))){
var state_32039__$1 = state_32039;
var statearr_32048_33295 = state_32039__$1;
(statearr_32048_33295[(2)] = null);

(statearr_32048_33295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (17))){
var inst_32032 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32050 = state_32039;
(statearr_32050[(10)] = inst_32032);

return statearr_32050;
})();
var statearr_32051_33296 = state_32039__$1;
(statearr_32051_33296[(2)] = null);

(statearr_32051_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (3))){
var inst_32037 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32039__$1,inst_32037);
} else {
if((state_val_32040 === (12))){
var _ = (function (){var statearr_32052 = state_32039;
(statearr_32052[(4)] = cljs.core.rest((state_32039[(4)])));

return statearr_32052;
})();
var state_32039__$1 = state_32039;
var ex32049 = (state_32039__$1[(2)]);
var statearr_32053_33297 = state_32039__$1;
(statearr_32053_33297[(5)] = ex32049);


if((ex32049 instanceof Object)){
var statearr_32054_33298 = state_32039__$1;
(statearr_32054_33298[(1)] = (11));

(statearr_32054_33298[(5)] = null);

} else {
throw ex32049;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (2))){
var inst_31998 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31999 = cnt;
var inst_32000 = (0);
var state_32039__$1 = (function (){var statearr_32055 = state_32039;
(statearr_32055[(7)] = inst_32000);

(statearr_32055[(8)] = inst_31999);

(statearr_32055[(11)] = inst_31998);

return statearr_32055;
})();
var statearr_32056_33299 = state_32039__$1;
(statearr_32056_33299[(2)] = null);

(statearr_32056_33299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (11))){
var inst_32004 = (state_32039[(2)]);
var inst_32005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32039__$1 = (function (){var statearr_32057 = state_32039;
(statearr_32057[(12)] = inst_32004);

return statearr_32057;
})();
var statearr_32058_33300 = state_32039__$1;
(statearr_32058_33300[(2)] = inst_32005);

(statearr_32058_33300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (9))){
var inst_32000 = (state_32039[(7)]);
var _ = (function (){var statearr_32059 = state_32039;
(statearr_32059[(4)] = cljs.core.cons((12),(state_32039[(4)])));

return statearr_32059;
})();
var inst_32011 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32000) : chs__$1.call(null,inst_32000));
var inst_32012 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32000) : done.call(null,inst_32000));
var inst_32013 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32011,inst_32012);
var ___$1 = (function (){var statearr_32060 = state_32039;
(statearr_32060[(4)] = cljs.core.rest((state_32039[(4)])));

return statearr_32060;
})();
var state_32039__$1 = state_32039;
var statearr_32061_33301 = state_32039__$1;
(statearr_32061_33301[(2)] = inst_32013);

(statearr_32061_33301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (5))){
var inst_32023 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32062 = state_32039;
(statearr_32062[(13)] = inst_32023);

return statearr_32062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32039__$1,(13),dchan);
} else {
if((state_val_32040 === (14))){
var inst_32028 = cljs.core.async.close_BANG_(out);
var state_32039__$1 = state_32039;
var statearr_32063_33306 = state_32039__$1;
(statearr_32063_33306[(2)] = inst_32028);

(statearr_32063_33306[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (16))){
var inst_32035 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32064_33307 = state_32039__$1;
(statearr_32064_33307[(2)] = inst_32035);

(statearr_32064_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (10))){
var inst_32000 = (state_32039[(7)]);
var inst_32016 = (state_32039[(2)]);
var inst_32017 = (inst_32000 + (1));
var inst_32000__$1 = inst_32017;
var state_32039__$1 = (function (){var statearr_32065 = state_32039;
(statearr_32065[(7)] = inst_32000__$1);

(statearr_32065[(14)] = inst_32016);

return statearr_32065;
})();
var statearr_32066_33308 = state_32039__$1;
(statearr_32066_33308[(2)] = null);

(statearr_32066_33308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (8))){
var inst_32021 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32067_33309 = state_32039__$1;
(statearr_32067_33309[(2)] = inst_32021);

(statearr_32067_33309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32068[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32068[(1)] = (1));

return statearr_32068;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32039){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32039);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32069){var ex__30370__auto__ = e32069;
var statearr_32070_33311 = state_32039;
(statearr_32070_33311[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32039[(4)]))){
var statearr_32071_33312 = state_32039;
(statearr_32071_33312[(1)] = cljs.core.first((state_32039[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33313 = state_32039;
state_32039 = G__33313;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32072 = f__30618__auto__();
(statearr_32072[(6)] = c__30617__auto___33287);

return statearr_32072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32075 = arguments.length;
switch (G__32075) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30617__auto___33317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32107){
var state_val_32108 = (state_32107[(1)]);
if((state_val_32108 === (7))){
var inst_32086 = (state_32107[(7)]);
var inst_32087 = (state_32107[(8)]);
var inst_32086__$1 = (state_32107[(2)]);
var inst_32087__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32086__$1,(0),null);
var inst_32088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32086__$1,(1),null);
var inst_32089 = (inst_32087__$1 == null);
var state_32107__$1 = (function (){var statearr_32109 = state_32107;
(statearr_32109[(7)] = inst_32086__$1);

(statearr_32109[(9)] = inst_32088);

(statearr_32109[(8)] = inst_32087__$1);

return statearr_32109;
})();
if(cljs.core.truth_(inst_32089)){
var statearr_32110_33319 = state_32107__$1;
(statearr_32110_33319[(1)] = (8));

} else {
var statearr_32111_33320 = state_32107__$1;
(statearr_32111_33320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (1))){
var inst_32076 = cljs.core.vec(chs);
var inst_32077 = inst_32076;
var state_32107__$1 = (function (){var statearr_32112 = state_32107;
(statearr_32112[(10)] = inst_32077);

return statearr_32112;
})();
var statearr_32113_33321 = state_32107__$1;
(statearr_32113_33321[(2)] = null);

(statearr_32113_33321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (4))){
var inst_32077 = (state_32107[(10)]);
var state_32107__$1 = state_32107;
return cljs.core.async.ioc_alts_BANG_(state_32107__$1,(7),inst_32077);
} else {
if((state_val_32108 === (6))){
var inst_32103 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32114_33323 = state_32107__$1;
(statearr_32114_33323[(2)] = inst_32103);

(statearr_32114_33323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (3))){
var inst_32105 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32107__$1,inst_32105);
} else {
if((state_val_32108 === (2))){
var inst_32077 = (state_32107[(10)]);
var inst_32079 = cljs.core.count(inst_32077);
var inst_32080 = (inst_32079 > (0));
var state_32107__$1 = state_32107;
if(cljs.core.truth_(inst_32080)){
var statearr_32116_33324 = state_32107__$1;
(statearr_32116_33324[(1)] = (4));

} else {
var statearr_32117_33325 = state_32107__$1;
(statearr_32117_33325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (11))){
var inst_32077 = (state_32107[(10)]);
var inst_32096 = (state_32107[(2)]);
var tmp32115 = inst_32077;
var inst_32077__$1 = tmp32115;
var state_32107__$1 = (function (){var statearr_32118 = state_32107;
(statearr_32118[(11)] = inst_32096);

(statearr_32118[(10)] = inst_32077__$1);

return statearr_32118;
})();
var statearr_32119_33327 = state_32107__$1;
(statearr_32119_33327[(2)] = null);

(statearr_32119_33327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (9))){
var inst_32087 = (state_32107[(8)]);
var state_32107__$1 = state_32107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32107__$1,(11),out,inst_32087);
} else {
if((state_val_32108 === (5))){
var inst_32101 = cljs.core.async.close_BANG_(out);
var state_32107__$1 = state_32107;
var statearr_32120_33328 = state_32107__$1;
(statearr_32120_33328[(2)] = inst_32101);

(statearr_32120_33328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (10))){
var inst_32099 = (state_32107[(2)]);
var state_32107__$1 = state_32107;
var statearr_32121_33329 = state_32107__$1;
(statearr_32121_33329[(2)] = inst_32099);

(statearr_32121_33329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32108 === (8))){
var inst_32086 = (state_32107[(7)]);
var inst_32088 = (state_32107[(9)]);
var inst_32087 = (state_32107[(8)]);
var inst_32077 = (state_32107[(10)]);
var inst_32091 = (function (){var cs = inst_32077;
var vec__32082 = inst_32086;
var v = inst_32087;
var c = inst_32088;
return (function (p1__32073_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32073_SHARP_);
});
})();
var inst_32092 = cljs.core.filterv(inst_32091,inst_32077);
var inst_32077__$1 = inst_32092;
var state_32107__$1 = (function (){var statearr_32122 = state_32107;
(statearr_32122[(10)] = inst_32077__$1);

return statearr_32122;
})();
var statearr_32123_33330 = state_32107__$1;
(statearr_32123_33330[(2)] = null);

(statearr_32123_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32124[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32124[(1)] = (1));

return statearr_32124;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32107){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32107);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32125){var ex__30370__auto__ = e32125;
var statearr_32126_33336 = state_32107;
(statearr_32126_33336[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32107[(4)]))){
var statearr_32127_33337 = state_32107;
(statearr_32127_33337[(1)] = cljs.core.first((state_32107[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33342 = state_32107;
state_32107 = G__33342;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32128 = f__30618__auto__();
(statearr_32128[(6)] = c__30617__auto___33317);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32130 = arguments.length;
switch (G__32130) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30617__auto___33350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32154){
var state_val_32155 = (state_32154[(1)]);
if((state_val_32155 === (7))){
var inst_32136 = (state_32154[(7)]);
var inst_32136__$1 = (state_32154[(2)]);
var inst_32137 = (inst_32136__$1 == null);
var inst_32138 = cljs.core.not(inst_32137);
var state_32154__$1 = (function (){var statearr_32156 = state_32154;
(statearr_32156[(7)] = inst_32136__$1);

return statearr_32156;
})();
if(inst_32138){
var statearr_32157_33351 = state_32154__$1;
(statearr_32157_33351[(1)] = (8));

} else {
var statearr_32158_33352 = state_32154__$1;
(statearr_32158_33352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (1))){
var inst_32131 = (0);
var state_32154__$1 = (function (){var statearr_32159 = state_32154;
(statearr_32159[(8)] = inst_32131);

return statearr_32159;
})();
var statearr_32160_33353 = state_32154__$1;
(statearr_32160_33353[(2)] = null);

(statearr_32160_33353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (4))){
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32154__$1,(7),ch);
} else {
if((state_val_32155 === (6))){
var inst_32149 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32161_33354 = state_32154__$1;
(statearr_32161_33354[(2)] = inst_32149);

(statearr_32161_33354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (3))){
var inst_32151 = (state_32154[(2)]);
var inst_32152 = cljs.core.async.close_BANG_(out);
var state_32154__$1 = (function (){var statearr_32162 = state_32154;
(statearr_32162[(9)] = inst_32151);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32154__$1,inst_32152);
} else {
if((state_val_32155 === (2))){
var inst_32131 = (state_32154[(8)]);
var inst_32133 = (inst_32131 < n);
var state_32154__$1 = state_32154;
if(cljs.core.truth_(inst_32133)){
var statearr_32163_33355 = state_32154__$1;
(statearr_32163_33355[(1)] = (4));

} else {
var statearr_32164_33356 = state_32154__$1;
(statearr_32164_33356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (11))){
var inst_32131 = (state_32154[(8)]);
var inst_32141 = (state_32154[(2)]);
var inst_32142 = (inst_32131 + (1));
var inst_32131__$1 = inst_32142;
var state_32154__$1 = (function (){var statearr_32165 = state_32154;
(statearr_32165[(8)] = inst_32131__$1);

(statearr_32165[(10)] = inst_32141);

return statearr_32165;
})();
var statearr_32166_33357 = state_32154__$1;
(statearr_32166_33357[(2)] = null);

(statearr_32166_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (9))){
var state_32154__$1 = state_32154;
var statearr_32167_33358 = state_32154__$1;
(statearr_32167_33358[(2)] = null);

(statearr_32167_33358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (5))){
var state_32154__$1 = state_32154;
var statearr_32168_33359 = state_32154__$1;
(statearr_32168_33359[(2)] = null);

(statearr_32168_33359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (10))){
var inst_32146 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32169_33360 = state_32154__$1;
(statearr_32169_33360[(2)] = inst_32146);

(statearr_32169_33360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (8))){
var inst_32136 = (state_32154[(7)]);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32154__$1,(11),out,inst_32136);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32170[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32170[(1)] = (1));

return statearr_32170;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32154){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32154);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32171){var ex__30370__auto__ = e32171;
var statearr_32172_33361 = state_32154;
(statearr_32172_33361[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32154[(4)]))){
var statearr_32173_33365 = state_32154;
(statearr_32173_33365[(1)] = cljs.core.first((state_32154[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33366 = state_32154;
state_32154 = G__33366;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32174 = f__30618__auto__();
(statearr_32174[(6)] = c__30617__auto___33350);

return statearr_32174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32176 = (function (f,ch,meta32177){
this.f = f;
this.ch = ch;
this.meta32177 = meta32177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32178,meta32177__$1){
var self__ = this;
var _32178__$1 = this;
return (new cljs.core.async.t_cljs$core$async32176(self__.f,self__.ch,meta32177__$1));
}));

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32178){
var self__ = this;
var _32178__$1 = this;
return self__.meta32177;
}));

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32179 = (function (f,ch,meta32177,_,fn1,meta32180){
this.f = f;
this.ch = ch;
this.meta32177 = meta32177;
this._ = _;
this.fn1 = fn1;
this.meta32180 = meta32180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32181,meta32180__$1){
var self__ = this;
var _32181__$1 = this;
return (new cljs.core.async.t_cljs$core$async32179(self__.f,self__.ch,self__.meta32177,self__._,self__.fn1,meta32180__$1));
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32181){
var self__ = this;
var _32181__$1 = this;
return self__.meta32180;
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32175_SHARP_){
var G__32182 = (((p1__32175_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32175_SHARP_) : self__.f.call(null,p1__32175_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32182) : f1.call(null,G__32182));
});
}));

(cljs.core.async.t_cljs$core$async32179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32177","meta32177",-647854817,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32176","cljs.core.async/t_cljs$core$async32176",475890770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32180","meta32180",-1483584764,null)], null);
}));

(cljs.core.async.t_cljs$core$async32179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32179");

(cljs.core.async.t_cljs$core$async32179.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32179.
 */
cljs.core.async.__GT_t_cljs$core$async32179 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32179(f__$1,ch__$1,meta32177__$1,___$2,fn1__$1,meta32180){
return (new cljs.core.async.t_cljs$core$async32179(f__$1,ch__$1,meta32177__$1,___$2,fn1__$1,meta32180));
});

}

return (new cljs.core.async.t_cljs$core$async32179(self__.f,self__.ch,self__.meta32177,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32183 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32183) : self__.f.call(null,G__32183));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32177","meta32177",-647854817,null)], null);
}));

(cljs.core.async.t_cljs$core$async32176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32176");

(cljs.core.async.t_cljs$core$async32176.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32176.
 */
cljs.core.async.__GT_t_cljs$core$async32176 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32176(f__$1,ch__$1,meta32177){
return (new cljs.core.async.t_cljs$core$async32176(f__$1,ch__$1,meta32177));
});

}

return (new cljs.core.async.t_cljs$core$async32176(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32184 = (function (f,ch,meta32185){
this.f = f;
this.ch = ch;
this.meta32185 = meta32185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32186,meta32185__$1){
var self__ = this;
var _32186__$1 = this;
return (new cljs.core.async.t_cljs$core$async32184(self__.f,self__.ch,meta32185__$1));
}));

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32186){
var self__ = this;
var _32186__$1 = this;
return self__.meta32185;
}));

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32185","meta32185",738060941,null)], null);
}));

(cljs.core.async.t_cljs$core$async32184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32184");

(cljs.core.async.t_cljs$core$async32184.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32184.
 */
cljs.core.async.__GT_t_cljs$core$async32184 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32184(f__$1,ch__$1,meta32185){
return (new cljs.core.async.t_cljs$core$async32184(f__$1,ch__$1,meta32185));
});

}

return (new cljs.core.async.t_cljs$core$async32184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32187 = (function (p,ch,meta32188){
this.p = p;
this.ch = ch;
this.meta32188 = meta32188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32189,meta32188__$1){
var self__ = this;
var _32189__$1 = this;
return (new cljs.core.async.t_cljs$core$async32187(self__.p,self__.ch,meta32188__$1));
}));

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32189){
var self__ = this;
var _32189__$1 = this;
return self__.meta32188;
}));

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32188","meta32188",798270508,null)], null);
}));

(cljs.core.async.t_cljs$core$async32187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32187");

(cljs.core.async.t_cljs$core$async32187.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32187.
 */
cljs.core.async.__GT_t_cljs$core$async32187 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32187(p__$1,ch__$1,meta32188){
return (new cljs.core.async.t_cljs$core$async32187(p__$1,ch__$1,meta32188));
});

}

return (new cljs.core.async.t_cljs$core$async32187(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32191 = arguments.length;
switch (G__32191) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30617__auto___33402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32212){
var state_val_32213 = (state_32212[(1)]);
if((state_val_32213 === (7))){
var inst_32208 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32214_33403 = state_32212__$1;
(statearr_32214_33403[(2)] = inst_32208);

(statearr_32214_33403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (1))){
var state_32212__$1 = state_32212;
var statearr_32215_33404 = state_32212__$1;
(statearr_32215_33404[(2)] = null);

(statearr_32215_33404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (4))){
var inst_32194 = (state_32212[(7)]);
var inst_32194__$1 = (state_32212[(2)]);
var inst_32195 = (inst_32194__$1 == null);
var state_32212__$1 = (function (){var statearr_32216 = state_32212;
(statearr_32216[(7)] = inst_32194__$1);

return statearr_32216;
})();
if(cljs.core.truth_(inst_32195)){
var statearr_32217_33410 = state_32212__$1;
(statearr_32217_33410[(1)] = (5));

} else {
var statearr_32218_33412 = state_32212__$1;
(statearr_32218_33412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (6))){
var inst_32194 = (state_32212[(7)]);
var inst_32199 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32194) : p.call(null,inst_32194));
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32199)){
var statearr_32219_33418 = state_32212__$1;
(statearr_32219_33418[(1)] = (8));

} else {
var statearr_32220_33423 = state_32212__$1;
(statearr_32220_33423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (3))){
var inst_32210 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32212__$1,inst_32210);
} else {
if((state_val_32213 === (2))){
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32212__$1,(4),ch);
} else {
if((state_val_32213 === (11))){
var inst_32202 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32221_33429 = state_32212__$1;
(statearr_32221_33429[(2)] = inst_32202);

(statearr_32221_33429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (9))){
var state_32212__$1 = state_32212;
var statearr_32222_33430 = state_32212__$1;
(statearr_32222_33430[(2)] = null);

(statearr_32222_33430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (5))){
var inst_32197 = cljs.core.async.close_BANG_(out);
var state_32212__$1 = state_32212;
var statearr_32223_33431 = state_32212__$1;
(statearr_32223_33431[(2)] = inst_32197);

(statearr_32223_33431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (10))){
var inst_32205 = (state_32212[(2)]);
var state_32212__$1 = (function (){var statearr_32224 = state_32212;
(statearr_32224[(8)] = inst_32205);

return statearr_32224;
})();
var statearr_32225_33432 = state_32212__$1;
(statearr_32225_33432[(2)] = null);

(statearr_32225_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (8))){
var inst_32194 = (state_32212[(7)]);
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32212__$1,(11),out,inst_32194);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32226 = [null,null,null,null,null,null,null,null,null];
(statearr_32226[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32226[(1)] = (1));

return statearr_32226;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32212){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32212);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32227){var ex__30370__auto__ = e32227;
var statearr_32228_33433 = state_32212;
(statearr_32228_33433[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32212[(4)]))){
var statearr_32229_33434 = state_32212;
(statearr_32229_33434[(1)] = cljs.core.first((state_32212[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33435 = state_32212;
state_32212 = G__33435;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32230 = f__30618__auto__();
(statearr_32230[(6)] = c__30617__auto___33402);

return statearr_32230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32232 = arguments.length;
switch (G__32232) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32294){
var state_val_32295 = (state_32294[(1)]);
if((state_val_32295 === (7))){
var inst_32290 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32296_33499 = state_32294__$1;
(statearr_32296_33499[(2)] = inst_32290);

(statearr_32296_33499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (20))){
var inst_32260 = (state_32294[(7)]);
var inst_32271 = (state_32294[(2)]);
var inst_32272 = cljs.core.next(inst_32260);
var inst_32246 = inst_32272;
var inst_32247 = null;
var inst_32248 = (0);
var inst_32249 = (0);
var state_32294__$1 = (function (){var statearr_32297 = state_32294;
(statearr_32297[(8)] = inst_32248);

(statearr_32297[(9)] = inst_32271);

(statearr_32297[(10)] = inst_32247);

(statearr_32297[(11)] = inst_32246);

(statearr_32297[(12)] = inst_32249);

return statearr_32297;
})();
var statearr_32298_33500 = state_32294__$1;
(statearr_32298_33500[(2)] = null);

(statearr_32298_33500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (1))){
var state_32294__$1 = state_32294;
var statearr_32299_33501 = state_32294__$1;
(statearr_32299_33501[(2)] = null);

(statearr_32299_33501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (4))){
var inst_32235 = (state_32294[(13)]);
var inst_32235__$1 = (state_32294[(2)]);
var inst_32236 = (inst_32235__$1 == null);
var state_32294__$1 = (function (){var statearr_32300 = state_32294;
(statearr_32300[(13)] = inst_32235__$1);

return statearr_32300;
})();
if(cljs.core.truth_(inst_32236)){
var statearr_32301_33502 = state_32294__$1;
(statearr_32301_33502[(1)] = (5));

} else {
var statearr_32302_33503 = state_32294__$1;
(statearr_32302_33503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (15))){
var state_32294__$1 = state_32294;
var statearr_32306_33504 = state_32294__$1;
(statearr_32306_33504[(2)] = null);

(statearr_32306_33504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (21))){
var state_32294__$1 = state_32294;
var statearr_32307_33505 = state_32294__$1;
(statearr_32307_33505[(2)] = null);

(statearr_32307_33505[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (13))){
var inst_32248 = (state_32294[(8)]);
var inst_32247 = (state_32294[(10)]);
var inst_32246 = (state_32294[(11)]);
var inst_32249 = (state_32294[(12)]);
var inst_32256 = (state_32294[(2)]);
var inst_32257 = (inst_32249 + (1));
var tmp32303 = inst_32248;
var tmp32304 = inst_32247;
var tmp32305 = inst_32246;
var inst_32246__$1 = tmp32305;
var inst_32247__$1 = tmp32304;
var inst_32248__$1 = tmp32303;
var inst_32249__$1 = inst_32257;
var state_32294__$1 = (function (){var statearr_32308 = state_32294;
(statearr_32308[(8)] = inst_32248__$1);

(statearr_32308[(10)] = inst_32247__$1);

(statearr_32308[(11)] = inst_32246__$1);

(statearr_32308[(12)] = inst_32249__$1);

(statearr_32308[(14)] = inst_32256);

return statearr_32308;
})();
var statearr_32309_33522 = state_32294__$1;
(statearr_32309_33522[(2)] = null);

(statearr_32309_33522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (22))){
var state_32294__$1 = state_32294;
var statearr_32310_33523 = state_32294__$1;
(statearr_32310_33523[(2)] = null);

(statearr_32310_33523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (6))){
var inst_32235 = (state_32294[(13)]);
var inst_32244 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32235) : f.call(null,inst_32235));
var inst_32245 = cljs.core.seq(inst_32244);
var inst_32246 = inst_32245;
var inst_32247 = null;
var inst_32248 = (0);
var inst_32249 = (0);
var state_32294__$1 = (function (){var statearr_32311 = state_32294;
(statearr_32311[(8)] = inst_32248);

(statearr_32311[(10)] = inst_32247);

(statearr_32311[(11)] = inst_32246);

(statearr_32311[(12)] = inst_32249);

return statearr_32311;
})();
var statearr_32312_33524 = state_32294__$1;
(statearr_32312_33524[(2)] = null);

(statearr_32312_33524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (17))){
var inst_32260 = (state_32294[(7)]);
var inst_32264 = cljs.core.chunk_first(inst_32260);
var inst_32265 = cljs.core.chunk_rest(inst_32260);
var inst_32266 = cljs.core.count(inst_32264);
var inst_32246 = inst_32265;
var inst_32247 = inst_32264;
var inst_32248 = inst_32266;
var inst_32249 = (0);
var state_32294__$1 = (function (){var statearr_32313 = state_32294;
(statearr_32313[(8)] = inst_32248);

(statearr_32313[(10)] = inst_32247);

(statearr_32313[(11)] = inst_32246);

(statearr_32313[(12)] = inst_32249);

return statearr_32313;
})();
var statearr_32314_33525 = state_32294__$1;
(statearr_32314_33525[(2)] = null);

(statearr_32314_33525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (3))){
var inst_32292 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32294__$1,inst_32292);
} else {
if((state_val_32295 === (12))){
var inst_32280 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32315_33528 = state_32294__$1;
(statearr_32315_33528[(2)] = inst_32280);

(statearr_32315_33528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (2))){
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32294__$1,(4),in$);
} else {
if((state_val_32295 === (23))){
var inst_32288 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32316_33530 = state_32294__$1;
(statearr_32316_33530[(2)] = inst_32288);

(statearr_32316_33530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (19))){
var inst_32275 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32317_33536 = state_32294__$1;
(statearr_32317_33536[(2)] = inst_32275);

(statearr_32317_33536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (11))){
var inst_32260 = (state_32294[(7)]);
var inst_32246 = (state_32294[(11)]);
var inst_32260__$1 = cljs.core.seq(inst_32246);
var state_32294__$1 = (function (){var statearr_32320 = state_32294;
(statearr_32320[(7)] = inst_32260__$1);

return statearr_32320;
})();
if(inst_32260__$1){
var statearr_32321_33544 = state_32294__$1;
(statearr_32321_33544[(1)] = (14));

} else {
var statearr_32322_33549 = state_32294__$1;
(statearr_32322_33549[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (9))){
var inst_32282 = (state_32294[(2)]);
var inst_32283 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32294__$1 = (function (){var statearr_32323 = state_32294;
(statearr_32323[(15)] = inst_32282);

return statearr_32323;
})();
if(cljs.core.truth_(inst_32283)){
var statearr_32324_33555 = state_32294__$1;
(statearr_32324_33555[(1)] = (21));

} else {
var statearr_32325_33556 = state_32294__$1;
(statearr_32325_33556[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (5))){
var inst_32238 = cljs.core.async.close_BANG_(out);
var state_32294__$1 = state_32294;
var statearr_32326_33578 = state_32294__$1;
(statearr_32326_33578[(2)] = inst_32238);

(statearr_32326_33578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (14))){
var inst_32260 = (state_32294[(7)]);
var inst_32262 = cljs.core.chunked_seq_QMARK_(inst_32260);
var state_32294__$1 = state_32294;
if(inst_32262){
var statearr_32327_33579 = state_32294__$1;
(statearr_32327_33579[(1)] = (17));

} else {
var statearr_32329_33580 = state_32294__$1;
(statearr_32329_33580[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (16))){
var inst_32278 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32330_33581 = state_32294__$1;
(statearr_32330_33581[(2)] = inst_32278);

(statearr_32330_33581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (10))){
var inst_32247 = (state_32294[(10)]);
var inst_32249 = (state_32294[(12)]);
var inst_32254 = cljs.core._nth(inst_32247,inst_32249);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32294__$1,(13),out,inst_32254);
} else {
if((state_val_32295 === (18))){
var inst_32260 = (state_32294[(7)]);
var inst_32269 = cljs.core.first(inst_32260);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32294__$1,(20),out,inst_32269);
} else {
if((state_val_32295 === (8))){
var inst_32248 = (state_32294[(8)]);
var inst_32249 = (state_32294[(12)]);
var inst_32251 = (inst_32249 < inst_32248);
var inst_32252 = inst_32251;
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32252)){
var statearr_32331_33582 = state_32294__$1;
(statearr_32331_33582[(1)] = (10));

} else {
var statearr_32332_33583 = state_32294__$1;
(statearr_32332_33583[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30367__auto____0 = (function (){
var statearr_32333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32333[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30367__auto__);

(statearr_32333[(1)] = (1));

return statearr_32333;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30367__auto____1 = (function (state_32294){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32294);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32338){var ex__30370__auto__ = e32338;
var statearr_32339_33584 = state_32294;
(statearr_32339_33584[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32294[(4)]))){
var statearr_32340_33585 = state_32294;
(statearr_32340_33585[(1)] = cljs.core.first((state_32294[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33586 = state_32294;
state_32294 = G__33586;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30367__auto__ = function(state_32294){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30367__auto____1.call(this,state_32294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32341 = f__30618__auto__();
(statearr_32341[(6)] = c__30617__auto__);

return statearr_32341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));

return c__30617__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32343 = arguments.length;
switch (G__32343) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32347 = arguments.length;
switch (G__32347) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32349 = arguments.length;
switch (G__32349) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30617__auto___33607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32373){
var state_val_32374 = (state_32373[(1)]);
if((state_val_32374 === (7))){
var inst_32368 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32375_33608 = state_32373__$1;
(statearr_32375_33608[(2)] = inst_32368);

(statearr_32375_33608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (1))){
var inst_32350 = null;
var state_32373__$1 = (function (){var statearr_32376 = state_32373;
(statearr_32376[(7)] = inst_32350);

return statearr_32376;
})();
var statearr_32377_33609 = state_32373__$1;
(statearr_32377_33609[(2)] = null);

(statearr_32377_33609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (4))){
var inst_32353 = (state_32373[(8)]);
var inst_32353__$1 = (state_32373[(2)]);
var inst_32354 = (inst_32353__$1 == null);
var inst_32355 = cljs.core.not(inst_32354);
var state_32373__$1 = (function (){var statearr_32378 = state_32373;
(statearr_32378[(8)] = inst_32353__$1);

return statearr_32378;
})();
if(inst_32355){
var statearr_32379_33610 = state_32373__$1;
(statearr_32379_33610[(1)] = (5));

} else {
var statearr_32380_33611 = state_32373__$1;
(statearr_32380_33611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (6))){
var state_32373__$1 = state_32373;
var statearr_32381_33612 = state_32373__$1;
(statearr_32381_33612[(2)] = null);

(statearr_32381_33612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (3))){
var inst_32370 = (state_32373[(2)]);
var inst_32371 = cljs.core.async.close_BANG_(out);
var state_32373__$1 = (function (){var statearr_32382 = state_32373;
(statearr_32382[(9)] = inst_32370);

return statearr_32382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32373__$1,inst_32371);
} else {
if((state_val_32374 === (2))){
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32373__$1,(4),ch);
} else {
if((state_val_32374 === (11))){
var inst_32353 = (state_32373[(8)]);
var inst_32362 = (state_32373[(2)]);
var inst_32350 = inst_32353;
var state_32373__$1 = (function (){var statearr_32383 = state_32373;
(statearr_32383[(7)] = inst_32350);

(statearr_32383[(10)] = inst_32362);

return statearr_32383;
})();
var statearr_32384_33613 = state_32373__$1;
(statearr_32384_33613[(2)] = null);

(statearr_32384_33613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (9))){
var inst_32353 = (state_32373[(8)]);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32373__$1,(11),out,inst_32353);
} else {
if((state_val_32374 === (5))){
var inst_32350 = (state_32373[(7)]);
var inst_32353 = (state_32373[(8)]);
var inst_32357 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32353,inst_32350);
var state_32373__$1 = state_32373;
if(inst_32357){
var statearr_32386_33615 = state_32373__$1;
(statearr_32386_33615[(1)] = (8));

} else {
var statearr_32387_33616 = state_32373__$1;
(statearr_32387_33616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (10))){
var inst_32365 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32388_33617 = state_32373__$1;
(statearr_32388_33617[(2)] = inst_32365);

(statearr_32388_33617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (8))){
var inst_32350 = (state_32373[(7)]);
var tmp32385 = inst_32350;
var inst_32350__$1 = tmp32385;
var state_32373__$1 = (function (){var statearr_32389 = state_32373;
(statearr_32389[(7)] = inst_32350__$1);

return statearr_32389;
})();
var statearr_32390_33618 = state_32373__$1;
(statearr_32390_33618[(2)] = null);

(statearr_32390_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32399[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32399[(1)] = (1));

return statearr_32399;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32373){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32373);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32403){var ex__30370__auto__ = e32403;
var statearr_32404_33619 = state_32373;
(statearr_32404_33619[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32373[(4)]))){
var statearr_32405_33620 = state_32373;
(statearr_32405_33620[(1)] = cljs.core.first((state_32373[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33621 = state_32373;
state_32373 = G__33621;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32406 = f__30618__auto__();
(statearr_32406[(6)] = c__30617__auto___33607);

return statearr_32406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32409 = arguments.length;
switch (G__32409) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30617__auto___33623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32449){
var state_val_32450 = (state_32449[(1)]);
if((state_val_32450 === (7))){
var inst_32445 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32451_33624 = state_32449__$1;
(statearr_32451_33624[(2)] = inst_32445);

(statearr_32451_33624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (1))){
var inst_32411 = (new Array(n));
var inst_32412 = inst_32411;
var inst_32413 = (0);
var state_32449__$1 = (function (){var statearr_32452 = state_32449;
(statearr_32452[(7)] = inst_32412);

(statearr_32452[(8)] = inst_32413);

return statearr_32452;
})();
var statearr_32453_33625 = state_32449__$1;
(statearr_32453_33625[(2)] = null);

(statearr_32453_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (4))){
var inst_32416 = (state_32449[(9)]);
var inst_32416__$1 = (state_32449[(2)]);
var inst_32417 = (inst_32416__$1 == null);
var inst_32418 = cljs.core.not(inst_32417);
var state_32449__$1 = (function (){var statearr_32455 = state_32449;
(statearr_32455[(9)] = inst_32416__$1);

return statearr_32455;
})();
if(inst_32418){
var statearr_32456_33626 = state_32449__$1;
(statearr_32456_33626[(1)] = (5));

} else {
var statearr_32457_33627 = state_32449__$1;
(statearr_32457_33627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (15))){
var inst_32439 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32459_33628 = state_32449__$1;
(statearr_32459_33628[(2)] = inst_32439);

(statearr_32459_33628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (13))){
var state_32449__$1 = state_32449;
var statearr_32461_33629 = state_32449__$1;
(statearr_32461_33629[(2)] = null);

(statearr_32461_33629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (6))){
var inst_32413 = (state_32449[(8)]);
var inst_32435 = (inst_32413 > (0));
var state_32449__$1 = state_32449;
if(cljs.core.truth_(inst_32435)){
var statearr_32462_33630 = state_32449__$1;
(statearr_32462_33630[(1)] = (12));

} else {
var statearr_32463_33631 = state_32449__$1;
(statearr_32463_33631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (3))){
var inst_32447 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32449__$1,inst_32447);
} else {
if((state_val_32450 === (12))){
var inst_32412 = (state_32449[(7)]);
var inst_32437 = cljs.core.vec(inst_32412);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32449__$1,(15),out,inst_32437);
} else {
if((state_val_32450 === (2))){
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32449__$1,(4),ch);
} else {
if((state_val_32450 === (11))){
var inst_32429 = (state_32449[(2)]);
var inst_32430 = (new Array(n));
var inst_32412 = inst_32430;
var inst_32413 = (0);
var state_32449__$1 = (function (){var statearr_32465 = state_32449;
(statearr_32465[(7)] = inst_32412);

(statearr_32465[(8)] = inst_32413);

(statearr_32465[(10)] = inst_32429);

return statearr_32465;
})();
var statearr_32466_33632 = state_32449__$1;
(statearr_32466_33632[(2)] = null);

(statearr_32466_33632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (9))){
var inst_32412 = (state_32449[(7)]);
var inst_32427 = cljs.core.vec(inst_32412);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32449__$1,(11),out,inst_32427);
} else {
if((state_val_32450 === (5))){
var inst_32421 = (state_32449[(11)]);
var inst_32416 = (state_32449[(9)]);
var inst_32412 = (state_32449[(7)]);
var inst_32413 = (state_32449[(8)]);
var inst_32420 = (inst_32412[inst_32413] = inst_32416);
var inst_32421__$1 = (inst_32413 + (1));
var inst_32422 = (inst_32421__$1 < n);
var state_32449__$1 = (function (){var statearr_32467 = state_32449;
(statearr_32467[(12)] = inst_32420);

(statearr_32467[(11)] = inst_32421__$1);

return statearr_32467;
})();
if(cljs.core.truth_(inst_32422)){
var statearr_32468_33634 = state_32449__$1;
(statearr_32468_33634[(1)] = (8));

} else {
var statearr_32469_33635 = state_32449__$1;
(statearr_32469_33635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (14))){
var inst_32442 = (state_32449[(2)]);
var inst_32443 = cljs.core.async.close_BANG_(out);
var state_32449__$1 = (function (){var statearr_32471 = state_32449;
(statearr_32471[(13)] = inst_32442);

return statearr_32471;
})();
var statearr_32472_33636 = state_32449__$1;
(statearr_32472_33636[(2)] = inst_32443);

(statearr_32472_33636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (10))){
var inst_32433 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32473_33637 = state_32449__$1;
(statearr_32473_33637[(2)] = inst_32433);

(statearr_32473_33637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (8))){
var inst_32421 = (state_32449[(11)]);
var inst_32412 = (state_32449[(7)]);
var tmp32470 = inst_32412;
var inst_32412__$1 = tmp32470;
var inst_32413 = inst_32421;
var state_32449__$1 = (function (){var statearr_32474 = state_32449;
(statearr_32474[(7)] = inst_32412__$1);

(statearr_32474[(8)] = inst_32413);

return statearr_32474;
})();
var statearr_32475_33638 = state_32449__$1;
(statearr_32475_33638[(2)] = null);

(statearr_32475_33638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32476[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32476[(1)] = (1));

return statearr_32476;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32449){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32449);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32477){var ex__30370__auto__ = e32477;
var statearr_32478_33639 = state_32449;
(statearr_32478_33639[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32449[(4)]))){
var statearr_32479_33640 = state_32449;
(statearr_32479_33640[(1)] = cljs.core.first((state_32449[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33641 = state_32449;
state_32449 = G__33641;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32480 = f__30618__auto__();
(statearr_32480[(6)] = c__30617__auto___33623);

return statearr_32480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32483 = arguments.length;
switch (G__32483) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30617__auto___33643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30618__auto__ = (function (){var switch__30366__auto__ = (function (state_32527){
var state_val_32528 = (state_32527[(1)]);
if((state_val_32528 === (7))){
var inst_32523 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32529_33644 = state_32527__$1;
(statearr_32529_33644[(2)] = inst_32523);

(statearr_32529_33644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (1))){
var inst_32485 = [];
var inst_32486 = inst_32485;
var inst_32487 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32527__$1 = (function (){var statearr_32530 = state_32527;
(statearr_32530[(7)] = inst_32487);

(statearr_32530[(8)] = inst_32486);

return statearr_32530;
})();
var statearr_32531_33645 = state_32527__$1;
(statearr_32531_33645[(2)] = null);

(statearr_32531_33645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (4))){
var inst_32490 = (state_32527[(9)]);
var inst_32490__$1 = (state_32527[(2)]);
var inst_32491 = (inst_32490__$1 == null);
var inst_32492 = cljs.core.not(inst_32491);
var state_32527__$1 = (function (){var statearr_32532 = state_32527;
(statearr_32532[(9)] = inst_32490__$1);

return statearr_32532;
})();
if(inst_32492){
var statearr_32533_33646 = state_32527__$1;
(statearr_32533_33646[(1)] = (5));

} else {
var statearr_32534_33647 = state_32527__$1;
(statearr_32534_33647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (15))){
var inst_32517 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32535_33648 = state_32527__$1;
(statearr_32535_33648[(2)] = inst_32517);

(statearr_32535_33648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (13))){
var state_32527__$1 = state_32527;
var statearr_32536_33649 = state_32527__$1;
(statearr_32536_33649[(2)] = null);

(statearr_32536_33649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (6))){
var inst_32486 = (state_32527[(8)]);
var inst_32512 = inst_32486.length;
var inst_32513 = (inst_32512 > (0));
var state_32527__$1 = state_32527;
if(cljs.core.truth_(inst_32513)){
var statearr_32537_33650 = state_32527__$1;
(statearr_32537_33650[(1)] = (12));

} else {
var statearr_32538_33651 = state_32527__$1;
(statearr_32538_33651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (3))){
var inst_32525 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32527__$1,inst_32525);
} else {
if((state_val_32528 === (12))){
var inst_32486 = (state_32527[(8)]);
var inst_32515 = cljs.core.vec(inst_32486);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32527__$1,(15),out,inst_32515);
} else {
if((state_val_32528 === (2))){
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32527__$1,(4),ch);
} else {
if((state_val_32528 === (11))){
var inst_32494 = (state_32527[(10)]);
var inst_32490 = (state_32527[(9)]);
var inst_32504 = (state_32527[(2)]);
var inst_32505 = [];
var inst_32506 = inst_32505.push(inst_32490);
var inst_32486 = inst_32505;
var inst_32487 = inst_32494;
var state_32527__$1 = (function (){var statearr_32539 = state_32527;
(statearr_32539[(11)] = inst_32504);

(statearr_32539[(7)] = inst_32487);

(statearr_32539[(12)] = inst_32506);

(statearr_32539[(8)] = inst_32486);

return statearr_32539;
})();
var statearr_32540_33654 = state_32527__$1;
(statearr_32540_33654[(2)] = null);

(statearr_32540_33654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (9))){
var inst_32486 = (state_32527[(8)]);
var inst_32502 = cljs.core.vec(inst_32486);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32527__$1,(11),out,inst_32502);
} else {
if((state_val_32528 === (5))){
var inst_32494 = (state_32527[(10)]);
var inst_32487 = (state_32527[(7)]);
var inst_32490 = (state_32527[(9)]);
var inst_32494__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32490) : f.call(null,inst_32490));
var inst_32495 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32494__$1,inst_32487);
var inst_32496 = cljs.core.keyword_identical_QMARK_(inst_32487,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32497 = ((inst_32495) || (inst_32496));
var state_32527__$1 = (function (){var statearr_32541 = state_32527;
(statearr_32541[(10)] = inst_32494__$1);

return statearr_32541;
})();
if(cljs.core.truth_(inst_32497)){
var statearr_32542_33656 = state_32527__$1;
(statearr_32542_33656[(1)] = (8));

} else {
var statearr_32543_33657 = state_32527__$1;
(statearr_32543_33657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (14))){
var inst_32520 = (state_32527[(2)]);
var inst_32521 = cljs.core.async.close_BANG_(out);
var state_32527__$1 = (function (){var statearr_32545 = state_32527;
(statearr_32545[(13)] = inst_32520);

return statearr_32545;
})();
var statearr_32546_33658 = state_32527__$1;
(statearr_32546_33658[(2)] = inst_32521);

(statearr_32546_33658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (10))){
var inst_32510 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32547_33659 = state_32527__$1;
(statearr_32547_33659[(2)] = inst_32510);

(statearr_32547_33659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (8))){
var inst_32494 = (state_32527[(10)]);
var inst_32490 = (state_32527[(9)]);
var inst_32486 = (state_32527[(8)]);
var inst_32499 = inst_32486.push(inst_32490);
var tmp32544 = inst_32486;
var inst_32486__$1 = tmp32544;
var inst_32487 = inst_32494;
var state_32527__$1 = (function (){var statearr_32548 = state_32527;
(statearr_32548[(7)] = inst_32487);

(statearr_32548[(14)] = inst_32499);

(statearr_32548[(8)] = inst_32486__$1);

return statearr_32548;
})();
var statearr_32549_33663 = state_32527__$1;
(statearr_32549_33663[(2)] = null);

(statearr_32549_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30367__auto__ = null;
var cljs$core$async$state_machine__30367__auto____0 = (function (){
var statearr_32550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32550[(0)] = cljs$core$async$state_machine__30367__auto__);

(statearr_32550[(1)] = (1));

return statearr_32550;
});
var cljs$core$async$state_machine__30367__auto____1 = (function (state_32527){
while(true){
var ret_value__30368__auto__ = (function (){try{while(true){
var result__30369__auto__ = switch__30366__auto__(state_32527);
if(cljs.core.keyword_identical_QMARK_(result__30369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30369__auto__;
}
break;
}
}catch (e32552){var ex__30370__auto__ = e32552;
var statearr_32553_33716 = state_32527;
(statearr_32553_33716[(2)] = ex__30370__auto__);


if(cljs.core.seq((state_32527[(4)]))){
var statearr_32554_33719 = state_32527;
(statearr_32554_33719[(1)] = cljs.core.first((state_32527[(4)])));

} else {
throw ex__30370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33722 = state_32527;
state_32527 = G__33722;
continue;
} else {
return ret_value__30368__auto__;
}
break;
}
});
cljs$core$async$state_machine__30367__auto__ = function(state_32527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30367__auto____1.call(this,state_32527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30367__auto____0;
cljs$core$async$state_machine__30367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30367__auto____1;
return cljs$core$async$state_machine__30367__auto__;
})()
})();
var state__30619__auto__ = (function (){var statearr_32557 = f__30618__auto__();
(statearr_32557[(6)] = c__30617__auto___33643);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30619__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
