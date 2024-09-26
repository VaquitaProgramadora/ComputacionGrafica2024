//creation of basic elements
var scene = null;
var camera = null;
var renderer = null;
var controls = null;

const size = 20;
const division = 20;

function startScene(){
    //scene, camera, renderer
    scene = new THREE.Scene(),//crea una escena
    scene.background = new THREE.Color(0x524E4E);//color del fondo
    camera = new THREE.PerspectiveCamera(75,//Angulo del campo de vision (abajo o arriba)
                                         window.innerWidth / innerHeight,//Relación aspecto (16x16 o fullScreen)
                                         0.1,//lo mas cerca que renderiza
                                         1000);//lo mas lejos que renderiza

    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});//esto es para que busque el canvas que creamos en objects
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);//agrega al cuerpo del documento en el canvas

    //orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0,5,10);
    controls.update();

    //grid Helper
    const size = 10;
    const divisions = 10;
    
    const gridHelper = new THREE.GridHelper( size, divisions, new THREE.Color(0xffffff), new THREE.Color(0x023a3d) );
    scene.add( gridHelper );

    
    camera.position.z = 5;
    animate();

    //Light 
    const light = new THREE.AmbientLight( 0x404040, 5); // soft white light
    scene.add( light );

    const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
    pointLight.position.set( 10, 10, 10 );
    scene.add( pointLight );

    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
    scene.add( pointLightHelper );
}

function animate(){
    requestAnimationFrame(animate);//lo que hace es ejecutar frame por frame cada cambio
    controls.update;
    renderer.render( scene, camera );
}

window.addEventListener( 'resize', onWindowResize, false );//para que haga una especie de "responsive"
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function createGeometry (geometryDraw) 
{ var geometryfigure = null;
    switch(geometryDraw) {

        case 'box':
    //creacion de un cubo
   let an = parseFloat(document.getElementById("anchura").value);
   let pr = parseFloat(document.getElementById("profundidad").value);
   let al = parseFloat(document.getElementById("altura").value);
    geometryfigure = new THREE.BoxGeometry( an, pr, al );
            break;

        case 'torus':
        let rt = parseFloat(document.getElementById("radio torus").value);
        let tt = parseFloat(document.getElementById("tubo torus").value);
        let sg = parseFloat(document.getElementById("segmentos radiales").value);
        let stt = parseFloat(document.getElementById("segmentos tubulares torus").value);
        geometryfigure = new THREE.TorusGeometry( rt, tt, sg, stt );

            break;

        case 'cone':
            let rc = parseFloat(document.getElementById("radio cono").value);
            let ac = parseFloat(document.getElementById("altura cono").value);
            let sr = parseFloat(document.getElementById("segmentos radiales cono").value);
        geometryfigure = new THREE.ConeGeometry( rc, ac, sr );
            break;   
    }
     var randomColor = +('0x' + Math.floor(Math.random()*16777215).toString(16));
    const material = new THREE.MeshStandardMaterial({color: randomColor,transparent: false, opacity: 0.5, wireframe: false, roughness: 0.5, metalness: 0.5});
    const objectDraw = new THREE.Mesh(geometryfigure, material);
    scene.add(objectDraw);

}

function deleteGeometry()
{
    scene.remove(scene.children[scene.children.length - 1]);
}

function showinput(inputN)
{
    var input = document.getElementById(inputN);
    if (input.style.display === "none") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}



//creacion de un cubo
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshToonMaterial( { color: 0x023a3d, depthTest: true, depthWrite: true} );  //MeshDepthMaterial
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

 /*//creacion de una esfera cute uwu !!
    const geometrySphere = new THREE.SphereGeometry( 2, 8, 8 ); 
    const materialSphere = new THREE.MeshToonMaterial( { color: 0x023a3d, depthTest: true, depthWrite: true} );
    const sphere = new THREE.Mesh( geometrySphere, materialSphere );
    scene.add( sphere ); */

//creacion de un vector
// const dir= new THREE.Vector3(0,1,0);
//const origin = new THREE.Vector3(0,0,0);
//const length = 1;
// const hex = 0x023a3d;
// const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
// scene.add(arrowHelper);


// para la otra semana, habilitar que en el torus se permita agregar las propiedades  osea el tamaño, debe ´preguntar para que el usuario lo ponga, igual en el caso de la caja y en el caso del cone con las diapositivas  de creación de figuras. 