import Drivers from "../Drivers Render/drivers";
import { useState,useEffect } from 'react';
import Filter from "../filter and sort/filter";
import Sort from "../filter and sort/sort";
import SandF from "../filter and sort/sortNfilter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeBar from "./homeBar";
import Pagination from "./Pagination";


export default function HomePage(){
    // const [drivers,setDrivers] = useState([])
    const allDrivers = useSelector(state=>state.allDrivers);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    //Pagination
    const [curPage,setCurPage] = useState(1);
    const driversPerPage = 15;
    const totalPages = Math.ceil(allDrivers.length/driversPerPage)

    const handlePageChange = (newPage) =>{
        setCurPage(newPage)
    }


    return (<div>

        <div className="overlaye"></div>
        <div className="homepage">
            <HomeBar/>
            <div className="sandf"> 
                <SandF/>
                <button onClick={()=>{navigate('/newdriver')}}>New driver</button>
            </div>
            <Drivers drivers={allDrivers} curPage={curPage}/>
            <Pagination
        currentPage={curPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        </div>
    </div>
    )
}