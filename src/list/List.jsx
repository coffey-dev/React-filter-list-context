import { useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import frameworksList from "./items";
import ListView from "./ListView";

// Problema de Prop Drilling: un componente recibe un prop que no es para su propio uso, sino para pasarselo a otro componente hijo.
// Context permite pasar props sin seguir el orden de las jerarquías.
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
    <SearchContext.Provider value={ {filterItems:} }>
    <ListView elements={items} funcFilterItems={filterItems} />
    </SearchContext.Provider>
  )
 
}

export default List