class NPC {
	constructor(x,y){
		this.x = x;
		this.y = y;

		this.w = 70;
		this.h = 154;
		this.isLeftBehind = false;		
	}

	display(){
		image(NPCImage,this.x, this.y, 80, 160);
	}

	move (){
		this.y += 4.2;
	}

	collide(PC1){
		if(PC1.x < this.x + this.w && PC1.x + PC1.w > this.x)
			if(PC1.y < this.y + this.h && PC1.y + PC1.h > this.y)  return true;		
	}

	continue(){
		return (this.y > 600);
	}

	isLeftBehindBy(PC1){
		if (PC1.y < this.y)  return true;
	}
}
