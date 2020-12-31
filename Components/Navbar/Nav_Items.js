import Link from "next/link";

export default function Nac_Items({ Name, OC, href = "/" }) {
  return (
    <li className={"nav-item menu_item_s" + (OC === undefined ? "" : " " + OC)}>
      <Link href={href}>
        <a className="nav-link item_t">{Name}</a>
      </Link>
    </li>
  );
}
