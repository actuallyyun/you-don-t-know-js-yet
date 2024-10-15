function range(start, end) {
  var res = []

  if (start != undefined && end == undefined) {
    return getEnd
  }

  function getEnd(end) {
    return range(start, end)
  }

  if (start != undefined && end != undefined) {
    if (start == end) {
      res.push(start)
    }
    if (start < end) {
      for (let i = start; i <= end; i++) {
        res.push(i)
      }
    }
  }
  return res
}

//console.log(range(3, 8))
//console.log(range(3,3))
//console.log(range(3,0))

var start2 = range(2)
console.log(start2(3))

var start4 = range(4)
console.log(start4(6))
