let result=0;
let compres=0;
let dif=0;
let computer_choice='';

document.querySelector('.js-ressss').innerHTML=`RESULT: ${''}`;
document.querySelector('.js-you').innerHTML=`YOUR POINTS:  ${''}`;
document.querySelector('.js-comp').innerHTML=`COMPUTER POINTS:  ${''}`;
document.querySelector('.js-final').innerHTML=`LEAD: ${''}`;

function finall(){
    if(document.querySelector('.rockk').innerHTML==='ROCK'){
        computerChoice();
        resss('ROCK');
        points();
        reset();
        
    }
    else if(document.querySelector('.paperr').innerHTML==='PAPER'){
        computerChoice();
                    resss('PAPER');
                    points();
                    reset();
    }
    else if(document.querySelector('.scissorr').innerHTML==='SCISSOR'){
        computerChoice();
                    resss('SCISSOR');
                    points();
                    reset();
    }
}



function computerChoice(){
    let val=Math.random();
    if(val<1/3){
        computer_choice='ROCK';
    }
    else if(val<2/3 && val>=1/3){
        computer_choice='PAPER';
    }       
    else if(val>=2/3 && val<1){
        computer_choice='SCISSOR';
    }
}



function resss(your_choice){
    if(your_choice===computer_choice){
        document.querySelector('.js-ressss').innerHTML=`RESULT: ${'TIE'}`;
    }
    else if(your_choice==='ROCK' && computer_choice==='SCISSOR'){
        document.querySelector('.js-ressss').innerHTML=`RESULT: ${'YOU WIN'}`;
        
    }
    else if(your_choice==='ROCK' && computer_choice==='PAPER'){
        document.querySelector('.js-ressss').innerHTML=`RESULT: ${'YOU LOST'}`;

    }
    else if(your_choice==='PAPER' && computer_choice==='ROCK'){
        document.querySelector('.js-ressss').innerHTML=`RESULT: ${'YOU WIN'}`;

    }
    else if(your_choice==='PAPER' && computer_choice==='SCISSOR'){
        document.querySelector('.js-ressss').innerHTML=`RESULT: ${'YOU LOST'}`;

    }
    else if(your_choice==='SCISSOR' && computer_choice==='ROCK'){
        document.querySelector('.js-resssss').innerHTML=`RESULT: ${'YOU LOST'}`;

    }
    else if(your_choice==='SCISSOR' && computer_choice==='PAPER'){
        document.querySelector('.js-ressss').innerHTML=`RESULT: ${'YOU WIN'}`;

    }

}



function points(){
    if(document.querySelector('.js-ressss').innerHTML===`RESULT: ${'YOU WIN'}`){
        result+=1;
    }
    else if(document.querySelector('.js-ressss').innerHTML===`RESULT: ${'TIE'}`){
        result=result;
    }
    else if(document.querySelector('.js-ressss').innerHTML===`RESULT: ${'YOU LOST'}`){
        compres+=1;
    }
    document.querySelector('.js-you').innerHTML=`YOUR POINTS: ${result}`;
    document.querySelector('.js-comp').innerHTML=`COMPUTER POINTS: ${compres}`;

    dif=result-compres;
    document.querySelector('.js-final').innerHTML=`LEAD: ${dif}`;
    if(result===10 && compres<10){
    document.querySelector('.js-final').innerHTML=`HURRAYYY.... YOU WON THE GAME WITH A LEAD OF ${dif}`;
   
    }
    else if(compres===10 && result<10){
        document.querySelector('.js-final').innerHTML=`SORRYYY...... YOU LOST THE GAME WITH A LEAD OF ${dif}`;
        
    }

}



function reset(){
    if(result>9 || compres>9){
        result=0;
        compres=0;
    }

}
function resetComplete(){
    result=0;
    compres=0;
    dif=0;
    document.querySelector('.js-you').innerHTML=`YOUR POINTS:  ${result}`;
    document.querySelector('.js-comp').innerHTML=`COMPUTER POINTS:  ${compres}`;
    document.querySelector('.js-final').innerHTML=`LEAD: ${dif}`;
}




let isautoPlay=false;
let intervalID;
function autoPlay1(){
    if(!isautoPlay){
        let val1=Math.random();
        if(val1<1/3){
            your_choice='ROCK';
        }
        else if(val1<2/3 && val1>=1/3){
            your_choice='PAPER';
        }       
        else if(val1>=2/3 && val1<1){
            your_choice='SCISSOR';
        }
       intervalID= setInterval(function auto(){
        resss(your_choice);
        computerChoice();
        points();
        reset();
        }, 1000);
        isautoPlay=true;
    }
    else{
        clearInterval(intervalID);
        isautoPlay=false;
    }
    
    
    }



