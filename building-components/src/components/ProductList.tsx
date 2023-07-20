import { useEffect, useState } from "react";
import Button from "./Button";
import apiClient from "../services/api-client";

interface IUser {
  id: number;
  name: string;
}

const ProductList = ({ category }: { category: string }) => {
  //   const [products, setProducts] = useState<string[]>([]);

  //   useEffect(() => {
  //     console.log("Data fetching..", category);
  //     setProducts(["Ktm", "Dhan"]);
  //   }, [category]);

  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<IUser[]>("/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));
    apiClient.delete("/users/" + id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const handleAddUser = () => {
    const newUser = { id: 0, name: "Niraj" };
    const initialUser = [...users];
    setUsers([newUser, ...users]);

    apiClient
      .post("/users", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(initialUser);
      });
  };

  const handleUpdate = (user: IUser) => {
    const initialUsers = [...users];
    const updatedValue = { ...user, name: user.name + " Changed" };
    setUsers(users.map((u) => (user.id === u.id ? updatedValue : u)));
    apiClient.patch("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(initialUsers);
    });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}

      <Button variant="warning" className="my-2" onClick={handleAddUser}>
        Add User
      </Button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="flex-grow-1">{user.name}</span>
            <Button onClick={() => handleUpdate(user)} className="me-2">
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(user.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
