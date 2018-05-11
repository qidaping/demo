 // 二分查找 时间复杂度 O(logn)
 function binarySearch (target, arr) {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let mid = parseIndex(start + (end - start)/2)
    if (target === arr[mid]) {
      return mid
    }
    else if (target > arr[mid]) {
      start = mid + 1
    }
    else {
      end = mid - 1
    }
  }
  return -1
 }
 // 顺序查找  时间复杂度 O(n)
 function search(target, arr) {
  let index = -1
  for (let i = 0; i < arr.length;i++) {
    if (target === arr[i]) {
      index = i
    }
  }
  return index
 }
 // 冒泡排序 时间复杂度O(n^2)
 function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
 }
 // 快速排序  时间复杂度O(nlogn)
 function quickSort(arr) {
   /*
    * 创建len保存数组的长度，每次获取数组的长度都要实时查询不利于性能；
    * index作为保存取到的中间值；
    * pivot保存比较参照物；
    * left、right作为子数组的容器；
    */
    var len = arr.length,
        index,
        pivot,
        left=[],
        right=[];
    // 如果数组只有一位，就直接返回数组,递归的终止条件；
    if (len <= 1) return arr;

    //获取中间值的索引，使用Math.floor向下取整；
    index = Math.floor(len / 2);

    // 使用splice截取中间值，第一个参数为截取的索引，第二个参数为截取的长度；
    // 如果此处使用pivot=arr[index]; 那么将会出现无限递归的错误；
    // splice影响原数组，原数组长度减一；
    pivot = arr.splice(index, 1);
    len -= 1;

    // 小于arr[pivot]的存到left数组里，大于arr[pivot]的存到right数组；
    for (var i = 0; i < len; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 不断把分割的左右子数组传入quickSort，直到分割的只有一位直接返回子数组本身，递归终止；
    // 把每次分割的数组一层一层的用concat连接起来；
    // 每一层left里的元素都小于对应的pivot,right里的元素都大于对应的pivot；
    return quickSort(left).concat(pivot, quickSort(right));
}