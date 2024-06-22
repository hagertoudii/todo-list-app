import React from 'react'
import { useList, useDispatch } from './contextProvider.js'
import Deletebox from './Deletebox.js'

function BoxItem({HandleEditbtn, item}) {

    const dispatsh = useDispatch()
    const data = useList()

    const HandleCompleted = (item) => {
        const filterComplete = data.map( (todo) => 
        {
           if(todo.id === item.id){
           return {...item, completed:!item.completed}
          } 
          return todo
        })
    
        dispatsh ({type:'COMPLETED', payload:filterComplete })    
    }

    
    return (
        <div className='w-100'>
            <div className='divItems d-flex  w-100' > 

            <div className='d-flex card-title align-self-center'  onClick={() => HandleCompleted(item)} style = {{width:' 75%',  textDecoration: `${item.completed? 'line-through': '' }`}}>
                <input  type='button' className='text-wrap  text-start form-control-plaintext ' 
                style={{color:'#F2EBBF'}}
                value={item.title} >
                </input>
            </div>

            <div className='d-flex  m-auto justify-content-end' style={{zIndex: '100'}}> 
                

                <Deletebox item={item}/>

                <button className='Edit rounded p-2 m-2' onClick={() =>HandleEditbtn(item)}>
                <svg width="25px" height="25px" strokeweidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
            </div>


            </div>     
        </div>
    )
}

export default BoxItem
