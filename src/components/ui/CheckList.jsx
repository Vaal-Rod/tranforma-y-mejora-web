import { HiOutlineCheck } from "react-icons/hi";
import "./CheckList.css";

export default function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span className="check-list__mark" aria-hidden="true">
            <HiOutlineCheck size={16} strokeWidth={2.6} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
