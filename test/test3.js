/**
 * Created by songzhongkun on 2017/9/6.
 */

//单例模式
const singleton = {
    name: 'xiaoxin',
    say(){
        return this.name;
    }
};

singleton.name = 'xiaoqiang';
// console.log(singleton.say());//单例模式1

function Construct(name) {
    if (Construct.unique !== undefined) {
        return Construct.unique;
    }

    this.name = name || 'name';
    Construct.unique = this;
}

const peter = new Construct('peter');
// console.log(peter.name);//单例模式2

//能遍历数组和对象的forEach函数
function forEach(obj, fn) {
    if (obj instanceof Array) {
        obj.forEach((item, index) => {
            fn(index, item)
        })
    } else {
        for (let key in obj) {
            fn(key, obj[key])
        }
    }
}
/*const arrForEach = [1, 2, 3];
 forEach(arrForEach, (key, value) => {
 console.log(key, value)
 });
 const objForEach = {name: 'xiaoxin', age: 20};
 forEach(objForEach, (key, value) => {
 console.log(key, value);
 });*/

//闭包使用场景
function FirstLoad() {
    const _list = [];
    return function (id) {
        if (_list.indexOf(id) >= 0) {
            return false
        } else {
            _list.push(id);
            return true;
        }
    }
}
/*const firstLoad = FirstLoad();
 console.log(firstLoad(10));
 console.log(firstLoad(10));
 console.log(firstLoad(11));
 console.log(firstLoad(11));*/

//作用域问题
const varList = [];
for (var i = 0; i < 10; i++) {
    (function (i) {
        varList[i] = function () {
            console.log(i)
        }
    })(i)
}
// varList[6]();

//通用绑定事件（兼容代理）
function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type, function (e) {
        if (selector) {
            const target = e.target;
            if (target.matches(selector)) {
                fn.call(target, e);
            }
        } else {
            fn(e)
        }
    })
}

// const div1 = document.getElementById('div1');
// bindEvent(div1, 'click', 'a', function (e) {
//     console.log(this.innerHTML)
// });
// const p1 = document.getElementById('p1');
// bindEvent(div1, 'click', function (e) {
//     console.log(p1.innerHTML)
// });

//二分法找索引
function dichotomy(arr, val) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        let middle = end == 1 ? 0 : Math.floor((start + end + 1) / 2);
        if (arr[middle] > val) {
            end = middle;
        } else if (arr[middle] < val) {
            start = middle;
        } else {
            return middle;
        }
    }
    return -1;
}

const dichotomyArr = [];
for (let i = 0; i < 100; i++) {
    dichotomyArr[i] = i;
}
const pos = dichotomy(dichotomyArr, 100);
console.log(pos);

//数组去重
function uniqueArray(array) {
    const hashMap = {};
    const unique = [];
    for (let i = 0; i < array.length; i++) {
        if (!hashMap.hasOwnProperty([array[i]])) {
            hashMap[array[i]] = 1;
            unique.push(array[i]);
        }
    }
    return unique;
}
// console.log(uniqueArray([1, 2, 3, 3, 2]));

//判断一个字符串是否是回文（ababa）
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
// console.log(checkPalindrom('abab'));

function isArray(array) {
    return Object.prototype.toString.call(array).slice(8, -1) === 'Array'
}
// console.log(isArray([]));

//冒泡排序
function bubbleSort() {
    const arr = [3, 1, 2, 4];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log('冒泡排序', bubbleSort());

//选择排序
function selectSort() {
    const arr = [3, 1, 2, 4];
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
    return arr;
}
console.log('选择排序', selectSort());

//插入排序
function insertSort() {
    const arr = [3, 1, 2, 4];
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log('插入排序', insertSort());

//二分插入排序
function insertSort2() {
    const arr = [3, 1, 2, 4];
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let start = 0, end = i - 1;
        while (start <= end) {
            const middle = parseInt((start + end) / 2);
            if (key < arr[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        for (let j = i - 1; j >= start; j--) {
            arr[j + 1] = arr[j];
        }
        arr[start] = key;
    }
    return arr;
}
console.log('二分 + 插入排序', insertSort2());

function random() {
    const list = [];
    for (let i = 0; i < 10; i++) {
        const val = Math.round(Math.random() * 10);
        list.push(val)
    }

    console.log(list);

    const hashMap = {};
    const unique = [];
    list.forEach(item => {
        if (!hashMap.hasOwnProperty(item)) {
            hashMap[item] = 1;
            unique.push(item)
        }
    });
    console.log(unique);

    /* for(let i = 1; i < unique.length; i++){
     const key = unique[i];
     let j = i - 1;
     while (j >= 0 && unique[j] > key){
     unique[j + 1] = unique[j];
     j--;
     }
     unique[j + 1] = key;
     }*/

    for (let i = 0; i < unique.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < unique.length; j++) {
            if (unique[j] < unique[min]) {
                min = j;
            }
        }
        const temp = unique[i];
        unique[i] = unique[min];
        unique[min] = temp;
    }
    console.log(unique);
    return [unique[0], unique[unique.length - 1]];

}
const [min, max] = random();
console.log(min, max);

//继承
function Animal(name) {
    this.name = name || 'animal';

    this.say = function (val) {
        console.log(this.name, 'say ' + val)
    }
}
Animal.prototype.eat = function (food) {
    console.log(this.name, 'eat ' + food);
};

//原型链继承
/*function Cat() {
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
*/


//构造继承
/*function Cat(name) {
    Animal.call(this);
    this.name = name || 'cat2'
}*/

//实例继承
/*function Cat(name) {
    const instance = new Animal();
    instance.name = name || 'cat3';
    return instance;
}*/

//拷贝继承
function Cat(name) {
    const animal = new Animal();
    for(let p in animal){
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'cat4';
}

const cat = new Cat();
cat.say('hello');
cat.eat('fish');




