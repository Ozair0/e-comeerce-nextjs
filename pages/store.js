import Sidebar from "../Components/Store/sidebar";
export default function Home() {
  return (
    <div className="store">
      <Sidebar />
      <div className="col-8">
        <div>
          <p>Search Bar with Categorize By</p>
        </div>
        <div>
          <p>Products</p>
          <p>Pagination</p>
        </div>
      </div>
    </div>
  );
}
