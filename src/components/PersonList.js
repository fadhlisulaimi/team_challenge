import '../css/style-persons.css';
import React from 'react';
import PersonCard from './PersonCard';

const PersonList = (props) => {
   const persons = props.persons.map(person => {
        return <PersonCard key={person.id} person = {person} onCallButtonClick={props.onCallButtonClick}/>;
   });
   return (
       <div className = "person-list">
           {persons}
       </div>
   )
}

export default PersonList;