   var child = {
                proName:"埃微（iwown） I5plus触控式智能运动手环 蓝牙4.0 来电显示 遥控自拍 健康管理 激情红",
                proType:"580ml",
                proNum :"BM00089"
              };
              function gener(total){
                 var arr = [];
                 for(var i =0; i<total; i ++){
                  arr.push(Object.assign({},child,{proid:Math.round(Math.random() * 100)}))
                 } 
                 return arr;
              }
   var  suppliesBaseObj = {   //企业中心需求列表
                      id:1,
                      seller:'APPLE（中国）旗舰店',
                      orderTime:'2017-02-19 11:16:05',
                      orderNumber:'12345698',
                      list:[],
                      source: "在线购买",
                      url:"/details/"
                     },
        suppliesList = [];
        for(let i = 1 ; i<163 ; i ++){
         suppliesList.push(Object.assign({},{id: i},child));
        }

module.exports = function(pageIndex,pageSize){
  return {
          result:suppliesList.slice((pageIndex-1) * pageSize , pageIndex*pageSize),
          totalCount:163
        }; 
}