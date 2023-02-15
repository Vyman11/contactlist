import React , {useState} from 'react' 
// import "./ContactList.css" 
import "./Style.css" 
 
function ContactList() { 
    const [contacts, setContacts] = useState([ 
        { name: 'said', phone: '0652578456' , ville: "Martil"}, 
        { name: 'ilyas', phone: '0658930014' , ville: "Jadida"}, 
        { name: 'leila', phone: '0658223033' , ville: "Oujda"} 
      ]); 
     
      const [newName, setNewName] = useState(''); 
      const [newPhone, setNewPhone] = useState(''); 
      const [newCity, setNewCity] = useState(''); 
      const [sortBy, setSortBy] = useState(''); 
      const [searchTerm, setSearchTerm] = useState(''); 
     
      const handleSubmit = (e) => { 
        e.preventDefault(); 
        setContacts([...contacts, { name: newName, phone: newPhone, ville: newCity}]); 
        setNewName(''); 
        setNewPhone(''); 
        setNewCity(''); 
      } 
     
      const handleDelete = (index) => { 
        setContacts(contacts.filter((contact, i) => i !== index)); 
      } 
     
      const handleSort = (sortType) => { 
        setSortBy(sortType); 
      } 
     
      const handleSearch = (e) => { 
        setSearchTerm(e.target.value); 
      } 
     
      const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        contact.phone.includes(searchTerm) || 
        contact.ville.toLowerCase().includes(searchTerm.toLowerCase()) 
      ); 
     
      const sortedContacts = filteredContacts.sort((a, b) => { 
        if (sortBy === 'name') { 
          return a.name.localeCompare(b.name); 
        }  
      }); 
     
      return ( 
        <div className='context'> 
          <h1 className='title'>Contacts</h1> 
          
          <form onSubmit={handleSubmit}> 
            <label> Name: </label> 
              <input type="text" className='input_C' value={newName} onChange={e => setNewName(e.target.value)} /> <br></br>
             
            <label> Phone: </label>
              <input type="text" className='input_C' value={newPhone} onChange={e => setNewPhone(e.target.value)} /> <br></br>
             
            <label className='cii'>  City: </label> 
              <input type="text" className='input_C' value={newCity} onChange={e => setNewCity(e.target.value)} />  <br></br>
            
            <button className='button-29' type="submit">Add</button> 
          </form> 
            
          
          <h1 className='title'>Contact list</h1> 
          
          <label> Search: </label> 
            <input type="text" className='input_C' value={searchTerm} onChange={handleSearch} /> <br></br>
            
          <div className='sort-buttons'> 
            <button className='button-31' onClick={() => handleSort('name')}>Sorted by name</button> 
          </div> 
          
          <ul> 
        {sortedContacts.map((contact, index) => ( 
       <div className='cart' >   <li key={index}> 
         <div className='lkt'> <b>{contact.name}</b> - {contact.phone} - {contact.ville} </div>
          <div className='dl'>  <button className='button-30' onClick={() => handleDelete(index)}>Delete</button> </div>
          </li> </div>
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default ContactList;