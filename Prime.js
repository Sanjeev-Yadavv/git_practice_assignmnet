let num = 5
CheckPrime(num){
    let count = 0
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
console.log(CheckPrime(4))