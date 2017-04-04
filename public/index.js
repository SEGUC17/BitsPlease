<!DOCTYPE html>
<html ng-app="seProject">
	<head>
		<title>Nutrition and Fitness</title>
		<link rel="stylesheet" type="text/css" href="css/materialize.css" media="screen,projection"/>
	</head>
	<body>
	
<!-- 	<h1 class="red-text">yasmine black widow!!</h1>  -->	
		<div ng-view></div>
 		<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
		<script type="text/javascript" src="js/angular.min.js"></script>
		<script type="text/javascript" src="js/materialize.js"></script>
		<script type="text/javascript" src="js/angular-route.min.js"></script>

		<script type="text/javascript" src="core.js"></script>

        <!-- Angular Controllers -->		

		<script type="text/javascript" src="controllers/homeCtrl.js"></script>
		<script type="text/javascript" src="controllers/signUpCtrl.js"></script>
		<script type="text/javascript" src="controllers/profileCtrl.js"></script>
		

		<!-- Angular Services -->		
		<script type="text/javascript" src="services/authenticationSrv.js"></script>
		<script type="text/javascript" src="services/mainSrv.js"></script>


	</body>
</html>