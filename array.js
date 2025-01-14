function bid(){
     let arr=["Apple","Mango","Banana","Grapes", "papaya"]
    // console.log(arr.length);
    // // arr.pop() //  remove last element
    // arr.pop("Grapes")
    // console.log(arr);
   
    // arr.push("papaya", "pineapple")
    // console.log(arr);

    // arr.shift()
    // console.log(arr);

    //  arr.unshift("fruits")//add element from front 
    //  console.log(arr);

    // let arr1=["veg", "nonveg"]
    
    // let arr2= arr.concat(arr1)
    //  console.log(arr2);

     let arr3=[1,2,3,4,]
    // let arr4=[5,6,7,8]
    // let arr5=[9,10,11,12]
    // let arr6=arr3.concat(arr5,arr4)
    // console.log(arr6)


// slice method:method does not change the original array. method returns selected elements in an array, as a new array.method selects from a given start, up to a (not inclusive) given end.
    console.log(arr.slice(2,4))
    console.log(arr.slice(0,-1))

    // splice method:add element or method adds and/or removes array elements.
    arr.splice(2,0,"watermelon", "grape")
    console.log(arr);
//    delete element using splice mehtod:
    arr3.splice(2,2,10);
    console.log(arr3);

    // sort:assending order
    arr3.sort();
    console.log(arr3)

    // dissanding order:

    arr3.sort();
    arr3.reverse();
    console.log(arr3);





    



}
