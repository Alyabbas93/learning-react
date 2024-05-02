// // Data.js
// import React, { useState } from "react";

// function Data({ id, name, updateName, onDelete }) {
//   const [editMode, setEditMode] = useState(false);
//   const [editedName, setEditedName] = useState(name);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleDeleteClick = () => {
//     onDelete(id);
//   };

//   const handleEditChange = (e) => {
//     setEditedName(e.target.value);
//   };

//   const handleEditSubmit = () => {
//     updateName({ id, name: editedName });
//     setEditMode(false);
//   };

//   return (
//     <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
//       {editMode ? (
//         <input type="text" value={editedName} onChange={handleEditChange} />
//       ) : (
//         <p>{name}</p>
//       )}
//       {editMode ? (
//         <>
//           <button onClick={handleEditSubmit}>OK</button>
//           <button onClick={() => setEditMode(false)}>Cancel</button>
//         </>
//       ) : (
//         <button onClick={handleEditClick}>Edit</button>
//       )}
//       <button onClick={handleDeleteClick}>Delete</button>
//     </div>
//   );
// }

// export default Data;
