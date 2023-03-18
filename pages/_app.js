import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import "@/styles/globals.css";
import { Fragment } from "react";
import AlanHead from "@/src/AlanHead";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <AlanHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
