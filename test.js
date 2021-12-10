//https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom

var root = document.querySelector(".root");
// root.style.background = '#efca66';

class DomNode{
    constructor(dom){
        this.val = dom;
        this.left = null;
        this.right = null;
    }
}

class DomBinaryTree{
    constructor(){
        this.root = null;
    }
    insert(domNode){
        var newDomNode = new DomNode(domNode)
        if(this.root === null){
            this.root = newDomNode;
            return this;
        }
        let queue = [this.root];
        let curr;
        while(queue.length){
            curr = queue.shift();
            if(!curr.left) {
                curr.left = newDomNode;
                return this;
            } else if(!curr.right) {
                curr.right = newDomNode;
                return this;
            } else {
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }
    }

    dfsPreOrder(){
        let result = [];
        if(!this.root) return root;
        let curr = this.root;
        function helper(curr){
            result.push(curr.val)
            curr.val.style.background = '#efca66';
            setTimeout(() => {
                curr.val.style.background = '#ecdab9';
                if(curr.left) helper(curr.left);
                if(curr.right) helper(curr.right);
            }, 1000);  
        }
        helper(curr);
        return result;
    }

    dfsInOrder(){
        let result = [];
        if(!this.root) return root;
        let curr = this.root;
        function helper(curr){
            if(curr.left) helper(curr.left);
            result.push(curr.val)
            if(curr.right) helper(curr.right);
        }
        helper(curr);
        return result;
    }

    dfsPostOrder(){
        let result = [];
        if(!this.root) return root;
        let curr = this.root;
        function helper(curr){
            if(curr.left) helper(curr.left);
            if(curr.right) helper(curr.right);
            result.push(curr.val);
            curr.val.style.background = '#ecdab9';
            setTimeout(() => {
                curr.val.style.background = '#efca66';
            }, 1000); 
        }
        helper(curr);
        return result;
    }

    bfs(){
        let result = [];
        if(!root) return root;
        let queue = [this.root];
        let curr;
        while(queue.length){
            curr = queue.shift();
            result.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        return result;
    }
}

var binaryTree = new DomBinaryTree();
binaryTree.insert(root);
binaryTree.insert(root.firstElementChild);
binaryTree.insert(root.lastElementChild);
binaryTree.insert(root.firstElementChild.firstElementChild);
binaryTree.insert(root.firstElementChild.lastElementChild);
binaryTree.insert(root.lastElementChild.firstElementChild)
binaryTree.insert(root.lastElementChild.lastElementChild)
binaryTree.insert(root.firstElementChild.firstElementChild.firstElementChild);
binaryTree.insert(root.firstElementChild.firstElementChild.lastElementChild);
binaryTree.insert(root.firstElementChild.lastElementChild.firstElementChild);
binaryTree.insert(root.firstElementChild.lastElementChild.lastElementChild);
binaryTree.insert(root.lastElementChild.firstElementChild.firstElementChild);
binaryTree.insert(root.lastElementChild.firstElementChild.lastElementChild);
binaryTree.insert(root.lastElementChild.lastElementChild.firstElementChild);
binaryTree.insert(root.lastElementChild.lastElementChild.lastElementChild);