import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

function DropdownMenu({
  menu,
  type,
  handleChange,
  defaultValue,
  styles = "relative inline-block text-left",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [itemSelected, setItemSelected] = useState(defaultValue || menu[0]);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        hide();
        toggleRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        hide();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (e) => {
    e.stopPropagation();
    isOpen ? hide() : show();
  };

  return (
    <div className={styles}>
      {/* Dropdown Toggle Button */}
      <button
        ref={toggleRef}
        onClick={handleToggle}
        type="button"
        id="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        className="inline-flex w-full items-center justify-between gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm whitespace-nowrap cursor-pointer transition-all duration-150 hover:bg-slate-50 dark:hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400"
      >
        <span>{itemSelected}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-slate-600 dark:text-slate-300" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu List */}
      <ul
        ref={menuRef}
        id="dropdown-menu"
        aria-labelledby="dropdown-toggle"
        className={`${
          isOpen
            ? "opacity-100 scale-100 visibility-visible"
            : "opacity-0 scale-95 pointer-events-none"
        } absolute right-0 mt-1.5 p-1.5 min-w-40 max-h-60 overflow-y-auto text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-lg shadow-lg z-30 transition-all duration-150 origin-top-right`}
      >
        {menu.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setItemSelected(item);
              handleChange({ name: type, value: item });
            }}
          >
            <button
              type="button"
              onClick={hide}
              className={`w-full text-left px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 cursor-pointer focus:outline-none
                ${
                  item === itemSelected
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/40 dark:bg-indigo-500/10"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(DropdownMenu);
