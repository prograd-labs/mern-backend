**Introduction:**

 This lab targets the idea of resolving `callback hell` using the idea of `Promises`. This lab also test one on -> `How to build a promise`.

**Task:**

  The task is to read a file -> `dog.txt`, and use the name written in dog.txt in order to fetch an image from an api. After fetching an image, store the image link, in a new file called -> `dog-img.txt`.
  The task is similar to lab 1 of this module. But in this lab, the idea is to modify the previous code and try not to fall into the trap of callback hell.
  Follow the following steps, for better clarity.

  ***STEP 1:*** 

    Complete the given two functions -> 

      1. readFilePromise:

          Return a promise, which should read a file when resolved and reject if there is no file to read.

      2. writeFilePromise:

          Return a promise, which should write in a new file called -> `dog-img.txt` when resolved, else reject if there is any error.
    
  ***STEP 2:***

    Observe, how `then` and `catch` are helping in resolving the promise and error handling, in a certain order.
    
  ***NOTE:*** You can clone lab 1, if needed.
