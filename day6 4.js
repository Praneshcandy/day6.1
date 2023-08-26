class uber{
    constructor(name,location,km){
        this.name = name;
        this.location = location;
        this.km = km;
    
    }
    printprice(){
        return this.km*30
    }
}
var u1= new uber("pranesh","ooty",20)
console.log(u1.printprice());