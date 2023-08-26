class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getarea(){
        return`area is ${Math.PI*1.0*1.0}`;
    }
    getcircumference(){
        return`circumference is ${2*Math.PI*1.0}`;

    }
}
var c1=new circle(1.0,"red")
console.log(c1.getarea());