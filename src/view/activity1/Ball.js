(function(exports){
    function Ball(scale,world,data){
        this.data = data;
        this.SCALE = scale;
        this.ballScale = 33.5;
        this.view = new createjs.Bitmap("./asset/img/act1/ball"+controller.model.viewName+".png");
        this.view.regX = this.view.regY = this.ballScale;

        var fixDef = new box2d.b2FixtureDef();
        fixDef.density = 5.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.8;
        this.bodyDef = new box2d.b2BodyDef();
        this.bodyDef.type = box2d.b2Body.b2_dynamicBody;
        this.bodyDef.position.x = 100/this.SCALE + (Math.random()*5);
        this.bodyDef.position.y = Math.random()*5;

        fixDef.shape = new box2d.b2CircleShape(this.ballScale/this.SCALE);
        this.view.body = world.CreateBody(this.bodyDef);
        this.view.body.CreateFixture(fixDef);
        this.view.on("tick", $.proxy(this.tick,this), this.view);
    }

    Ball.prototype = {
        getBody : function(){
            return this.view.body;
        },

        getData : function(){
            return this.data;
        },

        tick : function(e){
            e.target.x = e.target.body.GetPosition().x * this.SCALE;
            e.target.y = e.target.body.GetPosition().y * this.SCALE;
            e.target.rotation = e.target.body.GetAngle() * (180/Math.PI);
        }
    };
    this.Ball = Ball;
})(this);