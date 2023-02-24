import { useState } from "react";
import "./Popup.css";
import { add } from "../../store/PostSlice";
import { useDispatch } from "react-redux";


function Popup() {
  const [clickedSave, setClickedSave] = useState(false);
  const [clickedCancel, setClickedCancel] = useState(false);
  const [title, setTitle] = useState("");
  const [imgVal, setImgVal] = useState(null);
  const disPatch = useDispatch();
  let idx = 0;

  const uploadData = () => {
    

    disPatch(add({ title, img: URL.createObjectURL(imgVal), idx: idx++ }));
    
    setClickedSave(true);
    setImgVal("");
    setTitle("");
  };

  return (
    <div
      className="popupContainer"
      style={{ display: clickedSave || clickedCancel ? "none" : "block" }}
    >
      <span className="mainHeading">Add new post</span>

      <form className="formContainer">
        <span className="subHeading">Post title</span>
        <textarea
          placeholder="write here..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <input
          className="file" 
          onChange={(e) => {
            setImgVal(e.target.files[0]);
          }}
          type={"file"}
         
        />
         
      </form>
      <div className="btnContainer">
        <button
          className="btn"
          onClick={() => {
            setClickedCancel(true);
          }}
        >
          Cancel
        </button>
        <button className="btn" onClick={uploadData}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Popup;
