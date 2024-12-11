function powerSum(array :any , power = 1){
    let sum = 0;
   array.forEach((element:any) => {
    if(Array.isArray(element)){
                sum +=powerSum(element,power+1)
    }else{
        sum =+ element
    }
        
    });
    return Math.pow(sum,power)
}