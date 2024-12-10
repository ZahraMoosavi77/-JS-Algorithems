1. what is recursion ?
   it is a function calling itself until base condition / terminating condition happens
   forexample :  
    function ( n){
   if( n > 5) return
   print n
   function (n+1)
   }
2. when ro use recursion?
   you need to solve a plobrems,
   divide it into smaller subproblems, if subproblem is similar to the original problem

   function ( n){
   if n is equal to 1 --> return 1
   return function(n-1) \* n
   }

recursive leap of faith --> how to use recursion? 1. understand the problem, 2. identify subproblem 3. trust or faith 4. link 1 & 2 5. base condition

3. visualization : Recursion Tree,
   Recursion Call Stack S = O(n)
   when a function is called memory, has to be allocated to remember local variables,...
4. Recursion VS Iteration
   things done recursively can also be done iteratively
   iteration does not use recusrion call stack space : better space complexity
   Recursion has ascending phase abnd descending phase
   soloution with Recursion better scability , easy to write
5. ways to write base condition
   first invalid input , last valid input
6. recurrence relation
   expesses the solution of a problem as a function of the solution to smallest instances of the same problem

7. solving recursion questions
   draw recusrion tree
8. complexity 
   number of  noda * work done in each node;  ln * w + ON * wo
   S = max depth of tree
 