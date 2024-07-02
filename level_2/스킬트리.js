function solution(skill, skill_trees) {
  const skillOrder = skill.split('');
  let count = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let stack = [];
    const skills = skill_trees[i].split('');

    //스킬트리에서 스킬순서를 담고
    for (let j = 0; j < skills.length; j++) {
      if(skillOrder.includes(skills[j])) {
        stack.push(skills[j]);
      }
    }

    let saveSkillOrder;
    let isValid = false;

    if(stack[0] !== skillOrder[0]) continue;

    //올바른 스킬순서인지 검사한다.
    while (stack.length) {
      saveSkillOrder = stack.shift();
      const findSkillOrderIdx = skillOrder.findIndex(v => v === saveSkillOrder);

      if(!stack[0] || !skillOrder[findSkillOrderIdx + 1]) break

      if((stack[0] && skillOrder[findSkillOrderIdx + 1]) && stack[0] === skillOrder[findSkillOrderIdx + 1]) {
        isValid = true;
        continue;
      }

      isValid = false;
      break
    }
    if(isValid) {
      count += 1;
    }
  }

  return count;
}