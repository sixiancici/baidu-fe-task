/*
根据包名，在指定空间中创建对象 ：
输入：namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
输出：{a: {test: 1, b: {c: {d: {}}}}}

思路：
namespace函数的第一个参数是原始对象，第二个参数是需要创建的对象的包含关系。
通过输出结果可以看出，如果第二个参数中的对象在原始对象中存在并且是它的值为一个对象则不做改变，若不为对象，则重新赋值为空对象{}.
*/



function namespace(oNamespace, sPackage) {

    var properties = sPackage.split('.');
    var parent = oNamespace;
    for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        if (typeof parent[property] !== 'object') {
            parent[property] = {};
        }
        parent = parent[property];

    }
    return oNamespace;

}  