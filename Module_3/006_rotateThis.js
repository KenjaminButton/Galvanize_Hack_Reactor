/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another
string inside the doubled string using familiar
String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/

function isRotated(string1, string2) {
  var doubledString = string1 +string1
  if (doubledString.indexOf(string2) > -1) {
    return true
  } else {
    return false
  }
}

console.log(isRotated('hello world', 'orldhello w'))