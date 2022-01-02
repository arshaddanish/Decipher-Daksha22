function reverse2() 
{
    var str = document.getElementById("Text").value;
    if(str=='')
    {
        swal("Please enter a string");
        return;
    }
    var i,sum=0,ch;
    for(i=0;i<str.length;i++)
    {
        ch=str.charAt(i);
        if(ch=='a'|| ch=='A')  sum+=1;
        else if(ch=='e' || ch=='E') sum+=5;
        else if(ch=='i' || ch=='I') sum+=9;
        else if(ch=='o' || ch=='O') sum+=15;
        else if(ch=='u' || ch=='U') sum+=21;
    }
    document.getElementById("result").value = sum;
}
function clearfield()
{
    document.getElementById("Text").value = '';
    document.getElementById("result").value = '';
}
