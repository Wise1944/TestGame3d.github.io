		 var camera, scene, renderer;
		 var container = document.getElementById( 'container' );
			var mouseHelper;			
				var emitter ;
			var plasmaBalls = [];
			var target;
			var mouse = new THREE.Vector2();
			var loader,camera ;
			var raycaster;
			var container, stats, controls;
			var camera, scene, renderer, light;
			var player;
			 var speed = 50;
             var clock = new THREE.Clock();
             var delta = 0;
			 var controls = {
                          moveForward: false,
                          moveBackward: false,
                          moveLeft: false,
                          moveRight: false,
                          Tower_rotation_r:false,
                          Tower_rotation_l:false,
                          Rotation_base_r:false,
                          Rotation_base_l:false
                      };
			var mixer;
			var Tank={
				positionX:0,
				positionY:0,
				positionZ:0,
				tower:"",
				body:"",
				hp:""
			};
			window.addEventListener( 'load', init );
			animate();

			function init() {
				stats = new Stats();
				
				document.body.appendChild( container );
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.shadowMap.enabled = true;
				container.appendChild( renderer.domElement );
				container.appendChild( stats.dom );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 10000 );
				camera.position.set( 1,50, 0 );
				//camera.rotation.set(100,10,0);

				controls = new THREE.OrbitControls(camera);
				controls.target.set( 100, 15, 0 );
				controls.update();

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xa0a0a0 );
				scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

				light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
				light.position.set( 0, 200, 0 );
				scene.add( light );

				light = new THREE.DirectionalLight( 0xffffff );
				light.position.set( 0, 200, 100 );
				light.castShadow = true;
				light.shadow.camera.top = 180;
				light.shadow.camera.bottom = - 100;
				light.shadow.camera.left = - 120;
				light.shadow.camera.right = 120;
				scene.add( light );
				// scene.add( new THREE.CameraHelper( light.shadow.camera ) );
				//document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keyup', onKeyUp, false );

			//	document.addEventListener( 'mouse', mouse);


				 window.addEventListener("mousedown", onMouseDown);
			//	window.addEventListener( 'mousemove', onTouchMove );
			//	window.addEventListener( 'touchmove', onTouchMove );
				 var geometry = new THREE.SphereGeometry( 3, 3, 1 );
						var material = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
						mesh = new THREE.Mesh( geometry, material );
						target=mesh;
						mesh.position.set(0,10,0);
						scene.add(mesh);						

						window.addEventListener( 'resize', onWindowResize, false );

						// stats
						
						
			}
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

		function animate() {

				requestAnimationFrame( animate );
			//	console.log(Tank.head.position.x);
			//	camera.localToWorld(Tank.head.position.x,Tank.head.position.y,Tank.head.position.z);
			//	camera.position.set((Tank.head.position.x),(Tank.head.position.y)+50,Tank.head.position.z);
					 delta = clock.getDelta();

            //          plasmaBalls.forEach(b => {
            //            b.translateZ(-speed * delta*10); // move along the local z-axis
            //          });


				if ( mixer ) mixer.update( delta )
				renderer.render( scene, camera );

				stats.update();

			}