// Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// IIFE
(()=>{
    let num = [1,2,3,4,5];
    for (let i=0; i<num.length; i++) {
        if(num[i]%2 != 0) {
            console.log(num[i]);
        }
    }
})();
// anonymous function
const oddnum = function() {
    let num = [1,2,3,4,5];
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2 != 0)
        {
            console.log(num[i]);
        }
    }
}
oddnum()
// b.Convert all the strings to title caps in a string array
// anonymous function
const strs = function() {
    function toTitleCase(str) {
       str = str.split(" ");
        for (let i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(" ");
      }
      let print = toTitleCase("all the best");
      console.log(print);
}
strs()
// c.Sum of all numbers in an array
// anonymous function
const adnum = function () {
    let add=[1,2,3,4,5];
    let sum=0;
        for (let i=0;i<add.length;i++){
        sum+=add[i];
        }
        console.log(sum);
}
adnum();
// d.Return all the prime numbers in an array
const primeno = function()  {
    let arrlist = [1,2,3,4,5,6,7,8,9,10];
    let primearr = arrlist.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) 
          return false;
        }
        return true;
        })
    console.log(primearr);
    }
    primeno()
// e.Return all the palindromes in an array
// f.Return median of two sorted arrays of the same size
// g.Remove duplicates from an array
// h.Rotate an array by k times
