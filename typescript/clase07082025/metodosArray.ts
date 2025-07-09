const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);
//Foreach sirve para recorrer elementos de un array, lista
nums.forEach(n=> console.log(n));

//Crea un nuevo array con los resultados
const mapeador = nums.map(n=> n * 2);
console.log(mapeador);

//Devuelve los elementos que cumplen una condición
const resultFilter = nums.filter(n=> n > 3);
console.log(resultFilter);

//Devuelve el primer elemento que cumple la condición
const resultFind = nums.find(n=> n > 3);
console.log(resultFind);

//true si alguno cumple la condición
const resultSome =nums.some(n => n > 0);
console.log(resultSome);

//insertar elementos en un array
nums.push(100);
nums.push(300);
console.log(nums);

//eliminar el elemento de un arreglo al final
nums.pop();
nums.pop();
console.log(nums);

// elimina el primer elemento del array
nums.shift();
console.log(nums);

//agg elementos al incio del arreglo
nums.unshift(1);
console.log(nums);

//revertir el orden de los elementos del arreglo
 nums.reverse()
 console.log(nums);

 //Eliminar un registro de un regla por la posicion del indice y la cantidad de elementos a eliminar
 nums.splice(1,1);
 console.log(nums);

 //Encontrar el indice de un valor en un arreglo
 const indice= nums.indexOf(2)
 console.log(indice);

 // verifica si un valor existe en un arreglo
 const verificaSiExiste = nums.includes(100);
 console.log(verificaSiExiste);