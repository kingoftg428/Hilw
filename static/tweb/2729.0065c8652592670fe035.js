(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[2729],{49632:e=>{e.exports=function(e){const n=e.regex,a="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",i={$pattern:a,keyword:["after","alias","and","case","catch","cond","defstruct","defguard","do","else","end","fn","for","if","import","in","not","or","quote","raise","receive","require","reraise","rescue","try","unless","unquote","unquote_splicing","use","when","with|0"],literal:["false","nil","true"]},s={className:"subst",begin:/#\{/,end:/\}/,keywords:i},c={match:/\\[\s\S]/,scope:"char.escape",relevance:0},t="[/|([{<\"']",r=[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}],d=e=>({scope:"char.escape",begin:n.concat(/\\/,e),relevance:0}),o={className:"string",begin:"~[a-z](?="+t+")",contains:r.map((n=>e.inherit(n,{contains:[d(n.end),c,s]})))},b={className:"string",begin:"~[A-Z](?="+t+")",contains:r.map((n=>e.inherit(n,{contains:[d(n.end)]})))},g={className:"regex",variants:[{begin:"~r(?="+t+")",contains:r.map((a=>e.inherit(a,{end:n.concat(a.end,/[uismxfU]{0,7}/),contains:[d(a.end),c,s]})))},{begin:"~R(?="+t+")",contains:r.map((a=>e.inherit(a,{end:n.concat(a.end,/[uismxfU]{0,7}/),contains:[d(a.end)]})))}]},l={className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},m={className:"function",beginKeywords:"def defp defmacro defmacrop",end:/\B\b/,contains:[e.inherit(e.TITLE_MODE,{begin:a,endsParent:!0})]},u=e.inherit(m,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),f=[l,g,b,o,e.HASH_COMMENT_MODE,u,m,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[l,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:a+":(?!:)",relevance:0},{className:"title.class",begin:/(\b[A-Z][a-zA-Z0-9_]+)/,relevance:0},{className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"}];return s.contains=f,{name:"Elixir",aliases:["ex","exs"],keywords:i,contains:f}}}}]);
//# sourceMappingURL=2729.0065c8652592670fe035.js.map