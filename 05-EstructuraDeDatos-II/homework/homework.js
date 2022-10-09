"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
    this._length = null;
    this.head = null;
}

function Node(value) {

  this.value = value;
  this.next = null;

}
LinkedList.prototype.add = function(info){

let nodo = new Node(info);

    if(!this.head){

      this.head = nodo;
      this.length++;
      return nodo;

    } else {

        let actualPunt = this.head;

      while(actualPunt.next){

          actualPunt = actualPunt.next;
          
      }
      actualPunt.next = nodo;

      this.length++;
      return nodo;

     }   
}
LinkedList.prototype.remove = function(){

    let actualPunt = this.head;

      if(!this.head){
        return null;
      }

      if(actualPunt !== null && actualPunt.next === null){
        let info = actualPunt.value;
          this.head = null;
          return info;

      }    
      while(actualPunt.next.next){

          actualPunt = actualPunt.next;

      }
      let info = actualPunt.next.value;
      actualPunt.next = null;

      return info;




}

LinkedList.prototype.search = function (valor){
      
      
          let actualPunt = this.head;
          
          while(actualPunt){
            
                 if(typeof valor === 'function'){ // para saber si es una funcion, falta ver si es un objeto , o un string.
                  if(valor(actualPunt.value)){
                      return actualPunt.value;
                  }
                  }
                  else{
                    if(actualPunt.value === valor){ // para preguntar si son strings iguales supongo
                      return valor;
                      }
                    } 
                  actualPunt = actualPunt.next;
                 }
            return null;     
        
   
   }
      
    





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {

    this.arrBck = [];
    this.numBuckets = 35;
    this.arrBck.length = this.numBuckets;
    //this.objetoXBckt = obj;
  var obj; // si no se declara este objeto y el for el array queda undefined en cda elemento
      {
        for(let i=0; i<this.arrBck.length; i++ ){
          this.arrBck[i]  =  obj = {}
        }
      }

    }

function Obj(input, valor){

    this[input] = valor;
    


}

HashTable.prototype.hash = function(input) {
  let nBucket;
  let suma = 0;
    for(let i=0; i<input.length; i++){
      
      suma += input.charCodeAt(i);

      }
     nBucket = suma%35;
     
     return nBucket;
}

HashTable.prototype.hasKey = function(key){


  
  let nArrBck = this.hash(key);

      if(this.arrBck[nArrBck].hasOwnProperty(key)){

        return true;

      }else return false;

  
}


HashTable.prototype.set = function(key, value){

    if(typeof key !== 'string'){
    throw new TypeError('First parameter is not a string')
    }
    var nArrBck = this.hash(key);
    var obj = new Obj(key, value);
          
       
      if(this.arrBck[nArrBck] === (undefined || null)) {
        var obj = new Obj(key, value);
        this.arrBck[nArrBck] = obj;
        this.arrBck[nArrBck][key] = value;
       }else {
        this.arrBck[nArrBck][key] = value;
       }

} 

HashTable.prototype.get = function(key){
  let nArrBck = 0;
  if(typeof key !== 'string'){
    throw new TypeError('First parameter is not a string')
    }

      nArrBck = this.hash(key);

         
          return this.arrBck[nArrBck][key];

      
    }



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
