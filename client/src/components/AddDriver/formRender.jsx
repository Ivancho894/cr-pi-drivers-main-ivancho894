export default function FormRender({driver, errors,handleChange}){
    const props = ['name','lastname','description','image','nationality','dayofbirth','Teams'];

    return(
        <div className="input-section">
                <form>
                    <h3>ID:
                        <input 
                            type="numbers" 
                            placeholder='Id' 
                            value={driver.id} 
                            name={'id'}
                            onChange={handleChange}
                            />
                        {'  '}
                        <mark style={{color:'red'}}>{errors.id}</mark>
                        </h3>
                    
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