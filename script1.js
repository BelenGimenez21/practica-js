// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function dividirOMultiplicarDosNros(x,z){
    let = resultado
    if (x<z) {
        resultado = z/x
    } else {
        resultado = x*z
    }
	return resultado
}


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function tipoDeDato(a){
    let dato = typeof(a)
	return console.log(dato)
}

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function operaciones(a,b,c,d,e,f){
    let suma = a+b
    let resta = suma-c
    let multiplicacion = resta*d
    let division = multiplicacion/e
    let resultado = Math.pow(division, f)

	return resultado
}

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function extraerUltimos3Elem(miArray1){
    let arrayNuevo = [miArray1[miArray1.length-3], miArray1[miArray1.length-2], miArray1[miArray1.length-1]]
	return arrayNuevo
}

// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ordenarArray(miArray2){
	return miArray2.sort()
}

// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

function eliminarElementoB(a,b){
    const nuevoArray = a.filter(elemento => elemento !== b)
	return nuevoArray
}

// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function sumaDeElementosArray(miArray3){
    let suma = 0
    for (let index = 0; index < miArray3.length; index++) {
        suma = suma + miArray3[index]
    }
	return suma
}

function promedioElementosArray(miArray3) {
    let contador = 0
    let suma = 0
    for (let index = 0; index < miArray3.length; index++) {
        suma = suma + miArray3[index]
        contador = contador + 1
    }
    let promedio = suma/contador
	return promedio
}

// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

function valorDelObjeto(miObjeto1, str){
	return console.log(miObjeto1[str])
}

// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

function sumaValoresObjeto(miObjeto2){
    let suma = 0;
    for (const key in miObjeto2) {
        suma = suma + miObjeto2[key]
    }
	return console.log(suma)
}