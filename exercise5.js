
function _require(name) {
	if (name in _require.cache) {
		return _require.cache[name];
	}
	var code = new Function("exports, module", readFile(name));
	var exports = {};
	var module = {exports: exports};
	code(exports, module);
	
	_require.cache[name] = module.exports;
	return module.exports;
}
_require.cache = Object.create(null);

// Example of a readFile for the browser
// -> Note that the file must be loaded synchronously
function readFile(name) {
	var  req = new XMLHttpRequest();
	req.open("GET", "modules/"+name+".js", false);
	req.send(null);
	return req.responseText;
}

// Example of a readFile for node.js
// -> Note that the module fs is required; if you build your own 
//    module system, you have to rename your require function!
function readFile(name) {
	var fs = _require("fs");
	var content = fs.readFileSync("modules/"+name+".js");
	return content;
}

global._require = _require;

var cyberFont = _require('cyber-font');
//cyberFont.font