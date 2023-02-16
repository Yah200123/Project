var x = document.getElementById("div1");
x.style.display="none";
var y = document.getElementById("div2");
y.style.display="none";
var z = document.getElementById("div3");
z.style.display="none";
var e = document.getElementById("div4");
e.style.display="none";

//===============================================================================

function result(){
    var score = 0;
    var x = document.getElementById("div1");
    var y = document.getElementById("div2");
    if(document.getElementById("option1").checked){
        x.style = "border: 6px solid green";
    }
    else{
        x.style = "border: 6px solid red";
        score1 = score + 0;
    }

}

function result2(){
    if(document.getElementById("option4").checked){
        x.style.display="none";
        y.style = "border: 6px solid green";
    }
    else{
        x.style.display="none";
        y.style = "border: 6px solid red";
    }

}

function result3(){
    if(document.getElementById("option8").checked){
        y.style.display="none";
        z.style = "border: 6px solid green";
    }
    else{
        y.style.display="none";
        z.style = "border: 6px solid red";
    }

}

function result4(){
    if(document.getElementById("option11").checked){
        z.style.display="none";
        e.style = "border: 6px solid green";
    }
    else{
        z.style.display="none";
        e.style = "border: 6px solid red";
    }

}

function score(){
    let option1 = document.getElementById("option1").checked;
    let option4 = document.getElementById("option4").checked;
    let option8 = document.getElementById("option8").checked;
    let option11 = document.getElementById("option11").checked;
    if(document.getElementById("option1").checked){
        document.getElementById("output").innerHTML = "amazing!!";
    }
}

//==============================================================================================
function showQuestion(){
    var x = document.getElementById("div1");
    if(x.style.display==="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }


  
}

function showQuestion2(){
    var y = document.getElementById("div2");
    var x = document.getElementById("div1");
    if(y.style.display==="none"){
        y.style.display="block";
        x.style.display="none";
    }
    else{
        y.style.display="none";
    }
  
}

function showQuestion3(){
    var y = document.getElementById("div2");
    var z = document.getElementById("div3");
    if(z.style.display==="none"){
        z.style.display="block";
        y.style.display="none";
    }
    else{
        z.style.display="none";
    }
  
}

function showQuestion4(){
    var z = document.getElementById("div3");
    var e = document.getElementById("div4");
    if(e.style.display==="none"){
        e.style.display="block";
        z.style.display="none";
    }
    else{
        e.style.display="none";
    }
  
}

function perviousQuestion(){
    var y = document.getElementById("div2");
    var x = document.getElementById("div1");
    if(x.style.display==="none"){
        x.style.display="block";
        y.style.display="none";
    }
    else{
        x.style.display="none";
    }
}

function perviousQuestion3(){
    var y = document.getElementById("div2");
    var z = document.getElementById("div3");
    if(y.style.display==="none"){
        y.style.display="block";
        z.style.display="none";
    }
    else{
        y.style.display="none";
    }
}

function perviousQuestion4(){
    var z = document.getElementById("div3");
    var e = document.getElementById("div4");
    if(z.style.display==="none"){
        z.style.display="block";
        e.style.display="none";
    }
    else{
        z.style.display="none";
    }
}


//==================================================
// getting the player information===================

document.getElementById("submit").onclick = function(){
    var PlayerName = document.getElementById("name").value;
    var outp = document.getElementById("out");
    outp.document.innerHTML = PlayerName;
}
