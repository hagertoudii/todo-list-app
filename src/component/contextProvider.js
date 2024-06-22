import { createContext, useContext, useReducer} from 'react';



const inputEditContext = createContext(null);
export const InputEditProvider=({children})=>{
    //state
    <inputEditContext.Provider ></inputEditContext.Provider>
}



const ListContext = createContext(null);
const  ListDispatchContext = createContext(null);
export function ListProvider({children}) {
    const [data, dispatsh] = useReducer(reducer, initialTodos)
    return(
        <ListContext.Provider value={data} >
            <ListDispatchContext.Provider value={dispatsh}>
              {children}
            </ListDispatchContext.Provider>
        </ListContext.Provider>
    )
}



export function useList() {
    console.log(ListContext);
    return useContext(ListContext)
}

export function useDispatch() {
    console.log(ListDispatchContext);
    return useContext(ListDispatchContext)
}





const reducer = (state, action) => {
    switch(action.type) {
        case'ADD_TODO':{
            return [...state , action.payload ]
        }

        case'COMPLETED':{
            return action.payload 
        }

        case'DELETED':{
        return action.payload 
        }  

        case'UPDATE':{
        return action.payload
        }  
        
        default:
        throw Error('Unknown action: ' + action.type);
    }
}

const initialTodos = [
    { id:1, title:'delectus aut autem', completed:false },
    { id:2, title:"quis ut nam facilis et officia qui", completed: false},
    { id:3, title:"fugiat veniam minus", completed: false }
]