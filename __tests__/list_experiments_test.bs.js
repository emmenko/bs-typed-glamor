// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List        = require("bs-platform/lib/js/list.js");
var $$String    = require("bs-platform/lib/js/string.js");
var TestHelpers = require("./TestHelpers.bs.js");
var TypedGlamor = require("../src/TypedGlamor.bs.js");

var linear = "linear";

function ident(prim) {
  return prim;
}

var all = "all";

function transitionProperty(v) {
  return /* tuple */[
          "transitionProperty",
          v
        ];
}

function transitionValue(prop, time, timingFunction) {
  return "" + (String(prop) + (" " + (String(time) + (" " + (String(timingFunction) + "")))));
}

function transition(v) {
  return /* tuple */[
          "transition",
          v
        ];
}

describe("cons - function", (function () {
        var empty_ = "";
        var cons = function (v, vs) {
          if (vs === "") {
            return v;
          } else {
            return "" + (String(v) + (", " + (String(vs) + "")));
          }
        };
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              TypedGlamor.none
            ], /* tuple */[
              "transitionProperty",
              "none"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              all
            ], /* tuple */[
              "transitionProperty",
              "all"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              "foo"
            ], /* tuple */[
              "transitionProperty",
              "foo"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              cons(all, cons("bar", empty_))
            ], /* tuple */[
              "transitionProperty",
              "all, bar"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              empty_
            ], /* tuple */[
              "transitionProperty",
              ""
            ]);
        var cons$1 = function (v, vs) {
          if (vs === "") {
            return v;
          } else {
            return "" + (String(v) + (", " + (String(vs) + "")));
          }
        };
        TestHelpers.testDeclaration(/* tuple */[
              "transition",
              TypedGlamor.none
            ], /* tuple */[
              "transition",
              "none"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transition",
              transitionValue(all, TypedGlamor.s(1), linear)
            ], /* tuple */[
              "transition",
              "all 1s linear"
            ]);
        return TestHelpers.testDeclaration(/* tuple */[
                    "transition",
                    cons$1(transitionValue(all, TypedGlamor.s(1), linear), cons$1(transitionValue("foo", TypedGlamor.ms(400), linear), ""))
                  ], /* tuple */[
                    "transition",
                    "all 1s linear, foo 400ms linear"
                  ]);
      }));

describe("cons - infix operator", (function () {
        var empty = "";
        var $star$star = function (v, vs) {
          if (vs === "") {
            return v;
          } else {
            return "" + (String(v) + (", " + (String(vs) + "")));
          }
        };
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              TypedGlamor.none
            ], /* tuple */[
              "transitionProperty",
              "none"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              all
            ], /* tuple */[
              "transitionProperty",
              "all"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              "foo"
            ], /* tuple */[
              "transitionProperty",
              "foo"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              $star$star(all, $star$star("bar", empty))
            ], /* tuple */[
              "transitionProperty",
              "all, bar"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              empty
            ], /* tuple */[
              "transitionProperty",
              ""
            ]);
        var $star$star$1 = function (v, vs) {
          if (vs === "") {
            return v;
          } else {
            return "" + (String(v) + (", " + (String(vs) + "")));
          }
        };
        TestHelpers.testDeclaration(/* tuple */[
              "transition",
              TypedGlamor.none
            ], /* tuple */[
              "transition",
              "none"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transition",
              transitionValue(all, TypedGlamor.s(1), linear)
            ], /* tuple */[
              "transition",
              "all 1s linear"
            ]);
        return TestHelpers.testDeclaration(/* tuple */[
                    "transition",
                    $star$star$1(transitionValue(all, TypedGlamor.s(1), linear), $star$star$1(transitionValue("foo", TypedGlamor.ms(400), linear), ""))
                  ], /* tuple */[
                    "transition",
                    "all 1s linear, foo 400ms linear"
                  ]);
      }));

describe("plural propoerty function", (function () {
        var transitionProperties = function (vs) {
          if (vs) {
            return /* tuple */[
                    "transitionProperty",
                    $$String.concat(", ", vs)
                  ];
          } else {
            return /* tuple */[
                    "transitionProperty",
                    "none"
                  ];
          }
        };
        var transitions = function (vs) {
          if (vs) {
            return /* tuple */[
                    "transition",
                    $$String.concat(", ", List.map((function (param) {
                                return "" + (String(param[0]) + (" " + (String(param[1]) + (" " + (String(param[2]) + (" " + (String(param[3]) + "")))))));
                              }), vs))
                  ];
          } else {
            return /* tuple */[
                    "transition",
                    "none"
                  ];
          }
        };
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              TypedGlamor.none
            ], /* tuple */[
              "transitionProperty",
              "none"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              all
            ], /* tuple */[
              "transitionProperty",
              "all"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transitionProperty",
              "foo"
            ], /* tuple */[
              "transitionProperty",
              "foo"
            ]);
        TestHelpers.testDeclaration(transitionProperties(/* :: */[
                  "all",
                  /* :: */[
                    "bar",
                    /* [] */0
                  ]
                ]), /* tuple */[
              "transitionProperty",
              "all, bar"
            ]);
        TestHelpers.testDeclaration(transitionProperties(/* [] */0), /* tuple */[
              "transitionProperty",
              "none"
            ]);
        TestHelpers.testDeclaration(/* tuple */[
              "transition",
              TypedGlamor.none
            ], /* tuple */[
              "transition",
              "none"
            ]);
        TestHelpers.testDeclaration(transitions(/* :: */[
                  /* tuple */[
                    "all",
                    TypedGlamor.s(1),
                    linear,
                    TypedGlamor.ms(200)
                  ],
                  /* :: */[
                    /* tuple */[
                      "foo",
                      TypedGlamor.ms(400),
                      linear,
                      TypedGlamor.s(1.2)
                    ],
                    /* [] */0
                  ]
                ]), /* tuple */[
              "transition",
              "all 1s linear 200ms, foo 400ms linear 1.2s"
            ]);
        return TestHelpers.testDeclaration(transitions(/* [] */0), /* tuple */[
                    "transition",
                    "none"
                  ]);
      }));

exports.linear             = linear;
exports.ident              = ident;
exports.all                = all;
exports.transitionProperty = transitionProperty;
exports.transitionValue    = transitionValue;
exports.transition         = transition;
/*  Not a pure module */
