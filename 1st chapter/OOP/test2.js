//------------------------5
console.log("\nПрожка 5");

function counter1 () {

    var count1 = 0;

    function SetCount (value) {
        count1 = value;
    }

    return {
        safeSetCount: function (n) {
            if (n != 13) {
                SetCount(n);
            } else {
                console.log("bad number!");
            }
        },

        getCount: function () {
            return count1;
        },

        incrCount: function () {
            count1 ++;
        },
    };
}

var counterZ = counter1();

counterZ.safeSetCount(5);
console.log(counterZ.getCount());
counterZ.safeSetCount(13);
counterZ.incrCount(13);
console.log(counterZ.getCount());