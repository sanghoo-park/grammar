(function(exports){
    function TestModule(){}

    TestModule.prototype = {
        init : function(){
            console.log("testModule init");
            this.contain = $("<div>",{id:"module"});
            // this.contain.hide();
            // var showButton = 
            // $(
            //     '<button id = "developer_show_button" type="button" class="btn btn-outline-primary btn-sm">test</button>'
            // ).css({"position":"absolute","top":"5px","right":"5px","cursor":"pointer","z-index":"10000"}).on("click",$.proxy(function(){
            //     this.contain.show();
            // },this));

            // $("#root").append(showButton);

            $("#root").append(this.contain);
            var closeButton = 
            $(
                '<button id = "developer_close_button" type="button" class="btn btn-outline-primary btn-sm">X</button>'
            ).css("float","right").on("click",$.proxy(function(){
                this.contain.hide();
            },this));
            this.contain.append($("<p class='title'>Developer mode</p>"));
            $(".title").append(closeButton);
            this.contain.append($("<div class='developer_under_line'></div>"));
            this.setQuizSetNum();
            this.setGlobalSetNum();
            this.setLevel();
            this.gofindAndSeek();  
            this.textMode();  
            this.isLocalData();
            this.goEnding();
            this.fullScreen();
            this.setPart2();
            this.contain.hide();

            var num = 0;
            $(document).on("keyup","body", $.proxy(function(e){
                console.log(e.which);
                num = num + parseInt(e.which);
                console.log(num)
                if(num == 82){
                    this.contain.show();
                } 

                if(num > 82) num = 0;
            },this));
        },
        testButtonInit : function(value){
            $("."+value.attr("class")).remove();
            this.contain.append(value);
        },
        isLocalData : function(){
            var contant = 
            $(
                '<div class radio-contain>'+
                '<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value=false >server data</label></div>'+
                '<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value=true checked>local data</label></div>'+
                '</div>'
            );
            this.contain.append(contant);
            controller.model.localDataMode = ($(".radio label").find("input:checked").attr("value") == "true")?true:false;
            console.log(controller.model.localDataMode);
            $(".radio").on("change",function(e){
                console.log("local data mode = ",e.target.value);
                controller.model.localDataMode = (e.target.value == "true")?true:false;
            });
        },
        setPart2 : function(){
           
        },
        textMode : function(){
            var contant = 
            $(
                '<div class radio-contain>'+
                '<div class="radio2"><label><input type="radio" name="testMode" id="testMode1" value=true >skip Mode</label></div>'+
                '<div class="radio2"><label><input type="radio" name="testMode" id="testMode2" value=false checked>no skip Mode</label></div>'+
                '</div>'
            );
            localDataMode = false;
            this.contain.append(contant);
            controller.model.testMode = ($(".radio2 label").find("input:checked").attr("value") == "true")?true:false;
            $(".radio2").on("change",function(e){
                console.log("test mode = ",e.target.value);
                controller.model.testMode = (e.target.value == "true")?true:false;
            });
        },
        gofindAndSeek : function(){
            

            var contant2 = 
            $(
                '<div class="form-group" id="testModule_find_contain1">'+
                '<label for="find_place">물건찾기 장소 : </label>'+
                '<select class="form-control col-2 select_box" id="find_place" >'+
                '<option>01</option>'+
                '<option>02</option>'+
                '<option>03</option>'+
                '<option>04</option>'+
                '<option>05</option>'+
                '<option>06</option>'+
                '<option>07</option>'+
                '<option>08</option>'+
                '<option>09</option>'+
                '<option>10</option>'+
                '</select>'+
                '<span class="module_font"></span>'+
                '</div>'
            );

            this.contain.append(contant2);
            $("#find_place").on("change",function(e){
                controller.model.find_place = e.target.value;
            });

            var contant3 = 
            $(
                '<div class="form-group" id="testModule_find_contain2">'+
                '<label for="find_set">물건찾기 SET : </label>'+
                '<select class="form-control col-2 select_box" id="find_set" >'+
                '<option>1</option>'+
                '<option>2</option>'+
                '<option>3</option>'+
                '<option>4</option>'+
                '</select>'+
                '<span class="module_font"></span>'+
                '</div>'
            );

            this.contain.append(contant3);
            $("#find_set").on("change",function(e){
                controller.model.find_set = e.target.value;
            });

            var contant = 
            $(
                '<label for="developer_find_button">play find & seek : </label>'+
                '<button id = "developer_find_button" type="button" class="btn btn-outline-primary btn-sm">Find&Seek</button>'
            ).css({"cursor":"pointer"});
            this.contain.append(contant);
            $("#developer_find_button").on("click",function(e){
                console.log("find & seek click");
                controller.loadFinditemGame("data");
            });
        },

        goEnding: function(){
            var contant = 
            $(
                '<label for="goEnding_find_button">goEnding : </label>'+
                '<button id = "goEnding_find_button" type="button" class="btn btn-outline-primary btn-sm">goEnding</button>'
            ).css({"cursor":"pointer"});
            this.contain.append(contant);
            $("#goEnding_find_button").on("click",function(e){
                controller.onEnding();
            });
        },

        fullScreen: function(){
            var contant = 
            $(
                '<label for="fullScreen_button">fullScreen : </label>'+
                '<button id = "fullScreen_button" type="button" class="btn btn-outline-primary btn-sm">fullScreen</button>'
            ).css({"cursor":"pointer"});
            this.contain.append(contant);
            $("#fullScreen_button").on("click",function(e){
                controller.fullScreenModul.full_screen();
            });
        },

        setQuizSetNum : function(){
            var contant = 
            $(
                '<div class="form-group">'+
                '<label for="quiz_set">문제 번호 : </label>'+
                '<select class="form-control col-2 select_box" id="quiz_set" >'+
                '<option>1</option>'+
                '<option>2</option>'+
                '<option>3</option>'+
                '<option>4</option>'+
                '<option>5</option>'+
                '<option>6</option>'+
                '<option>7</option>'+
                '<option>8</option>'+
                '<option>9</option>'+
                '<option>10</option>'+
                '<option>11</option>'+
                '<option>12</option>'+
                '<option>13</option>'+
                '<option>14</option>'+
                '<option>15</option>'+
                '<option>16</option>'+
                '<option>17</option>'+
                '<option>18</option>'+
                '<option>19</option>'+
                '<option>20</option>'+
                '<option>21</option>'+
                '</select>'+
                '<span class="module_font"></span>'+
                '</div>'
            );

            this.contain.append(contant);
            $("#quiz_set").on("change",function(e){
                controller.model.activeQuizSetNum = e.target.value;
            });
        },
        setGlobalSetNum : function(){
            var contant = 
            $(
                '<div class="form-group ">'+
                '<label for="global_SetNum">Global play set : </label>'+
                '<select class="form-control col-2 select_box" id="global_SetNum" >'+
                '<option>1</option>'+
                '<option>2</option>'+
                '<option>3</option>'+
                '<option>4</option>'+
                '<option>5</option>'+
                '</select>'+
                '<span class="module_font"> (find&seek 카운트)</span>'+
                '</div>'
            );

            this.contain.append(contant);
            $("#global_SetNum").on("change",function(e){
                controller.model.globalSetNum = e.target.value;
                controller.globalUI.updateUI();
            });
        },
        setLevel : function(){
            this.levelContant = 
            $(
                '<div id = "testModule_level_contain" class="form-group">'+
                '<label for="global_LEVEL">LEVEL : </label>'+
                '<select class="form-control col-2 select_box" id="global_LEVEL" >'+
                '<option>Easy</option>'+
                '<option>Medium</option>'+
                '<option>Hard</option>'+
                '</select>'+
                '</div>'
            );

            this.contain.append(this.levelContant);
            $("#global_LEVEL").on("change",function(e){
                controller.model.activeLevel = e.target.value;
                console.log(controller.model.activeLevel);
            });
        },
        onSetLevel : function(){
            console.log(controller.model.activeLevel)
            $("#global_LEVEL")[0].value = controller.model.activeLevel;
        },
        act7ShowAnswerMode : function(value){
            var contant = 
            $(
                '<div class radio-contain ">'+
                '<div class="radio3" style="float:left;margin-right:10px;"><label><input type="radio" name="testMode" id="act7_testMode1" value=true >show answer</label></div>'+
                '<div class="radio3"><label><input type="radio" name="testMode" id="act7_testMode2" value=false checked>hide answer</label></div>'+
                '</div>'
            );
            value.append(contant);
            controller.model.act7AnswerShow = ($(".radio3 label").find("input:checked").attr("value") == "true")?true:false;
            $(".radio3").on("change",function(e){
                console.log("test mode = ",e.target.value);
                controller.model.setAct7AnswerShow((e.target.value == "true")?true:false);
            });
        },
    };

    exports.TestModule = TestModule;
})(this);