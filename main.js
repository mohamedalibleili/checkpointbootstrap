function changebold(){
    var getid=document.getElementById("message");
    if(getid.style.fontWeight=="bold")
    {
        getid.style.fontWeight="normal"; 
    }
    else
    {
        getid.style.fontWeight="bold";
    }
}
function changeitalic(){
    var getid=document.getElementById("message");
    if(getid.style.fontStyle=="italic")
    {
        getid.style.fontStyle="normal"; 
    }
    else{
        getid.style.fontStyle="italic";
    }
}
function changeunderline(){
    var getid=document.getElementById("message");
    if(getid.style.textDecoration=="underline")
    {
        getid.style.textDecoration="none";
    }
    else{
        getid.style.textDecoration="underline";
    }
}
function changesize(event){
    
    document.getElementById("message").style.fontSize=event.value;
}

function changefont(event)
{
    document.getElementById("message").style.fontFamily=event.value;
}


function enter(p1,p2)
{
    $(p1).on('mouseenter', function()

    {
        $(p1).css('opacity', 1);
       $(p2).show();
    }
    )

}

function leave(p1,p2)
{
    $(p1).on('mouseleave', function()

    {
        $(p1).css('opacity', 0.5);
        $(p2).hide();
    }
    ) 
}

function modler(p1,p2)
{
    $(p1).on('click', function()
{
    $(p2).modal();
}

)
}
enter("#im0", "#b0");
enter("#im1", "#b1");
enter("#im2", "#b2");
enter("#im3", "#b3");
enter("#im4", "#b4");
enter("#im5", "#b5");

leave("#im0", "#b0");
leave("#im1", "#b1");
leave("#im2", "#b2");
leave("#im3", "#b3");
leave("#im4", "#b4");
leave("#im5", "#b5");

modler("#b0", "#model");
modler("#b1", "#model");
modler("#b2", "#model");
modler("#b3", "#model1");
modler("#b4", "#model1");
modler("#b5", "#model1");


/*$("#b0, #b1, #b2").on('click', function()
{
    $("#model").modal();
}

)*/