import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Author } from "./AuthorModel";
import { GET_AUTHORS, REMOVE_AUTHOR } from "./query";

export const ListAuthors = (props: any) => {
  const { setEditingAuthor } = props;
  const { data, loading, error } = useQuery(GET_AUTHORS);

  const [removeAuthor, { }] = useMutation(REMOVE_AUTHOR, {
    refetchQueries: [
      { query: GET_AUTHORS },
      "getAuthors"
    ]
  });

  const handleRemove = (event: any, id: string) => {
    removeAuthor({ variables: { id: id } });
  };

  const handleUpdate = (event: any, author: Author) => {
    setEditingAuthor(author);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <div>
      <h1>Authors</h1>
      <ol>
        {!!data.authors && data.authors.map((author: Author) =>
          !!author && (
            <React.Fragment key={author._id}>
              <li>
                {author.firstName + " " + author.lastName}
              </li>
              <button onClick={(event) => handleRemove(event, author._id)}>Remove</button>
              <button onClick={(event) => handleUpdate(event, author)} style={{ marginLeft: ".5rem" }}>Update</button>
            </React.Fragment>
          )
        )}
      </ol>
    </div>
  )
}

