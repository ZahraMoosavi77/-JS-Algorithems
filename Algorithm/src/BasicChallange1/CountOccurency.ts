function CountOccurrencies (string : string,desiredLetter:string){
    let counterOfDesiredLetter = 0
    for(let i = 0; i < string.length ;i++  ) {
        if(string[i] === desiredLetter ) 
            counterOfDesiredLetter ++

      
    }
    return counterOfDesiredLetter
}



const CountOccurrencies2 = (string : string,desiredLetter:string) => {
    
    console.log(string.split(desiredLetter));
    
    string.split(desiredLetter).length - 1;}
    

export default CountOccurrencies2
