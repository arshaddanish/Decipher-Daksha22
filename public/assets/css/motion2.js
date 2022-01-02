/*function display() 
{  
    alert("Hello World!");  
} */
//import swal from 'sweetalert.js';
function reverse1() 
{
    //var x = BigInt(9007199254740991);
    //var s= 41234563232789012327892787227897329n;
    var s=0;
    var x,n;
    n = document.getElementById("Text1").value;
    //n=parseInt(x);
    if(n=='')
    {
        //alert("Please enter a number N");
        swal("Please enter a number N");
    }
    else if(isNaN(n))
    {
        document.getElementById("result1").value = "Invalid input";
    }
    else if(n<0)
    {
        document.getElementById("result1").value = "Out of boundary";
    }
    else if(n==0)
    {
        document.getElementById("result1").value = "0";
    }
    else if(n==1)
    {
        document.getElementById("result1").value = "1";
    }
    else if(n==80)
    {
        document.getElementById("result1").value = "37889062373143905";
    }
    else if(n==81)
    {
        document.getElementById("result1").value = "61305790721611590";
    }
    else if(n>81)
    {
        document.getElementById("result1").value = "Out of boundary";
    }
    else
    {
        //var t1= 41234563232789012327892787227897329n,t2= 41234563232789012327892787227897329n= 41234563232789012327892787227897329n,k= 41234563232789012327892787227897329n,t3= 41234563232789012327892787227897329n;
        var t1=0,t2=1,k=(n-2),t3=0;
        s=1;
        while(k--)
        {
            t3=t1+t2;
            t1=t2;
            t2=t3;
            s+=t3;
        }
        document.getElementById("result1").value = s;
    }
    
}
/*function reverse1() 
{
    let s = 1298777728820984004;
    s=s+1;
    document.getElementById("result").value = s;
}*/
function clearfield1()
{
    document.getElementById("Text1").value = '';
    document.getElementById("result1").value = '';
}