import react from "react";
import ApiService from "../../pages/service/ApiService";

export default function LinkForm({ updateCallback }) {
  const [input, setInput] = react.useState({
    title: "",
    url: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.title.length < 1 || input.url.length < 1){
        return
    }
    ApiService.newLink(input)
      .then((isOk) => {
        if (isOk) {
          setInput({ title: "", url: "" });
          updateCallback();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={input.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="Url"
        value={input.url}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{" New "}</button>
    </form>
  );
}
