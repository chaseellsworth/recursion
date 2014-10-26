// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (classname) {
    var collection = document.body;
    var results = [];
    var search = function (collection){
        for (var i = 0; i<collection.childNodes.length; i++){
            if(collection.childNodes[i].classList !== undefined){ 
                for (var j = 0; j < collection.childNodes[i].classList.length; j++){
                    if (collection.childNodes[i].classList[j] === classname){
                        results.push(collection.childNodes[i]);
                    }
                }
            }
            if(collection.childNodes[i].childNodes.length > 0){
                search(collection.childNodes[i]);
            }
         }
    }
    search(collection);
    return results;
}



  	// should use: 
	  	// document.body
	  	// element.childNodes
	  	// element.classList probably with "contains" method
  	// functionalities:
  		// return collection containing all child elements which have the given class names
  		// takes a list of class names to match (more than one)
  		//
