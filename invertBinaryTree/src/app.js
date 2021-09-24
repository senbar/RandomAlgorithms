import { Subject } from "rxjs";
import { BinaryTree } from "./binary-tree";



const app= ()=>{
    var binaryTree= new BinaryTree(1);
    binaryTree.right= new BinaryTree(4);
    console.log("test")
}



document.addEventListener("DOMContentLoaded", app);
