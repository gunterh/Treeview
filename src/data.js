export const data = {
  root: {
    id: "root",
    name: "root",
    children: ["cat1", "cat2"]
  },
  cat1: {
    id: "cat1",
    name: "Category 1",
    parent: "root",
    children: ["op1", "op2", "op3"]
  },
  cat2: {
    id: "cat2",
    name: "Category 2",
    parent: "root",
    children: ["op4", "op5", "op6"]
  },
  op1: {
    id: "op1",
    name: "Option 1",
    parent: "cat1"
  },
  op2: {
    id: "op2",
    name: "Option 2",
    parent: "cat1",
    children: ["sub1", "l2"]
  },
  op3: {
    id: "op3",
    name: "Option 3",
    parent: "cat1"
  },
  op4: {
    id: "op4",
    name: "Option 4",
    parent: "cat2"
  },
  op5: {
    id: "op5",
    name: "Option 5",
    parent: "cat2"
  },
  op6: {
    id: "op6",
    name: "Option 6",
    parent: "cat2"
  },
  sub1: {
    id: "sub1",
    name: "Sub-option 1",
    parent: "op2"
  },
  l2: {
    id: "l2",
    name: "Level 2",
    parent: "op2",
    children: ["l3"]
  },
  l3: {
    id: "l3",
    name: "Level 3",
    parent: "l2",
    children: ["l4"]
  },
  l4: {
    id: "l4",
    name: "Level 4",
    parent: "l3",
    children: ["l5"]
  },
  l5: {
    id: "l5",
    name: "Level 5",
    parent: "l4",
    children: ["l6"]
  },
  l6: {
    id: "l6",
    name: "Last level",
    parent: "l5"
  }
};
