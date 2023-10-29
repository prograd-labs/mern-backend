**Introduction:**

 This lab targets the idea of `callback hell`. The idea is to understand, how one can easily fall into the trap of callback hell while developing a simple functionality.

**Task:**

  The task is to read a file -> `dog.txt`, and use the name written in dog.txt in order to fetch an image from an api. After fetching an image, store the image link, in a new file called -> `dog-img.txt`.
  Follow the following steps, for better clarity.

  ***STEP 1:*** 

    Using file system in js, read dog.txt file.

  ***STEP 2:***

    Read about `superagent`, for fetching an api and using npm, install the mentioned library. You can use the 
    following resource for better understanding.

  ***STEP 3:***

    Using `superagent`, fetch a dog image, using the following api:
    https://dog.ceo/api/breed/${data}/images/random
    Here -> `data` is a response that you will get by reading dog.txt. 
    The idea, is to pass a name from dog.txt to the above api, so that you can fetch an image of a dog which is
    mentioned in dog.txt file.

  ***STEP 4:***
  
    Take the response from superagent, and store the image in a new file called -> `dog-img.txt`.

  ***NOTE:*** You can also handle the edge case like -> if the image of the dog is not available 
