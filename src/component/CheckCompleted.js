import React from 'react'
import { useList, useDispatch } from './contextProvider'
export default function CheckCompleted() {
    const List = useList()
    const dispatsh = useDispatch()

    const HandleCompleted = (item) => {
        const filterComplete = List.map( (todo) => 
        {
           if(todo.id === item.id){
           return {...item, completed:!item.completed}
          } 
          return todo
        })

        dispatsh ({type:'COMPLETED', payload:filterComplete })
      }
  return (
    <div>
      
    </div>
  )
}
