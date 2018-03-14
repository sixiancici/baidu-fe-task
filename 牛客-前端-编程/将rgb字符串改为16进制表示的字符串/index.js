/*
将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
1. rgb 中每个 , 后面的空格数量不固定
2. 十六进制表达式使用六位小写字母
3. 如果输入不符合 rgb 格式，返回原始输入
*/



function rgb2hex(sRGB) {
    if (!/^rgb\((\d{1,3},\s*){2}\d{1,3}\)/.test(sRGB)) return sRGB;
    var arr = sRGB.match(/\d{1,3}/g);
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = parseInt(arr[i]).toString(16);
        newArr[i].length < 2 && (newArr[i] = '0' + newArr[i]);
    }
    return "#" + newArr.join("");

}