import "./App.sass";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";
import Footer from "./components/footer/footer.component";

const Home = React.lazy(() => import("./pages/home/home.component"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
