export default function SecondMenu({ onLeave, onEnter }) {
  return (
    <ul
      className="dropdown-menu d_item_div_2"
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      <li className="d_item" href="#">
        Cars
      </li>
      <li className="d_item" href="#">
        Cars
      </li>
      <li className="d_item" href="#">
        Cars
      </li>
    </ul>
  );
}
