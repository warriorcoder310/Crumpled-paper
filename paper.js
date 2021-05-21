class paper
{
     
	constructor(x,y)
    {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2			
        }
        this.image=loadImage("paper.png")
        this.x=x;
		this.y=y;
		this.radius=50;
			   
		this.body=Bodies.circle(x, y,50,  options);
 		World.add(world, this.body);
     
         

    }

   

display()
{
    var paperPos=this.body.position;		

    push()
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER)
    //strokeWeight(4);
    fill(128,128,128)
    image(this.image,0,0,40);
    pop()
    
   }
}