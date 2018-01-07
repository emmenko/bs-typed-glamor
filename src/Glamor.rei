/*include (module type of CssCore.Types);*/
module Core: {
  include (module type of Glamor__Core.Core);
};
open Core;
include Values;
include Properties;

let select: (string, list(declaration)) => declaration;
let hover: list(declaration) => declaration;

let css: list(declaration) => string;

let null: value(_);