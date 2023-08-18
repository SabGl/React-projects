import Form from "./Form";

const NewGuest = (props) => {

  const addDataHandler = (userData) => {
    props.onUserData(userData);
  };

  return (
    <>
    <Form onUserData={addDataHandler} />
    </>
  );
};

export default NewGuest;
