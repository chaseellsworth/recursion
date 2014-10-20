// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = document.body.getElementsByTagName("*");
    var filtElements = [];
    for (var i = 0; i < elements.length; i++) {
        var classes = elements[i].classList;
        if (classes.contains(className)){
        filtElements.push(elements[i]);
        }
    }
    return filtElements;
    }

  	// should use: 
	  	// document.body
	  	// element.childNodes
	  	// element.classList probably with "contains" method
  	// functionalities:
  		// return collection containing all child elements which have the given class names
  		// takes a list of class names to match (more than one)
  		//
