import Categore from "../Components/Store/categorie";
import Products from "../Components/Store/products";
import Sidebar from "../Components/Store/sidebar";
export default function Home() {
  return (
    <div className="store">
      <div className="sid_cat">
        <Sidebar />
        <Categore />
      </div>
      <Products />
    </div>
  );
}
