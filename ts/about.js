// refer to question 3 before development starts for scope document

/*var element = document.getElementById("aboutText");
element.innerHTML = "somthing";*/

function ShitFunction() {
    var string = document.getElementById("aboutText").innerHTML;
    var result = string.replace(/Magic/g, "Something");
    document.getElementById("aboutText").innerHTML = result;
}





var flag = 1;
function moreInfoContent(){
  if(flag==1)
  {
    document.getElementById("moreInfoContent").style.display="none";
    flag=0;
  }
  else {
    document.getElementById("moreInfoContent").style.display="block";
    flag=1;
  }
}
