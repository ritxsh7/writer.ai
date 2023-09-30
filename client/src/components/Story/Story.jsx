import React, { useEffect } from "react";
import { useState } from "react";

//styles
import RotateLoader from "react-spinners/RotateLoader";

//api
import axios from "axios";

//style for loader
const override = {
  position: "absolute",
  top: "50%",
  right: "50%",
  transform: "translateX(3rem)",
};

const Story = ({ title, setTitle, story, setStory, loading }) => {
  const [like, setLike] = useState(false);
  // =================================================like==============================================
  const handleLike = async () => {
    const body = {
      title: "City of Dreams",
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/story/like",
        body
      );
      setLike((like) => !like);
      console.log(response.data);
    } catch (err) {
      setLike(false);
      console.log(err.message);
    }
  };

  //======================================fetch story from db===========================================

  //testRoute
  // const testRoute = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:8000/test-route", {
  //       content: "hello",
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <div className="story">
      {loading && (
        <RotateLoader color="#0f53f2" cssOverride={override} size={20} />
      )}
      <div className="title text-xl md:text-3xl mb-4 md:px-3 text-white text-center md:text-left flex items-center">
        <h1 className="w-11/12">{title ? title : "Your title goes here..."}</h1>
        <div className="flex gap-1 hover:cursor-pointer w-4 h-4 md:w-max md:h-max items-center">
          <div>
            <ion-icon name="share-social"></ion-icon>
          </div>
          <div
            className={`${like ? "text-black" : "text-white"}`}
            onClick={handleLike}
          >
            <ion-icon name="thumbs-up"></ion-icon>
          </div>
        </div>
      </div>
      <p className="px-4">{story}</p>
      {/* <button onClick={testRoute}>Test</button> */}
    </div>
  );
};

export default Story;
