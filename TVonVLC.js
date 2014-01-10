// http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').execFile;
var child;

exports.action = function(data, callback, config, SARAH) {
  var config = config.modules.TVonVLC;
  var tts = 'merci' + data.test + ' ' + config.Port;
  sys.print(config.CheminClient);
  callback({'tts': tts});
  // executes `VLC`
	child = exec(config.CheminClient+'/LaunchVLC.bat', [config.Port], function (error, stdout, stderr) {
	sys.print('stdout: ' + stdout);
	sys.print('stderr: ' + stderr);
		if (error !== null) {
		console.log('exec error: ' + error);
		}
	});
} 