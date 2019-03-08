(function(exports){
    function Progress(){}

    Progress.prototype = {
        init : function(){
            this.stage = $("#progress");
            // this.contain = $('<div class="progress_background_bg" style="background:url(./asset/img/progress/part'+controller.model.isPart+'.png)"></div>');
            var img = $("<img id='progress_bgImg' src = '"+controller.model.imgPath+"progress/part"+controller.model.isPart+".png' />")
            // this.stage.css({"background":"url(./asset/img/progress/part"+controller.model.isPart+".png)","background-repeat": "no-repeat"});
            this.stage.fadeIn();
            var data = controller.model.progressData;
            
            this.textFiled = $("<ul id='progress_top_textF' class='font_embed'><li></li><li></li><li></li><li></li><ul>");
            this.textFiled.find("li:nth-child(1)").text(data.user_nm);
            this.textFiled.find("li:nth-child(2)").text(data.user_id);
            this.textFiled.find("li:nth-child(3)").text(data.result[0].act_quest[0].date);
            this.textFiled.find("li:nth-child(4)").text(controller.model.coin);
            this.stage.append(this.textFiled);
            this.quitButton = $("<div id='progress_quit_button'></div>");
            this.printButton = $("<div id='progress_print_button'></div>");
            this.stage.append(this.quitButton);
            this.stage.append(this.printButton);
            this.stage.append(img);
            this.quitButton.on("click",$.proxy(this.onClickListener,this));
            this.printButton.on("click",$.proxy(this.onClickListener,this));
            if(controller.model.isPart == "1"){
                this.onpart1DataSet();
            }else{
                this.onpart2DataSet();
            }
        },
        onpart1DataSet : function(){
            this.progressFilde = 
            $(
                "<ul id='progress_top_filde' class='font_embed'>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li><li></li>"+
                    "</ul>"+
                "</ul>"
            );

            this.stage.append(this.progressFilde); 
            var path = controller.model.imgPath;
            this.img = $("<img src = '"+path+"progress/star_over.png"+"'/>");

            var num = this.progressFilde.find("ul").length;
            
            for(var i=0;i<5;i++){
                this.progressFilde.find("ul li").append(this.img);
            }

            for(i=5;i<10;i++){
                this.progressFilde.find("ul:nth-child("+i+") li img:last-child").remove();
                this.progressFilde.find("ul:nth-child("+i+") li img:last-child").remove();
                this.progressFilde.find("ul:nth-child("+i+") li img:last-child").remove();
            }
            this.progressFilde.find("ul li").append($("<span class='font_embed'>0</span>"));
            this.progressFilde.find("ul:last-child li:last-child").remove();

            var data = controller.model.progressData.result[0].act_quest[0];
            var totalData = [];
            var act1_1 = [];
            var act1_2 = [];
            var act1_3 = [];
            var act1_4 = [];
            var act2_1 = [];
            var act2_2 = [];
            var act2_3 = [];
            var act2_4 = [];
            var act2_5 = [];
            var act3 = [];

            act1_1.push({"star":String(data.act1_1.lv1).split(","),"cnt":data.act1_1.lv1_cnt});
            act1_1.push({"star":String(data.act1_1.lv2).split(","),"cnt":data.act1_1.lv2_cnt});
            act1_1.push({"star":String(data.act1_1.lv3).split(","),"cnt":data.act1_1.lv3_cnt});

            act1_2.push({"star":String(data.act1_2.lv1).split(","),"cnt":data.act1_2.lv1_cnt});
            act1_2.push({"star":String(data.act1_2.lv2).split(","),"cnt":data.act1_2.lv2_cnt});
            act1_2.push({"star":String(data.act1_2.lv3).split(","),"cnt":data.act1_2.lv3_cnt});

            act1_3.push({"star":String(data.act1_3.lv1).split(","),"cnt":data.act1_3.lv1_cnt});
            act1_3.push({"star":String(data.act1_3.lv2).split(","),"cnt":data.act1_3.lv2_cnt});
            act1_3.push({"star":String(data.act1_3.lv3).split(","),"cnt":data.act1_3.lv3_cnt});

            act1_4.push({"star":String(data.act1_4.lv1).split(","),"cnt":data.act1_4.lv1_cnt});
            act1_4.push({"star":String(data.act1_4.lv2).split(","),"cnt":data.act1_4.lv2_cnt});
            act1_4.push({"star":String(data.act1_4.lv3).split(","),"cnt":data.act1_4.lv3_cnt});

            var arr1 = String(data.act2.lv1).split(",");
            var arr2 = String(data.act2.lv2).split(",");
            var arr3 = String(data.act2.lv3).split(",");

            act2_1.push({"star":[],"cnt":data.act2.lv1_cnt_1});
            act2_1.push({"star":[],"cnt":data.act2.lv2_cnt_1});
            act2_1.push({"star":[],"cnt":data.act2.lv3_cnt_1});

            act2_2.push({"star":[],"cnt":data.act2.lv1_cnt_2});
            act2_2.push({"star":[],"cnt":data.act2.lv2_cnt_2});
            act2_2.push({"star":[],"cnt":data.act2.lv3_cnt_2});

            act2_3.push({"star":[],"cnt":data.act2.lv1_cnt_3});
            act2_3.push({"star":[],"cnt":data.act2.lv2_cnt_3});
            act2_3.push({"star":[],"cnt":data.act2.lv3_cnt_3});

            act2_4.push({"star":[],"cnt":data.act2.lv1_cnt_4});
            act2_4.push({"star":[],"cnt":data.act2.lv2_cnt_4});
            act2_4.push({"star":[],"cnt":data.act2.lv3_cnt_4});

            act2_5.push({"star":[],"cnt":data.act2.lv1_cnt_5});
            act2_5.push({"star":[],"cnt":data.act2.lv2_cnt_5});
            act2_5.push({"star":[],"cnt":data.act2.lv3_cnt_5});

            

            act3.push({"star":String(data.act3.lv1).split(","),"cnt":data.act3.lv1_cnt});
            act3.push({"star":String(data.act3.lv2).split(","),"cnt":data.act3.lv2_cnt});
            act3.push({"star":String(data.act3.lv3).split(","),"cnt":data.act3.lv3_cnt});

            totalData.push(act1_1,act1_2,act1_3,act1_4,act2_1,act2_2,act2_3,act2_4,act2_5,act3);

            console.log(totalData);

            if(arr1 != ""){
                for(var i=0;i<arr1.length;i++){
                    totalData[Math.round(parseInt(arr1[i])/2)+3][0].star.push((((parseInt(arr1[i])%2)+1)%2)+1);
                }
            }

            if(arr2 != ""){
                for(var i=0;i<arr2.length;i++){
                    totalData[Math.round(parseInt(arr2[i])/2)+3][1].star.push((((parseInt(arr2[i])%2)+1)%2)+1);
                }
            }

            if(arr3 != ""){
                for(var i=0;i<arr3.length;i++){
                    totalData[Math.round(parseInt(arr3[i])/2)+3][2].star.push((((parseInt(arr3[i])%2)+1)%2)+1);
                }
            }

            for(var j=0;j<totalData.length;j++){
                for(i=0;i<totalData[j].length;i++){
                    this.progressFilde.find("ul:nth-child("+(j+1)+") li:nth-child("+(i+1)+") span").html(totalData[j][i].cnt);
                    if(j == 3 && i == 0) this.progressFilde.find("ul:nth-child("+(j+1)+") li:nth-child("+(i+1)+") img").hide();
                    
                    for(var k=0;k<totalData[j][i].star.length;k++){
                        console.log(totalData[j][i].star[k]);
                        if(totalData[j][i].star[k] != "") this.progressFilde.find("ul:nth-child("+(j+1)+") li:nth-child("+(i+1)+") img:nth-child("+totalData[j][i].star[k]+")").attr("src",path+"progress/star.png");
                        
                    }
                }
            }
            
        },

        onpart2DataSet : function(){
            console.log("part2");
            this.progressFilde = 
            $(
                "<ul id='progress_top_filde2' class='font_embed'>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li>"+
                    "</ul>"+
                    "<ul>"+
                        "<li></li><li></li><li></li><li></li>"+
                    "</ul>"+
                "</ul>"
            );

            this.stage.append(this.progressFilde); 
            var path = controller.model.imgPath;
            this.img = $("<img src = '"+path+"progress/star_over.png"+"'/>");
            this.img1 = $("<img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/>");
            this.img2 = $("<img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/>");
            this.img3 = $("<img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/><img src = '"+path+"progress/star_over.png"+"'/>");
            var num = this.progressFilde.find("ul").length;
            
            for(var i=0;i<5;i++){
                this.progressFilde.find("ul li").append(this.img);
            }

            this.progressFilde.find("ul:nth-child(7) li:nth-child(1)").append(this.img1);
            this.progressFilde.find("ul:nth-child(7) li:nth-child(2)").append(this.img2);
            this.progressFilde.find("ul:nth-child(7) li:nth-child(3)").append(this.img3);

            for(i=0;i<6;i++){

                this.progressFilde.find("ul:nth-child("+i+") li img:last-child").remove();
                this.progressFilde.find("ul:nth-child("+i+") li img:last-child").remove();
                this.progressFilde.find("ul:nth-child("+i+") li:first-child img:last-child").remove();
                
            }
            this.progressFilde.find("ul li").append($("<span class='font_embed'>0</span>"));
            this.progressFilde.find("ul:last-child li:last-child").remove();

            var data = controller.model.progressData.result[0].act_quest[0];
            var totalData = [];
            var act4_1 = [];
            var act4_2 = [];
            var act4_3 = [];
            var act4_4 = [];
            var act4_5 = [];
            var act5 = [];
            var act6 = [];
            var act7 = [];

            var arr1 = String(data.act4.lv1).split(",");
            var arr2 = String(data.act4.lv2).split(",");
            var arr3 = String(data.act4.lv3).split(",");

            act4_1.push({"star":[],"cnt":data.act4.lv1_cnt_1});
            act4_1.push({"star":[],"cnt":data.act4.lv2_cnt_1});
            act4_1.push({"star":[],"cnt":data.act4.lv3_cnt_1});

            act4_2.push({"star":[],"cnt":data.act4.lv1_cnt_2});
            act4_2.push({"star":[],"cnt":data.act4.lv2_cnt_2});
            act4_2.push({"star":[],"cnt":data.act4.lv3_cnt_2});

            act4_3.push({"star":[],"cnt":data.act4.lv1_cnt_3});
            act4_3.push({"star":[],"cnt":data.act4.lv2_cnt_3});
            act4_3.push({"star":[],"cnt":data.act4.lv3_cnt_3});

            act4_4.push({"star":[],"cnt":data.act4.lv1_cnt_4});
            act4_4.push({"star":[],"cnt":data.act4.lv2_cnt_4});
            act4_4.push({"star":[],"cnt":data.act4.lv3_cnt_4});

            act4_5.push({"star":[],"cnt":data.act4.lv1_cnt_5});
            act4_5.push({"star":[],"cnt":data.act4.lv2_cnt_5});
            act4_5.push({"star":[],"cnt":data.act4.lv3_cnt_5});

            

            act5.push({"star":String(data.act5.lv1).split(","),"cnt":data.act5.lv1_cnt});
            act5.push({"star":String(data.act5.lv2).split(","),"cnt":data.act5.lv2_cnt});
            act5.push({"star":String(data.act5.lv3).split(","),"cnt":data.act5.lv3_cnt});

            act6.push({"star":String(data.act6.lv1).split(","),"cnt":data.act6.lv1_cnt});
            act6.push({"star":String(data.act6.lv2).split(","),"cnt":data.act6.lv2_cnt});
            act6.push({"star":String(data.act6.lv3).split(","),"cnt":data.act6.lv3_cnt});

            act7.push({"star":String(data.act7.lv1).split(","),"cnt":data.act7.lv1_cnt});
            act7.push({"star":String(data.act7.lv2).split(","),"cnt":data.act7.lv2_cnt});
            act7.push({"star":String(data.act7.lv3).split(","),"cnt":data.act7.lv3_cnt});

            totalData.push(act4_1,act4_2,act4_3,act4_4,act4_5,act5,act6,act7);


            if(arr1 != ""){
                for(i=0;i<arr1.length;i++){
                   
                    totalData[Math.round(parseInt(arr1[i])/2)-1][0].star.push((((parseInt(arr1[i])%2)+1)%2)+1);
                }
            }

            if(arr2 != ""){
                for(i=0;i<arr2.length;i++){
                    console.log(arr2[i]+" ///")
                    console.log(Math.round((parseInt(arr2[i])+1)/3)-1);
                    totalData[Math.round((parseInt(arr2[i])+1)/3)-1][1].star.push((((parseInt(arr2[i])%3)+2)%3)+1);
                }
            }

            if(arr3 != ""){
                for(i=0;i<arr3.length;i++){
                    totalData[Math.round((parseInt(arr3[i])+1)/3)-1][2].star.push((((parseInt(arr3[i])%3)+2)%3)+1);
                }
            }

            for(var j=0;j<totalData.length;j++){
                for(i=0;i<totalData[j].length;i++){
                    this.progressFilde.find("ul:nth-child("+(j+1)+") li:nth-child("+(i+1)+") span").html(totalData[j][i].cnt);
                    for(var k=0;k<totalData[j][i].star.length;k++){
                        if(totalData[j][i].star[k] != "") this.progressFilde.find("ul:nth-child("+(j+1)+") li:nth-child("+(i+1)+") img:nth-child("+totalData[j][i].star[k]+")").attr("src",path+"progress/star.png");
                        
                    }
                }
            }

            console.log(totalData);

        },

        onClickListener : function(e){
            console.log(e.currentTarget.id)
            switch(e.currentTarget.id){
                case "progress_quit_button" :
                this.stage.fadeOut(1000,$.proxy(function(){
                    this.stage.html("");
                },this));
                break;

                case "progress_print_button" :
                window.print();
                break;
            }
        }
    };

    exports.Progress  = Progress;
})(this);