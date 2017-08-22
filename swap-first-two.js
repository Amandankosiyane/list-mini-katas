
module.exports = function(list){
var swapList = list[0];
list[0] =list[1];
list[1]=swapList;
    return list;
}
