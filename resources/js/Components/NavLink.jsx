import { Link } from "@inertiajs/react";
import { Typography } from "@mui/material";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "no-underline inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-indigo-400 text-gray-900 focus:border-indigo-700"
                    : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            <Typography component="span" className="no-underline">
                {children}
            </Typography>
        </Link>
    );
}
