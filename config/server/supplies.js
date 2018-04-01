   var  suppliesBaseObj = {   //企业中心需求列表
                      num:1,
                      name:'电脑',
                      type:"临时需要",
                      people:"张三",
                      time: "2017-03-15 12:23:14",
                      state:"发布中"
                     },
        suppliesList = [];
        for(let i = 1 ; i<263 ; i ++){
         suppliesList.push(Object.assign({},suppliesBaseObj,{num:i}));
        }

module.exports = function(pageIndex,pageSize){
  return {
          result:suppliesList.slice((pageIndex-1) * pageSize , pageIndex*pageSize),
          totalCount:263
        }; 
}