/*
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
*/


function remove(arr, item) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        var p = arr[i];
        if (p !== item) {
            newArr.unshift(p);
        }
    }
    return newArr;

}
