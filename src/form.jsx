import { useState } from 'react';


export default function Form() {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [age, setAge] = useState(18);
 const [nationality, setNationality] = useState("");


 const handleSubmit = (e) => {
   e.preventDefault();
   alert(`Je suis ${firstName} ${lastName}. J'ai ${age} ans et je suis ${nationality}`);
 }


 return (
   <form onSubmit={handleSubmit}>
     <input
       type="text"
       value={firstName}
       onChange={(e) => setFirstName(e.target.value)}
     />
     <input
       type="text"
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
     />
     <input
       type="number"
       value={age}
       onChange={(e) => setAge(e.target.value)}
     />
     <select
       name="nationality"
       value={nationality}
       onChange={(e) => setNationality(e.target.value)}
     >
       <option value="">--Please choose an option--</option>
       <option value="francais">Français</option>
       <option value="anglais">Anglais</option>
       <option value="allemand">Allemand</option>
     </select>
     <button type="submit">Envoyer</button>
   </form>
 );
}
