SceneJS.setConfigs({
	pluginPath:"http://scenejs.org/api/latest/plugins"
});


$("button").click(function () {
	$.get("/send_loader_config", function (data, status) {
		console.log(data)
		console.log(status)
		var scene = SceneJS.createScene({
			nodes: [data]
		});
		scene.getNode("myRotate", function(myRotate) {

			var angle = 0;
		
			scene.on("tick",
				function() {
					myRotate.setAngle(angle += 0.5);
				});
		});
	});
});

// var camera, scene, renderer, mesh, loader;



// function init(data) {

// 	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
// 	camera.position.z = 1000;

// 	scene = new THREE.Scene();

// 	loader = new THREE.GLTFLoader();
// 	loader.parse(data, (gltf) => {
// 		scene.add(gltf.scene);
// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object
// 	})

// 	var ambientLight = new THREE.AmbientLight(0x555555);
// 	scene.add(ambientLight);

// 	var directionalLight = new THREE.DirectionalLight(0xffffff);
// 	directionalLight.position.set(1, 1, 1).normalize();
// 	scene.add(directionalLight);

// 	renderer = new THREE.WebGLRenderer();
// 	renderer.setSize(window.innerWidth, window.innerHeight);

// 	document.body.appendChild(renderer.domElement);

// }

// function animate() {

// 	requestAnimationFrame(animate);

// 	renderer.render(scene, camera);
// }

// // ------------------------------------------------
// // BASIC SETUP
// // ------------------------------------------------

// // Create an empty scene
// var scene = new THREE.Scene();

// // Create a basic perspective camera
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 4;

// // Create a renderer with Antialiasing
// var renderer = new THREE.WebGLRenderer({ antialias: true });

// // Configure renderer clear color
// renderer.setClearColor("#000000");

// // Configure renderer size
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Append Renderer to DOM
// document.body.appendChild(renderer.domElement);

// // ------------------------------------------------
// // FUN STARTS HERE
// // ------------------------------------------------

// // Create a Cube Mesh with basic material
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: "#433F81" });
// var cube = new THREE.Mesh(geometry, material);

// // Add cube to Scene
// scene.add(cube);

// // Render Loop
// var render = function () {
// 	requestAnimationFrame(render);

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	// Render the scene
// 	renderer.render(scene, camera);
// };

// render();