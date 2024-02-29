// // App.js or any React component
// import React, { useState } from 'react';
// import axios from 'axios';

// const Admincreate= () => {
//   const [uid, setUid] = useState('');

//   const handleAssignAdminRole = async () => {
//     try {
//       await axios.post('http://localhost:5000/assign-admin-role', { uid });
//       alert('Admin role assigned successfully');
//     } catch (error) {
//       console.error('Error assigning admin role:', error);
//       alert('Failed to assign admin role');
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={uid} onChange={(e) => setUid(e.target.value)} />
//       <button onClick={handleAssignAdminRole}>Assign Admin Role</button>
//     </div>
//   );
// };

// export default Admincreate;
