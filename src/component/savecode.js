const RenderData = () => {
    return data.map((item) => (
        <div key={item.id}>
            {edit === item ? (
                <div className="row">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        ref={inpurRef}
                    />
                    <button onClick={HandleUpdate} className="btn btn-success mx-2">
                        Update
                    </button>
                    <button onClick={HandleCancel} className="btn btn-warning">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="row">
                    <h4 className={`col-8 mx-2 ${item.completed ? 'text-decoration-line-through' : ''}`}>
                        {item.title}
                    </h4>
                    <button onClick={() => HandleCompleted(item)} className="btn btn-primary mx-2">
                        {item.completed ? 'Hide' : 'Show'}
                    </button>
                    <button onClick={() => HandleEdit(item)} className="btn btn-info mx-2">
                        Edit
                    </button>
                    <button onClick={() => HandleDelete(item)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            )}
        </div>
    ));
}




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const HandleEdit = (item) => {
    setIsEditing(true);
    setEditID(item.id);
    setInputRef(item.title);
   };
   
   const SaveEdit = (e) => {
    e.preventDefault();
    if (inputRef !== "") {
       const filterEdit = data.map((todo) => {
         if (todo.id === editID) {
           return { ...todo, title: inputRef };
         }
         return todo;
       });
       dispatch({ type: 'EDIT', payload: filterEdit });
    }
    setIsEditing(false);
    setEditID("");
    setInputRef("");
   };
   
   const CancelEdit = () => {
    setIsEditing(false);
    setEditID("");
    setInputRef("");
   };

//    These new functions will allow the user to edit existing to-do items. The HandleEdit function is triggered when the user clicks the edit button, and it sets the state to allow editing. The SaveEdit function is triggered when the user clicks the save button after editing, and it updates the title of the edited item. The CancelEdit function is triggered when the user clicks the cancel button after editing, and it resets the state to not allow editing.

// Additionally, add these new states and useEffect to the top of your code:

const [isEditing, setIsEditing] = useState(false);
const [editID, setEditID] = useState("");
const [inputRef, setInputRef] = useState("");

useEffect(() => {
 if (isEditing) {
    inputRef.current.focus();

 }
}, [isEditing]);

// Now, in your useEffect hook that dispatches the 'GET_TODOS' action, add a setIsEditing(false) statement at the end of the callback function. This ensures that if the to-do items are being re-rendered due to changes in state, the edit mode will be exited.

// Lastly, make sure to pass the SaveEdit and CancelEdit functions as props to the appropriate components, such


// ===============================================================================================================


const HandleEdit2 = (item) => {
    // Find the item that matches the edited item id and replace its title
    const filterEdit = data.map((todo) => {
        if (todo.id === item.id) {
            return { ...item, title: inpurRef.current.value }
        }
        return todo
    })

    // Reset the input value
    inpurRef.current.value = ''

    // Update the state with the edited list
    dispatsh({ type: 'EDITED', payload: filterEdit })
}

// =================================================================

// Map over items and create a list item for each item
(item) => (
    <li key={item.id}>
       {/* Check if isEditing is true and editId matches current item's id */}
       {isEditing && editId === item.id ? (
         <input
           defaultValue={item.title}
           onBlur={() => handleSave(item)}
           ref={inpurRefEdit}
         />
       ) : (
         <div>
           <input
             type="checkbox"
             checked={item.completed}
             onChange={() => HandleCompleted(item)}
           />
           <span
             onDoubleClick={() => handleDoubleClick(item)}
             style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
           >
             {item.title}
           </span>
           <button onClick={() => HandleDelete(item)}>Delete</button>
         </div>
       )}
    </li>
   )

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const [editableTodo, setEditableTodo] = useState(null);

const HandleEditbtn = (editItem) => {
  setEditableTodo(editItem);
 };


 //Create an input field and button for editing.
 <div>
 <input
    type="text"
    ref={editRef}
    onChange={(e) => setEditableTodo({ ...editableTodo, title: e.target.value })}
    value={editableTodo ? editableTodo.title : ""}
 />
 <button onClick={() => handleEditSubmit(editableTodo)}>Update</button>
</div>


//Create a handleEditSubmit function to handle the submission of the updated todo item.
const handleEditSubmit = (item) => {
  if (item.title !== "") {
     const updatedTodos = data.map((todo) => {
       if (todo.id === item.id) {
         return item;
       }
       return todo;
     });
 
     dispatch({ type: "UPDATE_TODO", payload: updatedTodos });
     setEditableTodo(null);
  }
 };

 //Update your reducer to handle the UPDATE_TODO action.
// ... other cases ...
/*
case "UPDATE_TODO":
 return action.payload;
*/
// ... other cases ...

//+++++++++++++++++++++++++++++++++++++++++