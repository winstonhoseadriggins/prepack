x = new ArrayBuffer(16);
// Two typed arrays over the same buffer should share the same buffer
y = new Int8Array(x);
y[0] = 1;
z = new Int16Array(x);
z[0] = 2;
inspect = function() { return x.byteLength + y[0] + z[0]; }
