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
		$f.logs(e);
	}
};

$f.ga = {
	startTracker: function(googleAnalyticsId){
		window.analytics.startTrackerWithId(googleAnalyticsId,function(e){ 
			$f.logs(e); 
		});	
	},
	trackView: function(page){
		window.analytics.trackView(page, function (e) {
			$f.logs(e)
		}, function (e) {
			$f.logs(e)
		});
	}
};

$f.hashChanges = function(){
	if($f.lastHash==window.location.hash){
		return false;
	}
	$f.lastHash = window.location.hash;
	if (window.location.hash != "") {
		window.scrollTo(0, 0);
		var hashNameAll = window.location.hash.substring(1);
		var opttions = hashNameAll.split('&');
		var hashName = opttions[0];
		$f.pageContentHandler(hashName, opttions);
	}else{
		$f.changePageHash($f.config.startPage);
	}
};

$f.pageContentHandler = function(page, options){
	$f.lastPage = $f.curentPage;
	$f.curentPage = page;
	//	TODO: Clear Ram , check cache data

	$('.page').hide();
	$f.headerHandler(page);
	$f.footerHandler(page);
	$('#'+page+'Page').show();

	//	TODO: Eval action
	//if(pages[page]['action'] && (!pageData[page] || parseFloat(pageData[page]['lastUpdate'])+60*10 < timestamp()) ){
	//	eval(pages[page]['action']+"(options)");
	//}

	$f.newThread(function(){
		if($f.config.googleAnalyticsId){
			$f.ga.trackView(page);
		}
	});


};