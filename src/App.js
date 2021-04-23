import "./App.sass";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";
import Footer from "./components/footer/footer.component";

const Home = React.lazy(() => import("./pages/home/home.component"));
const CheckOut = React.lazy(() =>
  import("./pages/checkout/checkout.component")
);

function App() {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={CheckOut} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
