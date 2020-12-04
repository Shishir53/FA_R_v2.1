$(document).ready(function(){
    includeHTML();
  });

function Switch(a){
    var myobj = document.getElementById("banner");
    if (typeof(myobj) != 'undefined' && myobj != null){
      myobj.remove();
    }    
    var yourobj = document.getElementById("thirdIndexSection");
    if (typeof(yourobj) != 'undefined' && yourobj != null){
      yourobj.remove();
    }
    
    document.getElementById("inculdeDiv").innerHTML = "";    
    var anchor = document.getElementById("inculdeDiv");  // Get the <a> element with id="myAnchor"
    anchor.removeAttribute("w3-include-html");
    var att = document.createAttribute("w3-include-html");        // Create a "href" attribute
    switch (a){

      case 'b':
      att.value = "blogs.html"; 
      break;

      case 'p':
      att.value = "poems.html"; 
      break;

      case 'm':
      att.value = "messages.html"; 
      break;

      default:
        att.value = "error.html";
      break;
    }
               // Set the value of the href attribute
    anchor.setAttributeNode(att); 
    includeHTML();

}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };