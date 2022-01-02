function reverse3() 
{
    var n;
    n = document.getElementById("Text3").value;
    if(n=='')
    {
        swal("Please enter a number N");
    }
    else if(isNaN(n))
    {
        document.getElementById("result3").value = "Invalid input";
    }
    else 
    {
        var s=parseInt(Math.log2(n)+1);
        document.getElementById("result3").value = s;
    }
    
}
function clearfield3()
{
    document.getElementById("Text3").value = '';
    document.getElementById("result3").value = '';
}