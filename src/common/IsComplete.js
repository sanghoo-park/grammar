(function(exports){
    function IsComplete(){}
    IsComplete.prototype = {
        getComplete : function(){
            var data = controller.model.homeData.result[0].act_quest[0];
            var arr = String(data.items).split(",");
            if(controller.model.isPart == "1"){
                if(arr.length == 20 && data.act1_1 == "Y" && data.act1_2 == "Y" && data.act1_3 == "Y" && data.act1_4 == "Y" && data.act2 == "Y" && data.act3 == "Y"){
                    return true;
                }else{
                    return false;
                }
            }else{
                if(arr.length == 20 && data.act4 == "Y" && data.act5 == "Y" && data.act6 == "Y" && data.act7 == "Y"){
                    return true;
                }else{
                    return false;
                }
            }
        },
        getActComplete : function(){
            var data = controller.model.homeData.result[0].act_quest[0];
            if(controller.model.isPart == "1"){
                if(data.act1_1 == "Y" && data.act1_2 == "Y" && data.act1_3 == "Y" && data.act1_4 == "Y" && data.act2 == "Y" && data.act3 == "Y"){
                    return true;
                }else{
                    return false;
                }
            }else{
                if(data.act4 == "Y" && data.act5 == "Y" && data.act6 == "Y" && data.act7 == "Y"){
                    return true;
                }else{
                    return false;
                }
            }
        },
        getItemComplete : function(){
            var data = controller.model.homeData.result[0].act_quest[0];
            var arr = String(data.items).split(",");
            if(controller.model.isPart == "1"){
                if(arr.length == 20){
                    return true;
                }else{
                    return false;
                }
            }else{
                if(arr.length == 20){
                    return true;
                }else{
                    return false;
                }
            }
        },
    };

    exports.IsComplete = IsComplete;
})(this);