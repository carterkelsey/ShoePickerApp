function getResults(){
var  fontFamilyInput= document.getElementById("fontFamily").value;
var  quoteInput= document.getElementById("quote").value;
var  colorInput= document.getElementById("color").value;
var size= document.getElementById("size").value;
var feedback;
// feedback does not need 
console.log(fontFamilyInput);
console.log(quoteInput);
console.log(colorInput);
console.log(size);

document.getElementById("output").innerHTML=quoteInput;
document.getElementById("output").style.fontSize = size + "px";
document.getElementById("output").style.fontFamily=fontFamilyInput;
document.getElementById("outputBox").style.backgroundColor=colorInput;
/*all affecting the outpoot differently*/

    if (colorInput=="lavender" && fontFamilyInput== "Brush Script MT"){
    feedback = "Great combo!";
    }
else if(colorInput=="lightgreen"){
    feedback= "Looking fresh!";
}
 else {
   feedback="nice design";
 }
 console.log(feedback)
 document.getElementById("feedback").innerHTML = feedback;
}



