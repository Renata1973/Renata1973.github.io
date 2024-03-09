//console.log("Hello World!");
var greenbutton=document.getElementById("green");
if (greenbutton){
    greenbutton.addEventListener('click', calAllert);
    greenbutton.addEventListener('mouseover', banana);
    //greenbutton.addEventListener('mouseout', orange);

}

function calAllert(){
    alert("Call me")
}

//console.log(greenbutton);

function banana() {
    //alert ("You CAlled");
    greenbutton.innerHTML="I got clicked";
 
}

