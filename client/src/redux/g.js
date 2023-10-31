const f = ["1934-12-25","1934-12-24"]

console.log(f)
f.sort((a,b)=>Date.parse(a)-Date.parse(b))
console.log(f)