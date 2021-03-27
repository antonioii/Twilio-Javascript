class TargetingSolution {
  constructor(obj) {
	this.a = obj.x;
	this.b = obj.y;
	this.c = obj.z;
	this.target = function target(){return '(' + obj.x + ', ' + obj.y + ', ' + obj.z + ')'}
 
  }

}