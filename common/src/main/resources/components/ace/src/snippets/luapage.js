/*
 * Copyright (c) 2021 Željko Obrenović. All rights reserved.
 */

ace.define("ace/snippets/luapage",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText =undefined;
exports.scope = "luapage";

});                (function() {
                    ace.require(["ace/snippets/luapage"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
