import { Link, usePage } from "@inertiajs/react";
import {
    AppBar,
    Avatar,
    Box,
    Container,
    MenuList,
    Toolbar,
    Typography,
} from "@mui/material";
import ApplicationLogo from "./ApplicationLogo";

export default function Header() {
    const { auth } = usePage().props;
    console.log(auth.user);
    return (
        <AppBar className="bg-white">
            <Container maxWidth="2xl">
                <Toolbar>
                    <Box className="flex items-center">
                        <ApplicationLogo width="40" />
                        <Typography className="font-black text-2xl text-gray-700 ml-1">
                            P2
                        </Typography>
                    </Box>
                    <MenuList className="flex ml-6 grow"></MenuList>
                    <Box className="flex items-center text-gray-700">
                        <Avatar>
                            {auth.user.last_name[0].toUpperCase()}
                            {auth.user.name[0].toUpperCase()}
                        </Avatar>
                        <Box className="ml-2">
                            <Typography>
                                {auth.user.last_name} {auth.user.name}
                            </Typography>
                            <Typography className="text-xs">
                                {auth.user.rule.name}
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
