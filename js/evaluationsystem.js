function calculatePoints() {
	    var trees = 0;
	    var socialObjects = 0;
	    var optimalTrees = 15;
	    var optimalSObjects = 15;
	    var totalpoints = 0;
	    var apoints = 0;
	    var value = 1815;
	    var chengedValue = 0;

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> febf234b4fca6f663c90607ae986476b53f10a25
        if (trees != oldTrees) {
		if (trees < 5 && (oldTrees < trees)) {
			console.log("Nice! This yard needs definitely more greeness");
			feedbackqueue.push("Nice! This yard needs definitely more greeness");
			autosavenotification++;
			changedValue = 1;
		} else if (trees < 5 && (oldTrees >= trees)) {
			console.log("This yard requires urgently more trees and flowers!");
			feedbackqueue.push("This yard requires urgently more trees and flowers!");
			autosavenotification++;
			changedValue = -1;
		} else if ((trees >= 5 && trees < 10) && (oldTrees < trees)) {
			console.log("Your yard starts to look green!");
			feedbackqueue.push("Your yard starts to look green!");
			changedValue = 1;
		} else if ((trees >= 5 && trees < 10) && (oldTrees >= trees)) {
			console.log("Remember that trees have more positive effects than negative");
			feedbackqueue.push("Remember that trees have more positive effects than negative");
			changedValue = -1;
		} else if ((trees >= 10 && trees < 15) && (oldTrees < trees)) {
			console.log("Perfect! Your yard is a paradise");
			feedbackqueue.log("Perfect! Your yard is a paradise");
			changedValue = 1;
		} else if ((trees >= 10 && trees < 15) && (oldTrees >= trees)) {
			console.log("Remember not to remove too much trees");
			feedbackqueue.push("Remember not to remove too much trees");
			changedValue = -1;
		} else if ((trees >= 15 && trees < 20) && (oldTrees < trees)) {
			console.log("Trees are nice, but no one wants their yard to look like a forest");
			feedbackqueue.push("Trees are nice, but no one wants their yard to look like a forest");
			changedValue = -1;
		} else if ((trees >= 15 && trees < 20) && (oldTrees >= trees)) {
			console.log("Your yard becomes more and more beautiful");
			feedbackqueue.push("Your yard becomes more and more beautiful");
			chengedValue = 1;
		}
		oldTrees = trees;
		autosavenotification++;
		if (autosavenotification % 4 == 0) {
			feedbackqueue.push("Autosaved!");
		};
	}

	if (trees == 0) {
			feedbackqueue.push("There's need for trees and other green stuff! Add them!");
		};

	if (socialObjects != oldSobjects) {
		if (socialObjects < 5 && (oldSobjects < socialObjects)) {
			console.log("Nice! Residents are in the need of more sociality");
			feedbackqueue.push("Nice! Residents are in the need of more sociality");
			changedValue = 3;
		} else if (socialObjects < 5 && (oldSobjects >= socialObjects)) {
			console.log("RESIDENTS OF THIS YARD ARE BECOMING ISOLATED!");
			feedbackqueue.push("RESIDENTS OF THIS YARD ARE BECOMING ISOLATED!");
			changedValue = -3;
		} else if ((socialObjects >= 5 && socialObjects < 10) && (oldSobjects < socialObjects)) {
			console.log("Improve sociality by adding more furniture!");
			feedbackqueue.push("Improve sociality by adding more furniture!");
			changedValue = 3;
		} else if ((socialObjects >= 5 && socialObjects < 10) && (oldSobjects >= socialObjects)) {
			console.log("Remember residents appreciate community spirit provided by common furniture!");
			feedbackqueue.push("Remember residents appreciate community spirit provided by common furniture!");
			changedValue = -3;
		} else if ((socialObjects >= 10 && socialObjects < 15) && (oldSobjects < socialObjects)) {
			console.log("Your yard is having strong common spirit");
			feedbackqueue.push("Your yard is having strong common spirit");
			changedValue = 3;
		} else if ((socialObjects >= 10 && socialObjects < 15) && (oldSobjects >= socialObjects)) {
			console.log("Residents like to spend more time together than alone");
			feedbackqueue.push("Residents like to spend more time together than alone");
			changedValue = -3;
		} else if ((socialObjects >= 15 && socialObjects < 20) && (oldSobjects < socialObjects)) {
			console.log("Furniture is nice, but don't make your yard too messy!");
			feedbackqueue.push("Furniture is nice, but don't make your yard too messy!");
			changedValue = -3;
		} else if ((socialObjects >= 15 && socialObjects < 20) && (oldSobjects >= socialObjects)) {
			console.log("Not too much, not too little. Keep the yard comfortable!");
			feedbackqueue.push("Not too much, not too little. Keep the yard comfortable!");
			changedValue = 3;
		}
		
		oldSobjects = socialObjects;
		autosavenotification++;
		if (autosavenotification % 4 == 0) {
			feedbackqueue.push("Autosaved!");
		};
	}

	    if (socialObjects == 0) {
			feedbackqueue.push("You aren't activating people! Add furniture to the yard to improve their social life");
		};

        //Counting the ratio from amount of trees divided by number of "social objects"
<<<<<<< HEAD
		if ((trees / socialObjects > 2.5) && (trees / socialObjects < 3.5)) {
			totalpoints += 1000;
			value *= 1.6;
			feedbackqueue.push("Your yard is comfortable place");
		} else if ((trees / socialObjects > 1.5) && (trees / socialObjects <= 2.5)) {
			totalpoints += 300;
			value *= 1.2;
			feedbackqueue.push("Have you considered adding some more green?")
		} else if ((trees / socialObjects > 0.5) && (trees / socialObjects <= 1.5)) {
			totalpoints += 50;
			value *= 1.01;
			feedbackqueue.push("Nice stuff around, but adding green stuff would ONLY has positive impacts");
		} else if ((trees / socialObjects >= 3.5) && (trees / socialObjects < 4.5)) {
			totalpoints += 200;
			value *= 1.15;
			feedbackqueue.push("There's enough green, what about residents? Give them some activities!")
		} else if ((trees / socialObjects >= 4.5) && (trees / socialObjects < 6)) {
			totalpoints += 10;
			value *= 1.01;
			feedbackqueue.push("In Finland we love forests, but no one wants to have a forest in their yard!");
		} else if (trees / socialObjects >= 6 && trees > 5) {
			totalpoints -= 500;
			value *= 0.7;
			feedbackqueue.push("In Finland we love forests, but no one wants to have a forest in their yard!");
=======
=======
>>>>>>> febf234b4fca6f663c90607ae986476b53f10a25
		if ((trees / socialObjects > 2.5) && (trees / socialObjects < 3.5)) {
			totalpoints += 1000;
			value *= 1.6;
			feedbackqueue.push("Your yard is comfortable place");
		} else if ((trees / socialObjects > 1.5) && (trees / socialObjects <= 2.5)) {
			totalpoints += 300;
			value *= 1.2;
			feedbackqueue.push("Have you considered adding some more green?")
		} else if ((trees / socialObjects > 0.5) && (trees / socialObjects <= 1.5)) {
			totalpoints += 50;
			value *= 1.01;
			feedbackqueue.push("Nice stuff around, but adding green stuff would ONLY has positive impacts");
		} else if ((trees / socialObjects >= 3.5) && (trees / socialObjects < 4.5)) {
			totalpoints += 200;
			value *= 1.15;
			feedbackqueue.push("There's enough green, what about residents? Give them some activities!")
		} else if ((trees / socialObjects >= 4.5) && (trees / socialObjects < 6)) {
			totalpoints += 10;
			value *= 1.01;
			feedbackqueue.push("In Finland we love forests, but no one wants to have a forest in their yard!");
		} else if (trees / socialObjects >= 6 && trees > 5) {
			totalpoints -= 500;
			value *= 0.7;
<<<<<<< HEAD
>>>>>>> 5a9db78c7a529498dc109cc7fec369180c99e9f0
=======
			feedbackqueue.push("In Finland we love forests, but no one wants to have a forest in their yard!");
>>>>>>> febf234b4fca6f663c90607ae986476b53f10a25
		}
		if (totalpoints < 0) {
			totalpoints = 0;
		}
		if (feedbackqueue.length > 4) {
		    do {
			    feedbackqueue.shift();
		    }
		while (feedbackqueue.length > 4);
	}

	for (var i = 0; i < feedbackqueue.length; i++) {
		document.getElementById('event' + i).innerHTML = feedbackqueue[i];
	};
		totalpoints += calculatePointsByDistance();
		if (oldPoints > totalpoints) {
			console.log("You did something wrong");
		} else {
			console.log("Great job!");
		}

		var minusPoints = totalpoints - oldPoints;
		var minusValue = value - oldValue;

<<<<<<< HEAD
<<<<<<< HEAD
		var newevent = {element: elementType, actionType: action, points: minusPoints, vvalue: changedValue};
=======
		var newevent = {element: elementType, actionType: action, points: minusPoints, vvalue: minusValue};
>>>>>>> 5a9db78c7a529498dc109cc7fec369180c99e9f0
=======
		var newevent = {element: elementType, actionType: action, points: minusPoints, vvalue: changedValue};
>>>>>>> febf234b4fca6f663c90607ae986476b53f10a25
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
<<<<<<< HEAD
<<<<<<< HEAD
			document.getElementById('queuen' + i + 'value').innerHTML = queue[i].vvalue.toFixed(0) + "%";
=======
			document.getElementById('queuen' + i + 'value').innerHTML = queue[i].vvalue.toFixed(0);
>>>>>>> 5a9db78c7a529498dc109cc7fec369180c99e9f0
=======
			document.getElementById('queuen' + i + 'value').innerHTML = queue[i].vvalue.toFixed(0) + "%";
>>>>>>> febf234b4fca6f663c90607ae986476b53f10a25
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