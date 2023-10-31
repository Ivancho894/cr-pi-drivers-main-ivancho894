import Drivers from "./Drivers Render/drivers";
import { useState,useEffect } from 'react';
import Filter from "./filter and sort/filter";
import Sort from "./filter and sort/sort";
import { useDispatch, useSelector } from "react-redux";
import { GET_DRIVERS, TEAM_FILTER } from "../redux/actions";
import {SearchBar} from './SearchBar/searchBar'

export default function HomePage(){
    // const [drivers,setDrivers] = useState([])
    const allDrivers = useSelector(state=>state.allDrivers);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GET_DRIVERS())
    },[])

    return (
        <div>
            <h1>ESTA ES LA HOME PAGE</h1>
            <Filter />
            <Sort/>
            <SearchBar/>
            <Drivers drivers={allDrivers}/>
        </div>
    )
}