// Circular Progress

let number = document.getElementById("number");
            let counter = 0;
            setInterval(() => {
                if(counter == 90){
                    clearInterval();
                }else{
                    counter += 1;
                number.innerHTML = counter + "%";
                }
                
            }, 21);

let num = document.getElementById("num");
            let counter1 = 0;
            setInterval(() => {
                if(counter1 == 75){
                    clearInterval();
                }else{
                    counter1 += 1;
                num.innerHTML = counter1 + "%";
                }
                
            }, 24);

let numb = document.getElementById("numb");
            let counter2 = 0;
            setInterval(() => {
                if(counter2 == 70){
                    clearInterval();
                }else{
                    counter2 += 1;
                numb.innerHTML = counter2 + "%";
                }
                
            }, 28);

let numbe = document.getElementById("numbe");
            let counter3 = 0;
            setInterval(() => {
                if(counter3 == 85){
                    clearInterval();
                }else{
                    counter3 += 1;
                numbe.innerHTML = counter3 + "%";
                }
                
            }, 23);


// Filtering Gallery

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);    
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}