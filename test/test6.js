/**
 * Created by songzhongkun on 2017/9/11.
 */
// 18、写出两种单例模式的出现
const singleton = {
    attr: 'xiaoxin',
    method: function () {
        return this.attr;
    }
};
console.log(singleton.method());

function Construct() {
    if (Construct.unique !== undefined) {
        return Construct.unique;
    }

    this.name = 'xiaoxin2';
    Construct.unique = this;
}
const aaa = new Construct();
console.log(aaa.name)

// 19、Array.isArray代码实现？
console.log(Object.prototype.toString.call(function () {

}));

// 20、随机打印1-100的十个数？去重？排序后拿到最大最小值？

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 99 + 1))
}
console.log('随机数', arr);

const hashMap = {}, unique = [];
arr.forEach(item => {
    if (!hashMap.hasOwnProperty(item)) {
        hashMap[item] = 1;
        unique.push(item);
    }
});
arr = unique;
console.log('去重后', arr);

const pos = 3;
if (pos == 1) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
} else if (pos == 2) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
} else {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

console.log('排序后', arr);

// 21、写一个能遍历数组和对象的forEach函数？
function forEach(obj, fn) {
    if (obj instanceof Array) {
        obj.forEach((item, index) => {
            fn(index, item);
        })
    } else {
        for (let key in obj) {
            fn(key, obj[key]);
        }
    }
}
forEach(['xiaoxin', 'xiaoqiang', 'xiaowanzi'], (index, item) => {
    console.log(index, item);
});
forEach({name: 'xiaoxin', age: 20}, (key, value) => {
    console.log(key, value);
});

// 22、写一个闭包的使用场景？
function FirstLoad() {
    const _list = [];
    return id => {
        if (_list.indexOf(id) >= 0) {
            return true;
        } else {
            _list.push(id);
            return false;
        }
    }
}
const firstLoad = FirstLoad();
console.log(firstLoad(0));
console.log(firstLoad(0));
console.log(firstLoad(1));
console.log(firstLoad(1));

// 23、动态创建十个标签，点击弹出对应的序号？
/*for (let i = 0; i < 10; i++) {
 const a = document.createElement('a');
 a.innerHTML = 'click' + (i + 1);
 a.addEventListener('click', function () {
 console.log(i);
 });
 // document.body.appendChild(a);
 }*/

// 24、写一个原型继承的案例？
/*function Elem(id) {
 this.elem = document.getElementById(id);
 }

 Elem.prototype.html = function (val) {
 const elem = this.elem;
 if (val) {
 elem.innerHTML = val;
 return this;
 } else {
 return elem.innerHTML;
 }
 };

 Elem.prototype.on = function (type, fn) {
 const elem = this.elem;
 bindEvent(elem, type, fn)
 return this;
 };

 // 25、写一个通用事件监听的函数？

 function bindEvent(elem, type, selector, fn) {
 if (fn == null) {
 fn = selector;
 selector = null;
 }
 elem.addEventListener(type, function (e) {
 const target = e.target;
 if (selector) {
 if (target.matches(selector)) {
 fn.call(target, e);
 }
 } else {
 fn(e);
 }
 });
 }

 const elem = new Elem('main');
 elem.html('hello').on('click', function (e) {
 alert(this.innerHTML)
 });*/


/*
function Animal(name) {
    this.name = name || 'animal';

    this.say = function () {
        console.log('hello', this.name)
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name, food)
};

const animal = new Animal();
animal.say();
animal.eat('food');

function Cat(){}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

function Cat2() {
    Animal.call(this);
    this.name = 'cat2';
}

function Cat3(){
    const instance = new Animal();
    instance.name = 'cat3';
    return instance;
}

function Cat4(){
    const animal = new Animal();
    for(let p in animal){
        Cat4.prototype[p] = animal[p];
    }
    Cat4.prototype.name = 'cat4';
}

const cat = new Cat4();
cat.say();
cat.eat('fish');*/

// 26、写一个二分法函数，返回索引？

function test(arr, val) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        const middle = end == 1 ? 0 : Math.floor((start + end + 1) / 2);
        if (arr[middle] > val) {
            end = middle
        } else if (arr[middle] < val) {
            start = middle;
        } else {
            return middle;
        }
    }
    return -1;
}
console.log(test([0, 1, 2, 3, 4, 5], 5));