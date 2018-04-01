   var  contact = {  
                     name : '张三',
                     phone :15108236056,
                     fax   :'028-6354827',
                     email : '1231091@qq.com'
                     },
         contactsList = [];
        for(let i = 1 ; i < 8 ; i ++){
         contactsList.push(Object.assign({},contact,{id: i,name : contact.name + i}));
        }

module.exports = function(){
  return contactsList; 
}