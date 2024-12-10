// 0
// 01
// 0110
// 01101001

const kthCrammer = (n:any, k:any):any=>{
    if ( n === 1) return 0
    let lenght = Math.pow(2, n-1)
    let mid =  lenght /2
    if(k <= mid){
        return kthCrammer(n-1,k)
    }
    else {
      return 1- kthCrammer(n-1,k-mid) // not
    }
}
// S = O(n)  توی کال استک
// T = O(n) = تعداد نود ها که همون 4 ضربدر کاری ک توی هر نوئد میکنی که اینجا پیدا کردن اون نود هست