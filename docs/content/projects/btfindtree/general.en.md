This project is an efficient data structure for searching in Leo projects, using binary search + bucket optimization to improve search performance.

## Usage scenarios

The algorithm provided for dynamically constructing a high-performance search "dictionary" can be combined with Natasha to create a lock-free and highly concurrent key-value pair search function. It performs better than concurrent dictionaries and is useful in scenarios with high-frequency access.

## Specific algorithms

- Hash binary search tree

  This algorithm uses the Key in the dictionary as the basis for searching and optimizes it into a binary search tree through the Roslyn Release mode, providing a high-performance search method.

- Fuzzy pointer search tree

  This algorithm is designed for scenarios where the Key type is a string. After the user enters a string, the algorithm automatically finds characteristic points and skips unnecessary characters. Because it only matches characteristics, it has extremely high performance. However, strings that meet the characteristics can execute the value. The usage scenario of this algorithm is typically after careful consideration by the author.

- Merging minimum weight search tree

  This algorithm is also known as the exact pointer search tree. It divides and processes each string and the matching times, and then merges the results to calculate the minimum weight. Compared to the fuzzy pointer search tree, this algorithm is accurate. It makes use of characteristics but does not perform jump processing. All matching strings must be matched to obtain the result.
