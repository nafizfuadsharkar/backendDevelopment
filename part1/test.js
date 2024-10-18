var arr = [1, 2, 3, 4];

var ans = arr.filter(function (val) {
  if (val > 2) {
    return true;
  } else return false;
});
console.log(ans);