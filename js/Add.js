function addBuildings() {
	var loader = new THREE.OBJLoader();

		loader.load(
			// resource URL
			'buildings/Yellowbuilding.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                    	var material = new THREE.MeshPhongMaterial({
                            color: 0xffffff
                        });
                        //child.material.ambient.setHex(0xFF0000);
                        
                        child.material = material;
                        child.material.color.setHex(0xffd72c);
                        child.castShadow = true;
				        child.receiveShadow = true;
				        
                    }
                } );
				object.position.set(52,0,50);
				object.rotateY(Math.PI / 2.8);
				object.scale.set(0.0005,0.0005,0.0005);
				object.updateMatrix();
				//object.castShadow = true;
				object.userData = { OBID: i, TYPE: "Building", REX: -15.6, REZ: -7.6};
				i++;
				scene.add( object );
				render();
			}
		);

        loader.load(
			// resource URL
			'buildings/Orangebuilding.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                    	var material = new THREE.MeshPhongMaterial({
                            color: 0xff8c00
                        });
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0xff8c00);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(52,0,50);
				object.rotateY(Math.PI / 2.8);
				object.scale.set(0.0005,0.0005,0.0005);
				object.updateMatrix();
				object.castShadow = true;
				object.userData = { OBID: i, TYPE: "Building", REX: 16.9, REZ: 5.2};
				i++;
				scene.add( object );
				render();
			}
		);

        loader.load(
			// resource URL
			'buildings/Redbuilding.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                    	var material = new THREE.MeshPhongMaterial({
                            color: 0xffffff
                        });
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x007699);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(52,0,50);
				object.rotateY(Math.PI / 2.8);
				object.scale.set(0.0005,0.0005,0.0005);
				object.updateMatrix();
				object.castShadow = true;
				object.userData = { OBID: i, TYPE: "Building", REX: 11.9, REZ: 28.4};
				i++;
				scene.add( object );
				render();
			}
		);

        loader.load(
			// resource URL
			'buildings/Greenbuilding.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                    	var material = new THREE.MeshPhongMaterial({
                            color: 0xffffff
                        });
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0xff443d);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(52,0,50);
				object.rotateY(Math.PI / 2.8);
				object.scale.set(0.0005,0.0005,0.0005);
				object.updateMatrix();
				object.castShadow = true;
				object.userData = { OBID: i, TYPE: "Building", REX: -19.6, REZ: 17};
				i++;
				scene.add( object );
				render();
			}
		);

        loader.load(
			// resource URL
			'buildings/Grass(base).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                    	var material = new THREE.MeshPhongMaterial({
                            color: 0xffffff
                        });
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x00af8e);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(52,-0.15,50);
				object.rotateY(Math.PI / 2.8);
				object.scale.set(0.0005,0.0005,0.0005);
				object.updateMatrix();
				object.castShadow = true;
				object.userData = { OBID: i, TYPE: "Building", REX: -19.6, REZ: 17};
				i++;
				scene.add( object );
				render();
			}
		);
}

function addApple() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Trees/AppleTree_wood(orange).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x95673f);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/AppleTree_leaves(green).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
		var fruitmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/AppleTree_apples(red).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = fruitmaterial;
                        child.material.color.setHex(0xf83043);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Apple tree" , REX: 34.25, REZ: -30.17, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addTablebench() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'model_C_tablebenches.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x996306);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(0,0,0);
				object.scale.set(0.001,0.001,0.001);
				object.castShadow = true;
				object.receiveShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Table bench" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);

	}

	function addBench() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'model_C_bench.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material.color.setHex(0xf2cf8a);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				object.castShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Bench" , REX: -50, REZ: 39, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);

	}

	function addBarbeque() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Furniture/Barbeque.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x0000c3);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				object.castShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Barbeque" , REX: 9.29, REZ: -77.62, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);
	}

	function addSunshade() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Furniture/SunShade.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = material;
                        child.material.color.setHex(0xffffff);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Sun shade" , REX: 7.6, REZ: -71.87, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);
	}

	function addBenchwithFlowers() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Furniture/BenchWithFlowers.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x95673f);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var flowermaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Furniture/BenchWithFlowers_flowers(red).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = flowermaterial;
                        child.material.color.setHex(0xfd0309);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
		var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Furniture/BenchWithFlowers_leaves(green).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x4adc0a);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Green bench" , REX: 2.49, REZ: -75.11, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addPinetree() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Trees/Pinetree_wood(orange).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0xffa500);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/Pinetree_leaves(R0G80B0).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Pine tree" , REX: 51.68, REZ: -38.27, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addLilac() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Trees/Lilac_tree(orange).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0xffa500);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/Lilac_leaves(R154G145B219).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Lilac" , REX: 36.22, REZ: -25.96, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addCanadianMaple() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Trees/CanadianMaple_wood(orange).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0xffa500);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/CanadianMaple_leaves(green).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Canadian maple" , REX: 37.64, REZ: -36, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addPavingGrass() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Paving/paving-grass_grass.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = material;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Paving/paving-grass_lightgrey.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0xffffff);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Grass paving" , REX: 38.84, REZ: -22.45, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addAsphalt() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Paving/asphalt.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x7a7979);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(0,0,0);
				object.scale.set(0.001,0.001,0.001);
				object.castShadow = true;
				object.receiveShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Asphalt" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);
	}

	function addLawn() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Paving/lawn.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x1ebb12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(0,0,0);
				object.scale.set(0.001,0.001,0.001);
				object.castShadow = true;
				object.receiveShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Lawn" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);
	}

	function addBrickPaving() {
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Paving/paving-brick.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x7a7979);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.position.set(0,0,0);
				object.scale.set(0.001,0.001,0.001);
				object.castShadow = true;
				object.receiveShadow = true;
				var arr = [];
				object.userData = { OBID: i, TYPE: "Brick paving" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
				ADDED = object;
				scene.add( object );
				render();
				objects.push(object);
				i++;
			}
		);
	}

	function addSandstone() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Paving/sandstone_green.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = material;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Paving/sandstone_orange.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0xf69811);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Sandstone" , REX: 38.84, REZ: -22.45, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

	function addWillow() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Trees/Willow_wood(orange).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = material;
                        child.material.color.setHex(0xffa500);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/Willow_leaves(R0G80B0).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Willow" , REX: 38.84, REZ: -22.45, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);

	}

    function addRowan() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'Elements/Trees/Rowan_tree(orange).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x95673f);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
				render();

			}
		);
        var leafmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/Rowan_leaves(green).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = leafmaterial;
                        child.material.color.setHex(0x1ebd12);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
		var fruitmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'Elements/Trees/Rowan_berries(red).obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = fruitmaterial;
                        child.material.color.setHex(0xf83043);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0005,0.0005,0.0005);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Rowan" , REX: 44.24, REZ: -29.02, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 10 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);
	}

function addBasket() {
	var loader = new THREE.OBJLoader();
	var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
	// load a resource
	loader.load(
		// resource URL
		'sport/Basketring.obj',
		// Function when resource is loaded
		function ( object ) {
			object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    //child.material.ambient.setHex(0xFF0000);
                    child.material = material;
                    child.material.color.setHex(0x7a7979);
                    child.castShadow = true;
			        child.receiveShadow = true;
                }
            });
			object.position.set(0,0,0);
			object.scale.set(0.001,0.001,0.001);
			object.castShadow = true;
			object.receiveShadow = true;
			var arr = [];
			object.userData = { OBID: i, TYPE: "Basket" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
			ADDED = object;
			scene.add( object );
			render();
			objects.push(object);
			i++;
		}
	);
}

function addPingPong() {
	var loader = new THREE.OBJLoader();
	var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
	// load a resource
	loader.load(
		// resource URL
		'sport/pingpong.obj',
		// Function when resource is loaded
		function ( object ) {
			object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    //child.material.ambient.setHex(0xFF0000);
                    child.material = material;
                    child.material.color.setHex(0x7a7979);
                    child.castShadow = true;
			        child.receiveShadow = true;
                }
            });
			object.position.set(0,0,0);
			object.scale.set(0.001,0.001,0.001);
			object.castShadow = true;
			object.receiveShadow = true;
			var arr = [];
			object.userData = { OBID: i, TYPE: "Ping pong" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
			ADDED = object;
			scene.add( object );
			render();
			objects.push(object);
			i++;
		}
	);
}

function addTrampoline() {
	var loader = new THREE.OBJLoader();
	var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
	// load a resource
	loader.load(
		// resource URL
		'sport/trampoline.obj',
		// Function when resource is loaded
		function ( object ) {
			object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    //child.material.ambient.setHex(0xFF0000);
                    child.material = material;
                    child.material.color.setHex(0x7a7979);
                    child.castShadow = true;
			        child.receiveShadow = true;
                }
            });
			object.position.set(0,0,0);
			object.scale.set(0.001,0.001,0.001);
			object.castShadow = true;
			object.receiveShadow = true;
			var arr = [];
			object.userData = { OBID: i, TYPE: "Trampoline" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
			ADDED = object;
			scene.add( object );
			render();
			objects.push(object);
			i++;
		}
	);
}

function addGymo() {
	var loader = new THREE.OBJLoader();
	var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
	// load a resource
	loader.load(
		// resource URL
		'sport/gym_blue.obj',
		// Function when resource is loaded
		function ( object ) {
			object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    //child.material.ambient.setHex(0xFF0000);
                    child.material = material;
                    child.material.color.setHex(0x7a7979);
                    child.castShadow = true;
			        child.receiveShadow = true;
                }
            });
			object.position.set(0,0,0);
			object.scale.set(0.001,0.001,0.001);
			object.castShadow = true;
			object.receiveShadow = true;
			var arr = [];
			object.userData = { OBID: i, TYPE: "Gym1" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
			ADDED = object;
			scene.add( object );
			render();
			objects.push(object);
			i++;
		}
	);
}

function addGymt() {
	var loader = new THREE.OBJLoader();
	var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
	// load a resource
	loader.load(
		// resource URL
		'sport/gym_red.obj',
		// Function when resource is loaded
		function ( object ) {
			object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    //child.material.ambient.setHex(0xFF0000);
                    child.material = material;
                    child.material.color.setHex(0x7a7979);
                    child.castShadow = true;
			        child.receiveShadow = true;
                }
            });
			object.position.set(0,0,0);
			object.scale.set(0.001,0.001,0.001);
			object.castShadow = true;
			object.receiveShadow = true;
			var arr = [];
			object.userData = { OBID: i, TYPE: "Gym2" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
			ADDED = object;
			scene.add( object );
			render();
			objects.push(object);
			i++;
		}
	);
}

function addPlayground() {
		var loader = new THREE.OBJLoader();
		var bigObject = new THREE.Object3D();
		var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
		// load a resource
		loader.load(
			// resource URL
			'sport/playground_blue.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = material;
                        child.material.color.setHex(0x0e0ef6);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
				render();
			}
		);
        var redmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'sport/playground_red.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = redmaterial;
                        child.material.color.setHex(0xf90707);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				object.castShadow = true;
				bigObject.add(object);
			}
		);
		var orangematerial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'sport/playground_orange.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = orangematerial;
                        child.material.color.setHex(0xfb7e04);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
		var yellowmaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
        });
        loader.load(
			// resource URL
			'sport/playground_yellow.obj',
			// Function when resource is loaded
			function ( object ) {
				object.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        //child.material.ambient.setHex(0xFF0000);
                        child.material = yellowmaterial;
                        child.material.color.setHex(0xf8ef05);
                        child.castShadow = true;
				        child.receiveShadow = true;
                    }
                } );
				//object.matrixWorld(2,0,2);
				object.scale.set(0.0008,0.0008,0.0008);
				object.position.set(0,0,0);
				//object.updateMatrix();
				object.castShadow = true;
				bigObject.add(object);
			}
		);
        var arr = [];
		bigObject.userData = { OBID: i, TYPE: "Playground" , REX: 2.49, REZ: -75.11, ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
		i++;
		ADDED = bigObject;
		scene.add(bigObject);
		render();
		objects.push(bigObject);
	}

function addOregano() {
	var loader = new THREE.OBJLoader();
	var material = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
	// load a resource
	loader.load(
		// resource URL
		'flower/oregano.obj',
		// Function when resource is loaded
		function ( object ) {
			object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    //child.material.ambient.setHex(0xFF0000);
                    child.material = material;
                    child.material.color.setHex(0x33f805);
                    child.castShadow = true;
			        child.receiveShadow = true;
                }
            });
			object.position.set(0,0,0);
			object.scale.set(0.001,0.001,0.001);
			object.castShadow = true;
			object.receiveShadow = true;
			var arr = [];
			object.userData = { OBID: i, TYPE: "Gym2" , REX: -62, REZ: 50 , ReceivedPoints: 0, adjacentObjects: arr, RADIUS: 5 };
			ADDED = object;
			scene.add( object );
			render();
			objects.push(object);
			i++;
		}
	);
}