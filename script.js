function re(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved')
        }, 2000)
    });
}

async function call(){
    console.log('calling')
    var result = await re()
    console.log(result)
}

call()
console.log('has')

function my(...prams){
    return prams
}

let a = my(1,23,4)

const {foo, bar} = {
    foo:'FOO',
    bar:'BAR'
}
console.log(foo,bar)

let arr = [1,2,3]
let aa = arr.map(n => n+1)
console.log(arr)
console.log(aa)