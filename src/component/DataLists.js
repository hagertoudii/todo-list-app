import React, {useState, useRef} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { useList, useDispatch } from './contextProvider.js'
import './styles.css'
import EditTodo from './EditTodo';
import Deletebox from './Deletebox.js';
import BoxItem from './BoxItem.js';



function DataLists(props) {
    const dispatsh = useDispatch()
    const data = useList()
    const [isEditing , setIsEditing]= useState(false);
    const [editInputID , setEditInputID]= useState('');
    const editInputRef=useRef(null)
    
  const { Handlecompleted} = props

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
  
 console.log('isEditing', isEditing);
  
  const dataMap = data.map((item) => 
    <ListGroup.Item 
        style={{cursor:'pointer', backgroundColor:'#885353' , opacity: `${item.completed? '0.6': '' }`  }} 
        className='list-group-item  list-todo shadow-sm p-3 mb-4  rounded clearfix
        d-flex align-content-center ' 
        as='li' 
        id = {item.id}
        key={item.id} 
        >

      {(isEditing && item.id === editInputID)?

      (<EditTodo  item={item} editInputRef={editInputRef} HandleSaveEdit = {HandleSaveEdit}/>)
      :
      (<BoxItem item={item} HandleEditbtn={HandleEditbtn} /> )
    }
    </ListGroup.Item>
        
  )
  return(
      <div className='m-auto text-start fs-3 ' >
        <Container  >
          <ListGroup className='list-group list-group-flush' variant='flush' as='ul'  >
            
            {dataMap}
            
          </ListGroup>
        </Container>
      </div>
  )
}

export default DataLists
