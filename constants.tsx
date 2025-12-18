
import { FAQItem, CheatSection } from './types';

export const SECTIONS: CheatSection[] = [
  {
    id: 'core-java',
    title: 'Core Java Cheat Sheet',
    items: [
      {
        label: 'OOP: Encapsulation',
        content: 'Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods (Getters/Setters). It protects an object\'s internal state from unauthorized access and modification, ensuring data integrity.',
        code: `public class BankAccount {
    private double balance; // Private field (Data Hiding)

    public void deposit(double amount) {
        if (amount > 0) balance += amount; // Validation logic
    }

    public double getBalance() { return balance; }
}`
      },
      {
        label: 'OOP: Inheritance',
        content: 'Inheritance allows a "subclass" to acquire the properties and behaviors (fields and methods) of a "superclass". It promotes code reusability and establishes an "IS-A" relationship between classes.',
        code: `class Employee {
    float salary = 40000;
}

class Programmer extends Employee {
    int bonus = 10000;
    // Programmer "IS-A" Employee and inherits 'salary'
}`
      },
      {
        label: 'OOP: Polymorphism',
        content: 'Polymorphism allows one action to be performed in different ways. It manifests in two forms: Compile-time (Method Overloading) and Runtime (Method Overriding). Overriding allows a child class to provide a specific implementation of a method already defined in its parent.',
        code: `class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}

class Cat extends Animal {
    @Override
    void sound() { System.out.println("Meow"); } // Runtime Polymorphism
}`
      },
      {
        label: 'OOP: Abstraction',
        content: 'Abstraction focuses on "what" an object does rather than "how" it does it. It hides the complex implementation details and only shows the essential features to the user. This is achieved using Abstract Classes and Interfaces.',
        code: `abstract class Shape {
    abstract void draw(); // No implementation
}

class Circle extends Shape {
    void draw() { System.out.println("Drawing Circle"); }
}`
      },
      {
        label: 'Access Modifiers',
        content: 'Control the visibility of classes, methods, and variables. "Public" is global, "Protected" is package + subclasses, "Default" (no modifier) is package-private, and "Private" is class-only.',
        code: `public class Access {
    private int hidden = 10;
    protected int shared = 20;
    public int visible = 30;
    int packageOnly = 40; // Default
}`
      },
      {
        label: 'final vs finally vs finalize',
        content: 'final: A modifier to make variables constant, methods non-overridable, or classes non-inheritable. finally: A block that always executes after try-catch. finalize: A method called by GC (now deprecated).',
        code: `final int MAX = 100;
try {
    // code
} finally {
    System.out.println("Always runs");
}`
      },
      {
        label: 'equals() vs ==',
        content: 'The "==" operator compares memory addresses (reference equality). The "equals()" method (inherited from Object) should be overridden to compare the actual values of objects.',
        code: `String s1 = new String("Java");
String s2 = new String("Java");
System.out.println(s1 == s2);      // false
System.out.println(s1.equals(s2)); // true`
      },
      {
        label: 'String vs StringBuilder vs StringBuffer',
        content: 'String is immutable (thread-safe but slow for edits). StringBuilder is mutable and fast (not thread-safe). StringBuffer is mutable and thread-safe (synchronized methods).',
        code: `StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // Modifies existing object
String s = sb.toString();`
      },
      {
        label: 'Immutable Objects',
        content: 'An object is immutable if its state cannot change after construction. To create one: make the class final, fields private final, and provide no setters.',
        code: `public final class Student {
    private final String name;
    public Student(String name) { this.name = name; }
    public String getName() { return name; }
}`
      },
      {
        label: 'Exception Hierarchy',
        content: 'All exceptions stem from Throwable. Checked exceptions (Exception subclasses) must be handled at compile time. Unchecked exceptions (RuntimeException subclasses) occur at runtime.',
        code: `try {
    throw new RuntimeException("Unchecked");
} catch (Exception e) {
    e.printStackTrace();
}`
      }
    ]
  },
  {
    id: 'jvm',
    title: 'JVM Cheat Sheet',
    items: [
      {
        label: 'JVM vs JRE vs JDK',
        content: 'JDK (Development Kit) = JRE + Compilers/Debuggers. JRE (Runtime) = JVM + Standard Libraries. JVM (Virtual Machine) executes the actual bytecode.',
        code: `Java Source (.java) 
   -> Compiler (javac) 
   -> Bytecode (.class) 
   -> JVM execution`
      },
      {
        label: 'JVM Architecture',
        content: 'Consists of ClassLoader (loading), Runtime Data Areas (memory), and Execution Engine (JIT compiler and Garbage Collector).',
        code: `Runtime Data Areas:
1. Method Area (Static)
2. Heap (Objects)
3. Stack (Frames/Local vars)
4. PC Register
5. Native Method Stack`
      },
      {
        label: 'Heap vs Stack',
        content: 'Heap: Global memory where all objects are stored. Managed by GC. Stack: Thread-local memory for method execution and local primitive variables.',
        code: `void myMethod() {
    int x = 10; // Stored in Stack
    User u = new User(); // 'u' ref in Stack, object in Heap
}`
      },
      {
        label: 'Garbage Collection (GC)',
        content: 'GC automatically deletes objects that are no longer reachable from "GC Roots". It primarily works in the Young Generation (Eden/Survivor) and Old Generation.',
        code: `User u = new User();
u = null; // Object now eligible for GC`
      },
      {
        label: 'Types of GC',
        content: 'Serial (single thread), Parallel (throughput focused), G1 (default, region-based), and ZGC (low latency, 10ms max pauses).',
        code: `// Enable G1 GC in JVM args:
-XX:+UseG1GC`
      }
    ]
  },
  {
    id: 'collections',
    title: 'Java Collections Cheat Sheet',
    items: [
      {
        label: 'List vs Set vs Map',
        content: 'A List is an ordered collection that allows duplicates and preserves insertion order. A Set is an unordered collection that ensures uniqueness (no duplicates). A Map is a collection of key-value pairs where each key must be unique and maps to exactly one value.',
        code: `List<String> list = new ArrayList<>(Arrays.asList("A", "B", "A")); // [A, B, A]
Set<String> set = new HashSet<>(list); // [A, B]
Map<Integer, String> map = new HashMap<>();
map.put(1, "One");`
      },
      {
        label: 'ArrayList vs LinkedList',
        content: 'ArrayList uses a dynamic array internally, offering O(1) time for positional access but O(n) for shifting elements during insertions/deletions. LinkedList is a doubly-linked list, providing O(1) for adding/removing at the ends but O(n) to find an element by index.',
        code: `List<String> arrayList = new ArrayList<>(); // Better for frequent reads
List<String> linkedList = new LinkedList<>(); // Better for frequent edits

arrayList.get(5); // Fast O(1)
linkedList.add(0, "First"); // Fast O(1) at head`
      },
      {
        label: 'HashMap vs Hashtable vs ConcurrentHashMap',
        content: 'HashMap is the modern standard (fast, allows null, non-synchronized). Hashtable is a legacy class (thread-safe but slow as it locks the whole map). ConcurrentHashMap is the high-performance concurrent choice, using bucket-level locking (fine-grained) to allow multiple threads to read and write simultaneously.',
        code: `// Non-thread safe
Map<String, Integer> map = new HashMap<>(); 

// High performance thread-safe
Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.computeIfAbsent("key", k -> 100);`
      },
      {
        label: 'TreeMap vs HashMap',
        content: 'HashMap uses hashing to provide near-constant time O(1) performance but makes no guarantees about order. TreeMap is based on a Red-Black tree (self-balancing BST), providing O(log n) performance and maintaining keys in their natural order or via a custom Comparator.',
        code: `Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Z", 1);
treeMap.put("A", 2); 
// Iteration will result in: A, Z (Sorted order)`
      },
      {
        label: 'Comparable vs Comparator',
        content: 'Comparable is an interface implemented by the class itself (via compareTo) to define its "natural" sorting. Comparator is a functional interface used to define "external" or "custom" sorting logic, which is useful when you cannot modify the target class or need multiple sorting criteria.',
        code: `// Comparator (External sorting)
List<Integer> numbers = Arrays.asList(5, 1, 9);
Collections.sort(numbers, (a, b) -> b - a); // Sort Descending

// Comparable (Internal sorting)
class User implements Comparable<User> {
    int id;
    public int compareTo(User other) { return this.id - other.id; }
}`
      },
      {
        label: 'Fail-fast vs Fail-safe Iterators',
        content: 'Fail-fast iterators (standard Collections) immediately throw ConcurrentModificationException if the collection is structurally modified during iteration. Fail-safe iterators (found in Concurrent collections like CopyOnWriteArrayList) operate on a clone or snapshot of the data, allowing modification without errors.',
        code: `// Fail-fast (throws exception)
List<String> list = new ArrayList<>(Arrays.asList("A", "B"));
for (String s : list) { list.add("C"); } 

// Fail-safe (Safe)
List<String> safeList = new CopyOnWriteArrayList<>(Arrays.asList("A", "B"));
for (String s : safeList) { safeList.add("C"); }`
      }
    ]
  },
  {
    id: 'multithreading',
    title: 'Multithreading Quick Notes',
    items: [
      {
        label: 'Thread vs Runnable',
        content: 'A Thread is a separate path of execution. You can create one by extending the `Thread` class or implementing the `Runnable` interface. Implementing Runnable is preferred because it allows your class to extend another class, supporting better object-oriented design and decoupling task logic from thread management.',
        code: `// Runnable approach (Preferred)
Runnable task = () -> {
    System.out.println("Task running in: " + Thread.currentThread().getName());
};
Thread t1 = new Thread(task);
t1.start();`
      },
      {
        label: 'The synchronized Keyword',
        content: 'Synchronization prevents multiple threads from accessing a "critical section" simultaneously, avoiding data inconsistency and race conditions. It uses an intrinsic lock (monitor). You can synchronize an entire method or a specific block of code for better performance (reducing the lock scope).',
        code: `public class Counter {
    private int count = 0;

    // Method level synchronization
    public synchronized void increment() { count++; }

    // Block level synchronization (More efficient)
    public void add(int value) {
        synchronized(this) { this.count += value; }
    }
}`
      },
      {
        label: 'The volatile Keyword',
        content: 'In a multi-core system, threads might cache variables in CPU registers for performance. `volatile` ensures that every read/write happens directly in main memory, making changes immediately visible to all threads. It also prevents instruction reordering by the compiler.',
        code: `public class SharedFlag {
    // Volatile ensures all threads see the latest 'active' value
    private volatile boolean active = true;

    public void stop() { active = false; }
    public void run() {
        while (active) { /* perform work */ }
    }
}`
      },
      {
        label: 'Inter-thread Communication: wait() & notify()',
        content: 'These methods allow threads to communicate about the state of a resource. `wait()` tells the current thread to give up the lock and sleep until another thread calls `notify()`. Crucially, these must be called from within a synchronized context (owning the monitor lock), or an `IllegalMonitorStateException` is thrown.',
        code: `synchronized(lock) {
    while (resourceNotReady) {
        lock.wait(); // Release lock and wait
    }
    // Process resource
}

// In another thread:
synchronized(lock) {
    resourceNotReady = false;
    lock.notify(); // Wake up one waiting thread
}`
      },
      {
        label: 'Executor Framework & Thread Pools',
        content: 'Creating new threads is expensive. The Executor framework manages a pool of worker threads, reusing them for multiple tasks. It handles task queuing, scheduling, and lifecycle management, preventing the system from being overwhelmed by too many active threads.',
        code: `// Create a fixed pool of 5 threads
ExecutorService executor = Executors.newFixedThreadPool(5);

executor.submit(() -> {
    System.out.println("Processing async task...");
});

// Always shutdown to release resources
executor.shutdown();`
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why is String immutable in Java?",
    answer: "For security, caching (String Pool), thread safety, and to ensure hashcodes remain consistent in HashMaps."
  },
  {
    question: "Can we override a static method?",
    answer: "No, static methods are resolved at compile-time (Method Hiding), not runtime (Polymorphism)."
  },
  {
    question: "What is the difference between Checked and Unchecked Exceptions?",
    answer: "Checked exceptions must be handled using try-catch or throws. Unchecked exceptions are runtime errors that usually indicate programming bugs."
  },
  {
    question: "How does HashMap work internally?",
    answer: "It uses an array of buckets. Each bucket contains a linked list or balanced tree (Java 8+). It uses hashCode() to find the bucket and equals() to find the entry."
  },
  {
    question: "What is the G1 Garbage Collector?",
    answer: "Garbage First (G1) divides the heap into regions and prioritizes regions with the most reclaimable garbage, providing predictable pause times."
  }
];
