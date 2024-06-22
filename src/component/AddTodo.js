import React ,{useRef, useReducer, useState, createContext} from 'react'
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import DataLists from './DataLists';
import {v4 as uuidv4} from 'uuid';
import { useList, useDispatch } from './contextProvider.js'

import './styles.css'
// import EditTodo from './EditTodo';

// const jf = uuidv4()


export const inputEditContext = createContext(null);
 function AddTodos() {
  const data = useList()
  const dispatsh = useDispatch()
  
  const inpurRef = useRef(null);

  // handle function to addd todo in list 
const HandleClick = (e) => {
      e.preventDefault();
      const content = {
        id:uuidv4() ,
        title:inpurRef.current.value,
        completed:false
      }
      if(inpurRef.current.value !== "")
        dispatsh({ type:'ADD_TODO', payload:content  })
  
      console.log(data);
      
      inpurRef.current.value = ''
    }


// Handle complete list 
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
//////////////// Delete ///////////////////////////


//////////////// EDIT ///////////////////////////


return (
  <div>        
        <Form className='mb-3' onSubmit={HandleClick}>
          <Container >
            <Row className='align-items-center '>
              <Col xs={12} md={10} >
                <Form.Control 
                    ref={inpurRef}
                    
                    className='mt-2'  
                    name='title'
                    size="lg" 
                    type='text' 
                    placeholder='Add New Todo...'
                    
                />
              </Col>  

              <Col  md={2} xs={12}  >
                <div className='Add-btn'>
                  <Button  className=' px-5 mt-2 ' variant="primary" size='lg' type='submit'> 
                    Add
                  </Button>
                </div>
              </Col>

            </Row>
          </Container>
          
        </Form>

        { (data.length > 0 ) || <h2>  NO worked want to DO!!! </h2> }
        

        
          <DataLists Handlecompleted={HandleCompleted}    />
    </div>
  )
}

export default AddTodos
