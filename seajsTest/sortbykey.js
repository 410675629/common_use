



;define(function (require,export,module) {
  function by(name){
    return function(o, p){
        var a, b;
       if(typeof o === "object" && typeof p === "object" && o && p) {
            a= o[name];
            b= p[name];
            if(a === b) {
                return 0;
               }
            if(typeof a === typeof b) {
                    return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }else{
            throw ("error");
        }
    }
  }
  module.exports = by;
});