    var num;
    var adven;
    var socially;
    var money;

$(".main-btn").click(function(){
    $(".wrapper").hide();
    $(".main1").show();
});
$(".btn1").click(function(){
    num= parseInt($(".numbers").val());
     console.log(num);
    $(".main1").hide();
    $(".main2").show();
});
$(".btn2").click(function(){
    adven= $(".traveler").val();
    console.log(adven);
    $(".main2").hide();
    $(".main3").show();
});
$(".btn3").click(function(){
    socially= $(".social").val();
    console.log(socially);
    $(".main3").hide();
    $(".main4").show();
});
$(".btn4").click(function(){
    money= $(".dollar").val();
    console.log(money);
    $(".main4").hide();
    
        if (num < 5 && adven ==="Yes" && socially==="Friends" && money==="Spend"){
            $(".spongebob").show();
        }
        else if (num < 5 && adven ==="Yes" && socially ==="Friends" &&  money==="Spend"){
            $(".patrick").show();
        }
        else if(num > 5 && adven==="No"||adven==="Yes"&& socially==="Alone" && money==="Save"|| money==="Spend"){
            $(".squidward").show();
        }
        else if(num > 5 && adven==="Yes"&& socially==="Friends"||socially==="Alone"&& money==="Save"){
            $(".mrkrabs").show();
        }
        else{
            $(".Error").show();
        }
});

    
    