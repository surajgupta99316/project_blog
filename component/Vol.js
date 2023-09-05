import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Vol = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [items, setItems] = useState([]);
  const addIt = () => {
    const newInputData = {
      id: new Date().getTime().toString(),
      name: inputData,
      content: inputContent
    };
    setItems([...items, newInputData]);
    setInputData("");
  };

  const deleteIt = (id) => {
    const updatedvalue = items.filter((elem) => {
      return elem.id !== id;
    });
    setItems(updatedvalue);
  };
  return (
    <>
      <input
        placeholder="Title"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <input
        placeholder="Content"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
      />
      <button onClick={addIt}>Sub</button>
      <button onClick={() => navigate("/")}>Submit</button> <div>{}</div>
      <div>
        {items.map((elem) => {
          return (
            <div key={elem.id}>
              <h3>{elem.name}</h3>
              <h3>{elem.content}</h3>
              <button onClick={() => deleteIt(elem.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Vol;
