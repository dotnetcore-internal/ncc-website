   var child = {
                proName:"埃微（iwown） I5plus触控式智能运动手环 蓝牙4.0 来电显示 遥控自拍 健康管理 激情红",
                proImgUrl:"http://img10.360buyimg.com/N6/s60x60_jfs/t2671/348/2855803176/202320/5e45034d/5774e115N4f018005.jpg",
                proType:"银色/15.8寸/500G",
                amount:"100",
                price: "500"
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
         suppliesList.push(Object.assign({},suppliesBaseObj,{id: (1 + i),list:gener( Math.round(Math.random() * 5) ),status: [1,2,3][Math.round(Math.random() * 2)]}));
        }

module.exports = function(pageIndex,pageSize){
  return {
          result:suppliesList.slice((pageIndex-1) * pageSize , pageIndex*pageSize),
          totalCount:163
        }; 
}