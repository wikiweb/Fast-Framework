var $f = {
	lastHash: '',
	lastPage: '',
	currentPage: '',
	pageData: {},
};
//import('variables.js');
//import('libs.js');
//import('events.js');
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

	//Start App
	$f.newThread(function(){
		$f.changePageHash($f.config.startPage);
	});

}