import React, { useState, useEffect } from "react";

//components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Story from "./components/Story/Story";

//data
import { stories } from "./constant/data.js";
import axios from "axios";

const App = () => {
  //states
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStoryFromDb = async () => {
      try {
        const result = await axios.post("http://localhost:8000/fetch-story", {
          title: "City of Dreams",
        });
        console.log(result.data);
        setStory(result.data.data.story);
        setTitle(result.data.data.title);
      } catch (err) {
        console.log(err.message);
      }
    };
    getStoryFromDb();
  }, []);

  return (
    <div className="app">
      <Header />
      <section className="main">
        <Form
          title={title}
          setTitle={setTitle}
          story={story}
          setStory={setStory}
          prompt={prompt}
          setPrompt={setPrompt}
          loading={loading}
          setLoading={setLoading}
        />
        <Story
          title={title}
          setTitle={setTitle}
          story={story}
          setStory={setStory}
          prompt={prompt}
          setPrompt={setPrompt}
          loading={loading}
          setLoading={setLoading}
        />
      </section>
    </div>
  );
};

export default App;
