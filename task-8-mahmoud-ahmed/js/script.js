button=`  <button class="btn py-3" onclick="Display()">
Random Quote
</button>`;



document.getElementById('button').innerHTML=button;
var i=0;



var Quots=[
'"You miss 100% of the shots you don\'t take.\"',
'"Resentment is like drinking poison and waiting for your enemies to die."',
'"Do not take life too seriously. You will not get out alive."',
'"The best revenge is massive success."',
'"It\'s not what happens to you, but how you react to it that matters."'
,'“Be the change that you wish to see in the world.”',
'“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”'
];





var who=['--Wayne Gretzy',
'--Nelson Mandela',
'--Elbert Hubbard',
'--Frank Sinatra',
'--Epictetus',
'--Mahatma Gandhi',
'--J.K. Rowling, Harry Potter and the Goblet of Fire']



function Display(){

  if(i<Quots.length){
       
    document.getElementById('Quots').innerHTML= Quots[i]
    document.getElementById('Quots-who').innerHTML= who[i]
    i++;
  }else{
      i=0
  }

}
