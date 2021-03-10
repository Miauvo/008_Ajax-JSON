// obj JavaScript
class Cat{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
   
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}





function SendObj(value) {

    console.log(value); 

    let p = document.getElementsByTagName("p")[0];
    p.innerHTML = value;

 

    let cat = 
        new Cat(
            value.elements["name"].value, 
            value.elements["age"].value
            );


    let text = document.getElementsByTagName("textarea")[0];
    text.value = JSON.stringify(cat);  

    let inputs = document.getElementsByTagName("input");
    inputs[0].value="";
    inputs[1].value="";
}




function SendJSON(value) {

    console.log(value); 

    let jsonCat = value.elements["json"].value;


    console.log(jsonCat);

    if (!(jsonCat==="")){
         var objCat = JSON.parse(jsonCat);
         console.log(objCat);

         let form1 = document.getElementById("form1");

        let temp = new Cat(objCat.name,objCat.age);
         
         form1.elements["name"].value = temp.getName();
         form1.elements["age"].value =objCat.getAge();
    
    }


}


  