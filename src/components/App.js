import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((dev) => (
        <Note key={dev.key} title={dev.title} content={dev.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
