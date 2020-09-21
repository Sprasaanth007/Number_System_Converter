function Calculate1(){                  //Function to convert Binary/Octal to Decimal
    var option = 0;
    var number = document.getElementById('number1').value;

    if(document.getElementById('binary1').checked==true)
        option = 1;
    if(document.getElementById('octal1').checked==true)
        option = 2;
    
    if(option==1){
        var sum = 0;
        var i = 0;
        while(number>0)
        {
            num = number%10;
            sum += (num)*(2**i);
            number = Math.floor(number/10);
            i+=1;
        }
        document.getElementById('result1').innerHTML=sum;
    }

    if(option==2){
        var sum = 0;
        var i = 0;
        while(number>0)
        {
            num = number%10;
            sum += (num)*(8**i);
            number = Math.floor(number/10);
            i+=1;
        }
        document.getElementById('result1').innerHTML=sum;
    }
}

function Calculate2(){                      //Function to convert Decimal to Binary/Octal
    var option = 0;
    var number = document.getElementById('number2').value;
    if(document.getElementById('binary2').checked==true)
    option = 1;
    if(document.getElementById('octal2').checked==true)
    option = 2;

    if(option == 1){
        var ans = "";
        var temp = number;
        while(temp>0){
            if(temp % 2 == 0){
                ans = "0" + ans;
            }
            else{
                ans = "1" + ans;
            }
            temp = Math.floor(temp/2);
        }
    }

    if(option == 2){
        var ans = "";
        var rem = 0;
        var temp = number;
        while(temp>0){
            rem = temp % 8;
            var Rem = rem.toString();
            ans = Rem + ans;
            temp = Math.floor(temp/8);
        }
    }

    document.getElementById('result2').innerHTML=ans;
}