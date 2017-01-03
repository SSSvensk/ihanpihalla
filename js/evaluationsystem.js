function calculatePoints() {
		var appletrees = 0;
	    var trees = 0;
	    var benches = 0;
	    var tables = 0;
	    var optimalApples = 10;
	    var optimalTrees = 10;
	    var optimalBenches = 10;
	    var optimalTables = 10;
	    var totalpoints = 0;
	    var apoints = 0;

		for (var i = 0; i < objects.length; i++) {
			var removeType = objects[i].userData.TYPE;
		    if (removeType === "Tree") {
		    	trees++;
			    apoints += (optimalTrees - trees + 1) * 100;
			    apoints += checkLocation((objects[i].position.x + objects[i].userData.REX),(objects[i].position.z + objects[i].userData.REZ));
		    } else if (removeType === "Apple tree") {
			    appletrees++;
			    apoints += (optimalApples - appletrees + 1) * 100;
			    apoints += checkLocation((objects[i].position.x + objects[i].userData.REX),(objects[i].position.z + objects[i].userData.REZ));
		    } else if (removeType === "Table bench") {
			    tables++;
			    apoints += (optimalTables - tables + 1) * 100;
		    } else if (removeType === "Bench") {
			    benches++;
			    apoints += (optimalBenches - benches + 1) * 100;
		    }
		};
		totalpoints = totalpoints + apoints;
		if (totalpoints < 0) {
			totalpoints = 0;
		}
		totalpoints += calculatePointsByDistance();
		document.getElementById('points').innerHTML = "<center>" + totalpoints.toFixed(0) + "</center>";
	}

	//Checks the distance between tree and building

	function checkLocation(xc, zc) {
		if ((xc <= 3.4 && xc >= -8) && (zc <= 14.7 && zc >= 3.3)) {
			return 500;
		} else {
			return 0;
		}
	}

	function calculatePointsByDistance() {
		var totaldistancepoints = 0;
		
		for (var i = 0; i < objects.length; i++) {
			for (var j = i + 1; j < objects.length; j++) {
				var dist = getDistance(objects[i].userData.OBID, objects[j].userData.OBID);
				var distancepoints = 0;
			    if (dist <= objects[i].userData.RADIUS) {
				    if (objects[i].userData.TYPE === "Tree" && objects[j].userData.TYPE === "Tree") {
				    	distancepoints = (10 - dist);
				    } else if ((objects[i].userData.TYPE === "Tree" && objects[j].userData.TYPE === "Apple tree") || (objects[i].userData.TYPE === "Apple tree" && objects[j].userData.TYPE === "Tree")) {
				    	distancepoints = (10 - dist);
				    } else if ((objects[i].userData.TYPE === "Tree" && objects[j].userData.TYPE === "Bench") || (objects[i].userData.TYPE === "Bench" && objects[j].userData.TYPE === "Tree")) {
				    	distancepoints = (10 - dist);
				    } else if ((objects[i].userData.TYPE === "Tree" && objects[j].userData.TYPE === "Table bench") || (objects[i].userData.TYPE === "Table bench" && objects[j].userData.TYPE === "Tree")) {
				    	distancepoints = (10 - dist);
				    } else if (objects[i].userData.TYPE === "Apple tree" && objects[j].userData.TYPE === "Apple tree") {
				    	distancepoints = (10 - dist);
				    } else if ((objects[i].userData.TYPE === "Apple tree" && objects[j].userData.TYPE === "Bench") || (objects[i].userData.TYPE === "Bench" && objects[j].userData.TYPE === "Apple tree")) {
				    	distancepoints = (10 - dist);
				    } else if ((objects[i].userData.TYPE === "Apple tree" && objects[j].userData.TYPE === "Table bench") || (objects[i].userData.TYPE === "Table bench" && objects[j].userData.TYPE === "Apple tree")) {
				    	distancepoints = (10 - dist);
				    } else if (objects[i].userData.TYPE === "Bench" && objects[j].userData.TYPE === "Bench") {
				    	distancepoints = (5 - dist);
				    } else if ((objects[i].userData.TYPE === "Bench" && objects[j].userData.TYPE === "Table bench") || (objects[i].userData.TYPE === "Table bench" && objects[j].userData.TYPE === "Bench")) {
				    	distancepoints = (5 - dist);
				    } else if (objects[i].userData.TYPE === "Table bench" && objects[j].userData.TYPE === "Table bench") {
				    	distancepoints = (5 - dist);
				    }
			    }
				if (distancepoints < 0) {
					distancepoints = 0;
				};
				totaldistancepoints += distancepoints;
			};
		};
		return totaldistancepoints;
	}

	function checkOthers() {
		for (var i = 0; i < objects.length; i++) {
			var distances = [];
			var copject = new THREE.Object3D();
			copject = objects[i];
			for (var j = 0; j < objects.length; j++) {
				if (i != j) {
					var edge = { edgeLength: getDistance(objects[i].userData.OBID, objects[j].userData.OBID), edgeType: objects[j].userData.TYPE };
					distances.push(edge);
				};
			};
			copject.userData.adjacentObjects = distances;
		};
	}
	function getDistance(objoi, objti) {
		var dobjo = new THREE.Object3D();
		for (var i = 0; i < objects.length; i++) {
			if (objects[i].userData.OBID == objoi) {
				dobjo = objects[i];
			}
		};
		var dobjt = new THREE.Object3D();
		for (var i = 0; i < objects.length; i++) {
			if (objects[i].userData.OBID == objti) {
				dobjt = objects[i];
			}
		};

		var xo = dobjo.position.x + dobjo.userData.REX;
		var xt = dobjt.position.x + dobjt.userData.REX;
		var xy = xo - xt;
		if (xy < 0) {
			xy = xy * (-1);
		};
		var zo = dobjo.position.z + dobjo.userData.REZ;
		var zt = dobjt.position.z + dobjt.userData.REZ;
		var zy = zo - zt;
		if (zy < 0) {
			zy = zy * (-1);
		};

		//Returning distance with two decimals
		return Math.sqrt(Math.pow(xy, 2) + Math.pow(zy, 2));
	}