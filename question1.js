// Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
(()=>{
    let num = [1,2,3,4,5];
    for (let i=0; i<num.length; i++) {
        if(num[i]%2!= 0) {
            console.log(num[i]);
        }
    }
})();