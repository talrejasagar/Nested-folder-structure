const veggiesv1 = [
  {
    name: "Fruit",
    isexpand: true,
    child: [
      { name: "Apple", isexpand: false },
      { name: "Banana", isexpand: false },
      { name: "Fruit Loops", isexpand: false },
    ],
  },
  {
    name: "Vegetables",
    isexpand: true,
    child: [
      {
        name: "Green",
        isexpand: true,
        child: [
          { name: "Broccoli", isexpand: false },
          { name: "Brussels", isexpand: false },
        ],
      },
      {
        name: "Orange",
        isexpand: true,
        child: [
          { name: "Pumpkins", isexpand: false },
          { name: "Carrots", isexpand: false },
        ],
      },
    ],
  },
];

export default veggiesv1;
