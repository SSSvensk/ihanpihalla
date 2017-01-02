//When moving mouse, this function is called
	function onDocumentMouseMove( event ) {

        dragged = true;
		event.preventDefault();
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

		//Raycaster let us know which object is selected
		raycaster.setFromCamera( mouse, camera );

		//If object is selected and object is inside yard, let's run the following code
		if ( SELECTED ) { //&& (SELECTED.position.x < 14.5 && SELECTED.position.x > -14.5 && SELECTED.position.z < 14.5 && SELECTED.position.z > -14.5 )) {

			//Getting 0-1-value from function that inspects if objects are on top of each other
            //var ot = checkObjectsNotTopOfEachOther();
			if ( raycaster.ray.intersectPlane( plane, intersection ) ) {

				//Not sure excatly what here happens, but apparently position of object is changing here
				SELECTED.position.copy( intersection.sub( offset ) );
				//SELECTED.updateMatrixWorld();

				//Rendering changes to scene
				render();

		        } else {
				//Cancelling drag and drop if objects is draggend on top of other object
		    	    cancelDragAndDrop();
		    }

		return;
		}

		//If the new object is just added to scene, following code is run
		else if (ADDED) {
			//var ot = checkObjectsNotTopOfEachOther();
			if ( raycaster.ray.intersectPlane( plane, intersection )) {

				ADDED.position.copy( intersection.sub( offset ) );
				render();
               
				//Rendering while mouse is dragging object and position is inside boundaries
				//if ((ADDED.position.x < 14.5 && ADDED.position.x > -14.5) && (ADDED.position.z < 14.5 && ADDED.position.z > -14.5)) {
					render();
				//}
		    } 
		    return;
		}

		//Else if object is selected but outside yard limits
		//Then it's returned back to its previous location before drag&drop and no more selected and alerted to user
		/*
		else if ( SELECTED && (SELECTED.position.x > 14.5 || SELECTED.position.x < -14.5 || SELECTED.position.z > 14.5 || SELECTED.position.z < -14.5 )) {
			cancelDragAndDrop();
			alert("Object over bounds!");
		}
		*/

		//Storing every object, that are penetrated by ray, to intersects-array
		var intersects = raycaster.intersectObjects( objects, true);

		if ( intersects.length > 0 ) {
			if ( INTERSECTED != intersects[ 0 ].object ) {

				if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

				INTERSECTED = intersects[ 0 ].object;

				//Preserves the color/texture
				INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				//plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection( plane.normal ),INTERSECTED.position );
			}

			container.style.cursor = 'pointer';

		} else {

			if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

			INTERSECTED = null;
			container.style.cursor = 'auto';
		}
		render();
	}

	//When mouse down, this function is called
	function onDocumentMouseDown( event ) {

        dragged = false;
		event.preventDefault();
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( objects, true );

		if ( intersects.length > 0 ) {

			//Not able to rotate the view or zoom while mousedown on object
			//Only focusing on clicked object now...
			controls.enabled = false;

			//Picking selected object
			SELECTED = intersects[ 0 ].object.parent;
			previousZ = SELECTED.position.z;
			previousX = SELECTED.position.x;

			if ( raycaster.ray.intersectPlane( plane, intersection ) ) {
				offset.copy( intersection ).sub( SELECTED.position );
			}
			container.style.cursor = 'move';
		}
		render();
	}

	//When mouse is up, this function is called
	function onDocumentMouseUp( event ) {

		//document.getElementById('success').innerHTML.display = "none";
		event.preventDefault();
		controls.enabled = true;

		if ( SELECTED ) {
			SELECTED = null;
			checkOthers();
			calculatePoints();
		}

		if ( dragged ) {
			setTimeout(function(){ui.helper.unbind("click.prevent");}, 300);
		}

		container.style.cursor = 'auto';
		var points = 0;
		for (var i = 0; i < objects.length; i++) {
			for (var j = i+1; j < objects.length; j++) {
				points += getDistance(objects[i].userData.OBID, objects[j].userData.OBID);
			};
	    };
	    //calculatePoints(SELECTED);
	    //document.getElementById('points').innerHTML = points.toFixed(0);
		render();

	}

	//When clicked mouse on object, this function is called
	function onDocumentMouseClick(event) {
		event.preventDefault();
		controls.enabled = true;
		//If new object has been just added and it's inside yard borders
		if (ADDED ) { //&& ((ADDED.position.x < 14.5 && ADDED.position.x > -14.5) && (ADDED.position.z < 14.5 && ADDED.position.z > -14.5))) {
			calculatePoints( ADDED );
			SELECTED = null;
			ADDED = null;
		    calculatePoints();
		    checkOthers();
	        //document.getElementById('points').innerHTML = points.toFixed(0);
			render();
			//return;
		} else {
		    event.preventDefault();		
			//Getting objects that are penetrated by ray
		    raycaster.setFromCamera( mouse, camera );
		    var intersects = raycaster.intersectObjects( objects, true );
		    if (INTERSECTED && !dragged) {
			    var xco = INTERSECTED.parent.matrixWorld.getPosition().x + INTERSECTED.parent.userData.REX; 
			    var zco = INTERSECTED.parent.matrixWorld.getPosition().z + INTERSECTED.parent.userData.REZ;
			    var obidi = INTERSECTED.parent.userData.OBID;
			    document.getElementById('oi').innerHTML = obidi;
			    document.getElementById('success').title = INTERSECTED.parent.userData.TYPE;
			    selectedId = INTERSECTED.userData.id;
			    document.getElementById('ox').innerHTML = xco;
			    document.getElementById('oz').innerHTML = zco;
			    var listOfDistances = "Distances to other objects<br>";

			    for (var i = 0; i < INTERSECTED.parent.userData.adjacentObjects.length; i++) {
			    	listOfDistances += INTERSECTED.parent.userData.adjacentObjects[i].edgeLength.toFixed(2) + "<br>";
			    };
			    document.getElementById('distances').innerHTML = listOfDistances;
			    $('#success').dialog({
				    height: 350,
				    width: 350,
				    modal: true,
    			    resizable: false,
				    dialogClass: 'no-close success-dialog'
			    });
		    }
	    }
	}