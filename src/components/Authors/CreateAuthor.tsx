import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { ADD_AUTHOR, GET_AUTHORS, UPDATE_AUTHOR } from "./query";

export const CreateAuthor = (props: any) => {
  const { editingAuthor } = props;

  const [author, setAuthor] = useState({
    _id: null,
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    setAuthor(editingAuthor);
    setIsEditing(editingAuthor ? true : false);
  }, [editingAuthor]);

  const [isEditing, setIsEditing] = useState(editingAuthor ? true : false);

  const [addAuthor, { loading }] = useMutation(ADD_AUTHOR, {
    refetchQueries: [
      { query: GET_AUTHORS },
      "authors",
    ]
  });

  const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
    refetchQueries: [
      { query: GET_AUTHORS },
      "authors",
    ]
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (isEditing) {
      updateAuthor({ variables: { author } });
    }
    else {
      addAuthor({ variables: { author } });
    }
    setAuthor({
      _id: null,
      firstName: "",
      lastName: "",
    });
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>First Name</label>
        <input
          type="text"
          value={author?.firstName}
          onChange={(e) => {
            setAuthor({ _id: author._id, firstName: e.target.value, lastName: author.lastName });
          }}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          value={author?.lastName}
          onChange={(e) => {
            setAuthor({ _id: author._id, firstName: author.firstName, lastName: e.target.value });
          }}
        />
        <button disabled={loading} type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}