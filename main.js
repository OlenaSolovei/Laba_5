try {
  var timer = 0;
  for (var i = 1; i > 0; i++) {
    if (timer >= 1000) { throw new Error("Unavailable iterations count") }
    timer++;
  }
} catch(e) {
  // statement
  console.log(e);
}