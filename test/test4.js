/**
 * Created by songzhongkun on 2017/9/8.
 */
// 20、随机打印1-100的十个数？去重？排序后拿到最大最小值？

function random() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        const val = Math.round(Math.random() * 99 + 1);
        arr.push(val)
    }
    console.log(arr);

    let map = {};
    let arr2 = [];
    arr.forEach(item => {
        if (!map.hasOwnProperty(item)) {
            map[item] = 1;
            arr2.push(item);
        }
    });
    arr = arr2;
    console.log(arr);

    /*for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr.length - i - 1; j++) {
     if (arr[j] > arr[j + 1]) {
     let temp = arr[j];
     arr[j] = arr[j + 1];
     arr[j + 1] = temp;
     }
     }
     }*/

    /*for(let i = 0; i < arr.length-1; i++){
     let min = i;
     for(let j = i + 1; j < arr.length; j++){
     if(arr[j] < arr[min]){
     min = j;
     }
     }
     let temp = arr[i];
     arr[i] = arr[min];
     arr[min] = temp;
     }*/

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log(arr);
    console.log(arr[0], arr[arr.length - 1]);
}
random();


// 21、写一个能遍历数组和对象的forEach函数？
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
forEach(['xiaoxin', 'xiaoqiang', 'xiaowanzi'], (i, item) => {
    console.log(i, item)
});
forEach({name: 'xiaoxin', age: 20}, (key, value) => {
    console.log(key, value);
});

// 22、写一个闭包的使用场景？
function FirstLoad() {
    const _list = [];
    return function (id) {
        if (_list.indexOf(id) >= 0) {
            console.log(false);
        } else {
            _list.push(id);
            console.log(true);
        }
    }
}
const firstLoad = FirstLoad();
firstLoad(10);
firstLoad(10);

// 23、动态创建十个标签，点击弹出对应的序号？
function createElem() {
    const _list = [];
    for (var i = 0; i < 10; i++) {
        (function (i) {
            _list[i] = function () {
                console.log(i)
            }
        })(i)
    }
    return _list;
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
    bindEvent(elem, type, fn);
    return this;
};

const div = new Elem('main');
div.html('hello').on('click', 'a', function (e) {
    e.preventDefault();
    console.log('click', this.innerHTML);
});

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
    })
}*/

// 26、写一个二分法函数，返回索引？
function dichotomy(arr = [0,1,2,3,4,5], val = 1) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        const middle = end == 1 ? 0 : Math.floor((start + end + 1) / 2);
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
const nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = i;
}
console.log(dichotomy());