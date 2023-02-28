/* Vamos a tomar como base los números del 3 al 8 para multiplicarlos por un mismo factor desconocido (x) que nos da ciertos resultados.
Entonces, dada una función que recibe un arreglo númerico con los resultados, debe encontrar el factor multiplicador (x) para obtener ese resultado multiplicando por los números del 3 al 8.
Ejemplo: En el siguiente caso el factor sería 9.
3 * x = 27
4 * x = 36
5 * x = 45
6 * x = 54
7 * x = 63
8 * x = 72
Si si un solo factor multiplicador difiere del resto se regresa falso.
En el siguiente ejemplo la funcion regresaria false porque hay un resultado que tiene como factor multiplicador el 6 en lugar del 9 como el resto.
3 * x = 27
4 * x = 36
5 * x = 45
6 * x = 54
7 * 6 = 42 <- 👈
8 * x = 72
Aporte:
solución ([27, 36, 45, 54, 63, 72])
solución ([27, 36, 45, 54, 42, 72])
Producción:
9
FALSO */

solución de función ( números )  {
    matriz  const =  numeros ;
   const  resultado  =  matriz . mapa ( ( num )  =>  numero  /  9 ) ;
   const  comprobado  =  resultado . mapa ( ( num )  =>  num * 9 ) ;
   for  ( const  iterador  de  resultado )  {
       if  ( ! ( Número . esEntero ( iterador ) ) ) {
           comprobado _ empujar ( 'falso' )
       }
   }
   if ( marcado . incluye ( 'falso' ) ) {
       consola _ registro ( falso )
   }
   más {
       consola _ registro ( 9 )
   }

  
}

solución ( [ 27 ,  36 ,  45 ,  54 ,  63 ,  72 ] ) ;
solución ( [ 27 ,  36 ,  45 ,  54 ,  42 ,  72 ] )