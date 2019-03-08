var box2d = {
    b2Vec2 : Box2D.Common.Math.b2Vec2,
    b2BodyDef : Box2D.Dynamics.b2BodyDef,
    b2Body : Box2D.Dynamics.b2Body,
    b2FixtureDef : Box2D.Dynamics.b2FixtureDef,
    b2Fixture : Box2D.Dynamics.b2Fixture,
    b2World : Box2D.Dynamics.b2World,
    b2MassData : Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape : Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape : Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw : Box2D.Dynamics.b2DebugDraw,
    b2Controller : Box2D.Dynamics.Controllers.b2Controller
};

(function(exports){
    function Physical(){
        this.ballArray = [];
        this.quizArray = [];
        this.SCALE = 30;
        // this.stage; 
        // this.world; 
        // this.debug;
        this.debugMode = false;
    }

    Physical.prototype = {
        onReset : function(){
            for(var i=0;i<this.ballArray.length;i++){
                this.stage.removeChild(this.ballArray[i].view);
                this.world.DestroyBody(this.ballArray[i].getBody());
            }
            this.ballArray = [];
        },
        init : function(stageNum,quizData){
            this.quizArray = [];
            this.stage = new createjs.Stage(document.getElementById("canvas"));
            this.debug = document.getElementById("debug");
            if(this.world == undefined){
                this.setupPhtsics();
                createjs.Ticker.setFPS(controller.model.globalFPS);
                createjs.useRAF = true;
                createjs.Ticker.addEventListener("tick", $.proxy(this.tick,this));
            } 
            
            // createjs.Ticker.setFPS(60);
            // createjs.useRAF = true;
            
            var data = quizData[stageNum-1];
            for(var i=0;i<data.example.length;i++){
                for(var k=0;k<data.example[i].question.length;k++){
                    var obj={question:data.example[i].question[k],answer:data.example[i].answer};
                    this.quizArray.push(obj);
                }
            }
            console.log("this.quizArray"+this.quizArray);
            $(window).trigger({type:"total_quiz",total:this.quizArray.length});
            this.setBall(this.quizArray);
        },

        removeBall : function(){
            console.log("remove ball");
            var num;
            if(this.ballArray.length == 0) return;
            var prevBall = this.ballArray[0];
            num = 0;
            
            for(var i=1;i<this.ballArray.length;i++){
                if(prevBall.view.body.GetPosition().y < this.ballArray[i].view.body.GetPosition().y){
                num = i; 
                prevBall = this.ballArray[i];
                } 
            }
            this.ballArray.splice(num,1);
            $("#dragicon").trigger({type:"setball",textArr:prevBall.getData()});
            this.stage.removeChild(prevBall.view);
            this.world.DestroyBody(prevBall.getBody());
        },
        setupPhtsics : function(){
            this.world = new box2d.b2World(new box2d.b2Vec2(0,70),true);
            //create ground
            var fixDef = new box2d.b2FixtureDef();
            fixDef.density = 2;
            fixDef.friction = 0.5;
            var bodyX = 10;
            var bodyY = 10;

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 325 / this.SCALE;
            bodyDef.position.y = 200 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 25;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(10 / this.SCALE, 50 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 265 / this.SCALE;
            bodyDef.position.y = 282 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 55;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(10 / this.SCALE, 70 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 100 / this.SCALE;
            bodyDef.position.y = 300 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 130;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(10 / this.SCALE, 50 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 12 / this.SCALE;
            bodyDef.position.y = 200 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 165;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(10 / this.SCALE, 50 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 48 / this.SCALE;
            bodyDef.position.y = 250 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 135;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(10 / this.SCALE, 50 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef(); // 왼쪽 직각 기둥......................
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 0 / this.SCALE;
            bodyDef.position.y = 130 / this.SCALE;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(9 / this.SCALE, 30 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 9 / this.SCALE;
            bodyDef.position.y = 100 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 21;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(9 / this.SCALE, 30 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef(); // 왼쪽 직각 기둥 막기용도......................
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 50 / this.SCALE;
            bodyDef.position.y = -50 / this.SCALE;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(9 / this.SCALE, 100 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef(); // 오른쪽 직각 기둥 막기용도......................
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 280 / this.SCALE;
            bodyDef.position.y = -60 / this.SCALE;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(9 / this.SCALE, 100 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);


            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 0 / this.SCALE;
            bodyDef.position.y = 100 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 39;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(9 / this.SCALE, 100 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 310 / this.SCALE;
            bodyDef.position.y = 60 / this.SCALE;
            bodyDef.angle = (Math.PI / 180) * 140;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(9 / this.SCALE, 50 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);


            bodyDef = new box2d.b2BodyDef();
            bodyDef.type = box2d.b2Body.b2_staticBody;
            bodyDef.position.x = 335 / this.SCALE;
            bodyDef.position.y = 130 / this.SCALE;
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(10 / this.SCALE, 50 / this.SCALE);
            this.world.CreateBody(bodyDef).CreateFixture(fixDef);

            //setup debug draw
            if(this.debugMode){
                var debugDraw = new box2d.b2DebugDraw();
                debugDraw.SetSprite(this.debug.getContext('2d'));
                debugDraw.SetDrawScale(30);
                debugDraw.SetFillAlpha(0.5);
                debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_joinBit);
                this.world.SetDebugDraw(debugDraw);
            }
        },

        tick : function(){
            this.stage.update();
            this.world.DrawDebugData();
            this.world.Step(1/60, 10, 10);
            this.world.ClearForces();
        },

        setBall : function(value){
            console.log(this.ballArray);
            for(var i=0;i<value.length;i++){
                var b = new Ball(this.SCALE,this.world,value[i]);
                this.ballArray.push(b);
                this.stage.addChild(b.view);
            }
            console.log(this.ballArray);
        }
    };
    exports.Physical = Physical;
})(this);



