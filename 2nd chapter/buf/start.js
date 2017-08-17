var buf1 = new Buffer(24);
var buf2 = new Buffer(16);

for (var i = 0; i<24; i+=4) {
    buf1[i] = 78;
    buf1[i+1] = 111;
    buf1[i+2] = 100;
    buf1[i+3] = 101;
}

for (var j = 0; j<16; j++) {
    buf2[j] = 42;
}

buf1.copy(buf2, 6, 16, 20);
console.log(buf2.toString("ASCII"));
var buf3;
buf3 = buf2.slice(0, 3);
console.log(buf3.toString("ASCII", 0, buf3.lenght));
buf3[0] = 33;
console.log(buf2.toString("ASCII", 0, buf2.lenght));