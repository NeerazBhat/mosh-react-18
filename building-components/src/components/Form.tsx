import { FormEvent, useRef, useState } from "react";
import Button from "./Button";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     if (nameRef.current !== null) person.name = nameRef.current.value;
  //     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form action="#" className="p-3 bg-light rounded" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name" className="mb-1">
          Name
        </label>
        <input
          //   ref={nameRef}
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age" className="mb-1">
          Age
        </label>
        <input
          //   ref={ageRef}
          type="number"
          id="age"
          className="form-control"
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          value={person.age}
        />
      </div>
      <Button variant="success" type="submit" className="w-100">
        Submit
      </Button>
    </form>
  );
};

export default Form;
