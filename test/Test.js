/**
 * Created by songzhongkun on 2017/8/22.
 */

const arr = [23, 45, 63, 2, 34, 22, 11];

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(sort(arr));

function t(a) {
    var a = 'Hello';
    console.log(a);
    function a() {
        console.log(null);
    }

    console.log(a);
}

// t(null);


function fn(b) {
    console.log(b);
    function b() {
        console.log(b);
    }
    b();
}
// fn(10);

function a(b) {
    console.log(b);
    b = function () {
        console.log(b)
    };
    b();
}
// a();

function random() {
    const nums = new Set();
    for (; ;) {
        if (nums.size < 10) {
            const num = Math.round(Math.random() * 100);
            nums.add(num);
        } else {
            break;
        }
    }
    return [...nums];
}
// console.log(sort(random()));


function random2() {

    let nums = [];
    for (let i = 0; i < 10; i++){
        nums.push(Math.round(Math.random() * 100));
    }
    nums = [...new Set(nums)];
    console.log(nums)

}
// random2();

function MyObj() {
    this.p.pid++;
}

MyObj.prototype.p = {pid: 0};
MyObj.prototype.getNum = function (num) {
    return this.p.pid + num;
};
var _obj1 = new MyObj();
var _obj2 = new MyObj();
// console.log(_obj1.getNum(1) + _obj2.getNum(2));

var func = (function (a) {
    this.a = a;
    return function (a) {
        a += this.a;
        return a;
    }
})(function (a, b) {
    return a;
}(1,2));
func(4);

const s = [];
// console.log(typeof s)

/*setTimeout(function () {
    console.log(1)
}, 1000);*/

/*let i = 0;
const interval = setInterval(function () {
    i++;
    console.log(i)
    if(i == 10){
        clearInterval(interval)
    }
}, 1000);*/

/*//rest参数
function restParams(...rest) {
    console.log(rest)
}
restParams(1,2,3);*/

/*//解构
let foo = ['one', 'two', 'three'];
let [aa, bb, cc] = foo;
console.log(aa + bb + cc)

let person = {name: 'xiaoxin', age: 27};
let {name, age} = person;
console.log(name + ' ' + age);*/

/*//类
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    shout(){
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }

    static foo(){
        console.log(`Here is a static method`)
    }
}

const cow = new Animal('betty', 2);
cow.shout()
Animal.foo();

class Dog extends Animal{
    constructor(name, age = 2, color='black'){
        super(name, age);
        this.color = color;
    }

    shout(){
        super.shout();
        console.log(`, color is ${this.color}`)
    }
}
const jackTheDog = new Dog('jack');
jackTheDog.shout();*/

/*const kitty = {
    age: 1,
    grow: function () {
        setTimeout( () => {
            console.log(++this.age)
        }, 1000)
    }
};
kitty.grow();*/

const url = 'http://www.baidu.com/?c=3&pn=0&a=1&b=2';

function delPn(url) {
    const pos = url.indexOf('?');
    let url_new = url.substring(0, pos);
    const param_str = url.substring(pos+1);
    const param_arr = param_str.split('&');
    const param_new = [];
    param_arr.forEach(item => {
        const k_v = item.split('=');
        if(k_v[0] != 'pn'){
            param_new.push(item);
        }
    });
    if(param_new.length){
        param_new.forEach((item, i) => {
            if(i == 0){
                url_new += '?' + item;
            }else{
                url_new += '&' + item;
            }
        })
    }
    console.log(url_new)
}
// delPn(url);

/*

console.log(null == NaN);//false
console.log(null == undefined);//true
console.log(null == false);//false
console.log(false == '');//true
console.log(false == 0);//true
console.log(2 + 1 + '3');//33
console.log('2' + 1 + 3);//213
console.log(Number(undefined));//NaN
console.log(Number(''));//0
console.log(isNaN(23));//false
console.log(typeof NaN);//number
console.log(isNaN(NaN));//true
console.log(NaN == NaN);//false
console.log(undefined == undefined);//true
*/

function Animal(name){
    this.name = name || 'Animal';

    this.sleep = function () {
        console.log(this.name + ' sleep');
    }

}
Animal.prototype.eat = function (food) {
    console.log(this.name + ' eating ' + food)
};

/*const animal = new Animal('dog');
animal.sleep();
animal.eat('apple');*/


/*//原型链继承
function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';*/

/*//构造继承
function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}*/

/*//实例继承
function Cat(name) {
    const instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}*/

/*//拷贝继承
function Cat(name) {
    const animal = new Animal();
    for (let p in animal){
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom';
}*/

/*
const cat = new Cat();
cat.sleep();
cat.eat('fish');
*/

//自变量
const singleton = {
    attr: 1,
    method: function () {
        return this.attr;
    }
};
const t1 = singleton;
const t2 = singleton;
console.log(t1 == t2);

//构造函数内部判断
function Construct() {
    if(Construct.unique !== undefined){
        return Construct.unique;
    }
    this.name = 'name';
    this.age = 24;

    Construct.unique = this;
}
const a1 = new Construct();
const a2 = new Construct();
console.log(a1 == a2);


console.log([...new Set([1,1,2,2,3,4])]);


const isArray = Object.prototype.toString.call([]) == '[Object Array]';
console.log(isArray);

function test(o) {
    var i = 0;
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(typeof NaN);
    if(typeof o == 'object'){
        var j = 0;
        for(var k = 0; k < 10; k++){
            // console.log(k);
        }
        console.log(k);
    }
    console.log(j);
}
test(null);

let scope = 'global';
function f() {
    console.log(scope + '1');
    var scope = 'local';
    console.log(scope + '2')
}
f();

function search(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let middle = (start + end) / 2;
        if(val < arr[middle]){
            end = middle - 1;
        }else if(val > arr[middle]){
            start = middle + 1;
        }else{
            return middle;
        }
    }
    return -1;
}
console.log(search([1,2,3,4,5], 2));

let str = 'abc';
str.len = 4;
console.log(str.len);

function fun() {
    this.a = 0;
    this.b = function () {
        console.log(this.a)
    }
}
fun.prototype = {
    b: function () {
        this.a = 20;
        console.log(this.a);
    },
    c: function () {
        this.a = 30;
        console.log(this.a)
    }
};
const myfun = new fun();
myfun.b();
myfun.c();

function Peter(name, age) {
    this.name = name;
    this.age = age;
}
const  petet1 = new Peter('xiaoxin', 12);
const  petet2 = new Peter('xiaoqiang', 13);
petet1.age = 20;
console.log(petet1)
petet2.age = 25;
console.log(petet2)
console.log(petet1)


var obj = {a: 1};
console.log(obj.__proto__)
