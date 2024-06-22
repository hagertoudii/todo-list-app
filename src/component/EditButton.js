import React, {createContext, useState} from 'react'
import { useList, useDispatch } from './contextProvider.js'

export const inputEditContext = createContext(null);

function EditButton({item}) {
    const data = useList()
    const dispatsh = useDispatch()
    const [isEditing , setIsEditing]= useState(false);
    const [editInputID , setEditInputID]= useState('');
  

    const HandleEditbtn =(item)=>{
        console.log('edit');
        setEditInputID(item.id)
        setIsEditing(true)
      
          console.log(`EditInputID ${editInputID}`);
      }
      
      const HandleSaveEdit = (e) => {
        e.preventDefault();
        const filterEditData = data.map(item => {
      
            if ( editInputRef.current.value !== '' && item.id === editInputID ) {
              return {...item, title: editInputRef.current.value}
            }
            return item
          })
          console.log(`filterEditData on Save input Edit ${filterEditData}`);
          console.log(filterEditData);
        
          dispatsh({type:'UPDATE' , payload:filterEditData })
      
        setEditInputID('')
        setIsEditing(false)
        
      }
    return (
        <div>
            <button className='Edit rounded p-2 m-2' onClick={() =>HandleEditbtn(item)}>
                <svg width="25px" height="25px" strokeweidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
        </div>
    )
}

export default EditButton
