/**
 * 统计一个数字在排序数组中出现的次数。 例如输入排序数组 { 1,  2, 3, 3,  3,  3, 4,  5 }
 和数字3， 由于3在这个数组中出现了4次， 因此输出4。
 */

function getCountOfList(list, item) {
    let idx = list.indexOf(item)
    if (idx<0){
        return 0
    }
    let count = 0
    while (list[idx] === item) {
        count++;
        idx++
    }
    return count
}
console.log(getCountOfList([1, 2, 3, 3, 3, 3, 4, 5],3))