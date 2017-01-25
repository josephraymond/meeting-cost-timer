var people = [
  {
    name: 'Joey',
    rate: 10
  },
  {
    name: 'Someone Else',
    rate: 20
  },
  {
    name: 'Peter',
    rate: 5
  }
]

var myReduce = people.reduce(function (prev, curr) {
  return prev + curr.rate;
}, 0);

console.log(myReduce);
