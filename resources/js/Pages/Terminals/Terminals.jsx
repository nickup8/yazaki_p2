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
import { MdOutlineCollectionsBookmark } from "react-icons/md";

export default function Terminals({ children, terminals, message }) {
    return (
        <>
            <Head title={terminals ? "Все терминалы" : "Терминалы"} />
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
                    <IconButton
                        component={Link}
                        href="/terminals/all"
                        disabled={route().current("terminals.all")}
                    >
                        <MdOutlineCollectionsBookmark />
                    </IconButton>
                </Tooltip>
            </div>
            <Divider className="mt-1 mb-8" />

            {children}
            {terminals &&
                (terminals.data.length ? (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="text-left">
                                        Код
                                    </TableCell>
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
                                        Создан
                                    </TableCell>
                                    <TableCell className="text-left">
                                        Изменён
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
                                                {new Date(
                                                    terminal.created_at
                                                ).toLocaleString("ru", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                    second: "numeric",
                                                })}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {new Date(
                                                    terminal.updated_at
                                                ).toLocaleString("ru", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                    second: "numeric",
                                                })}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                <Button
                                                    component={Link}
                                                    href={`/terminals/edit/${terminal.id}`}
                                                    size="small"
                                                    className="text-gray-700 hover:text-gray-800"
                                                >
                                                    Редактировать
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Typography>Терминалы еще не добавлены</Typography>
                ))}
        </>
    );
}

Terminals.layout = (page) => <AdminLayout children={page} />;
