import {useDispatch } from "react-redux"
import { ORDER_DRIVERS } from "../../redux/actions";
import { useState} from 'react';

export default function Sort(){
    const [type,setType] = useState('name')
    const [order,setOrder] = useState('A')

    const dispatch = useDispatch();
    
    const handleOrderType = (event)=>{
        setType(event.target.value)
        dispatch(ORDER_DRIVERS({order,type:event.target.value}))
    }

    const handleOrder = (event)=>{
        setOrder(event.target.value)
        dispatch(ORDER_DRIVERS({order: event.target.value,type}))
    }
  

    return (
        <div>
            <select name="" id="" value={order} onChange={handleOrder} >
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>
            <select name="" id="" value={type} onChange={handleOrderType}>
                <option value="name">Name</option>
                <option value="dayofbirth">Day of birth</option>
            </select>
        </div>
    )
}