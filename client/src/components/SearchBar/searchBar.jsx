import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_DRIVERS } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { GET_DRIVERS } from "../../redux/actions";


export default function SearchBar(){
    const navigate = useNavigate()
    const [theValue,setValue] = useState('')
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        setValue(event.target.value)
    }
    const handleSearch = () =>{
        theValue!=''?dispatch(SEARCH_DRIVERS(theValue)):alert('Ingrese un nombre')
        navigate('/homepage')
    }
    useEffect(()=>{
        theValue!=''?dispatch(GET_DRIVERS()):null;
    },[theValue])
    //Search button hover state
    const [imgHover,setimgHover] = useState(false)
    const handleMouseOver = () => {
        setimgHover(true);
    };
    const handleMouseOut = () => {
        setimgHover(false);
    };
    return (    
        <div>
            <h3>Search Driver: <input type='search' value={theValue} onChange={handleChange} />
            
                <img
                    className="searchbutton"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    src={imgHover?"../../../Images/f1big.png":"../../../Images/f1Small.png"} 
                    onClick={handleSearch}
                    />
           </h3>
        </div>
     );
}