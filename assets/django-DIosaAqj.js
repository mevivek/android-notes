import{g as d}from"./index-qYwwTXfs.js";import{r as g}from"./markup-templating-BxAVv-bL.js";function f(i,n){for(var r=0;r<n.length;r++){const e=n[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in i)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(i,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var u,l;function p(){if(l)return u;l=1;var i=g();u=n,n.displayName="django",n.aliases=["jinja2"];function n(r){r.register(i),function(e){e.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var t=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,o=e.languages["markup-templating"];e.hooks.add("before-tokenize",function(a){o.buildPlaceholders(a,"django",t)}),e.hooks.add("after-tokenize",function(a){o.tokenizePlaceholders(a,"django")}),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",function(a){o.buildPlaceholders(a,"jinja2",t)}),e.hooks.add("after-tokenize",function(a){o.tokenizePlaceholders(a,"jinja2")})}(r)}return u}var s=p();const c=d(s),k=f({__proto__:null,default:c},[s]);export{k as d};
