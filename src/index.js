
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix==undefined) {
    return []
  }
  if(matrix.length==0) {
    return []
  }
  var result=[]
  var res=[]
  for(var i=0;i<=matrix.length-1;i++) {
    if(i%2==0) {
      result.push(matrix[i])
    }else if(i%2==1) {
      result.push(matrix[i].reverse())
    }
  }
  result = result.join().split(",")
  for(var j=0;j<=result.length-1;j++) {
    res.push(parseInt(result[j]))
  }
  return res
}
