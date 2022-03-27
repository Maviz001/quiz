var marks;
var Ans1,Ans2,Ans3,Ans4,Ans5;
function check_Q1(){
  var A1= document.querySelector('input[name = provinces_no]:checked').value;
  console.log(A1);
 if (A1 == "4")
  A1 = 1;
  else
  A1 = 0;
  return A1;
}
function check_Q2(){
  var A2= document.querySelector('input[name = game]:checked').value;
  console.log(A2);
    if (A2 == "HOCKEY")
     A2 = 1;
     else
     A2 = 0;
     return A2;
   }
   function check_Q3(){
    var A3= document.querySelector('input[name = province]:checked').value;
    console.log(A3);
    if (A3 == "PUNJAB")
     A3 = 1;
     else
     A3 = 0;
     return A3;
   }
   function check_Q4(){
    var A4= document.querySelector('input[name = province1]:checked').value;
    console.log(A4);
    if (A4 == "BALOCHISTAN")
     A4 = 1;
     else
     A4 = 0;
     return A4;
   }
   function check_Q5(){
    var A5= document.querySelector('input[name = founder]:checked').value;
  console.log(A5);
    if (A5 == "MOHAMMADALIJINNAH")
    { 
        A5 = 1;
    }
     else
     {A5 = 0;
     }
     return A5;
   }
function get_choices(){
Ans1 = check_Q1();
Ans2 = check_Q2();
Ans3 = check_Q3();
Ans4 = check_Q4();
Ans5 = check_Q5();
marks = parseInt(Ans1)+parseInt(Ans2)+parseInt(Ans3)+parseInt(Ans4)+parseInt(Ans5);   
console.log(marks);
document.getElementById("marks").innerHTML= marks ;

}