// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(collection) {
    if (collection === null || typeof collection !== "object"){
        if(typeof collection == "string"){
            return '"' + collection + '"';
        }else {
            return '' + collection;
        }
    }else if(Array.isArray(collection)){
        var resultA = [];
        for(var i = 0; i < collection.length; i++){
            if(typeof collection[i] === "string"){
                resultA.push('"' + collection[i] + '"');
            }else{
            resultA.push(stringifyJSON(collection[i]))
            }
        }
        return '[' + resultA.join(',') + ']'
    }else{
        var resultO = [];
        for (var key in collection){
            if(typeof collection[key] === "string"){
                resultO.push(stringifyJSON(key) + ':"' + collection[key] + '"');
            }else if(typeof collection[key] === "function" || typeof collection[key] === "undefined"){
            }else{
                resultO.push(stringifyJSON(key) + ':' + stringifyJSON(collection[key]));
            }
        }
        return '{' + resultO.join(',') + '}';
    }
}
