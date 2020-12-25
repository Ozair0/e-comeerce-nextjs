export default function Nac_Items({ Name, OC }) {
  return (
    <li className={"nav-item menu_item_s " + OC}>
      <a className="nav-link item_t" href="#">
        {Name}
      </a>
    </li>
  );
}
