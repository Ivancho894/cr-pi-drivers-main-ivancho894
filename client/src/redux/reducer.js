const initialState = {
    allDrivers:[],
    apiDrivers:[],
    dbDrivers:[]
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case 'GET_DRIVERS':
            return {
                allDrivers:[...action.payload.dbDrivers,...action.payload.apiDrivers],
                dbDrivers:action.payload.dbDrivers,
                apiDrivers:action.payload.apiDrivers}
        case 'TEAM_FILTER':
            let newDrivers = []
            if(action.payload!='-'){
                [...state.allDrivers].map(x=>{
                    x.Teams?.find(t=>t.name==action.payload)?newDrivers.push(x):null;
                })
            }else{
                newDrivers=[...state.dbDrivers,...state.apiDrivers]
            }
            
            
            return {
                ...state,
                allDrivers: newDrivers
            }
        case 'ONLY_DB':
            return {
                ...state,
                allDrivers:[...state.dbDrivers]
            }
        case 'ONLY_API':
            return {
                ...state,
                allDrivers:[...state.apiDrivers]
            }
        case 'ORDER':
            let ordered = [] 
            if(action.payload.order =='A'){
                ordered = action.payload.type=='name'?
                [...state.allDrivers].sort((a,b)=>a.name==b.name?0:a.name<b.name?-1:1):
                [...state.allDrivers].sort((a,b)=>Date.parse(a.dayofbirth)-Date.parse(b.dayofbirth))
            
            }else{
                ordered = action.payload.type=='name'?
                [...state.allDrivers].sort((b,a)=>a.name==b.name?0:a.name<b.name?-1:1):
                [...state.allDrivers].sort((a,b)=>Date.parse(b.dayofbirth)-Date.parse(a.dayofbirth))
            }
            return {
                ...state,
                allDrivers:ordered
            }
        case 'SEARCH':
            return{
                ...state,
                allDrivers: action.payload
            }

        default:
            return {
                ...state,
                allDrivers:[...state.dbDrivers,...state.apiDrivers]
            }

    }
}