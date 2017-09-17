/**
 * Created by songzhongkun on 2017/9/8.
 */
(function () {
    for (let i = 0; i < 10; i++) {

    }
})();

// 20、随机打印1-100的十个数？去重？排序后拿到最大最小值？

(function () {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        const val = Math.round(Math.random() * 99 + 1);
        arr.push(val)
    }
    console.log('随机十个数', arr);

    const map = {}, unique = [];
    arr.forEach(item => {
        if (!map.hasOwnProperty(item)) {
            map[item] = 1;
            unique.push(item)
        }
    });
    arr = unique;
    console.log('去重之后', arr);

    /*for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < 10; j++) {
     if (arr[j] > arr[j + 1]) {
     const temp = arr[j];
     arr[j] = arr[j + 1];
     arr[j + 1] = temp;
     }
     }
     }
     console.log('冒泡排序之后', arr);*/

    /* for (let i = 0; i < arr.length - 1; i++) {
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
     console.log('选择排序之后', arr);*/

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log('插入排序之后', arr)

})();

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
function firstLoad() {
    const _list = [];
    return function (id) {
        if (_list.indexOf(id) >= 0) {
            return false;
        } else {
            _list.push(id);
            return true;
        }
    }
}
const first = firstLoad();
console.log(first(10));
console.log(first(10));

// 23、动态创建十个标签，点击弹出对应的序号？
function createElem() {
    const list = [];
    for (var i = 0; i < 10; i++) {
        (function (i) {
            list[i] = function () {
                console.log(i)
            }
        })(i)
    }
    return list;
}
const list = createElem();
list[6]();

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
 elem.addEventListener(type, fn);
 bindEvent(elem, type, fn);
 return this;
 };

 const elem = new Elem('main');
 elem.html('hello').on('click', function () {
 alert('click');
 });

 function bindEvent(elem, type, selector, fn) {
 if (fn == null) {
 fn = selector;
 selector = null;
 }
 elem.addEventListener(type, function (e) {
 if (selector) {
 const target = e.target;
 if (target.matches(selector)) {
 fn.call(target, e)
 }
 } else {
 fn(e);
 }
 })
 }*/

// 25、写一个通用事件监听的函数？
// 26、写一个二分法函数，返回索引？

function text(arr, val) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        const middle = end == 1 ? 0 : Math.round((start + end) / 2);
        if (arr[middle] < val) {
            start = middle;
        } else if (arr[middle] > val) {
            end = middle;
        } else {
            return middle;
        }
    }
    return -1;
}
console.log(text([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));