import Nav_List_Items from "./Nav_List_Items";

export default function FirstMenu({ onLeave, onEnter }) {
  return (
    <div className="dropdown-menu d_item_div" onMouseLeave={onLeave}>
      <Nav_List_Items name="Phones" OC="user" onMouseEnter={onEnter} />
      <Nav_List_Items name="Cloths" onMouseEnter={onEnter} />
      <Nav_List_Items name="Home" OC="home" onMouseEnter={onEnter} />
      <Nav_List_Items name="Home Made" OC="home" onMouseEnter={onEnter} />
    </div>
  );
}
