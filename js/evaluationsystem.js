function calculatePoints() {
	    var trees = 0;
	    var socialObjects = 0;
	    var optimalTrees = 15;
	    var optimalSObjects = 15;
	    var totalpoints = 0;
	    var apoints = 0;
	    var chengedValue = 0;
	    var value = 1;

		for (var i = 0; i < objects.length; i++) {
			var removeType = objects[i].userData.TYPE;
		    if (removeType === "Pine tree" || removeType === "Apple tree" || removeType === "Rowan" || removeType === "Lilac" || removeType === "Canadian maple" || removeType === "Willow" || removeType === "Green bench") {
		    	trees++;
			    apoints += (optimalTrees - trees + 1) * 100;
			    value = 1 + ((-0.0003 * trees * trees) + (0.009 * trees));
			    //apoints += checkLocation((objects[i].position.x + objects[i].userData.REX),(objects[i].position.z + objects[i].userData.REZ));
		    } else if (removeType === "Table bench" || removeType === "Bench" || removeType === "Barbeque" || removeType === "Sun shade" || removeType === "Playground" || removeType === "Gym1" || removeType === "Gym2" || removeType === "Basket" || removeType === "Ping pong") {
			    socialObjects++;
			    apoints += (optimalSObjects - socialObjects + 1) * 100;
			    value = 1 + ((-0.0003 * socialObjects * socialObjects) + (0.009 * socialObjects));
		    }
		};
		
		console.log(value);
		totalpoints = totalpoints + apoints;

        if (trees != oldTrees) {
		if (trees < 5 && (oldTrees < trees)) {
			feedbackqueue.push("Nice! This yard needs definitely more greeness. You can still add more trees and flowers");
			autosavenotification++;
		} else if (trees < 5 && (oldTrees >= trees)) {
			feedbackqueue.push("This yard requires urgently more trees and flowers! Add them!");
			autosavenotification++;
		} else if ((trees >= 5 && trees < 10) && (oldTrees < trees)) {
			feedbackqueue.push("Your yard starts to look green! You can add more");
			autosavenotification++;
		} else if ((trees >= 5 && trees < 10) && (oldTrees >= trees)) {
			feedbackqueue.push("Remember that green stuff has more positive effects than negative");
			autosavenotification++;
		} else if ((trees >= 10 && trees < 15) && (oldTrees < trees)) {
			autosavenotification++;
			feedbackqueue.push("Perfect! Your yard has enough green!");
		} else if ((trees >= 10 && trees < 15) && (oldTrees >= trees)) {
			autosavenotification++;
			feedbackqueue.push("Remember not to remove too much trees. Yard and residents need green stuff.");
		} else if ((trees >= 15 && trees < 20) && (oldTrees < trees)) {
			autosavenotification++;
			feedbackqueue.push("Welcome to the Jungle, eh? Try to remove thees, that yard gets sunshine.");
		} else if ((trees >= 15 && trees < 20) && (oldTrees >= trees)) {
			autosavenotification++;
			feedbackqueue.push("Try to remove more!");
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
			feedbackqueue.push("Nice action! Keep adding more, residents are in the need of more sociality");
			changedValue = 3;
		} else if (socialObjects < 5 && (oldSobjects >= socialObjects)) {
			feedbackqueue.push("RESIDENTS OF THIS YARD ARE BECOMING ISOLATED! Add furniture and sports activities");
			changedValue = -3;
		} else if ((socialObjects >= 5 && socialObjects < 10) && (oldSobjects < socialObjects)) {
			feedbackqueue.push("Improve sociality by adding more furniture and sports activities");
			changedValue = 3;
		} else if ((socialObjects >= 5 && socialObjects < 10) && (oldSobjects >= socialObjects)) {
			feedbackqueue.push("Remember residents appreciate community spirit provided by common furniture and sports activities!");
			changedValue = -3;
		} else if ((socialObjects >= 10 && socialObjects < 15) && (oldSobjects < socialObjects)) {
			feedbackqueue.push("People are having a good time! Keep up good work!");
			changedValue = 3;
		} else if ((socialObjects >= 10 && socialObjects < 15) && (oldSobjects >= socialObjects)) {
			feedbackqueue.push("Keeping yard minimalistic, but same time giving enough opportunities is vital.");
			changedValue = -3;
		} else if ((socialObjects >= 15 && socialObjects < 20) && (oldSobjects < socialObjects)) {
			feedbackqueue.push("Don't place too many furnitures, otherwise residents become stressed");
			changedValue = -3;
		} else if ((socialObjects >= 15 && socialObjects < 20) && (oldSobjects >= socialObjects)) {
			feedbackqueue.push("Good move! There were too many elements in the yard. You can still remove and balance situation.");
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
		if ((trees / socialObjects > 2.5) && (trees / socialObjects < 3.5)) {
			totalpoints += 1000;
			value *= 1.06;
			feedbackqueue.push("Your yard is getting comfortable. Improve your points by keeping green and other stuff balanced!");
		} else if ((trees / socialObjects > 1.5) && (trees / socialObjects <= 2.5)) {
			totalpoints += 300;
			value *= 1.02;
			feedbackqueue.push("Have you considered adding some more green?")
		} else if ((trees / socialObjects > 0.5) && (trees / socialObjects <= 1.5)) {
			totalpoints += 50;
			value *= 1.01;
			feedbackqueue.push("Nice stuff around, but adding green stuff would ONLY has positive impacts");
		} else if ((trees / socialObjects >= 3.5) && (trees / socialObjects < 4.5)) {
			totalpoints += 200;
			value *= 1.015;
			feedbackqueue.push("There's enough green, what about residents? Give them some activities!")
		} else if ((trees / socialObjects >= 4.5) && (trees / socialObjects < 6)) {
			totalpoints += 10;
			value *= 1.01;
			feedbackqueue.push("No one wants to have a forest in their yard! Fix the situation either removing trees or adding furniture and sports stuff");
		} else if (trees > 5 && socialObjects == 0) {
			totalpoints -= 500;
			value *= 0.93;
			feedbackqueue.push("Stop adding green! Add some furniture and other stuff instead!");
		} else if (socialObjects > 5 && trees == 0) {
			totalpoints -= 500;
			value *= 0.93;
			feedbackqueue.push("Stop adding random stuff! This yards needs now more green!");
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

		//totalpoints += calculatePointsByDistance();

		changedValue = 100 * (value - oldValue);

		var minusPoints = totalpoints - oldPoints;
		var minusValue = value - oldValue;

		var newevent = {element: elementType, actionType: action, points: minusPoints, vvalue: changedValue};
		queue.push(newevent);
		if (queue.length > 5) {
			queue.shift();
		};
		for (var i = queue.length - 1; i >= 0; i--) {
			document.getElementById('queuen' + i + 'action').innerHTML = queue[i].actionType;
			document.getElementById('queuen' + i + 'type').innerHTML = queue[i].element;
			document.getElementById('queuen' + i + 'points').innerHTML = queue[i].points.toFixed(0);
			document.getElementById('queuen' + i + 'value').innerHTML = queue[i].vvalue.toFixed(2) + "%";
		};

		document.getElementById('orgvalue').innerHTML = "Impact on value (" + 100* ((value - 1).toFixed(2)) + "%)";
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