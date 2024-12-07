it is 
1. collection of data values
2. the relationships among them
3. the functions or operations that can be applied to the data

1. what is the need for complexity Analysis?
    analys which approach is better.
A. which approach is better?
B. why care about identifyning which is better?
    huge data -->  different soulution --> different performance 
C.what does better mean?
    faster and less memory

2. what is time complexity
   how can find wich approach is faster ?  
       with seconds ? no becase fifferent machine has diferent second with on approach and one machine with different algorithm has differnet result

   couning numbers of simple operations computer has to do

   "if n is very large how it grows?" 
   "how runtime of an algorithms grows as input grows" --> big O 
3. Asympototic Analysis 
    f(n) -->  when n is very large  حد
4. what is Big O 
   O(n) =N  , the number of operation is bounded by a multiplr of N
   --> worst case  
5. common complexity 
 O(1) --> constant
 O(logn) --> binary search 
 O(n) --> traverse elemnts of array and add them
 O(nlogn) --> merge sort
 O(n^2)   --> 
 O(2^n) --> fibonachi
 O(n!)  --> 

6. space complexity
    how much auxiliart memory needed of run the algorithm
    space requirement by only algorithm
    ignore size of input
    trade of time complexity and space complexity

7.techniques to simplifying big o expressions
    1. drop constant 
    2. drop insignigiant terms
    3. different input parameters -->  O(N^2 + m) --> you cant drop m

8.Logarithms
  log in 2  در مبنای 2 منظوره
  algorithm that cuts inputs in half of every step
  if ypu double input , only 1 extra operation
  recursions 

Data Structures : Array
1.Access  --> s,T= O(1)  --> is a basic operation and if aray is very big then it takes the same time
2.Set    -->s,T = O(1)  --> set the value i mean
3.Traverse / Search   --> T= O(n) , S = O(1)
4.Copy --> S ,T = O(n) --> چون داریم یک ارایه جدید میسازیم 
5.Insert
   at begining O(n) reindex, s= O(1)
   at end   O(1), s= O(1)
   somewhere in between O(n) reindex, s= O(1) 
array is js is dynamic arrays and in java static arrays  
6.removing
   at begining O(n) reindex, s= O(1)
   at end   O(1), s= O(1)
   somewhere in between O(n) reindex, s= O(1) 
 