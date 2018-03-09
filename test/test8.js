/**
 * Created by songzhongkun on 2017/9/13.
 */
// 18、写出两种单例模式的出现
const singleton = {
  attr: 'xiaoxin',
  method: function () {
    return this.attr;
  }
};
console.log(singleton.method());

function Construct(name) {
  if (Construct.unique !== undefined) {
    return Construct.unique;
  }

  this.name = name || 'xiaoqiang';
  Construct.unique = this;
}
const eg = new Construct('xiaoxin');
console.log(eg.name);


// 19、Array.isArray代码实现？
console.log(Object.prototype.toString.call([]));

// 20、随机打印1-100的十个数？去重？排序后拿到最大最小值？
for (let i = 0; i < 10; i++) {
}

let list = [];
for (let i = 0; i < 10; i++) {
  list.push(Math.round(Math.random() * 99) + 1);
}
console.log('随机数', list);

const map = {}, unique = [];
list.forEach(item => {
  if (!map.hasOwnProperty(item)) {
    map[item] = 1;
    unique.push(item);
  }
});
const arr = unique;
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
  console.log('冒泡排序后', arr);
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
  console.log('选择排序后', arr);
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
  console.log('插入排序后', arr);
}

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
      return false;
    } else {
      _list.push(id);
      return true;
    }
  }
}
const firstLoad = FirstLoad();
console.log(firstLoad(0));
console.log(firstLoad(0));

// 23、动态创建十个标签，点击弹出对应的序号？
const aList = [];
for (var i = 0; i < 10; i++) {
  (function (i) {
    aList[i] = function () {
      console.log(i)
    }
  })(i)
}
aList[6]();

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
 };

 const elem = new Elem('wrapper');
 elem.html('hello').on('click', function () {
 console.log('click')
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
const r = (function (arr, val) {
  let start = 0, end = arr.length - 1;
  while (start < end) {
    const middle = end == 1 ? 0 : Math.round((start + end + 1) / 2);
    if (arr[middle] < val) {
      start = middle;
    } else if (arr[middle] > val) {
      end = middle;
    } else {
      return middle;
    }
  }
  return -1;
})([0, 1, 2, 3, 4, 5], 3);
console.log(r);