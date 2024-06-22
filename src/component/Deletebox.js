import React, { useContext } from 'react'
import { useList, useDispatch } from './contextProvider.js'
// import {ListContext , ListDispatchContext } from './contextProvider.js'


function Deletebox({item }) {
    const data = useList()
    const dispatsh = useDispatch()
    // const {data} = useContext(ListContext)
    // const {dispatsh} = useContext(ListDispatchContext);

    console.log(data, 'list');
    console.log(dispatsh, 'dispatch');

    const HandleDelete = (item) => {
        console.log('delete', item);
        const filterDelete = data.filter((todo) => {
           return todo.id !== item.id
        })
        console.log(filterDelete);
  
        dispatsh ({type:'DELETED', payload: filterDelete })
    }
  
  return (
    <div>

        <button className='trash rounded p-2 m-2' onClick={() =>HandleDelete(item)} >
            <svg width="25px" height="25px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75" stroke="#f31212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
      
    </div>
  )
}

export default Deletebox
