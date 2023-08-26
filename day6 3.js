//Q3.
class person{
    constructor(name,age,education,stream){
        this.name = name;
        this.age = age;
        this.education = education;
        this.stream = stream;
    }
    printdetails(){
        return`the person details${this.name}`;
    }
}
var p1 = new person("Sakthi","23","Bachelor of Engineering","Computer science",) 
console.log(p1.printdetails());