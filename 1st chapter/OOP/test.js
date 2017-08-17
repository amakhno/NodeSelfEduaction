var alert = ((msg) => console.log(msg));

//------------------------1
function func1 (greetings) {
    return function func2 (name) {
        alert(greetings + " " + name);
    };
}

var russian = func1("Привет");

russian("Артем");

//------------------------2
function counter (n) {
    var n1 = n;
    return function subFunction () {
        alert(++n1);
    };        
}

var ct = counter(2);
ct();
ct();
ct();

//------------------------3

var outerVal = 4;
var handle;

function outerFunction () {
    var innerVal = 5;
    function innerFunction () {
        alert(outerVal);
        alert(innerVal);
    }
    handle = innerFunction;
}

alert("Переназначение указателя");
outerFunction();
alert("Переназначение указателя завершено");
handle();

//------------------------4
alert("\nПрожка 4");
function funcBuilder (prod) {
    return function func3 (x) {
        return prod * x;
    };
}

var doubleF = funcBuilder(2);
var tripleF = funcBuilder(3);

alert(doubleF(2));
alert(tripleF(2));

//------------------------5
alert("\nПрожка 5");

function counter1 () {
    var count1 = 0;

    this.GetCount = function () {
        return count1;
    };

    this.SetCount = function (value) {
        count1 = value;
    };

    this.Implement = function () {
        count1++;
    };
}

var a = new counter1();
alert(a.GetCount());
a.SetCount(5);
alert(a.GetCount());
alert(a.count1);

//------------------------6
alert("\nПрожка 6");
