import react, { use, useState } from "react";

interface AddtodoProp {
  addtodo: (text: string) => void;
}
const Addtodo: react.FunctionComponent<AddtodoProp> = ({ addtodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: react.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addtodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="enter todo"
        onChange={e => setText(e.target.value)}
      ></input>
      <button type="submit">add</button>
    </form>
  );
};
