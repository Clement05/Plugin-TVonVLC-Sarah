// http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').execFile;
var child;


//var pathVCL = "C:/Program Files (x86)/VideoLAN/VLC/";

exports.action = function(data, callback, config, SARAH) {
var config = config.modules.TVonVLC;
var url0 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml";
var url00 = "http://" + config.Host + ":" + config.Port + "/requests/playlist.xml";
var url1 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=in_play&input=" + config.m3u;
var url2 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=fullscreen&val=false";
var url3 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=fullscreen&val=true";
var url4 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play";
var url5 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_pause";
var url6 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_stop";
var url7 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_next";
var url8 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_previous";
var url9 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=-50";
var url10 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=%2B50";
var url11 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=0";
var url12 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=512";
var url13 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=0";
var url14 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=";
var url15 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=volume&val=264";
var url16 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=10";
var url17 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=13";
var url18 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=15";
var url19 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=17";
var url20 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=19";
var url21 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=21";
var url22 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=26";
var url36 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=28";
var url23 = "http://" + conf	ig.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=30";
var url24 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=33";
var url25 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=34";
var url37 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=35";
var url26 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=37";
var url27 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=38";
var url28 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=40";
var url29 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=42";
var url30 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=43";
var url31 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=44";
var url32 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=45";
var url33 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=46";
var url34 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=50";
var url35 = "http://" + config.Host + ":" + config.Port + "/requests/status.xml?command=pl_play&id=52";











	if (!config.Chemin_VLC){
  	callback({'tts' : 'Chemin VLC manquant'});
  	return;
  }
  if (data.test ==0){
	  // executes `VLC`
		child = exec(config.CheminClient+'/LaunchVLC.bat', [config.Chemin_VLC, config.Port], function (error, stdout, stderr) {
		//child = exec('C:/Program Files (x86)/VideoLAN/VLC/vlc.exe --http-host 127.0.0.1:8001', function (error, stdout, stderr) {
		sys.print('stdout: ' + stdout);
		sys.print('stderr: ' + stderr);
			if (error !== null) {
			console.log('exec error: ' + error);
			}
		});
	}
	if (data.test ==1){
	  var url = url1;
	}
	if (data.test ==2){
	  var url = url2;
	}
	if (data.test ==3){
	  var url = url3;
	}
		if (data.test ==4){
	  var url = url4;
	}
		if (data.test ==5){
	  var url = url5;
	}
		if (data.test ==6){
	  var url = url6;
	}
	if (data.test ==7){
	  var url = url7;
	}
	if (data.test ==8){
	  var url = url8;
	}
	if (data.test ==9){
	  var url = url9;
	}
	if (data.test ==10){
	  var url = url10;
	}
	if (data.test ==11){
	  var url = url11;
	}
	if (data.test ==12){
	  var url = url12;
	}
	if (data.test ==13){
	console.log(url0);

	  var url = url13;
	}
	if (data.test ==14){
	  var url = url14 //+ config.Vol;
	}
	if (data.test ==15){
	  var url = url15;
	}
	if (data.test ==16){
	  var url = url16;
	}
	if (data.test ==17){
	  var url = url17;
	}
	if (data.test ==18){
	  var url = url18;
	}
	if (data.test ==19){
	  var url = url19;
	}
	if (data.test ==20){
	  var url = url20;
	}
	if (data.test ==21){
	  var url = url21;
	}
	if (data.test ==22){
	  var url = url22;
	}
	if (data.test ==23){
	  var url = url23;
	}
	if (data.test ==24){
	  var url = url24;
	}
	if (data.test ==25){
	  var url = url25;
	}
	if (data.test ==26){
	  var url = url26;
	}
	if (data.test ==27){
	  var url = url27;
	}
	if (data.test ==28){
	  var url = url28;
	}
	if (data.test ==29){
	  var url = url29;
	}
	if (data.test ==30){
	  var url = url30;
	}
	if (data.test ==32){
	  var url = url32;
	}
	if (data.test ==33){
	  var url = url33;
	}
	if (data.test ==34){
	  var url = url34;
	}
	if (data.test ==35){
	  var url = url35;
	}
	if (data.test ==31){
	  var url = url31;
	}
	if (data.test ==36){
	  var url = url36;
	}
	if (data.test ==37){
	  var url = url37;
	}
	if (data.test >=1){
	sendURL(url, callback, function(body){ 
	/*if (data.test ==1){
	sendURL(url00, callback, function(body){ 
	  var xml2js = require('xml2js');
        var parser = new xml2js.Parser({trim: true});
        parser.parseString(body, function (err, xml) {
          console.log('XML1', xml.node.node[0].leaf);
        });
		});
	}*/
	if (data.test ==13){
	  var xml2js = require('xml2js');
        var parser = new xml2js.Parser({trim: true});
        parser.parseString(body, function (err, xml) {
		  //config.Vol = xml.root.volume[0];
        });
		}
	callback({'tts' : 'avec plaisir'});
	});
	}
	else {
	callback({'tts' : 'Lancement de VLC'});
	}
} 

var sendURL = function(url, callback, cb){

  var request = require('request');
  request({ 'uri' : url }, function (err, response, body){
    
    if (err || response.statusCode != 200) {
	console.log(err);
      callback({'tts': "L'action a échoué"});
      return;
    }

    cb(body);
  });

}





