var alphabetString = 
		"a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;"+
		"m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;"+
		"y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

function charToMorseCode(char){
    var res = alphabetString.split(";");

    for(var i = 0; i < res.length; i++){
        var letterArr = res[i].split("=");
        if(letterArr[0] === char) return letterArr[1];
    }
}

function convertToMorse(str){
    var charArr = str.split('');
    var result = "";

    for(var i = 0; i < charArr.length; i++){
        result += charToMorseCode(charArr[i]);        
    }

    return result;
}

function convertToMorse2(str){
    var result = "";    
    var charArr = str.split('').forEach(function(item, index){
        result += charToMorseCode(item);
    });

    return result;
}

console.log(alphabetString.split(";"));
console.log(convertToMorse("sos"));
console.log(convertToMorse2("sos"));