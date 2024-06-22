import React from 'react'
import Form from 'react-bootstrap/Form';
import './styles.css'

const  EditTodo = ({item, editInputRef, HandleSaveEdit}) => {
    console.log(item.id);
    return (  
        <div className='w-100 '>
         
            <div className='divedit  list-group-item rounded clearfix
                 w-100'  > 
                <Form className='d-flex justify-content-around'   >

                    <Form.Control  type='text' className='inputedit mt-2 m-auto' ref={editInputRef}
                     name='title'  size="lg" placeholder={`${item.title}`} onBlur={HandleSaveEdit}/>
                
                    <button type='submit' className='okchange rounded p-2 m-2 ' onClick={HandleSaveEdit}>
                        <svg width="25px" height="25px" strokeWidth="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#f31212"><path d="M7 22h10" stroke="#f31212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 17V4a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#f31212" strokeWidth="2.5"></path><path d="M9 10.5l2 2 4-4" stroke="#f31212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </button>

                </Form>
            </div>
            
        </div>
    )

}
        
export default EditTodo;
