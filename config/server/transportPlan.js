   var  suppliesBaseObj = {   //企业中心需求列表
                      compId:1,
                      startAddress:'成都市',
                      startAddressIds:'四川',
                      endAddress:"乌鲁木齐",
                      endAddressIds:"新疆",
                      type:"临时需要",
                      trafficVolume:"10",
                      beginTime: "2017-03-15 12:23:14",
                      effectiveTime: "2017-05-15 12:23:14",
                      status:"发布中"
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