import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_DRIVERS } from "../../redux/actions";

export default function SearchBar(){
    const [theValue,setValue] = useState('')
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        setValue(event.target.value)
    }
    const handleSearch = () =>{
        theValue!=''?dispatch(SEARCH_DRIVERS(theValue)):alert('Ingrese un nombre')
    }

    return (    
        <div>
           <input type='search' value={theValue} onChange={handleChange} />
           <button onClick = {handleSearch} >Agregar</button> 
           
        </div>
     );
}