class Tree{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 450;
        this.height = 600;
        this.wallThickness = 10;
        this.image = loadImage("Images/tree.png");
        this.tree = Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,{isStatic:true})      
       

        World.add(world,this.tree)
  
     }
     display(){
        var posBottom = this.tree.position
       

        push();
        translate(posBottom.x,posBottom.y);
       
        rectMode(CENTER);
        imageMode(CENTER);
        
        
        strokeWeight(3);
        fill("white");
       // rect(0,0,this.width,this.wallThickness);
       image(this.image,0,-this.height/2,this.width,this.image.length);
        pop()
     }
}