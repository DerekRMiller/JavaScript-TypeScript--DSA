// // Definition for a binary tree node.
// export class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// // const mergeTrees = (root1: TreeNode | null, root2: TreeNode | null): TreeNode | null => {
// //   if (root1 === null || root2 === null) {
// //       return root1 || root2;
// //   }

// //   const root = new TreeNode(root1.val + root2.val);
// //   const left = mergeTrees(root1.left, root2.left);
// //   const right = mergeTrees(root1.right, root2.right);
// //   root.left = left;
// //   root.right = right;

// //   return root;;
// // };

// const mergeTrees = (
//   root1: TreeNode | null,
//   root2: TreeNode | null
// ): TreeNode | null => {
//   if (!root1) {
//     return root2;
//   }
//   if (!root2) {
//     return root1;
//   }

//   root1.val += root2.val;
//   root1.left = mergeTrees(root1.left, root2.left);
//   root1.right = mergeTrees(root1.right, root2.right);

//   return root1;
// };

// export const mergeTwoBinaryTrees = (): void => {
//   const treeNode1: (number | null)[] = [1, 3, 2, 5],
//     treeNode2: (number | null)[] = [2, 1, 3, null, 4, null, 7];

//   // console.log(mergeTrees(treeNode1, treeNode2));
//   // console.log(mergeTrees(null,[2,1,3,null,4,null,7]));

//   // console.log(mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]));
//   // console.log(mergeTrees(null,[2,1,3,null,4,null,7]));
// };
