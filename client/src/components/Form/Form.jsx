import React, { useRef, useState } from "react";

//api requests
import axios from "axios";

const Form = ({
  title,
  setTitle,
  story,
  setStory,
  prompt,
  setPrompt,
  loading,
  setLoading,
}) => {
  //getStory function

  const getStory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/get-story", {
        title: title,
        prompt: prompt,
        genre: "Thriller",
      });
      setTitle(response.data.title);
      setStory(response.data.data.BOT);
      console.log(story);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <form className="form">
      <h1 className="text-4xl mb-3 text-left leading-10 text-black py-3">
        Generate stories within{" "}
        <span className="text-gradient">seconds...</span>
      </h1>

      <label>Enter title here :</label>
      <input
        type="text"
        placeholder={`Ex : "Avengers"`}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Enter prompt here :</label>
      <input
        type="text"
        placeholder={`Ex : "In a city where everyone can fly..."`}
        onChange={(e) => setPrompt(e.target.value)}
      />
      {/* <select>
        <option></option>
      </select> */}
      <button
        className="mt-8 flex items-center justify-center gap-3"
        onClick={getStory}
      >
        Generate Story
        <ion-icon name="newspaper-outline" className="mt-3"></ion-icon>
      </button>
    </form>
  );
};

export default Form;
