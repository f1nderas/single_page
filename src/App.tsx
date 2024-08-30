import Consultation from "./app/consultation/Consultation";
import Fifth from "./app/fifth/Fifth";
import First from "./app/first/First";
import Fourth from "./app/fourth/Fourth";
import Info from "./app/info/Info";
import Reviews from "./app/reviews/Reviews";
import Second from "./app/second/Second";
import Third from "./app/third/Third";
import { Layout } from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Reviews />
      <Consultation />
      <Info />
    </Layout>
  );
};

export default App;
