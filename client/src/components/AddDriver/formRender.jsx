export default function FormRender({driver, errors,handleChange}){
    const props = ['name','lastname','description','image','nationality','dayofbirth','teams'];

    return(
        <div className="input-section">
                <form>                   
                    {props.map((prop,i)=>{
                        return (
                            <h3 key={i}>{prop}:
                                <input 
                                    type="text" 
                                    placeholder={prop}
                                    value={driver[prop]}
                                    name={prop}
                                    onChange={handleChange}/>
                                {'  '}
                                <mark style={{color:'red'}}>{errors[prop]}</mark>
                            </h3>
                                )
                    })}
                </form>
        </div>
    )
}