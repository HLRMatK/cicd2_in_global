/* 
 * Application : CICD2 in Global
 * ClassName   : sys_script_include
 * Created On  : 2019-06-03 14:26:41
 * Created By  : admin
 * Updated On  : 2019-06-05 08:30:01
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=4e077e79db3173001ac4a565ca961921
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof global.module:sys_script_include
 */
var newFile = Class.create();
newFile.prototype = /** @lends global.module:sys_script_include.newFile.prototype */ {
    /**
     * Description
     * 
     * @returns {undefined}
     */
    initialize: function() {
    },
	
	/**
	 * Description
	 * 
	 * @returns {boolean}
	 */
	testMe: function() {
		/* this is a new comment */
		var a = 13;
		return a>0;
	},

    type: 'newFile'
};
