(function(exports){
    function RandomArray(){}

    RandomArray.prototype = {
        getRandomArrayNumber : function(value){
            var arr = [];
            for(var i=0;i<value.length;i++){
                arr.push(i);
            }
            
            var newArr = [];
            while(arr.length > 0){
                var num = parseInt((Math.random() * arr.length));
                newArr.push(arr[num]);
                arr.splice(num,1);
            }
            console.log(newArr);
            return newArr;
        },
        getRandomArray : function(value){
            var arr = value;
            var newArr = [];
            while(arr.length > 0){
                var num = parseInt((Math.random() * arr.length));
                newArr.push(arr[num]);
                arr.splice(num,1);
            }
            console.log(newArr);
            return newArr;
        }
    };
    exports.RandomArray = RandomArray;
})(this);