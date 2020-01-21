function testFor(obj) {
  let i = 10

  for(;;) {
    if (i-- === 0)
      return true
  }
}

function testWhile(obj) {
  let i = 10

  while(true) {
    if (i-- === 0)
      return true
  }
}

testFor();
testWhile();