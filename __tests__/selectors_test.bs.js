// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Glamor      = require("../src/Glamor.bs.js");
var TestHelpers = require("./TestHelpers.bs.js");

TestHelpers.testSelector(Glamor.select(":whatever", /* :: */[
          Glamor.margin(Glamor.em(1)),
          /* [] */0
        ]), /* tuple */[
      ":whatever",
      /* :: */[
        /* tuple */[
          "margin",
          "1em"
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testSelector(Glamor.hover(/* :: */[
          Glamor.margin(Glamor.em(1)),
          /* [] */0
        ]), /* tuple */[
      ":hover",
      /* :: */[
        /* tuple */[
          "margin",
          "1em"
        ],
        /* [] */0
      ]
    ]);

/*  Not a pure module */
