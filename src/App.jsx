import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NestedRoute from "./NestedRoute";
// import BookList from "./pages/BookList";
// import Book from "./pages/Book";
// import NewBook from "./pages/NewBook";
import "./style.css";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div style={{ textAlign: "center" }}>
      {/* <Routes>
        <Route path="/books" element={<h1>Extra Code</h1>}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books" end>
              Goto BookList
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<NestedRoute />} />

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.state}
    </div>
  );
}

export default App;
