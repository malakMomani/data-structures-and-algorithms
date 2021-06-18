'use strict';

let K_AryTree = require('../fizzBuzzTree/fizz-buzz-tree');

let KTree = null;
describe('Fuzz Buzz Tree function',()=>{

  beforeAll(()=>{
    let one = new K_AryTree.Node(45);
    let two = new K_AryTree.Node(33);
    let three = new K_AryTree.Node(66);
    let four = new K_AryTree.Node(15);
    let five = new K_AryTree.Node(40);
    let six = new K_AryTree.Node(55);
    let seven = new K_AryTree.Node(9);
    let eight = new K_AryTree.Node(25);
    let nine = new K_AryTree.Node(54);
    let ten = new K_AryTree.Node(71);
    let e = new K_AryTree.Node(24);
    let t = new K_AryTree.Node(90);
    let th = new K_AryTree.Node(8);

    one.childern[0] = two;
    one.childern[1] = three;
    two.childern[0] = four;
    two.childern[1] = five;
    two.childern[2] = six;
    three.childern[1] =seven;
    five.childern[0] = eight;
    seven.childern[1] = nine;
    seven.childern[2] = ten;
    seven.childern[0] = e;
    seven.childern[3] = t;
    six.childern[3] = th;

    KTree = new K_AryTree.K_AryTree(one , 4);
  });

  it('FuzzBuzzTree', ()=>{
    let result = K_AryTree.fizzBuzzTree(KTree);

    expect(result.root.value).toEqual('FizzBuzz');
    expect(result.root.childern[0].value).toEqual('Fizz');
    expect(result.root.childern[1].value).toEqual('Fizz');
    expect(result.root.childern[0].childern[0].value).toEqual('FizzBuzz');
    expect(result.root.childern[0].childern[1].value).toEqual('Buzz');
    expect(result.root.childern[0].childern[2].value).toEqual('Buzz');
    expect(result.root.childern[1].childern[1].value).toEqual('Fizz');
    expect(result.root.childern[0].childern[1].childern[0].value).toEqual('Buzz');
    expect(result.root.childern[1].childern[1].childern[0].value).toEqual('Fizz');
    expect(result.root.childern[1].childern[1].childern[1].value).toEqual('Fizz');
    expect(result.root.childern[1].childern[1].childern[2].value).toEqual('71');
    expect(result.root.childern[1].childern[1].childern[3].value).toEqual('FizzBuzz');
    expect(result.root.childern[0].childern[2].childern[3].value).toEqual('8');

  });

});
