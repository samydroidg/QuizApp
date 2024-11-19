let questions = [
  {
    numb: 1,
    question:
      "HTML is considered the backbone of web development. What does it stand for?",
    answer: "B. Hyper Text Markup Language",
    options: [
      "A. Hyper Text Multi Language",
      "B. Hyper Text Markup Language",
      "C. High Tech Marking Language",
      "D. Home Type Metadata Language",
    ],
  },
  {
    numb: 2,
    question:
      "CSS is often paired with HTML to style websites. What does CSS stand for?",
    answer: "C. Cascading Style Sheets",
    options: [
      "A. Computer Styling Software",
      "B. Creative Styling System",
      "C. Cascading Style Sheets",
      "D. Color Scheme Selector",
    ],
  },
  {
    numb: 3,
    question:
      "In JavaScript, which keyword is used to declare variables that cannot be reassigned?",
    answer: "C. const",
    options: ["A. var", "B. let", "C. const", "D. fixed"],
  },
  {
    numb: 4,
    question:
      "Python is known for its simplicity. Which of these is a valid Python data type?",
    answer: "D. All of the above",
    options: ["A. Int", "B. String", "C. List", "D. All of the above"],
  },
  {
    numb: 5,
    question:
      "Git helps developers manage version control. What command is used to create a new branch?",
    answer: "A. git branch [branch_name]",
    options: [
      "A. git branch [branch_name]",
      "B. git create [branch_name]",
      "C. git branch-new [branch_name]",
      "D. git init [branch_name]",
    ],
  },
  {
    numb: 6,
    question: "Which HTTP method is used to send data to the server?",
    answer: "B. POST",
    options: ["A. GET", "B. POST", "C. PUT", "D. DELETE"],
  },
  {
    numb: 7,
    question: "In SQL, which command is used to retrieve data from a database?",
    answer: "A. SELECT",
    options: ["A. SELECT", "B. FETCH", "C. RETRIEVE", "D. GRAB"],
  },
  {
    numb: 8,
    question:
      "JavaScript allows for asynchronous programming. Which function is commonly used to wait for a promise to resolve?",
    answer: "C. await",
    options: ["A. async", "B. setTimeout", "C. await", "D. delay"],
  },
  {
    numb: 9,
    question: "Which algorithm has a time complexity of O(log n)?",
    answer: "B. Binary Search",
    options: [
      "A. Bubble Sort",
      "B. Binary Search",
      "C. Linear Search",
      "D. Quick Sort",
    ],
  },
  {
    numb: 10,
    question:
      "React is a popular JavaScript library. What is the purpose of React hooks?",
    answer: "B. To manage state and lifecycle in functional components",
    options: [
      "A. To manage class components",
      "B. To manage state and lifecycle in functional components",
      "C. To connect to a database",
      "D. To handle HTTP requests",
    ],
  },
  {
    numb: 11,
    question: "Which of the following is a Python web framework?",
    answer: "A. Flask",
    options: ["A. Flask", "B. Laravel", "C. Ruby on Rails", "D. Spring"],
  },
  {
    numb: 12,
    question:
      "Docker revolutionized software deployment. What does Docker use to package applications?",
    answer: "A. Containers",
    options: [
      "A. Containers",
      "B. Virtual Machines",
      "C. Git Repositories",
      "D. Microservices",
    ],
  },
  {
    numb: 13,
    question: "What is the purpose of Node.js in development?",
    answer: "B. To run JavaScript on the server",
    options: [
      "A. To style HTML elements",
      "B. To run JavaScript on the server",
      "C. To compile Python code",
      "D. To manage SQL databases",
    ],
  },
  {
    numb: 14,
    question:
      "Which sorting algorithm is the fastest on average for large datasets?",
    answer: "C. Quick Sort",
    options: [
      "A. Bubble Sort",
      "B. Insertion Sort",
      "C. Quick Sort",
      "D. Selection Sort",
    ],
  },
  {
    numb: 15,
    question:
      "Machine learning models often use gradient descent. What is its purpose?",
    answer:
      "B. To optimize the model's performance by minimizing a loss function",
    options: [
      "A. To split data into training and testing sets",
      "B. To optimize the model's performance by minimizing a loss function",
      "C. To preprocess input data",
      "D. To test the model’s accuracy",
    ],
  },
  {
    numb: 16,
    question: "Which algorithm is used for finding the shortest path in a weighted graph?",
    answer: "A. Dijkstra's Algorithm",
    options: [
      "A. Dijkstra's Algorithm",
      "B. Depth First Search",
      "C. Breadth First Search",
      "D. Kruskal's Algorithm"
    ]
  },
  {
    numb: 17,
    question: "What is the purpose of a hash function in a hash table?",
    answer: "C. To map keys to indices in an array",
    options: [
      "A. To compress data",
      "B. To encrypt data",
      "C. To map keys to indices in an array",
      "D. To sort data"
    ]
  },
  {
    numb: 18,
    question: "What is a key characteristic of dynamic programming?",
    answer: "B. Overlapping subproblems and optimal substructure",
    options: [
      "A. Divide and conquer approach",
      "B. Overlapping subproblems and optimal substructure",
      "C. Recursive backtracking",
      "D. Use of graphs"
    ]
  },
  {
    numb: 19,
    question: "Which of the following is an example of a greedy algorithm?",
    answer: "A. Huffman Encoding",
    options: [
      "A. Huffman Encoding",
      "B. Depth First Search",
      "C. Dynamic Programming",
      "D. Bellman-Ford Algorithm"
    ]
  },
  {
    numb: 20,
    question: "What is the main advantage of a balanced binary search tree (e.g., AVL Tree)?",
    answer: "B. Maintains O(log n) height for efficient operations",
    options: [
      "A. Reduces space complexity",
      "B. Maintains O(log n) height for efficient operations",
      "C. Simplifies traversal",
      "D. Improves sorting speed"
    ]
  },
  {
    numb: 21,
    question: "Which traversal method processes the left subtree, root, and then the right subtree?",
    answer: "C. In-order Traversal",
    options: [
      "A. Pre-order Traversal",
      "B. Post-order Traversal",
      "C. In-order Traversal",
      "D. Level-order Traversal"
    ]
  },
  {
    numb: 22,
    question: "In machine learning, what does the term 'overfitting' mean?",
    answer: "A. The model performs well on training data but poorly on new data",
    options: [
      "A. The model performs well on training data but poorly on new data",
      "B. The model generalizes well to all datasets",
      "C. The model has too few features",
      "D. The model takes too long to train"
    ]
  },
  {
    numb: 23,
    question: "What is the space complexity of a depth-first search (DFS) in a graph?",
    answer: "C. O(V + E)",
    options: [
      "A. O(V^2)",
      "B. O(E)",
      "C. O(V + E)",
      "D. O(V)"
    ]
  },
  {
    numb: 24,
    question: "Which technique is used to break a problem into smaller subproblems recursively?",
    answer: "A. Divide and Conquer",
    options: [
      "A. Divide and Conquer",
      "B. Greedy Algorithm",
      "C. Brute Force",
      "D. Backtracking"
    ]
  },
  {
    numb: 25,
    question: "What is the main difference between stack and queue data structures?",
    answer: "B. Stack is LIFO, while queue is FIFO",
    options: [
      "A. Stack is FIFO, while queue is LIFO",
      "B. Stack is LIFO, while queue is FIFO",
      "C. Both operate as FIFO structures",
      "D. Both operate as LIFO structures"
    ]
  }
]
