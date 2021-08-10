

var a = prompt('Enter the first variable: ');
var b=prompt('Enter the second variable:');

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap);
  }


function draw()
{
}
function swap(){
  console.log("a before swaping"+a);
  console.log("b before swaping"+b);
  [a,b]=[b,a];
  console.log("a after swaping"+a);
  console.log("b after swaping"+b);
}