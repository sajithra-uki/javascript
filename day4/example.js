var num =11;
function checkprimenumber(num,divisor =2){
    if(num <=1){
        return "false";
    }
    else{
        if(num==2){
            return "true";
        }else{
            if(num%divisor ===0){
                return "false";
            }
            else{
                if(divisor*divisor >num){
                    return "true";
                }
                else {
                    return checkprimenumber(num,divisor+1)
                }
            }
        }
        
    }

    }
    console.log(checkprimenumber(num));

    var amount=45000
    function discount(amount){
        if(amount>5000){
            return " amount*0.8";
        }
        else if(num>2000){
            return " amount*0.9";
        }
        else {
            return "no discount";
        }
        

    }
    console.log(discount(num));

    var num=50;
    function BMIinhuman(){
        if(num<=18){
            return "underweight";
        }
        else if(num<=45){
            return "normal";
        }
        else if(num<=80){
            return "overweight";
        }
        else if(num<90){
            return "obese";
        }
    }
    console.log(BMIinhuman(num));

    var marks= 60;
    function greadingsystem(marks){
        if(90<=marks){
            return "A";
        }
        else if(75<=marks){
            return "B";
        }
        else if(50<=marks){
            return "C";
        }
        else
            {return "F";}
        
    }
    console.log(greadingsystem(marks));

