// 전위
const preorder = (nodes, idx) => {
  // 부모 -> 왼쪽 -> 오른쪽
  if(idx < nodes.length) {
    let ret = `${nodes[idx]}`;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 중위
const inorder = (nodes, idx) => {
  // 왼쪽 -> 부모 -> 오른쪽
  if(idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]}`;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 후위
const postorder = (nodes, idx) => {
  // 왼쪽 -> 오른쪽 -> 부모
  if(idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]}`;
    return ret;
  }
  return "";
}


const solution = (nodes) => {
  // 전위
  const preOrd = preorder(nodes, 0);
  // 중위
  const inOrd = inorder(nodes, 0);
  // 후위
  const postOrd = postorder(nodes, 0);
  return [preOrd, inOrd, postOrd];
}

console.log(solution([1,2,3,4,5,6,7]));