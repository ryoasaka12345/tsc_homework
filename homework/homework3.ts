function required(message: string) {
    return function(target: Object, propertyKey: string){
        let name: string;

        // getter return the value of the property himself.
        const getter = function() {
            return name;
        };

        // setter gets the value of the property when using it
        const setter = function(newName: string) {
            if(newName == "") {
                console.log(message);
            } else {
                name = newName;
            }
        };

        // get 3 parameters
        // 1. the instance of the object
        // 2. the property name
        // 3. object with the configuration
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}

class Person {
    @required("Name is required!")
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show() {
        console.log("your name: ", this.name);
    }
}

// test 1
console.log("----test----");
const person = new Person("asaka");
person.show();

// test 2
console.log("----test2----");
const person2 = new Person("");
person.show();
