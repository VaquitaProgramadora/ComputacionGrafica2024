function vector() {
    // Obtener los Valores de los Inputs
    let ax = parseFloat(document.getElementById("puntoAX_vector").value);
    let ay = parseFloat(document.getElementById("puntoAY_vector").value);
    let az = parseFloat(document.getElementById("puntoAZ_vector").value);

    let bx = parseFloat(document.getElementById("puntoBX_vector").value);
    let by = parseFloat(document.getElementById("puntoBY_vector").value);
    let bz = parseFloat(document.getElementById("puntoBZ_vector").value);

    let vx = bx-ax,
        vy = by-ay,
        vz = bz-az;
    
    let vectorFinal = `(${vx}, ${vy}, ${vz})`;   
    document.getElementById("result_vector").innerHTML = vectorFinal;
}

function suma() {
    // Obtener los Valores de los Inputs
    let ax = parseFloat(document.getElementById("puntoAX_suma").value);
    let ay = parseFloat(document.getElementById("puntoAY_suma").value);
    let az = parseFloat(document.getElementById("puntoAZ_suma").value);

    let bx = parseFloat(document.getElementById("puntoBX_suma").value);
    let by = parseFloat(document.getElementById("puntoBY_suma").value);
    let bz = parseFloat(document.getElementById("puntoBZ_suma").value);
    
    let vx = bx+ax,
        vy = by+ay,
        vz = bz+az;
    
    let vectorFinal = `(${vx}, ${vy}, ${vz})`;   
    document.getElementById("result_suma").innerHTML = vectorFinal;
}

function producto() {
    // Obtener los Valores de los Inputs
    let ax = parseFloat(document.getElementById("puntoAX_producto").value);
    let ay = parseFloat(document.getElementById("puntoAY_producto").value);
    let az = parseFloat(document.getElementById("puntoAZ_producto").value);

    let bx = parseFloat(document.getElementById("puntoBX_producto").value);
    let by = parseFloat(document.getElementById("puntoBY_producto").value);
    let bz = parseFloat(document.getElementById("puntoBZ_producto").value);
    
    let producto = bx*ax + by*ay + bz*az;
    document.getElementById("result_producto").innerHTML = producto;
}

function magnitud() {
    // Obtener los Valores de los Inputs
    let x = parseFloat(document.getElementById("puntoAX_magnitud").value);
    let y = parseFloat(document.getElementById("puntoAY_magnitud").value);
    let z = parseFloat(document.getElementById("puntoAZ_magnitud").value);
    
    let magnitud = Math.sqrt(x * x + y * y + z * z);

    document.getElementById("result_magnitud").innerHTML = magnitud;
}