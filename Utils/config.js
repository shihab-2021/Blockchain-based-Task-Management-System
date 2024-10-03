export const API_URL = "https://volta-rpc.energyweb.org/";
export const PRIVATE_KEY =
  "b79f88723bc115ce1c637d9e0c9be6f97b5f61145b795f6557801a0401155b85";
export const contractAddress = "0x9fd084b3e69b47C87Cb734f001b8e171673baaC7";
export const contractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_desc",
        type: "string",
      },
    ],
    name: "addTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTasks",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "desc",
            type: "string",
          },
          {
            internalType: "enum TaskToDo.TaskStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct TaskToDo.Task[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "enum TaskToDo.TaskStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "markAsFinished",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "enum TaskToDo.TaskStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
