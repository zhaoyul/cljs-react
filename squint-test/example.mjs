import * as squint_core from 'squint-cljs/core.js';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
squint_core.println(fs.existsSync(fileURLToPath(import.meta.url)));
var foo = function (p__1) {
let map__12 = p__1;
let a3 = squint_core.get(map__12, "a");
let b4 = squint_core.get(map__12, "b");
let c5 = squint_core.get(map__12, "c");
return (a3) + (b4) + (c5)
};
squint_core.println(foo(({ "a": 1, "b": 2, "c": 3 })));

export { foo }
