import { useState } from "react";
import Button from "./Button";
import { produce } from "immer";

const ManageComponentState = () => {
  // Object
  const [drink, setDrink] = useState({
    title: "Mojito",
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      country: "Franch",
      contact: 123,
    },
  });

  //   Array
  const [tags, setTags] = useState(["tech", "modern"]);

  //   Array and Object
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Digital Era", published: false },
    { id: 2, title: "Modern Era", published: true },
  ]);

  const handleIncresePrice = () => {
    // setDrink({
    //   ...drink,
    //   price: drink.price + 1,
    // });

    setDrink(
      produce(drink, (draft) => {
        draft.price = drink.price + 1;
      })
    );
  };

  const handleCustomer = () => {
    // setCustomer({
    //   ...customer,
    //   address: {
    //     ...customer.address,
    //     contact: 456,
    //   },
    // });

    setCustomer(
      produce(customer, (draft) => {
        draft.address.contact = 87384;
      })
    );
  };

  const handleTags = () => {
    // push
    // setTags([...tags, "Dramas"]);

    // setTags(
    //   produce(tags, (draft) => {
    //     draft.push("New");
    //   })
    // );

    // Update
    // setTags(tags.map((tag) => (tag === "tech" ? "Technology" : tag)));
    setTags(
      produce(tags, (draft) => {
        return draft.map((tag) => (tag == "tech" ? "Technology" : tag));
      })
    );
  };

  const handleBlogs = () => {
    // setBlogs(
    //   blogs.map((blog) =>
    //     !blog.published ? { ...blog, published: true } : blog
    //   )
    // );
    setBlogs(
      produce((draft) => {
        const blog = draft.find((blog) => blog.id === 1);
        if (blog) blog.published = true;
      })
    );
  };

  return (
    <>
      <h4>Manage Component State</h4>
      <div className="bg-warning p-3 rounded-3 mb-3">
        <h4>{drink.title}</h4>
        <p>{drink.price}</p>
        <Button onClick={handleIncresePrice}>Increase Price</Button>
      </div>
      <div className="bg-success p-3 rounded-3 mb-3">
        <h4>{customer.name}</h4>
        <p>{customer.address.country + ", " + customer.address.contact}</p>
        <Button variant="light" onClick={handleCustomer}>
          Change Contact
        </Button>
      </div>
      <div className="bg-danger p-3 rounded-3 mb-3">
        <h4>Tags</h4>
        <ul>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <Button variant="light" onClick={handleTags}>
          Change Tags
        </Button>
      </div>
      <div className="bg-warning p-3 rounded-3 mb-3">
        <ul>
          {blogs.map((blog) => (
            <li>
              {blog.title}, Status:{" "}
              {blog.published ? "Published" : "Not-published"}
            </li>
          ))}
        </ul>
        <Button variant="success" onClick={handleBlogs}>
          Change Active
        </Button>
      </div>
    </>
  );
};

export default ManageComponentState;
