var lex = require("..");

var src = `
div #{1} #{}
	#{}`;

var tokens = lex(src);
console.log(tokens);