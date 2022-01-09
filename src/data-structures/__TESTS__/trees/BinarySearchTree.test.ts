import { BinarySearchTree } from '@src/data-structures/trees';

describe('BinarySearchTree', () => {
  let binarySearchTree: BinarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  it('should return new tree with one root Node', () => {
    expect(binarySearchTree.root).toBeDefined();
  });

  it('insert() should insert new tree Node', () => {
    binarySearchTree.insert(7);
    expect(binarySearchTree.root?.value).toBeDefined();
  });

  it('insert() should insert Node in left branch (of Root node) if less than Root', () => {
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    expect(binarySearchTree.root?.left?.value).toBeDefined();
  });

  it('insert() should insert Node in right branch (of Root node) if greater than Root', () => {
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    expect(binarySearchTree.root?.right?.value).toBeDefined();
  });

  it('insert() should insert Node in right branch (of Parent node) if greater than Parent', () => {
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(12);
    expect(binarySearchTree.root?.right?.right?.value).toBeDefined();
  });

  it('insert() should return undefined if tree Node with same value has already been defined', () => {
    binarySearchTree.insert(7);
    expect(binarySearchTree.insert(7)).toEqual(undefined);
  });

  it('contains() should return true if Node value exists', () => {
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).toEqual(true);
  });

  it('contains() should return false if Node value does not exist', () => {
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(6)).toEqual(false);
  });

  it('contains() should return false if tree contains only default null root Node', () => {
    expect(binarySearchTree.contains(6)).toEqual(false);
  });

  it('minValueNode() should return smallest Node value', () => {
    binarySearchTree.insert(7);
    binarySearchTree.insert(4);
    binarySearchTree.insert(12);
    binarySearchTree.insert(1);
    expect(binarySearchTree.minValueNode(binarySearchTree.root)?.value).toEqual(1);
  });

  it('minValueNode should return undefined if Node is null', () => {
    expect(binarySearchTree.minValueNode(binarySearchTree.root)?.value).toEqual(undefined);
  });
});
