import { useState } from "react";
import frameworksList from "./items";
import ListView from "./ListView";


// Componentes contenedor (el que maneja los datos)

function List() {

  let [items, setItems] = useState(frameworksList);

// Crea una función para filtrar los items de acuerdo con lo que se escribe.
  function filterItems (searchPattern){
    
    // Si el buscador está vacío, se devuelve la lista completa.

    if(searchPattern === "") {
      setItems(frameworksList);
    }
    else {
      let newItems = filterItemsBySearchItems(searchPattern);
      setItems(newItems);

    }

}

function filterItemsBySearchItems(searchPattern){

  // Se reemplazó el filter por map para recorrer todos los items sin modificar su key.
  let filteredItems = frameworksList
                      .map( item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null);
  return filteredItems;
}

  return (
    <ListView elements={items} funcFilterItems={filterItems} />
  )
 
}

export default List