function Char(value, string){
    this.value = value;
    this.string = string
}

function Font(name, chars){
    var alphabet = chars.reduce(function(map, obj) {
        map[obj.value] = obj.string;
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

var alphabetString = 
		"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
		"y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

var charsPair = alphabetString.split(';');
var chars = [];

charsPair.forEach((item, index) =>{
    var char = item.split('=');
    chars.push(new Char(char[0], char[1])); 
});

//console.log(chars.length);

var font = new Font('morseFont', chars);
font.render = function(text){
    var result = '';
    text.split('').forEach((item, index) => {
        result += this.alphabet[item] + '/'
    });

    return result;
}

console.log(font.render('sos'));

// var print = function(){
//     console.log(font.alphabet);
//     console.log(font.alphabet['.']);
// }

// print();