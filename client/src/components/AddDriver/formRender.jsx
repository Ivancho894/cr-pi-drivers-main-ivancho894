export default function FormRender({driver, errors,handleChange}){
    const props = ['name','lastname','description','image','nationality','dayofbirth','Teams'];

    return(
        <div>
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
                        <text style={{color:'red'}}>{errors.id}</text>
                        </h3>
                    
                    {props.map(prop=>{
                        return (
                            <h3>{prop}:
                                <input 
                                    type="text" 
                                    placeholder={prop}
                                    value={driver[prop]}
                                    name={prop}
                                    onChange={handleChange}/>
                                {'  '}
                                <text style={{color:'red'}}>{errors[prop]}</text>
                            </h3>
                                )
                    })}
                </form>
        </div>
    )
}