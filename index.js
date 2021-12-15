function circularArray(str,k){
    var decriptedString = ""
    for(var i=0;i<str.length;i++){
        if(str[i].charCodeAt(0)-k < 65){
            decriptedString +=conversion('Z',k-(str[i].charCodeAt(0)-65))
        }else{            
            decriptedString += conversion(str[i],k)
        }
    }
    return decriptedString
}
function conversion(str,k){
    var asciiValue = str.charCodeAt(0)-k
    return String.fromCharCode(asciiValue)
}
console.log(circularArray('ABC',3))