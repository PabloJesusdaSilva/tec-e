import Banner from './components/Banner';
import CategoryProduct from './components/CategoryProducts';
import Header from './partials/Header';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <CategoryProduct />
      </main>
    </>
  );
}

export default Home;
