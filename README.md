# hackerRank-compare_triplets
-HackerRank platformuna göre çözmeye çalıştığım bazi sorular

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
Return

int[2]: Alice's score is in the first position, and Bob's score is in the second.
Input Format

The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

Constraints

1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100

# Sample Input 0

```sh

5 6 7
3 6 10
```

# Sample Output 0

```sh

1 1
```

# diagonal_difference

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

# Sample Input


```sh
3
11 2 4
4 5 6
10 8 -12
```
# Sample Output

```sh
15
```
# Explanation

```sh
11
   5
     -12
```
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

```sh
    4
   5
10

```

Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15
