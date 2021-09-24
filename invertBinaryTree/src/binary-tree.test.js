import{BinaryTree} from './binary-tree'

test('binary tree creates', ()=>{
    let z= new BinaryTree(1);
    expect(z.data).toBe(1);
})