function myDisplayer(myname){
    document.getElementById("call").innerHTML=myname;

}

function myFirst(){
    myDisplayer("Rajesh");
}

function mySecond(){
    myDisplayer("Abhi");
}
myFirst();
mySecond();