console.log("\nLast One");
console.log("#3: Extract a Domain Name"); 

/*
Write a function that when given a URL as a string, parses out just
the domain name and returns it as a string. For example:

Input1: "http://github.com/carbonfive/raygun  " Output1: "github"
Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"
Input3: "https://www.cnet.com  " Output3: "cnet"
*/

// function getDomain(url) {
//   var splitWord = '^h'
//   return splitWord
// }


function getDomain(url){
  url = url.replace("https://", "")
  url = url.replace("http://", "")
  url = url.replace("www.", "")
  var splitString = url.split(".")
  // console.log(splitString);
  return splitString[0]
}

var test1 = "https://www.google.com/"
console.log(getDomain(test1));

var test2 = "http://www.zombie-bites.com  "  
console.log(getDomain(test2));
// "zombie-bites"

var test3 = "https://www.cnet.com  " 
console.log(getDomain(test3));

var test4 =  "http://github.com/carbonfive/raygun  "
console.log(getDomain(test4));