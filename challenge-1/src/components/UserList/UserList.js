import Card from "../UI/Card"
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card>
      <h2>Приглашенные гости</h2>
      
        {props.guests.map((guest) => {
          return <div className="guest">
            Dear {guest.name} - {guest.age} лет {guest.mail}!
            </div>
            
          })
}
</Card>
         
   
   
  );
};

export default UserList;
