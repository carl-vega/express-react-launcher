import './App.css';
// package imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
// pages directory imports
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
// component directory imports
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  const [loggedIn, setloggedIn] = useState(false)
  const [width, setWidth] = useState("0%");
  const [border, setBorder] = useState("none")
  const openSidenav = () => { setWidth("25%"); setBorder("1px solid rgba(0, 0, 255, 0.25") };
  const closeSidenav = () => { setWidth("0%"); setBorder("none") };

  return (
    <>
      <ApolloProvider client={client}>
        <Navbar openSidenav={openSidenav} />
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="message" element={<Messages />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
        <SideNav width={width} closeSidenav={closeSidenav} name={"Cool User"} loggedIn={loggedIn} border={border} />
      </ApolloProvider>
    </>
  );
}

export default App;
