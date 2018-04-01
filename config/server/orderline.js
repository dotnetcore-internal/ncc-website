   var  suppliesBaseObj = {   //企业中心需求列表
                      seller:'APPLE（中国）旗舰店',
                      orderTime:'2017-02-19 11:11:05',
                      orderNumber:'12345698',
                      fromCity:"成都",
                      fromProvince:"四川",
                      toCity:"湖南",
                      toProvince:"长沙",
                      cargo:[
                       {
                        url:"http://img10.360buyimg.com/N6/s60x60_jfs/t2671/348/2855803176/202320/5e45034d/5774e115N4f018005.jpg",
                        amount:"10",
                        volume: "50",
                        weight: Math.round(Math.random()* 50)
                       },
                       {
                        url:"http:////img10.360buyimg.com/N6/s60x60_jfs/t2878/123/397137378/391432/923a26fe/57109effN1049fa52.jpg",
                        amount:"10",
                        volume: "30",
                        weight: Math.round(Math.random()* 30)
                       },
                       {
                        url:"//img10.360buyimg.com/N6/s60x60_jfs/t3544/204/1787527261/246160/825f2b3d/58350278N9394689e.jpg",
                        amount:"10",
                        volume: "100",
                        weight: Math.round(Math.random()* 150)
                       },
                      ],
                      offerPrice:(Math.random() * 900).toFixed(2),
                      driver:"张三",
                      phone :"1510598461",
                      state: 1
                     },
        suppliesList = [];
        for(let i = 1 ; i<163 ; i ++){
         suppliesList.push(Object.assign({},suppliesBaseObj, i == 3 ? {
          cargo: [{
                        url:"//img10.360buyimg.com/N6/s60x60_jfs/t3544/204/1787527261/246160/825f2b3d/58350278N9394689e.jpg",
                        amount:"10",
                        volume: "100",
                        weight: Math.round(Math.random()* 90)
                       }]
          } : {} ) );
        }

module.exports = function(pageIndex,pageSize){
  return {
          result:suppliesList.slice((pageIndex-1) * pageSize , pageIndex*pageSize),
          totalCount:163
        }; 
}