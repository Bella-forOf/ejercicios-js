/* OBJETIVO: Dado un array de números enteros, escriba una función que devuelva true cuando el array tenga valores duplicados.
Input: [1, 1, 2, 2, 3, 5, 9, 9]
Output: true */

/* OPCION 1  */
////

const a = [1, 2, 3, 4, 2, 5]

if (hayDuplicados(a)) {
    console.log ('Duplicados')
}
else {
    console.log ('No hay duplicados')
}
function hayDuplicados (array) {
    for (elemnto of array) {
        if (estaDuplicado(array, elemento)) {
            return true
        }
    }
    return false
}

function cuenta (array, elemento) {
    let count = 0;
    for ( const nuevo of array){
        if ( nuevo == elemnto){
            count += 1 
            if(count > 1) {
                return true
            }
        }
    }
    return false
};





let array1 = [1,2,6,1,2,5,9];
/* let array1 = [1, 2, 3, 5, 9]; */ /// para probar que efectivamente  da false cuando no hay duplicados
     const dataArr = new Set(array1);
   
     let result = [...dataArr];


    if (array1.length !== result.length){
        repeat= true; 
    }
     console.log(repeat);

    //  REPASAR

    const arr1 =  [1, 1, 2, 2, 3, 5, 9, 9];
/* const arr1 =  [1, 2, 3, 5, 9]; */ /// para probar que efectivamente  da false cuando no hay duplicados
    var repeat = false;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr1[i] == arr1[j] && i != j) { 
                repeat= true;
             }
         }
     }
     console.log(repeat);
////