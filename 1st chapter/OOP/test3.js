var user_vasya = {
    name: "Vasya",
    id: 15,
    sayHello: function () {
        console.log("Hello " + this.name);
    },
};

user_vasya.sayHello();

var user_misha = {};
user_misha.name = "Misha";
user_misha.id = 15;
user_misha.sayHello = function () {
    console.log("Hello " + this.name);
};

user_misha.sayHello();

var User = function (id, name) {
    this.name = name;
    this.id = id;
    this.sayHello = function () {
        console.log("Hello " + this.name);
    };
};

var user_gena = new User(11, "Gena");
console.log(typeof user_gena);
user_gena.sayHello();

User.prototype.sayHi = function () {
    console.log("Hi " + this.name);
};

user_gena.sayHi();

User.prototype.sayHello = function () {
    console.log("Hi " + this.name);
};
user_gena.sayHello();

user_gena.sayHello = function () {
    console.log("Preved " + this.name);
};

user_gena.sayHello();

User.prototype.sayHello = function () {
    console.log("Hi " + this.name);
};
var John = new User(1, "John");
var Ian = new John.constructor(52, "Ian");
Ian.sayHello();

