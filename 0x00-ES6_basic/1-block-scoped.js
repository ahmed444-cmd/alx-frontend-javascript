export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // no-unused-vars
    const task2 = false; // no-unused-vars
  }

  return [task, task2];
}
