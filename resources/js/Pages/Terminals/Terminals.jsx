import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Box,
    Button,
    Divider,
    IconButton,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Tooltip,
    Typography,
    TableBody,
} from "@mui/material";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

export default function Terminals({ children, terminals }) {
    console.log(terminals);
    return (
        <>
            <Head title="Контакты" />
            <Typography variant="h4" className="text-gray-700 font-bold mb-4">
                Терминалы
            </Typography>
            <Divider className="mb-1" />
            <div>
                <Link href="/terminals/add">
                    <Tooltip title="Добавить">
                        <IconButton>
                            <MdOutlineAddCircleOutline />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link href="/terminals/search">
                    <Tooltip title="Поиск">
                        <IconButton>
                            <MdOutlineSearch />
                        </IconButton>
                    </Tooltip>
                </Link>

                <Tooltip title="Показать все терминалы">
                    <Button
                        size="small"
                        className="text-gray-700 hover:text-gray-800"
                        component={Link}
                        href={route("terminals.all")}
                    >
                        Показать все терминалы
                    </Button>
                </Tooltip>
            </div>
            <Divider className="mt-1 mb-8" />

            {children}
            {terminals && (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="text-left">Код</TableCell>
                                <TableCell className="text-left">
                                    Номер
                                </TableCell>
                                <TableCell className="text-left">
                                    Поставщик
                                </TableCell>
                                <TableCell className="text-left">
                                    Название
                                </TableCell>
                                <TableCell className="text-left">
                                    Действия
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {terminals.data.map((terminal) => {
                                return (
                                    <TableRow key={terminal.id}>
                                        <TableCell className="text-left">
                                            {terminal.code}
                                        </TableCell>
                                        <TableCell className="text-left">
                                            {terminal.number}
                                        </TableCell>
                                        <TableCell className="text-left">
                                            {terminal.supplier}
                                        </TableCell>
                                        <TableCell className="text-left">
                                            {terminal.title}
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <Link
                                                href={`/terminals/${terminal.id}/edit`}
                                            >
                                                <Button
                                                    size="small"
                                                    className="text-gray-700 hover:text-gray-800"
                                                >
                                                    Редактировать
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
}

Terminals.layout = (page) => <AdminLayout children={page} />;
