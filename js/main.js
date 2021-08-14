var arrayQuotes = [
    {'author': '--Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': '--Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': '--Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': '--Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    }

];

function newQuotes(){
    var randomNumber = Math.floor(Math.random()*arrayQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayQuotes[randomNumber].quote}\"`;
    document.querySelector('#authorOutput').textContent = `${arrayQuotes[randomNumber].author}`;
    
}