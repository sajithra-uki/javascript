let word="good man"
function checktheword(word){
    let Boolean=true;
    for (let i=0; i=word.length; i--){
        if(word.charAt(i) !==word.charAt(word.length-1-i)){
            Boolean= false;
           }
    }
        return Boolean;
    
         
    }
   console.log(checktheword(word))

