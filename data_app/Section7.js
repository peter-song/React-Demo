/**
 * Created by songzhongkun on 2018/4/11.
 */

const arrayUitls = {

  append(array, ...elements) {
    array.push(...elements);

    return array;
  },

  prepend(array, ...elements) {
    array.unshift(...elements);

    return array;
  },

  insert(array, index, ...elements) {
    array.splice(index, 0, ...elements);

    return array;
  },

};

class Node {

  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = [];
  }

  addChild(node) {
    node.parent = this;
    this.children.push(node);
    return this;
  }

  siblings() {
    const self = this;
    if (this.parent) {
      return this.parent.children.filter(node => node != self);
    } else {
      return [];
    }
  }

  get degree() {
    return this.children.length;
  }

  getDepthByRoot(root) {
    let depth = 0;
    let currNode = this;

    while (currNode.parent !== root) {
      depth++;
      currNode = currNode.parent;
    }

    return depth + 1;
  }

  get height() {
    const queue = [this];
    let deepestNode = this;

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const currNode = queue.shift();

        deepestNode = currNode;

        if (currNode.children.length) {
          queue.push(...currNode.children);
        }
      }
    }
    return deepestNode.getDepthByRoot(this);
  }
}

/*
 const root = new Node('root');

 const node1 = new Node('node 1');
 const node2 = new Node('node 2');
 const node3 = new Node('node 3');
 const node4 = new Node('node 4');
 const node5 = new Node('node 5');
 const node6 = new Node('node 6');

 root.addChild(node1);
 root.addChild(node2);

 node1.addChild(node3);
 node1.addChild(node4);

 node2.addChild(node5);
 node5.addChild(node6);

 console.log(root.height);*/

class Tree {

  constructor(root) {
    this.root = root;
  }

  addNode(node, parent = this.root) {
    parent.addChild(node);
  }

  search(validate){

    const queue = [this.root];

    while (queue.length){
      const currNode = queue.shift();

      if(validate(currNode)){
        return currNode;
      }

      if(currNode.children.length){
        arrayUitls.prepend(queue, ...currNode.children);
      }
    }
  }

}

const root = new Node('root');
const node1 = new Node('node 1');
const node2 = new Node('node 2');
const node3 = new Node('node 3');
const node4 = new Node('node 4');
const node5 = new Node('node 5');
const node6 = new Node('node 6');

const tree = new Tree(root);
tree.addNode(node1);
tree.addNode(node2);