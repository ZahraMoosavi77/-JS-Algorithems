const  findWinner = (n:any,k:any)=>{
   let arr = Array.from({length:n},(_,i)=>i+1)
   function helper(arr:any,startIndex:any){
        if(arr.length === 1) return arr[0]
        let indexToRemove =  (startIndex + k - 1)%arr.length
        arr.splice(indexToRemove,1)
        return helper(arr,indexToRemove)
   }
   return helper(arr,0)
}

const  findWinner2 = (n:any,k:any)=>{
  function josephus (n:any):any{
          if(n===1) return 0
          return ( josephus(n-1 + k)) %n
           
  }
  return josephus(n)+1
}
const  findWinner3 = (n:any,k:any)=>{
    let survivor = 0
       for(let  i = 2; i <=n ; i++){
         survivor = (survivor + k)%i
       }
    return survivor + 1
  
 }
 
