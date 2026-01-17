export const hrQuestions = [
    {
        id: 1,
        question: "Tell me about yourself.",
        answer:
            "Start with your current role or education, briefly mention past experience, key skills, and end with why you are interested in this position.",
        level: "Easy",
    },
    {
        id: 2,
        question: "What are your strengths?",
        answer:
            "Highlight strengths relevant to the role and support them with short real-life examples.",
        level: "Easy",
    },
    {
        id: 3,
        question: "What are your weaknesses?",
        answer:
            "Mention a genuine but non-critical weakness and explain the steps you are taking to improve it.",
        level: "Easy",
    },
    {
        id: 4,
        question: "Why should we hire you?",
        answer:
            "Explain how your skills, experience, and attitude align with the job requirements and company values.",
        level: "Medium",
    },
    {
        id: 5,
        question: "Why do you want to work for our company?",
        answer:
            "Show that you have researched the company and explain how its values and goals align with your career interests.",
        level: "Medium",
    },
    {
        id: 6,
        question: "Describe a challenging situation and how you handled it.",
        answer:
            "Use the STAR method (Situation, Task, Action, Result) to clearly explain how you solved the problem.",
        level: "Medium",
    },
    {
        id: 7,
        question: "How do you handle stress and pressure?",
        answer:
            "Explain your approach to staying organized, prioritizing tasks, and maintaining a positive mindset.",
        level: "Medium",
    },
    {
        id: 8,
        question: "Where do you see yourself in five years?",
        answer:
            "Talk about your career goals while showing commitment to growth within the company.",
        level: "Medium",
    },
    {
        id: 9,
        question: "Describe a time you failed and what you learned from it.",
        answer:
            "Be honest about the failure, focus on lessons learned, and explain how it helped you improve.",
        level: "Hard",
    },
    {
        id: 10,
        question: "How do you handle conflict with a team member?",
        answer:
            "Explain how you communicate openly, listen actively, and work towards a professional solution.",
        level: "Hard",
    },
    {
        id: 11,
        question: "What motivates you at work?",
        answer:
            "Talk about intrinsic motivators like learning, impact, responsibility, or solving problems.",
        level: "Easy",
    },
    {
        id: 12,
        question: "Why are you leaving your current job?",
        answer:
            "Keep your answer professional and positive, focusing on growth rather than complaints.",
        level: "Hard",
    },
    {
        id: 13,
        question: "How do you handle feedback and criticism?",
        answer:
            "Explain how you accept feedback constructively and use it to improve your performance.",
        level: "Medium",
    },
    {
        id: 14,
        question: "Describe a situation where you showed leadership.",
        answer:
            "Share an example where you took initiative, guided others, and achieved a positive outcome.",
        level: "Hard",
    },
    {
        id: 15,
        question: "Do you have any questions for us?",
        answer:
            "Always say yes and ask thoughtful questions about team culture, expectations, or growth opportunities.",
        level: "Easy",
    },
];




export const techQuestions = [
    {
        id: 101,
        question: "What is React?",
        answer:
            "React is a JavaScript library for building reusable UI components using a component-based architecture.",
        level: "Easy",
    },
    {
        id: 102,
        question: "What is JSX?",
        answer:
            "JSX is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.",
        level: "Easy",
    },
    {
        id: 103,
        question: "What are props in React?",
        answer:
            "Props are read-only inputs passed from a parent component to a child component.",
        level: "Easy",
    },
    {
        id: 104,
        question: "What is state in React?",
        answer:
            "State is a built-in object that stores data that can change over time and affects component rendering.",
        level: "Easy",
    },
    {
        id: 105,
        question: "What is useEffect?",
        answer:
            "useEffect is a React Hook that allows you to perform side effects such as data fetching or subscriptions after rendering.",
        level: "Medium",
    },
    {
        id: 106,
        question: "What is the virtual DOM?",
        answer:
            "The virtual DOM is a lightweight copy of the real DOM that React uses to improve performance by minimizing direct DOM updates.",
        level: "Medium",
    },
    {
        id: 107,
        question: "What are keys in React?",
        answer:
            "Keys help React identify which items have changed, are added, or removed in a list.",
        level: "Medium",
    },
    {
        id: 108,
        question: "Difference between controlled and uncontrolled components?",
        answer:
            "Controlled components manage form data using state, while uncontrolled components use refs.",
        level: "Medium",
    },
    {
        id: 109,
        question: "What are hooks?",
        answer:
            "Hooks are functions that let you use React features like state and lifecycle methods in functional components.",
        level: "Medium",
    },
    {
        id: 110,
        question: "What is context API?",
        answer:
            "Context API allows sharing data across components without passing props manually at every level.",
        level: "Hard",
    },
    {
        id: 111,
        question: "Explain useMemo and useCallback.",
        answer:
            "useMemo memoizes computed values, while useCallback memoizes functions to optimize performance.",
        level: "Hard",
    },
    {
        id: 112,
        question: "What is reconciliation in React?",
        answer:
            "Reconciliation is the process React uses to compare the virtual DOM with the real DOM and apply minimal updates.",
        level: "Hard",
    },
];




export const codingQuestions = [
    {
        id: 201,
        question: "Reverse a string",
        answer:
            "Split the string into an array, reverse it, and join it back into a string.",
        level: "Easy",
    },
    {
        id: 202,
        question: "Check if a number is prime",
        answer:
            "A number is prime if it has no divisors other than 1 and itself.",
        level: "Medium",
    },
    {
        id: 203,
        question: "Find the largest number in an array",
        answer:
            "Iterate through the array and keep track of the maximum value.",
        level: "Easy",
    },
    {
        id: 204,
        question: "Check if a string is a palindrome",
        answer:
            "Compare the original string with its reversed version.",
        level: "Easy",
    },
    {
        id: 205,
        question: "Find factorial of a number",
        answer:
            "Multiply numbers from 1 to n using a loop or recursion.",
        level: "Easy",
    },
    {
        id: 206,
        question: "Find Fibonacci sequence up to n terms",
        answer:
            "Use iteration or recursion to generate Fibonacci numbers.",
        level: "Medium",
    },
    {
        id: 207,
        question: "Remove duplicates from an array",
        answer:
            "Use a Set or filter method to remove duplicate values.",
        level: "Medium",
    },
    {
        id: 208,
        question: "Count occurrences of characters in a string",
        answer:
            "Loop through the string and store character counts in an object or Map.",
        level: "Medium",
    },
    {
        id: 209,
        question: "Merge two sorted arrays",
        answer:
            "Use two pointers to merge arrays while maintaining sorted order.",
        level: "Hard",
    },
    {
        id: 210,
        question: "Find the missing number in an array",
        answer:
            "Use sum formula or XOR to determine the missing value.",
        level: "Hard",
    },
];
