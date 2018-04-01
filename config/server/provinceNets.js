   var  nets = [
        {
          id : 001001,
          address : "四川省产贸送",
          netsAmount : 6,
          maxAmount : 150
        },
        {
           id : 001002,
          address : "重庆市产贸送",
          netsAmount : 0,
          maxAmount : 150
        },
        {
           id : 001003,
          address : "广东省产贸送",
          netsAmount : 5,
          maxAmount : 150
        },
        {
          id : 001004,
          address : "湖南省产贸送",
          netsAmount : 6,
          maxAmount : 150
        },
        {
           id : 001005,
          address : "山东产贸送",
          netsAmount : 0,
          maxAmount : 100
        }
        ];
        
 var childs = [{
        id : 001001001,
        address : "成都市",
        netsAmount : 2,
        location: "104.07123 30.641494",
        geos:["104.120673 30.60271","104.214384 30.633788"]
     },
     {
        id : 001001005,
        address : "南充市",
        netsAmount : 3,
        location : "106.110698 30.837793",
        geos:["106.308802 30.809379","106.426659 31.022037","106.599134 31.072529"]
     }];
     var childs2 = [
     {
        id : 001001001001,
        address : "高新区-XX网点",
        location: "104.120673 30.60271"
     },
     {
        id : 001001001002,
        address : "成华区-YY网点",
        location: "104.214384 30.633788"
     }];
module.exports = function(id,province){
  return {
          result:!id ? nets : province == "true" ?  childs : childs2
        }; 
}