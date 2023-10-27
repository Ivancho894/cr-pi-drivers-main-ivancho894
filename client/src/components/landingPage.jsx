import { useNavigate } from "react-router-dom";

export default function LandingPage(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>BIENVENIDO MOTHERFUCKER</h1>
            <button onClick={()=>navigate('/homepage')}>LETS GO HOME</button>
        </div>
    )
}