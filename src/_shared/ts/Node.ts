import { INodeN, INodeLR } from './INode';

class NodeN implements INodeN {
  value: number;
  next: NodeN | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class NodeLR implements INodeLR {
  value: number;
  left: NodeLR | null;
  right: NodeLR | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export { NodeN, NodeLR };
