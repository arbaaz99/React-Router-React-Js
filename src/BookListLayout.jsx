import { Link, Outlet } from "react-router-dom";

const BookListLayout = () => {
  return (
    <>
      <Link to="/books/1">Goto Book1</Link>
      <br />
      <Link to="/books/2">Goto Book2</Link>
      <br />
      <Link to="/books/new">Goto new</Link>
      <Outlet context={{ hello: "world" }} />
    </>
  );
};

export default BookListLayout;
