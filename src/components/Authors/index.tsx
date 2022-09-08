import { useState } from "react";
import { CreateAuthor } from "./CreateAuthor";
import { ListAuthors } from "./ListAuthors";

export const AuthorsContainer = () => {
  const [editingAuthor, setEditingAuthor] = useState(null);

  return (
    <div>
      <ListAuthors setEditingAuthor={setEditingAuthor} />
      <div>
        <CreateAuthor editingAuthor={editingAuthor} />
      </div>
    </div>
  )
}