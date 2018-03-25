var morseAlphabetString = 
		"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
		"y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";


// - @@@: delimits characters
// - @@:  delimits value and lines
// - @:   delimits single lines
//
// => [char]@@[line1]@[line2]@[line3]@[line4]@@@[char]@@[line1]@[line2]@[line3]@[line4]@@@...
//
var alphabetString = ' @@  @  @  @  @@@A@@____ @|__| @|  | @     @@@B@@___  @|__] @|__] @     @@@C@@____ @|    @|___ @     @@@D@@___  @|  \\ @|__/ @     @@@E@@____ @|___ @|___ @     @@@F@@____ @|___ @|    @     @@@G@@____ @| __ @|__] @     @@@H@@_  _ @|__| @|  | @     @@@I@@_ @| @| @  @@@J@@ _ @ | @_| @   @@@K@@_  _ @|_/  @| \\_ @     @@@L@@_    @|    @|___ @     @@@M@@_  _ @|\\/| @|  | @     @@@N@@_  _ @|\\ | @| \\| @     @@@O@@____ @|  | @|__| @     @@@P@@___  @|__] @|    @     @@@Q@@____ @|  | @|_\\| @     @@@R@@____ @|__/ @|  \\ @     @@@S@@____ @[__  @___] @     @@@T@@___ @ |  @ |  @    @@@U@@_  _ @|  | @|__| @     @@@V@@_  _ @|  | @ \\/  @     @@@W@@_ _ _ @| | | @|_|_| @      @@@X@@_  _ @ \\/  @_/\\_ @     @@@Y@@_   _ @ \\_/  @  |   @      @@@Z@@___  @  /  @ /__ @     @@@';

function Char(value){
    this.value = value;
    this.getValue = function(){
        return value;
    }
}

function SingleLineChar(value, string) {
	// Call super constructor on 'this'
	Char.call(this,value);
	// own properties
	this.string = string;
    this.getString = function() {
	    return string;
    }
}

SingleLineChar.prototype = Object.create(Char.prototype);
SingleLineChar.prototype.constructor = SingleLineChar;

function MultiLineChar(value, lines) {
	// Call super constructor on 'this'
	Char.call(this,value);
	// own properties
	this.lines = lines;
    this.getLines = function() {
	    return lines;
    }
}

MultiLineChar.prototype = Object.create(Char.prototype);
MultiLineChar.prototype.constructor = MultiLineChar;

function Font(name, chars, lineHeight = 1){
    var alphabet = chars.reduce(function(map, obj) {
        map[obj.value] = obj.lines;
        return map;
    }, {});

    this.name = name;
    this.alphabet = alphabet;

    /**
     * chars.forEach(() => {
     *  this.a;phabet[item.value] = item;
     * }, this) <- 'this' ist erforderlich
     */
}

Font.prototype.render = function(text){
    console.log(text);
}

Font.prototype.write = function(text, to){
    to = to || console.log
    //if(to == null || to == undefined) console.log(text);
    to(text);
}

var a = new Char('L');
console.log(a.getValue());

var s = new SingleLineChar('l', 'L');
console.log(s.getString());

var m = new MultiLineChar('l', 'L');
console.log(m.getLines());

var charsPair = alphabetString.split('@@@');
var multiLineChars = [];

charsPair.forEach((item, index) =>{
    var char = item.split('@@');
    multiLineChars.push(new MultiLineChar(char[0], char[1])); 
});

console.log(charsPair.length);
console.log(multiLineChars.length);

var font = new Font('multilineFont', multiLineChars);

font.render = function(text){
    var result = [];

    text.split('').forEach((item, index) => {
        var temp = this.alphabet[item].split('@');
        result.push(temp);     
    });

    return result;
}

font.write = function(text){
    var result = this.render(text);
    var str = '';

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < result.length; j++){
            str += result[j][i];
        }
        str += '\n';
    }
    console.log(str);
}

font.write("SPORTFLASH");