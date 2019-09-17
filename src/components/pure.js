
// 纯函数
function sum(a, b){
    return a + b
}

// 不是纯函数
function sum2(a, b) {
    a = a + b
    return a
}