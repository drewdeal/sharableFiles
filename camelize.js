function camelize (str) {
  return str.trim().toLowerCase().split(/\W+/).reduce((acc, i) => {
    return acc += acc ? i.replace(/^(\w)/, function (m, p1){ return p1.toUpperCase() }) : i
  }, "")
}
