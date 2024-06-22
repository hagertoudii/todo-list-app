import React from 'react'
import Container from 'react-bootstrap/Container';
import NavbarPage from './NavbarPage';
import AddTodo from './AddTodo';
import './styles.css'
import {ListProvider} from './contextProvider'
import DataLists from './DataLists';




function Page() {
  
  return (
    <ListProvider>
      <div className='mw-50  h-100% p-2 card' variant="light" bg="info" >
          
        <NavbarPage />
          
        <Container fluid="sm">
          <AddTodo />
          <DataLists />
        </Container>


        
      </div>
    </ListProvider>
    
  )
}

export default Page;
