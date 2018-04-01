   var  suppliesBaseObj = {   //企业中心需求列表
                      num:1,
                      nickname:'张三',
                      userImageUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=810472154,2557146388&fm=117&gp=0.jpg",
                      score:"1",
                      creationTime: "2017-03-15 12:23:14",
                      content:"产品很好，棒棒哒！是我喜欢的系列",
                      productColor : "蓝色",
                      productSize  : "128G",
                      images:[
                      {
                        imgUrl:"//img30.360buyimg.com/n0/s48x48_jfs/t4798/44/461459283/61034/8ff8b150/58e227d6N770d69e5.jpg"
                      },
                      {
                        imgUrl:"//img30.360buyimg.com/n0/s48x48_jfs/t4438/140/1595771212/110806/89920c7d/58e227d8N7f88c4c2.jpg"
                      },
                      {
                        imgUrl:"//img30.360buyimg.com/n0/s48x48_jfs/t4534/152/1594146116/55839/2355dd80/58e227daN1d36a9d6.jpg"
                      },
                      {
                        imgUrl:"//img30.360buyimg.com/n0/s48x48_jfs/t3112/20/9278835059/193131/caf135cf/58d104e0N0d7d6462.jpg"
                      }
                      ]
                     },
        suppliesList = [];
        for(let i = 1 ; i< 93 ; i ++){
         suppliesList.push(Object.assign({},suppliesBaseObj,{num:i,score:Math.round(Math.random() * 10) } ) ) ;
        }

module.exports = function(pageIndex,pageSize){
  return {
          result:suppliesList.slice((pageIndex-1) * pageSize , pageIndex*pageSize),
          totalCount:93
        }; 
}