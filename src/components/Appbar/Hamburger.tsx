import { Dispatch, SetStateAction } from "react";

type HamburgerProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ open, setOpen }: HamburgerProps) => {
    return (
        <svg
            className="tablet:hidden"
            width="30"
            height="30"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpen(!open)}
        >
            <line x1="9.5" y1="8.5" x2="34.5" y2="8.5" stroke-linecap="round" className="stroke-white stroke-[3]" />
            <line x1="9.5" y1="20.5" x2="22.5" y2="20.5" stroke-linecap="round" className="stroke-white stroke-[3]" />
            <line x1="9.5" y1="32.5" x2="34.5" y2="32.5" stroke-linecap="round" className="stroke-white stroke-[3]" />
        </svg>
    );
};

export default Hamburger;
