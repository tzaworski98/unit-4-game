var compRandomInt;
var gem1;
var gem2;
var gem3;
var gem4;

$(document).ready (function() {
    compRandomInt = Math.floor((Math.random() * 101) +19);
    $("#compRandomInt").text(compRandomInt)

    gem1 = Math.floor((Math.random() * 11) + 1);
    console.log("gem1" + gem1);

    gem2 = Math.floor((Math.random() * 11) + 1);
    console.log("gem2" + gem2)

    gem3 = Math.floor((Math.random() * 11) + 1);
    console.log("gem3" + gem3)

    gem4 = Math.floor((Math.random() * 11) + 1);
    console.log("gem4" + gem4)


var wins = 0;
var losses = 0;
var userScore = 0;

$("#wins").text(wins);
$("#losses").text(losses);
$("#userScore").text(userScore);

function reset (){
    compRandomInt = Math.floor((Math.random() * 101) +19);
    $("#compRandomInt").text(compRandomInt)

    gem1 = Math.floor((Math.random() * 11) + 1);

    gem2 = Math.floor((Math.random() * 11) + 1);
    
    gem3 = Math.floor((Math.random() * 11) + 1);
    
    gem4 = Math.floor((Math.random() * 11) + 1);

    userScore = 0;    
};

function win (){
wins++;
$("#wins").text(wins)
reset ();
}

function loss (){
losses++;
$("#losses").text(losses);
reset ();
}

$('#gem1').on('click',function(){
userScore = userScore + gem1;
$("#userScore").text(userScore);

if (userScore === compRandomInt){
    win();
}

else if(userScore > compRandomInt){
    loss();
}

});

$('#gem2').on('click',function(){
    userScore = userScore + gem2;
    $("#userScore").text(userScore);
    
    if (userScore === compRandomInt){
        win();
    }
    
    else if(userScore > compRandomInt){
        loss();
    }
    
    });

    $('#gem3').on('click',function(){
        userScore = userScore + gem3;
        $("#userScore").text(userScore);
        
        if (userScore === compRandomInt){
            win();
        }
        
        else if(userScore > compRandomInt){
            loss();
        }

        });

        $('#gem4').on('click',function(){
            userScore = userScore + gem4;
            $("#userScore").text(userScore);
            
            if (userScore === compRandomInt){
                win();
            }
            
            else if(userScore > compRandomInt){
                loss();
            }
            
            });
        });