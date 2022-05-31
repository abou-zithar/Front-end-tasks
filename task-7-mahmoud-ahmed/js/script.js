 /* -------------------------------------------------------------------------- */
 /*                               Question one                              */
 /* -------------------------------------------------------------------------- */
 var n=window.prompt('please enter the frist number')
 console.log(n);
 window.alert('Next Question')
 /* -------------------------------------------------------------------------- */
 /*                               question two                              */
 /* -------------------------------------------------------------------------- */
 var n=window.prompt('please enter the number')
 n= Number(n)
 if (n % 12){
    console.log('no');
 } else {
    console.log('yes');
 }
 window.alert('Next Question')
  /* -------------------------------------------------------------------------- */
  /*                              question three                             */
  /* -------------------------------------------------------------------------- */
 var n=window.prompt('please enter the frist number')
var nSec=window.prompt('please enter the secons number')
if(n>nSec){
    console.log(n);
}else if(nSec>n){
    console.log(nsec);
}else{
    console.log('they are equal');
}
window.alert('Next Question')
/* -------------------------------------------------------------------------- */
/*                                Question four                               */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the number')
n=Number(n)
if(n>0){
console.log('postive');
}else if(n==0){
   console.log('zero');
}else{
    console.log('negative');
}
window.alert('Next Question')
/* -------------------------------------------------------------------------- */
/*                                Question five                               */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the frist number')
var nSec=window.prompt('please enter the second  number')
var nThird=window.prompt('please enter the third number')
n=Number(n)
nSec=Number(nSec)
nThird=Number(nThird)
if(n>nSec){
    if(n>nThird){
        console.log('the max'+n);
        // to find the min
        if(nThird>nSec){
            console.log('the min'+nSec);
        }else{
            console.log('the min'+nThird);
        }
        // the min is found here
    } else{
        console.log('the max'+nThird);
        console.log('the min'+nSec);
    }
}else if(nSec>nThird){
    console.log( 'the max'+nSec);
     // to find the min
      if(nThird>n){
          console.log('the min'+n);
     }else{
        console.log('the min'+nThird);
     }
     // the min is found here
 }else{
    console.log('the max'+nThird);
    console.log('the min'+n);
 }

/* -------------------------------------------------------------------------- */
/*                                Question six                                */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the number')
n=Number(n)
if(n%2){
    console.log('Odd');
}else{
    console.log('Even');
}
/* -------------------------------------------------------------------------- */
/*                Question seven is the example of question six               */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               Question eight                               */
/* -------------------------------------------------------------------------- */
var l=window.prompt('please enter the letter')
switch(l){
    case('a'):
    console.log('vowel');
    break;
    
    case('e'):
    console.log('vowel');    break;

    case('o'):
    console.log('vowel');    break;

    case('i'):
    console.log('vowel');    break;

    case('u'):
    console.log('vowel');    break;

    default:
console.log('Consonant');


}
/* -------------------------------------------------------------------------- */
/*                               Question nine                               */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the number')
// var htmlContext=``
for(var i=1;i<=n;i++){
    // htmlContext=` <h4 id="output9" class="p-3">`+i+`</h4> `
    // document.getElementById("answer").innerHTML +=htmlContext
    console.log(i);
  
}
/* -------------------------------------------------------------------------- */
/*                               Question Ten                               */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the number')
// varhtmlContext=``
for(var i=1;i<=12;i++){
    // htmlContext=` <h4 id="output10" class="p-3">`+(i*n)+`</h4> `
    // document.getElementById("answer2").innerHTML +=htmlContext
    console.log(i*n);
  
}

/* -------------------------------------------------------------------------- */
/*                               Question 11                              */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the number')
for(var i=1;i<=n;i++){
if(i%2){

}else{
    console.log(i);
}
}
/* -------------------------------------------------------------------------- */
/*                                 Question 12                                */
/* -------------------------------------------------------------------------- */
var n=window.prompt('please enter the number')
var power=window.prompt('please enter the power')
var result=1
for(var i=1;i<=power;i++){

result=result*n

}
console.log(result)
/* -------------------------------------------------------------------------- */
/*                                 Question 13                                */
/* -------------------------------------------------------------------------- */
var n1 = Number(window.prompt('please enter the number 1'))
var n2 = Number(window.prompt('please enter the number 2'))
var n3 = Number(window.prompt('please enter the number 3'))
var n4 = Number(window.prompt('please enter the number 4'))
var n5 = Number(window.prompt('please enter the number 5'))
var total=n1+n2+n3+n4+n5;
var avg=total/5
var pre=(total/500)*100
console.log('total'+' '+total)
console.log('avg '+avg)

console.log('pre '+pre+' %')
/* -------------------------------------------------------------------------- */
/*                                 Question 14                                */
/* -------------------------------------------------------------------------- */
var n = Number(window.prompt('please enter the number of month'))
numberOfDays=n*31
console.log('the Number of days is'+': '+numberOfDays);
/* -------------------------------------------------------------------------- */
/*                                 Question 15                                */
/* -------------------------------------------------------------------------- */
var n =new Array(5) ;
 n[0] = Number(window.prompt('please enter the Physics Grade'))
 n[1] = Number(window.prompt('please enter the Chemistry Grade'))
 n[2] = Number(window.prompt('please enter the Biology Grade'))
 n[3] = Number(window.prompt('please enter the Mathematics Grade'))
 n[4] = Number(window.prompt('please enter the Computer Grade'))

 var pres
 
for(var i=0;i<5;i++){
     pres=(n[i]/100)*100
    if(pres>=90){
        console.log('A')
    }else if(pres>=80){
        console.log('B')
    }else if(pres>=70){
        console.log('C')
    }else if(pres>=60){
        console.log('D')
    }else if(pres>=40){
        console.log('E')
    }else{
        console.log('F');
    }
}

/* -------------------------------------------------------------------------- */
/*                                 Question 16                                */
/* -------------------------------------------------------------------------- */

var n=Number(window.prompt('please enter the number'))
switch (n){
    case 1:
        console.log(31*n);
        break;
    case 2:
        console.log(31*n);
        break;
    case 3:
        console.log(31*n);
        break;


    case 4:
        console.log(31*n);
        break;

    case 5:
        console.log(31*n);
        break;

    case 6:
        console.log(31*n);
        break;

    case 7:
        console.log(31*n);
        break;
    case 8:
        console.log(31*n);
        break;

    case 9:
        console.log(31*n);
        break;


    case 10:
        console.log(31*n);
        break;


    case 11:
        console.log(31*n);
        break;


    case 12:
        console.log(31*n);
        break;

    default:
        console.log('please enter right number of months');

}

/* -------------------------------------------------------------------------- */
/*                                 Question 17                                */
/* -------------------------------------------------------------------------- */
var l=window.prompt('please enter the letter')
switch(l){
    case('a'):
    console.log('vowel');
    break;
    
    case('e'):
    console.log('vowel');    break;

    case('o'):
    console.log('vowel');    break;

    case('i'):
    console.log('vowel');    break;

    case('u'):
    console.log('vowel');    break;

    default:
console.log('Consonant');


}


    
  /* -------------------------------------------------------------------------- */
  /*                                 Question 18                                */
  /* -------------------------------------------------------------------------- */

 var n = window.prompt('please enter the frist number')
 var nSec = window.prompt('please enter the Secand number')
 switch(true){
     case n>nSec:
         console.log('the max is :'+n);
         break;
    
    default:
        console.log('the max is :'+nSec);

 }
/* -------------------------------------------------------------------------- */
/*                                 Question 19                                */
/* -------------------------------------------------------------------------- */

var n = window.prompt('please enter the  number')
 
 switch(true){
     case n%2==0:
         console.log('even');
         break;
    
    default:
        console.log('odd');

 }

/* -------------------------------------------------------------------------- */
/*                                 Question 20                                */
/* -------------------------------------------------------------------------- */

 var n = window.prompt('please enter the  number')
 
 switch(true){
     case n>0:
         console.log('postive');
         break;

    case n<0:
        console.log('negative');
        break;

    
    default:
        console.log('zero');

 }

/* -------------------------------------------------------------------------- */
/*                                last Question                               */
/* -------------------------------------------------------------------------- */




var n = Number(window.prompt('please enter the frist number'))
var op = window.prompt('please enter the operation')
var nSec = Number(window.prompt('please enter the Second number'))



 
 switch(op){
     case '+':
         console.log(n+nSec);
         break;

    case '-':
        console.log(n-nSec);
        break;

    case '*':
        console.log(n*nSec);
        break;

    case '%':
        console.log(n/nSec);
        break;

    
    default:
        console.log('choose simple operation correct ');

 }
