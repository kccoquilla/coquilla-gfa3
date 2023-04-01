var num1 = parseInt(Math.random()*20);
var num2 = parseInt(Math.random()*20);
var num3 = parseInt(Math.random()*20);
var alphbt = "AABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

/*Looking for the largest number.*/
if(num1>=num2){
    if(num1>=num3){
        var mostNum = num1;
    }
    else{
        var mostNum = num3; 
    }
}
if(num2>=num1){
    if(num2>=num3){
        var mostNum = num2;
    }
    else{
        var mostNum = num3; 
    }
}
/*Identifying which has the biggest number.*/
if(mostNum==num1){
    if(num1==num2){
        if(num1==num3){
            document.getElementById("result").innerHTML = "The major island/s with the most number of places to be visited: Luzon, Visayas, Mindanao (" + mostNum + ")";
        } 
        else{
            document.getElementById("result").innerHTML = "The major island/s with the most number of places to be visited: Luzon, Visayas (" + mostNum + ")";
        }
    }
    else{
        document.getElementById("result").innerHTML = "The major island/s with the most number of places to be visited: Luzon (" + mostNum + ")";
    }
}
if(mostNum!=num1){
    if(mostNum==num2){
        if(num2==num3){
            document.getElementById("result").innerHTML = "The major island/s with the most number of places to be visited: Visayas, Mindanao (" + mostNum + ")";
        }
        else{     
        document.getElementById("result").innerHTML = "The major island/s with the most number of places to be visited: Visayas (" + mostNum + ")";
        }
    } 
    else{
        document.getElementById("result").innerHTML = "The major island/s with the most number of places to be visited: Mindanao (" + mostNum + ")";
    }
}

/*Identifying the letter.*/
var letter = alphbt[num1];
document.getElementById("letter").innerHTML = "The first letter of the place that you want to visit the most is: " + letter;

/*Calculating for the time.*/
var time = num2 * num3;
var hr = Math.floor(time/60);
var mins = time - (hr*60);

if (time==0){
    document.getElementById("hr").innerHTML = "I think you've already";
    document.getElementById("mins").innerHTML = "arrived at your first destination";
}
else{
    if (hr>=1){
        if(hr==1){
            document.getElementById("hr").innerHTML = "It will take you an hour and";
        }
        else{
            document.getElementById("hr").innerHTML = "It will take you " + hr + " hours and"; 
        }
    }
    if(hr==0){
        document.getElementById("hr").innerHTML = "It will take you no longer than an hour but only";
    }
    
    if(mins==0){
        document.getElementById("mins").innerHTML = "no minutes to your first destination";
    }
    else{
        document.getElementById("mins").innerHTML = mins + " minutes to your first destination";
    }
}
