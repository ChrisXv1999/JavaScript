import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();


function exportList2Excel({list,name='export',autoCol=true,lists}){
    const wb = XLSX.utils.book_new();
    if(Array.isArray(list)){
        lists = [{list}]
    }
	lists.forEach((item,idx)=>{
		const {name = `Sheet${idx+1}`,item=[]} = item;
		const sheet = XLSX.utils.aoa_to_sheet(list);
		const cols = [];
		const zhReg = /[^\x00-\xff]/g;
		for(let i = 0; i <list[0].length; i++) {
			const w = Math.max(String(list[0][i]).replace(zhReg,'aa').length, String(list[1][i]).replace(zhReg,'aa').length,10);
			cols.push({width: w + 2})
		}
		sheet['!cols'] = cols;
		XLSX.utils.book_append_sheet(wb, sheet, name);
	})
    const excelBase64 = XLSX.write(wb, {
        bookType:'xlsx',
        type:'base64'
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = "data:application/octet-stream;base64," + excelBase64;
    downloadLink.download = `${name}.xlsx`;
    downloadLink.click();
    downloadLink.remove();
}
