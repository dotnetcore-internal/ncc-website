var data = require('./province.js').data

// eachTrace( data )

console.log( '--------------' )
data = data.sort( (a, b)=> a.SPY >= b.SPY ? 1 : -1 )

// eachTrace( data )

console.log( group( data, [['A', 'G'], ['H', 'N'], ['O', 'Z']]) )

/**
 * 分组
 * @method group
 * @param  {[type]} data [description]
 * @param  {array} groups [排序条件]
 * @return {[type]}      [description]
 */
function group( data, groups ) {
  var _arr = new Array( groups.length),
      _char

  data.forEach(function(el, ix) {
    _char = el.SPY.charAt(0)

    groups.forEach(function(el2, ix2) {
      // 在字符中就进行拼接
      if( _char >= el2[0] && _char <= el2[1] ) {
        if( _arr[ix2] == null )
          _arr[ix2] = []
        _arr[ix2].push([el.Name, el.SPY])
      }
    })
  })

  return _arr
}
