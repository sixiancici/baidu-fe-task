/*
计算给定数组 arr 中所有元素的总和
*/

function sum(arr) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num;

}