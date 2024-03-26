import { Typography } from "@mui/material";

export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p {...props} className={"text-sm text-red-600 " + className}>
            <Typography variant="body2" component="span">
                {message}
            </Typography>
        </p>
    ) : null;
}
