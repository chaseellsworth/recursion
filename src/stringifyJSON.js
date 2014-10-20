// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj, replacer) {

// if they use a replacer function. Not sure how to use it with arrays or a filter  
  	if (replacer) {
  		obj = replacer(obj);
    }
// for array    	
  	if (Array.isArray(obj)){
      	strArray = [];
      	for (var i = 0; i < obj.length; i++){
        	strArray.push('"' + obj[i].toString() + '"');      
      	}
      	return "[" + strArray + "]";

// for an object  
  	} else if (typeof obj === "object") {
  	var objKeys = Object.keys(obj);
  	var keyValArray = [];
    for (var i = 0; i < objKeys.length; i++){
      	var keyValString = '"' + objKeys[i] + '":';
      	var objVal = obj[objKeys[i]];
        if (typeof objVal == "string") {
        	keyValString = keyValString + '"' + objVal + '"';
        } else {
        	keyValString = keyValString + stringifyJSON(objVal);
        }
      	keyValArray.push(keyValString);
    }
    return "{" + keyValArray.join(",") + "}";      

// for boolean
  	} else if (typeof obj === "boolean"){
    	return obj.toString();

// for string
  	} else if (typeof obj === "string"){
    	return '"' + obj.toString() + '"';

// for number
  	} else if (typeof obj === "number"){
    	return obj.toString();
  	}

};





