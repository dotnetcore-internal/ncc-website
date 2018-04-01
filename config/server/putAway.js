   var  putAway  = [{   
                     id    : 1,
                     name  : '魅族',
                     phone :15108236056,
                     rule  : ["黑色","32G","全网通"],
                     number: "P136S6DF315",
                     saleArea: "四川",
                     price : "234234.00",
                     state : "下架",
                     proImgs : [
                         'http://img10.360buyimg.com/N6/s60x60_jfs/t3544/204/1787527261/246160/825f2b3d/58350278N9394689e.jpg',
                         'http://img10.360buyimg.com/N6/s60x60_jfs/t2671/348/2855803176/202320/5e45034d/5774e115N4f018005.jpg',
                         'http://img10.360buyimg.com/cms/s80x80_jfs/t1360/271/887535107/104420/89bb1684/55b08e10Nd5c72c78.jpg',
                         'http://img10.360buyimg.com/cms/s80x80_g13/M02/04/0E/rBEhVFHbZw0IAAAAAALFxgN_LSsAAA3fgLESAwAAsXe559.jpg',
                         'http://img10.360buyimg.com/cms/s80x80_jfs/t2692/211/413130047/365843/ba11d3ce/57109ee9Nbf205a7f.jpg'
                         ]
                     },
                     {   
                     id    : 2,
                     name  : 'iphone',
                     phone :15108236056,
                     rule  : ["黑色","32G","全网通"],
                     number: "P136S6DF315",
                     saleArea: "四川,北京",
                     price : "2341.00",
                     state : "正常销售",
                     proImgs : [
                         'http://img10.360buyimg.com/N6/s60x60_jfs/t3544/204/1787527261/246160/825f2b3d/58350278N9394689e.jpg',
                         'http://img10.360buyimg.com/N6/s60x60_jfs/t2671/348/2855803176/202320/5e45034d/5774e115N4f018005.jpg',
                         'http://img10.360buyimg.com/cms/s80x80_jfs/t1360/271/887535107/104420/89bb1684/55b08e10Nd5c72c78.jpg'
                         ]
                     }
        ]

module.exports = function(){
  return {
          result:putAway,
          totalCount:2
        }; 
}