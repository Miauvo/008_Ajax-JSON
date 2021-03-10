// obj JavaScript
var Cat = {

    name: "Barsick",
    age: 5,
    
    setName: function (value) {
        this.name = value;
    },
    setAge: function (value) {
        this.age = value;
    },
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }, 
    return{
        setName:setName,
        setAge:setAge
    }

  };

// JSON
var jsonCat = '{"name":"Barsick","age":5}';

// Parse JavaScript to JSON
var objCat = JSON.parse(jsonCat);
jsonCat = JSON.stringify(cat);   






function SendObj(value) {

    console.log(value); 

    let p = document.getElementsByTagName("p")[0];
    p.innerHTML = value;

    let text = document.getElementsByTagName("textarea")[0];

    let cat  = new Cat();
    cat.setName(value.elements["name"].value);
    cat.setAge(value.elements["age"].value)
    console.log(cat)
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
         
         form1.elements["name"].value = objCat.getName();
         form1.elements["age"].value = objCat.getAge();
    
    }


}