import "./App.sass";
import Header from "./components/header/header.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/home/home.component"));

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Suspense fallback="Loading">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
