interface INodeN {
  value: number;
  next: INodeN | null;
}

interface INodeLR {
  value: number;
  left: INodeLR | null;
  right: INodeLR | null;
}

export { INodeN, INodeLR };
