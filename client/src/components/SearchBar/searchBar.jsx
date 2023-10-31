import axios from "axios";
import { useState } from "react";
import { Dispatch } from "react";
import { SEARCH_DRIVERS } from "../../redux/actions";

export default function SearchBar(){
    const [value,setVaulue] = useState('')
    const dispatch = Dispatch()
    const handleChange = (event) =>{
        setVaulue(event.target.value)
    }
    const handleSearch = () =>{
        dispatch(SEARCH_DRIVERS(value))
    }

    return (    
        <div>
           <input type='search' value={value} onChange={handleChange} />
           <button onClick = {handleSearch} >Agregar</button> 
           
        </div>
     );
}