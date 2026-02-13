import { useState } from "react";
import "./SidebarMenu.css";

type SubItem = { label: string };
type Item = { label: string; subItems?: SubItem[] };

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  items: Item[];
};

export function SidebarMenu({ open, onClose, items }: SidebarProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {open && <div className="backdrop" onClick={onClose}></div>}

      <div className={`sidebar ${open ? "open" : ""}`}>
        <ul className="sidebar-list">
          {items.map((item) => (
            <li key={item.label} className="sidebar-item">
              <div
                className="sidebar-label"
                onClick={() =>
                  setActive(active === item.label ? null : item.label)
                }
              >
                {item.label} {item.subItems && "▼"}
              </div>
              {item.subItems && active === item.label && (
                <ul className="sidebar-sublist">
                  {item.subItems.map((sub) => (
                    <li key={sub.label} className="sidebar-subitem">
                      {sub.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
