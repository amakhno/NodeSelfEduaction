/*var User = function (id, name) {
    this.id = id;
    this.name = name;
};

User.prototype.SayHello = function () { console.log("Hello " + this.name); };

var Admin = function () {};
var admin = new Admin();
Admin.prototype.SayHello = User.prototype.SayHello;
console.log(admin instanceof Admin);
console.log(admin instanceof User);*/

//---------------------------------Class example---------------------------------//

var User = function (id, name) {
    this.id = id;
    this.name = name;
};

User.prototype.SayHello = function () {
    console.log("Hello " + this.name);
};

var Admin = function () {};

Admin.prototype = new User();
var admin = new Admin();
admin.name = "Ian";
admin.id = 56;
admin.SayHello();
console.log (admin instanceof User);
console.log (admin instanceof Admin);

Admin.prototype.SayHi = function () {
    console.log("Hi " + this.name);
};

var usr = new User(14, "UserName");
//usr.SayHi(); usr.SayHi is not a function
admin.SayHi();