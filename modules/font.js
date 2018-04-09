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