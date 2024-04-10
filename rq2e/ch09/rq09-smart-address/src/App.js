import { useState } from "react";

function Address() {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });
  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData((oldData) => ({ ...oldData, [key]: value }));
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Address line 1:
        <input value={data.address1} name="address1" onChange={onChange} />
      </label>
      <label>
        Address line 2:
        <input value={data.address2} name="address2" onChange={onChange} />
      </label>
      <label>
        Zip:
        <input value={data.zip} name="zip" onChange={onChange} />
      </label>
      <label>
        City:
        <input value={data.city} name="city" onChange={onChange} />
      </label>
      <label>
        State:
        <input value={data.state} name="state" onChange={onChange} />
      </label>
      <label>
        Country:
        <input value={data.country} name="country" onChange={onChange} />
      </label>
      <pre>{JSON.stringify(data, true, 2)}</pre>
    </form>
  );
}

function App() {
  return <Address />;
}

export default App;
