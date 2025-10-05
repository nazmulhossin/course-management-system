import { Course } from "@/types/course";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Competitive Programming Fundamentals",
    subtitle: "Master the basics of algorithms and data structures",
    description: "Start your competitive programming journey with essential algorithms, data structures, and problem-solving techniques used in coding competitions like Codeforces, LeetCode, and CodeChef.",
    level: "Beginner",
    thumbnail: "/courses/cp-fundamentals.jpg",
    duration: "8 weeks",

    price: 2000,
    originalPrice: 3000,
    isFree: false,

    rating: 4.8,
    reviewsCount: 234,
    studentsCount: 1250,
    lastUpdated: "2024-03-15",
    isFeatured: true,

    courseFeatures: [
      "500+ practice problems",
      "Weekly coding challenges",
      "Downloadable resources",
      "Certificate of completion",
      "Community forum support"
    ],
    instructors: [
      {
        id: "1",
        name: "Md. Rakib Hossain",
        title: "SWE at Inverse.AI",
        bio: "Master at Codeforces. 4th ICPC Dhaka Regional, 2024. Asia West Continent Finalist, 2025",
        avatar: "/images/rakib.png",
        expertise: ["Algorithms", "Data Structures"]
      },
      {
        id: "3",
        name: "Sayeef Mahmud",
        title: "SWE at Cefalo",
        bio: "Master at Codeforces. 5th in ICPC West continent finals, 2021. ICPC World Finalist, 2022",
        avatar: "/images/sayeef.jpg",
        expertise: ["Python", "Algorithms", "Software Engineering", "Open Source"]
      },
      {
        id: "2",
        name: "Muhammad Shahriar",
        title: "CEO of CPS Academy",
        bio: "Former SWE of Enosis. Expert at Codeforces. 17th in Dhaka Regional, ICPC 2020",
        avatar: "/images/shahriar.jpg",
        expertise: ["Advanced Algorithms", "Optimization", "Graph Theory", "Dynamic Programming"]
      }
    ],
    learningPoints: [
      "Master fundamental data structures (arrays, linked lists, trees, graphs)",
      "Understand time and space complexity analysis (Big O notation)",
      "Solve 100+ coding problems on online judges",
      "Develop systematic problem-solving approach",
      "Participate confidently in coding competitions"
    ],
    requirements: [
      "Basic programming knowledge in any language",
      "Familiarity with high school mathematics",
      "Dedication to practice 5-7 hours per week",
      "Willingness to solve challenging problems"
    ],
    modules: [
      {
        id: "m1",
        title: "Introduction to Competitive Programming",
        lessons: [
          {
            title: "Welcome to Competitive Programming",
            duration: 15,
            type: "live",
            isPreview: true
          },
          {
            title: "Problem Solving Strategies",
            duration: 25,
            type: "video",
            isPreview: false
          },
          {
            title: "Time Complexity Analysis",
            duration: 20,
            type: "reading",
            isPreview: true
          },
          {
            title: "Basic Input/Output Techniques",
            duration: 10,
            type: "video",
            isPreview: false
          }
        ]
      },
      {
        id: "m2",
        title: "Basic Data Structures",
        lessons: [
          {
            title: "Arrays and Strings",
            duration: 30,
            type: "video",
            isPreview: true
          },
          {
            title: "Linked Lists Implementation",
            duration: 25,
            type: "video",
            isPreview: false
          },
          {
            title: "Stacks and Queues",
            duration: 20,
            type: "video",
            isPreview: false
          },
          {
            title: "Data Structures Quiz",
            duration: 15,
            type: "practice",
            isPreview: false
          }
        ]
      },
      {
        id: "m3",
        title: "Algorithm Design Patterns",
        lessons: [
          {
            title: "Brute Force and Optimization",
            duration: 35,
            type: "video",
            isPreview: false
          },
          {
            title: "Greedy Algorithms",
            duration: 40,
            type: "video",
            isPreview: false
          },
          {
            title: "Divide and Conquer",
            duration: 30,
            type: "video",
            isPreview: false
          }
        ]
      }
    ],
    reviews: [
      {
        name: "Alex Johnson",
        avatar: "/users/alex-johnson.jpg",
        rating: 5,
        date: "2024-03-15",
        comment: "This course completely transformed my approach to problem-solving. The instructor explains complex concepts in a very understandable way. Highly recommended for beginners!"
      },
      {
        name: "Sarah Miller",
        avatar: "/users/sarah-miller.jpg",
        rating: 4,
        date: "2024-03-10",
        comment: "Great content and well-structured curriculum. The practice problems are challenging but very rewarding. Would love to see more advanced topics in the future."
      },
      {
        name: "Mike Chen",
        rating: 5,
        date: "2024-03-08",
        comment: "As someone preparing for technical interviews, this course was exactly what I needed. The algorithm explanations are clear and the coding exercises are very practical."
      }
    ]
  },
  {
    id: "2",
    title: "Advanced Algorithm Design",
    subtitle: "Master complex algorithms and optimization techniques",
    description: "Dive deep into advanced algorithm design patterns, dynamic programming optimization, complex graph algorithms, and mathematical techniques for programming competitions.",
    level: "Advanced",
    thumbnail: "/courses/advanced-algorithms.jpg",
    duration: "12 weeks",

    price: 3500,
    originalPrice: 4500,
    isFree: false,

    rating: 4.9,
    reviewsCount: 89,
    studentsCount: 450,
    lastUpdated: "2024-02-20",
    isFeatured: true,

    courseFeatures: [
      "450+ practice problems",
      "Weekly coding challenges",
      "Downloadable resources",
      "Certificate of completion",
      "Community forum support"
    ],
    instructors: [
      {
        id: "2",
        name: "Muhammad Shahriar",
        title: "CEO of CPS Academy",
        bio: "Former SWE of Enosis. Expert at Codeforces. 17th in Dhaka Regional, ICPC 2020",
        avatar: "/images/shahriar.jpg",
        expertise: ["Advanced Algorithms", "Optimization", "Graph Theory", "Dynamic Programming"]
      }
    ],
    learningPoints: [
      "Master advanced dynamic programming techniques",
      "Solve complex graph theory problems efficiently",
      "Understand network flow and matching algorithms",
      "Learn computational geometry fundamentals",
      "Optimize solutions for extreme constraints"
    ],
    requirements: [
      "Strong understanding of basic algorithms and data structures",
      "Experience with competitive programming platforms",
      "Comfortable with mathematical reasoning and proofs",
      "Completed beginner-level CP course or equivalent experience"
    ],
    modules: [
      {
        id: "m1",
        title: "Advanced Dynamic Programming",
        lessons: [
          {
            title: "DP Optimization Techniques",
            duration: 45,
            type: "video",
            isPreview: true
          },
          {
            title: "Digit Dynamic Programming",
            duration: 50,
            type: "video",
            isPreview: false
          },
          {
            title: "Bitmask DP and TSP",
            duration: 55,
            type: "video",
            isPreview: false
          },
          {
            title: "DP on Trees",
            duration: 40,
            type: "video",
            isPreview: false
          },
          {
            title: "Advanced DP Quiz",
            duration: 20,
            type: "practice",
            isPreview: false
          }
        ]
      },
      {
        id: "m2",
        title: "Graph Algorithms Mastery",
        lessons: [
          {
            title: "Network Flow Algorithms",
            duration: 55,
            type: "video",
            isPreview: false
          },
          {
            title: "Matching and Bipartite Graphs",
            duration: 45,
            type: "video",
            isPreview: false
          },
          {
            title: "Strongly Connected Components",
            duration: 35,
            type: "video",
            isPreview: false
          },
          {
            title: "Advanced Graph Theory Reading",
            duration: 25,
            type: "reading",
            isPreview: false
          }
        ]
      },
      {
        id: "m3",
        title: "Mathematical Algorithms",
        lessons: [
          {
            title: "Number Theory for CP",
            duration: 40,
            type: "video",
            isPreview: false
          },
          {
            title: "Combinatorics and Probability",
            duration: 35,
            type: "video",
            isPreview: false
          },
          {
            title: "Game Theory Basics",
            duration: 30,
            type: "video",
            isPreview: false
          }
        ]
      }
    ],
    reviews: [
      {
        name: "Raj Patel",
        avatar: "/users/raj-patel.jpg",
        rating: 5,
        date: "2024-03-12",
        comment: "The advanced DP techniques covered in this course helped me solve problems I previously found impossible. Mike's explanations are incredibly clear and practical."
      },
      {
        name: "Emily Chen",
        avatar: "/users/emily-chen.jpg",
        rating: 5,
        date: "2024-03-08",
        comment: "This course took my competitive programming skills to the next level. The graph algorithms section alone was worth the price. Highly recommended for serious competitors!"
      },
      {
        name: "David Kim",
        rating: 4,
        date: "2024-03-05",
        comment: "Excellent course with deep technical content. Some sections are quite challenging, but the instructor provides great support in the community forum."
      }
    ]
  },
  {
    id: "3",
    title: "Python for Competitive Programming",
    subtitle: "Leverage Python's power in coding competitions",
    description: "Learn how to effectively use Python's built-in functions, standard libraries, and unique features to solve problems quickly and efficiently in programming contests.",
    level: "Beginner",
    thumbnail: "/courses/python-cp.jpg",
    duration: "6 weeks",

    price: 0,
    originalPrice: 1500,
    isFree: true,

    rating: 4.6,
    reviewsCount: 167,
    studentsCount: 2100,
    lastUpdated: "2024-03-01",
    isFeatured: false,

    courseFeatures: [
      "350+ practice problems",
      "Weekly coding challenges",
      "Downloadable resources",
      "Certificate of completion",
      "Community forum support"
    ],
    instructors: [
      {
        id: "3",
        name: "Sayeef Mahmud",
        title: "SWE at Cefalo",
        bio: "Master at Codeforces. 5th in ICPC West continent finals, 2021. ICPC World Finalist, 2022",
        avatar: "/images/sayeef.jpg",
        expertise: ["Python", "Algorithms", "Software Engineering", "Open Source"]
      }
    ],
    learningPoints: [
      "Master Python's built-in functions for competitive programming",
      "Learn to use itertools, collections, and heapq effectively",
      "Understand Python-specific optimizations and tricks",
      "Solve problems with concise and readable Python code",
      "Handle large inputs efficiently in Python"
    ],
    requirements: [
      "Basic Python programming knowledge",
      "Understanding of fundamental programming concepts",
      "Familiarity with basic data structures",
      "No prior competitive programming experience required"
    ],
    modules: [
      {
        id: "m1",
        title: "Python Essentials for CP",
        lessons: [
          {
            title: "Python Built-in Functions Mastery",
            duration: 25,
            type: "video",
            isPreview: true
          },
          {
            title: "List Comprehensions and Generators",
            duration: 30,
            type: "video",
            isPreview: true
          },
          {
            title: "Lambda Functions and Functional Programming",
            duration: 20,
            type: "video",
            isPreview: false
          },
          {
            title: "Python Basics Quiz",
            duration: 15,
            type: "practice",
            isPreview: false
          }
        ]
      },
      {
        id: "m2",
        title: "Essential Python Libraries",
        lessons: [
          {
            title: "Collections Module Deep Dive",
            duration: 35,
            type: "video",
            isPreview: false
          },
          {
            title: "itertools for Combinatorics",
            duration: 30,
            type: "video",
            isPreview: false
          },
          {
            title: "heapq for Priority Queues",
            duration: 25,
            type: "video",
            isPreview: false
          },
          {
            title: "Standard Library Reference",
            duration: 20,
            type: "reading",
            isPreview: false
          }
        ]
      },
      {
        id: "m3",
        title: "Python Optimization Techniques",
        lessons: [
          {
            title: "Input/Output Optimization",
            duration: 20,
            type: "video",
            isPreview: false
          },
          {
            title: "Memory Management in Python",
            duration: 25,
            type: "video",
            isPreview: false
          },
          {
            title: "Python vs C++ Performance",
            duration: 15,
            type: "reading",
            isPreview: false
          }
        ]
      }
    ],
    reviews: [
      {
        name: "Maria Gonzalez",
        avatar: "/users/maria-gonzalez.jpg",
        rating: 5,
        date: "2024-03-14",
        comment: "As someone who only knew Python, this course showed me how to compete effectively against C++ programmers. The library tips are game-changing!"
      },
      {
        name: "Tom Wilson",
        avatar: "/users/tom-wilson.jpg",
        rating: 4,
        date: "2024-03-09",
        comment: "Excellent free course! David explains Python concepts clearly and provides practical examples. Perfect for beginners wanting to start competitive programming."
      },
      {
        name: "Lisa Wang",
        rating: 5,
        date: "2024-03-06",
        comment: "I never knew Python had so many powerful built-in functions for CP. This course opened my eyes to writing more efficient and elegant code."
      }
    ]
  },
  {
    id: "4",
    title: "Data Structures Intensive",
    subtitle: "Master advanced data structures for competitive programming",
    description: "Comprehensive coverage of advanced data structures including segment trees, Fenwick trees, tries, and advanced tree structures with practical implementation and real-world applications.",
    level: "Intermediate",
    thumbnail: "/courses/data-structures-intensive.jpg",
    duration: "10 weeks",

    price: 2800,
    originalPrice: 3500,
    isFree: false,

    rating: 4.7,
    reviewsCount: 156,
    studentsCount: 890,
    lastUpdated: "2024-02-10",
    isFeatured: true,

    courseFeatures: [
      "300+ practice problems",
      "Weekly coding challenges",
      "Downloadable resources",
      "Certificate of completion",
      "Community forum support"
    ],
    instructors: [
      {
        id: "4",
        name: "Adnan Zawad Toky",
        title: "SWE at Cefalo",
        bio: "Master at Codeforces. 5th in ICPC West Continent Finals, 2021. ICPC World Finalist, 2022",
        avatar: "/images/toky.jpg",
        expertise: ["Data Structures", "Algorithms", "Competitive Programming"]
      }
    ],
    learningPoints: [
      "Implement and use segment trees with lazy propagation",
      "Master Fenwick trees for efficient range queries",
      "Understand and apply advanced tree structures",
      "Solve complex problems with custom data structures",
      "Optimize memory usage and query times for large datasets"
    ],
    requirements: [
      "Strong understanding of basic data structures",
      "Experience with tree and graph algorithms",
      "Comfortable with recursion and iterative algorithms",
      "Basic understanding of time complexity analysis",
      "Familiarity with C++ or Java (Python may be slower for some DS)"
    ],
    modules: [
      {
        id: "m1",
        title: "Segment Trees Mastery",
        lessons: [
          {
            title: "Segment Tree Fundamentals",
            duration: 40,
            type: "video",
            isPreview: true
          },
          {
            title: "Lazy Propagation Techniques",
            duration: 50,
            type: "video",
            isPreview: false
          },
          {
            title: "2D Segment Trees",
            duration: 45,
            type: "video",
            isPreview: false
          },
          {
            title: "Segment Trees Practice Problems",
            duration: 35,
            type: "reading",
            isPreview: false
          },
          {
            title: "Segment Trees Quiz",
            duration: 20,
            type: "practice",
            isPreview: false
          }
        ]
      },
      {
        id: "m2",
        title: "Advanced Tree Structures",
        lessons: [
          {
            title: "Fenwick Trees (Binary Indexed Trees)",
            duration: 35,
            type: "video",
            isPreview: false
          },
          {
            title: "Trie Data Structure",
            duration: 30,
            type: "video",
            isPreview: false
          },
          {
            title: "Splay Trees and AVL Trees",
            duration: 40,
            type: "video",
            isPreview: false
          },
          {
            title: "Advanced Trees Reading",
            duration: 25,
            type: "reading",
            isPreview: false
          }
        ]
      },
      {
        id: "m3",
        title: "Specialized Data Structures",
        lessons: [
          {
            title: "Disjoint Set Union (Union-Find)",
            duration: 30,
            type: "video",
            isPreview: false
          },
          {
            title: "Sparse Tables for RMQ",
            duration: 25,
            type: "video",
            isPreview: false
          },
          {
            title: "Mo's Algorithm",
            duration: 35,
            type: "video",
            isPreview: false
          },
          {
            title: "Final Data Structures Project",
            duration: 60,
            type: "practice",
            isPreview: false
          }
        ]
      }
    ],
    reviews: [
      {
        name: "Chris Lee",
        avatar: "/users/chris-lee.jpg",
        rating: 5,
        date: "2024-03-11",
        comment: "Dr. Wilson's explanations of segment trees and lazy propagation are the clearest I've ever seen. Finally understand these complex concepts!"
      },
      {
        name: "Priya Sharma",
        avatar: "/users/priya-sharma.jpg",
        rating: 4,
        date: "2024-03-05",
        comment: "Excellent course for intermediate programmers looking to level up. The practice problems are challenging but very educational. Some sections are quite dense."
      },
      {
        name: "Alex Thompson",
        rating: 5,
        date: "2024-02-28",
        comment: "The data structures covered in this course directly helped me in my technical interviews. The Fenwick tree implementation alone solved multiple interview problems for me."
      }
    ]
  }
];

export const getCourses = (): Course[] => {
  return mockCourses;
}

// Helper functions for easy access
export const getCourseById = (id: string): Course | undefined => {
  return mockCourses.find(course => course.id === id);
};

export const getFeaturedCourses = (): Course[] => {
  return mockCourses.filter(course => course.isFeatured);
};
