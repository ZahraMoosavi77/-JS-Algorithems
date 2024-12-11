function toh(n: any, fromm: any, to: any, aux: any) {
  let count = 0;
  function helper(n: any, fromm: any, to: any, aux: any) {
    if (n === 1) {
      count += 1;
      console.log("move disk" + n + "from rod" + fromm + "to rod" + to);
      return;
    }
    // n-1 disks fromm aux
    helper(n - 1, fromm, aux, to);
    //nth disk from fromm to
    count += 1;
    console.log("move disk" + n + "from rod" + fromm + "to rod" + to);
    //ne- aux to
    helper(n - 1, aux, to, fromm);
  }
  helper(n, fromm, to, aux);
  return count;
}

// T = O(n*2)
//1 disk 1 move
//2 disk 3 move
//3 disk 7 move
//n disk 2*n -1

// another way
//T(n) = 2 * T(n-1) + 1 ....>  2*n 