// map()
const number =new Array(1,2,3,4,5,6,7,8,9,10);
const sqr = number.map(item=>item**2);
console.log(sqr);
//filter()
let cartoon= new Array(
    { label:'chotta bheem',s:'*'},
    { label:'tom&jerry',s:'&'},
    { label:'Dora buji',s:'*'},
    { label:'phinius&fab',s:'&'}
);
let symbol=cartoon.filter(sy=>sy.s==='&');
console.log(symbol);
