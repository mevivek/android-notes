import{g as n}from"./index-qYwwTXfs.js";function m(e,a){for(var s=0;s<a.length;s++){const r=a[s];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const l=Object.getOwnPropertyDescriptor(r,t);l&&Object.defineProperty(e,t,l.get?l:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var b,c;function S(){if(c)return b;c=1,b=e,e.displayName="asmatmel",e.aliases=[];function e(a){a.languages.asmatmel={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},constant:/\b(?:PORT[A-Z]|DDR[A-Z]|(?:DD|P)[A-Z](?:\d|[0-2]\d|3[01]))\b/,directive:{pattern:/\.\w+(?= )/,alias:"property"},"r-register":{pattern:/\br(?:\d|[12]\d|3[01])\b/,alias:"variable"},"op-code":{pattern:/\b(?:ADC|ADD|ADIW|AND|ANDI|ASR|BCLR|BLD|BRBC|BRBS|BRCC|BRCS|BREAK|BREQ|BRGE|BRHC|BRHS|BRID|BRIE|BRLO|BRLT|BRMI|BRNE|BRPL|BRSH|BRTC|BRTS|BRVC|BRVS|BSET|BST|CALL|CBI|CBR|CLC|CLH|CLI|CLN|CLR|CLS|CLT|CLV|CLZ|COM|CP|CPC|CPI|CPSE|DEC|DES|EICALL|EIJMP|ELPM|EOR|FMUL|FMULS|FMULSU|ICALL|IJMP|IN|INC|JMP|LAC|LAS|LAT|LD|LD[A-Za-z0-9]|LPM|LSL|LSR|MOV|MOVW|MUL|MULS|MULSU|NEG|NOP|OR|ORI|OUT|POP|PUSH|RCALL|RET|RETI|RJMP|ROL|ROR|SBC|SBCI|SBI|SBIC|SBIS|SBIW|SBR|SBRC|SBRS|SEC|SEH|SEI|SEN|SER|SES|SET|SEV|SEZ|SLEEP|SPM|ST|ST[A-Z0-9]|SUB|SUBI|SWAP|TST|WDR|XCH|adc|add|adiw|and|andi|asr|bclr|bld|brbc|brbs|brcc|brcs|break|breq|brge|brhc|brhs|brid|brie|brlo|brlt|brmi|brne|brpl|brsh|brtc|brts|brvc|brvs|bset|bst|call|cbi|cbr|clc|clh|cli|cln|clr|cls|clt|clv|clz|com|cp|cpc|cpi|cpse|dec|des|eicall|eijmp|elpm|eor|fmul|fmuls|fmulsu|icall|ijmp|in|inc|jmp|lac|las|lat|ld|ld[a-z0-9]|lpm|lsl|lsr|mov|movw|mul|muls|mulsu|neg|nop|or|ori|out|pop|push|rcall|ret|reti|rjmp|rol|ror|sbc|sbci|sbi|sbic|sbis|sbiw|sbr|sbrc|sbrs|sec|seh|sei|sen|ser|ses|set|sev|sez|sleep|spm|st|st[a-zA-Z0-9]|sub|subi|swap|tst|wdr|xch)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{2,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[acznvshtixy]\b/i,alias:"variable"},operator:/>>=?|<<=?|&&?|\|\|?|[-+*/%&|^!=<>?]=?/,punctuation:/[(),:]/}}return b}var i=S();const o=n(i),R=m({__proto__:null,default:o},[i]);export{R as a};
