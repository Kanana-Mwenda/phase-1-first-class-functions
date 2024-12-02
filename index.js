function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction (){
    function namedFunction (){
    console.log("named function");
    }
    return namedFunction;
  } 
function returnsAnAnonymousFunction (){
    return function () {
        console.log("anonymous function")
    }
}