import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function SearchInput(){
    const {filterItems} = useContext(SearchContext);
 
    return(
       
                <input type="text" onChange = {ev => filterItems(ev.target.value)} />

    )
}

export default SearchInput;