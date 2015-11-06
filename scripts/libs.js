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
