function myFunction(){
    var x=document.getElementById("rigthNav");
    if(x.className === "right-nav")
    {
        x.className+= "responsive";
    }
    else
    {
        x.className="right-nav";
    }
}