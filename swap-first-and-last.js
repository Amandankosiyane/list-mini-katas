module.exports = function(list){
        var swapList = list[0];
        list[0] =list[list.length-1];
        list[list.length-1]=swapList;

            return list;

}
