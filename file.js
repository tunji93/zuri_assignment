// 1.
const convertFahrToCelsius = (temp) => {
    const type_ = typeof temp
    const check = type_==="string" || type_==="number"
    
    if(check) {
     const check_ = parseFloat(temp)
     
     
      
        if(check_ || parseFloat(temp)===0) {
          const newArg = parseFloat(temp)
          const result = (newArg - 32) * 5/9
          console.log(result.toFixed(4))
        }
        else {console.log(`${JSON.stringify(temp)} is not a valid number but a/an ${type_}.`)}
    }
    else if (!check && Array.isArray(temp)) {
      console.log(`${JSON.stringify(temp)} is not a valid number but a/an array.`)
    }

    else {
      
        console.log(`${JSON.stringify(temp)} is not a valid number but a/an ${type_}.`)
      }
      
}

// 2. 

const checkYuGiOh = (N) => {
  const newArr = []
  const check = parseInt(N, 10)
  if (!check || check <= 0 ) {
     console.log(`invalid parameter: ${N}`) 
  }
  else {
    const n = parseInt(N, 10)
    const arr = [...Array(n+1).keys()].slice(1);
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]%2===0 && arr[i]%3===0 && arr[i]%5===0) {
        newArr.push("yu-gi-oh")
      }
      else if(arr[i]%2===0 && arr[i]%3===0) {
        newArr.push("yu-gi")
      }
      else if(arr[i]%3===0 && arr[i]%5===0) {
        newArr.push("gi-ho")
      }
      else if(arr[i]%2===0 && arr[i]%5===0) {
        newArr.push("yu-ho")
      }
      else if(arr[i]%2===0) {
        newArr.push("yu")
      }
      else if(arr[i]%3===0) {
        newArr.push("gi")
      }
      else if(arr[i]%5===0) {
        newArr.push("ho")
      }
      else {
        newArr.push(arr[i])
      }
 }
  if(newArr.length){
    console.log(newArr)
  }
}

}