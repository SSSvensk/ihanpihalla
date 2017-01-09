function calculatePoints() {
	    var trees = 0;
	    var socialObjects = 0;
	    var optimalTrees = 20;
	    var optimalSObjects = 15;
	    var totalpoints = 0;
	    var apoints = 0;
	    var value = 1815;

	    //-1^2 + 20 

		for (var i = 0; i < objects.length; i++) {
			var removeType = objects[i].userData.TYPE;
		    if (removeType === "Pine tree" || removeType === "Apple tree" || removeType === "Rowan" || removeType === "Lilac" || removeType === "Canadian maple" || removeType === "Willow" || removeType === "Green bench") {
		    	trees++;
			    apoints += (optimalTrees - trees + 1) * 100;
			    apoints += checkLocation((objects[i].position.x + objects[i].userData.REX),(objects[i].position.z + objects[i].userData.REZ));
		    } else if (removeType === "Table bench" || removeType === "Bench" || removeType === "Barbeque"  || removeType === "Sun shade") {
			    socialObjects++;
			    apoints += (optimalSObjects - socialObjects + 1) * 100;
		    }
		};
		totalpoints = totalpoints + apoints;

		if ((trees / socialObjects > 2.5) && (trees / socialObjects < 3.5)) {
			console.log("Your yard is balanced!");
			totalpoints += 1000;
			value *= 1.6;
		} else if ((trees / socialObjects > 1.5) && (trees / socialObjects <= 2.5)) {
			totalpoints += 300;
			value *= 1.2;
		} else if ((trees / socialObjects > 0.5) && (trees / socialObjects <= 1.5)) {
			totalpoints += 50;
			value *= 1.01;
		} else if ((trees / socialObjects >= 3.5) && (trees / socialObjects < 4.5)) {
			totalpoints += 200;
			value *= 1.15;
		} else if ((trees / socialObjects >= 4.5) && (trees / socialObjects < 6)) {
			totalpoints += 10;
			value *= 1.01;
		} else if (trees / socialObjects >= 6 && trees > 5) {
			totalpoints -= 500;
			value *= 0.7;
		}
		if (totalpoints < 0) {
			totalpoints = 0;
		}
		totalpoints += calculatePointsByDistance();
		if (oldPoints > totalpoints) {
			console.log("You did something wrong");
		} else {
			console.log("Great job!");
		}

		var minusPoints = totalpoints - oldPoints;
		var minusValue = value - oldValue;

		var newevent = {element: elementType, actionType: action, points: minusPoints, vvalue: minusValue};
		queue.push(newevent);
		console.log(queue[queue.length-1].element);
		console.log(queue[queue.length-1].actionType);
		console.log(queue[queue.length-1].points);
		console.log(queue[queue.length-1].vvalue);
		if (queue.length > 5) {
			queue.shift();
		};
		for (var i = queue.length - 1; i >= 0; i--) {
			document.getElementById('queuen' + i + 'action').innerHTML = queue[i].actionType;
			document.getElementById('queuen' + i + 'type').innerHTML = queue[i].element;
			document.getElementById('queuen' + i + 'points').innerHTML = queue[i].points.toFixed(0);
			document.getElementById('queuen' + i + 'value').innerHTML = queue[i].vvalue.toFixed(0);
		};

		if (oldValue > value) {
			console.log("Your yard is poorer");
		} else if (oldValue == value) {
			console.log("Not significant change");
		} else {
			console.log("Your yard is richer!");
		}
		oldValue = value;
		oldPoints = totalpoints;
		console.log(value);
		document.getElementById('points').innerHTML = "<center><a href = '#' onclick = 'openEvent()'>" + totalpoints.toFixed(0) + "</a></center>";
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