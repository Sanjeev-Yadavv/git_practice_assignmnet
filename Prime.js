let num = 5
let count = 0
 function CheckPrime(num){
    
    for(i=1; i<num; i++){
        if(num%i){
            count++
        }
    }
    if(count==2){
        return "Yes"
    }
    else{
        return "No"
    }
}
console.log(CheckPrime())