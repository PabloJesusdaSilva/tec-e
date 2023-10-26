import Banner from './components/Banner';
import CategoryProduct from './components/CategoryProducts';
import ProductBar from './components/ProductBar';
import Header from './partials/Header';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <CategoryProduct />

        <ProductBar />
      </main>
    </>
  );
}

export default Home;
