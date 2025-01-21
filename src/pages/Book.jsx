import { useParams, useOutletContext } from "react-router-dom";
const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();

  return (
    <>
      <h1>
        Book {id}
        {obj.hello}
      </h1>
    </>
  );
};

export default Book;
