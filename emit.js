/**
 *
 * @ 全局事件注册
 * @ use
 * _.observer.regist('everything', function(res){
 *          console.log(res.data);// {key:value}
        })
 * _.observer.fire('everything', {key:value})
 */

var _ = {};

_.observer = (function(){

    var hanlder = {};

    return {

        /**
         * 注册事件
         * @param  {[type]}   type [description]
         * @param  {Function} fn   [description]
         * @return {[type]}        [description]
         */
        regist: function(type, fn) {
            if (typeof hanlder[type] === 'undefined') {
                hanlder[type] = [fn];
            } else {
                hanlder[type].push(fn);
            }
        },

        /**
         * 执行事件
         * @param  {[type]} type [description]
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        fire: function(type, data) {
            if (!hanlder[type]) {
                return;
            }
            var events = {
                type: type,
                data: data || {}
            };
            for (var i = 0, len = hanlder[type].length; i < len; i++) {
                hanlder[type][i](events);
            }
        },

        /**
         * 移除事件
         * @param  {[type]}   type [description]
         * @param  {Function} fn   [description]
         * @return {[type]}        [description]
         */
        remove: function(type, fn) {
            if (!hanlder[type]) {
                return;
            }
            hanlder[type] = hanlder[type].filter(function(item){
                return item !== fn;
            })
        }
    }
})();




module.exports = _;
