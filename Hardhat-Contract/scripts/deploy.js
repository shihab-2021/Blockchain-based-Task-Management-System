async function main() {
  const TaskToDo = await ethers.getContractFactory("TaskToDo");

  // Start deployment, returning a promise that resolves to a contract object
  const taskToDo = await TaskToDo.deploy();
  console.log("Contract address:", taskToDo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
