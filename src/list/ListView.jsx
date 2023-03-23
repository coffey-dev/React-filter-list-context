// Componente de presentación

import SearchInput from "../form/SearchInput";

function ListView({elements, funcFilterItems}){
    return (
        <div>
            <SearchInput funcFilterItems={funcFilterItems} />
            <ul>
            { 
            elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
            }
            </ul>
        </div>
    )

}

export default ListView;