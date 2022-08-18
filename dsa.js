let arr=[1,2,3,4,6]
function miss(arr) {
    let x=0
    for(let i=0;i<arr.length-1;i++){
        x=x^arr[i]
        for(let j=i;j<arr.length;j++){
            x=x^j
        }
    }
    console.log(x)
}

miss(arr)