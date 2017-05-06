function myFunctionP(id)
{
document.getElementById("image").src="img/"+id+".jpg"; 
}
function myFunction()
{
document.getElementById("image").src="img/virat.jpg"; 
}
var b = new Array();
for( i=0;i<=7;i++)
b[i]=0;

var a = new Array();
for( i=0;i<=7;i++)
a[i]=0;
 total=0;

function updateTotal(id,value,bb)
{
    a[bb]++;
    var temp=a[bb]*value;
    if(a[bb]==1)
    {   
        var another=document.getElementById(id).innerHTML;
        document.getElementById("payment").innerHTML+="<div id='ff"+id+"'>"+ another+"</div>";
        document.getElementById("payment1").innerHTML+="<div id='fff"+id+"'>"+ a[bb]+"</div>";
        document.getElementById("payment2").innerHTML+="<div id='ffff"+id+"'>"+ temp+"</div>";
    }else
     {

        var another=document.getElementById(id).innerHTML; 
        document.getElementById("ff"+id).innerHTML=another;
        document.getElementById("fff"+id).innerHTML=a[bb];
        document.getElementById("ffff"+id).innerHTML=temp;
        // document.getElementById("payment").setAttribute( "style","font-size: 5x; font-style: italic; color:#ff0000;"); 
        function minus(pid,pvalue,pbb)
            {
          
            alert("minus");
            }
         
    }
    total=total+value;
    document.getElementById("totalpayment").innerHTML=total;
}


// function updateTotal(){
    
//     var basic = 0;
//     var add = 0;
//     var form = document.getElementById('form');
//     var checkboxes = form.getElementsByClassName('addon');   
//     for (var i=0; i < checkboxes.length; i ++) {
//        if (checkboxes[i].checked) {
//            add += parseInt(checkboxes[i].value, 10);
//        }
//     }
//     var p = basic + add;
//     var price = p + " ₹"; 
//     document.getElementById('total').innerHTML ="Total Amount =  "+ price;  
// }
// document.getElementById('form').addEventListener('change', updateTotal);
// updateTotal();
function submit2()
{
    alert("Thank You ! Your Order has been recived.Now sit back and relax.");
}
function dessert()
{
    // document.getElementById("bhature").style.display="block";
    document.getElementById("bhature").setAttribute(
   "style", "font-size: 100px; font-style: italic; color:#ff0000;");
}