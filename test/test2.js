/**
 * Created by songzhongkun on 2017/9/4.
 */

/*const obj = {};
obj.a = 100;
const arr = [];
arr.a = 100;
function foo(){}
foo.a = 100;

console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(foo.__proto__);

console.log(foo.prototype)

console.log(obj.__proto__ === Object.prototype)*/

/*function Foo(name) {
    this.name = name;
}

Foo.prototype.alertName = function () {
    console.log(this.name)
}

const f = new Foo('xiaoxin');
f.printName = function () {
    console.log(this.name)
}

f.printName();
f.alertName();*/

/*function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}

function Dog(){
    this.bark = function () {
        console.log('dog brak')
    }
}

Dog.prototype = new Animal();
const hashiqi = new Dog();
hashiqi.eat();
hashiqi.bark();*/

//原型继承案例
/*
function Elem(id) {
    this.elem = document.getElementById(id);
}
Elem.prototype.html = function (val) {
    const elem = this.elem;
    if(val){
        elem.innerHTML = val;
        return this;
    }else{
        return elem.innerHTML;
    }
};
Elem.prototype.on = function (type, fun) {
    const elem = this.elem;
    elem.addEventListener(type, fun);
    return this;
};

const div1 = new Elem('app');
div1.html('<p>Hello</p>').on('click', function () {
    alert('hello');
}).html('<p>peter</p>');*/

//变量提升
/*console.log(a);
var a = 100;

fn('xiaoxin');
function fn(name) {
    console.log(this);
    console.log(arguments);
    age = 20;
    console.log(name + ' ' + age);
    var age = 10;
    console.log(name + ' ' + age);
}*/

//this作用域
/*const aa = {
    name: 'A',
    fn: function () {
        console.log(this.name)
    }
};
aa.fn();
aa.fn.call({name: 'B'});
var fn1 = aa.fn;
fn1();*/

/*
if(true){
    var name = 'xiaoxin';
}
console.log(name);

var a = 100;
function fn() {
    var a = 200;
    console.log('fn', a);
}
console.log('global', a);
fn();
*/

/*function F1() {
    var a = 100;
    return function () {
        console.log(a)
    }
}
var f1 = F1();
let a = 200;
f1();*/

//解决var作用域问题
/*const a = [];
for (var i = 0; i < 10; i++) {
    (function (i) {
        a[i] = function() {
            console.log(i);
        };
    })(i)
}
a[6]();*/

//动态创建10个标签，点击弹出对应的序号
/*for(var i = 0; i < 10; i++){
    (function (i) {
        var a = document.createElement('a');
        a.innerHTML = 'aaa' + (i+1) + '</br>';
        a.addEventListener('click', function (e) {
            e.preventDefault();
            alert(i);
        });
        document.body.appendChild(a);
    })(i)
}*/

//闭包的使用场景
/*function isFirstLoad() {
    var _list = [];
    return function (id) {
        if(_list.indexOf(id) >= 0){
            return false;
        }else{
            _list.push(id)
            return true;
        }
    }
}
var firstLoad = isFirstLoad();
console.log(firstLoad(10));
console.log(firstLoad(10));
console.log(firstLoad(20));
console.log(firstLoad(20));*/

var func = (function (a) {
    this.a = a;
    return function (a) {
        a += this.a;
        return a;
    }
})(function(a, b){
    return a;
}(1,2));
console.log(func(4));


//setTimeOut笔试题
/*console.log(1);
setTimeout(function () {
    console.log(2)
}, 0);
console.log(3);
setTimeout(function () {
    console.log(4);
}, 1000);
console.log(5);*/

/*const arr = [1,2,3,5,4];
console.log(arr.sort(function (a, b) {
    return b - a;
}));

console.log(arr.filter(function (item, i) {
    return item > 2;
}));*/

//写一个长度一致的随机数
/*
let random = Math.random();
random += '0000000000';
random = random.slice(0, 10);
console.log(random);
*/

//写一个能遍历数组和对象的forEach函数
/*function forEach(obj, fn) {
    if(obj instanceof Array){
        obj.forEach((item, index) => {
            fn(index, item)
        })
    }else{
        for(let key in obj){
            fn(key, obj[key])
        }
    }
}
const arr = [1,2,3];
forEach(arr, (index, item) => {
    console.log(index, item);
});
const obj = {name: 'xiaoxin', age: 20};
forEach(obj, (key, value) => {
    console.log(key, value)
});*/

var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();


/*const xhr = new XMLHttpRequest();
xhr.open('get', '/api', false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.responseText)
        }
    }
};
xhr.send(null);*/



