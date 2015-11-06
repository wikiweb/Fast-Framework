var $f = {
	lastHash: '',
	lastPage: '',
	currentPage: '',
	pageData: {},
};
$f.config = {
	version: '1.0.0', //Your Application Version
	debugMode: true, //Test Flag
	googleAnalyticsId: '',	
	newThreadDelay: 5, //ms
};
$f.newThread = function(fn,params,callback){
	setTimeout(function(){
		fn(params,callback);
	},$f.config.newThreadDelay);
};

$f.changePageHash = function(name) {
    window.location.hash = name;
};

$f.logs = function(e){
	if($f.config.debugMode){
		console.log(e);
	}
};

$f.ga = {
	startTracker: function(googleAnalyticsId){
		window.analytics.startTrackerWithId(googleAnalyticsId,function(e){ 
			$f.logs(e); 
		});	
	}
};

$f.init = function(){
	if($f.debugMode){
		window.addEventListener('load', $f.onDeviceReady, false); //For Pc
	}else{
		document.addEventListener('deviceready', $f.onDeviceReady, false); //For Phone
	}    
}

$f.onDeviceReady = function(){
	$f.newThread(function(){
		if($f.config.googleAnalyticsId){
			$f.ga.startTracker($f.config.googleAnalyticsId);
		}
	});


}