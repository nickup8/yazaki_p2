import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Divider,
    IconButton,
    Tooltip,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@mui/material";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

export default function Seals({ children, seals }) {
    return (
        <>
            <Head title={seals ? "Все уплотнители" : "Уплотнители"} />
            <Typography variant="h4" className="text-gray-700 font-bold mb-4">
                Уплотнители
            </Typography>
            <Divider className="mb-1" />
            <div>
                <Tooltip title="Добавить">
                    <IconButton component={Link} href={route("seals.create")}>
                        <MdOutlineAddCircleOutline />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Поиск">
                    <IconButton
                        component={Link}
                        // href={route("seals.search")}
                    >
                        <MdOutlineSearch />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Показать все уплотнители">
                    <IconButton
                        component={Link}
                        href={route("seals.index")}
                        disabled={route().current("seals.index")}
                    >
                        <MdOutlineCollectionsBookmark />
                    </IconButton>
                </Tooltip>
            </div>
            <Divider className="mt-1 mb-8" />
            {children}

            {seals &&
                (seals.data.length ? (
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
                                {seals.data.map((seal) => {
                                    return (
                                        <TableRow key={seal.id}>
                                            <TableCell className="text-left">
                                                {seal.code}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {seal.number}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {seal.supplier}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {seal.title}
                                            </TableCell>
                                            <TableCell className="text-left">
                                                {new Date(
                                                    seal.created_at
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
                                                    seal.updated_at
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
                                                <Link
                                                    href={`/seals/edit/${seal.id}`}
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
                ) : (
                    <Typography>Терминалы еще не добавлены</Typography>
                ))}
        </>
    );
}
Seals.layout = (page) => <AdminLayout children={page} />;
