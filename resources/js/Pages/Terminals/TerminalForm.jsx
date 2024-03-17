import AdminLayout from "@/Layouts/AdminLayout";
import Terminals from "./Terminals";
import { Button, TextField, Typography } from "@mui/material";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function TerminalForm() {
    const { data, setData, post, put, errors, processing } = useForm({
        code: "",
        number: "",
        supplier: "",
        title: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("terminals.store", data));
    };
    return (
        <>
            <Typography variant="h6" className="font-bold text-gray-700">
                Добавить новый контакт
            </Typography>
            <form className="mt-6" onSubmit={onSubmit} noValidate>
                <div className="flex items-center w-full gap-4">
                    <div className="w-full">
                        <Typography
                            variant="body2"
                            component="label"
                            htmlFor="code"
                            className="text-gray-700"
                        >
                            Код контакта (YPN)
                        </Typography>
                        <TextInput
                            id="code"
                            type="text"
                            name="code"
                            className="mt-1 block w-full"
                            required
                            value={data.code}
                            onChange={(e) => setData("code", e.target.value)}
                        />
                        <InputError message={errors.code} className="mt-2" />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="body2"
                            component="label"
                            htmlFor="number"
                            className="text-gray-700"
                        >
                            Номер контакта (SPN)
                        </Typography>
                        <TextInput
                            id="number"
                            type="text"
                            name="number"
                            className="mt-1 block w-full"
                            value={data.number}
                            onChange={(e) => setData("number", e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="body2"
                            component="label"
                            htmlFor="supplier"
                            className="text-gray-700"
                        >
                            Поставщик
                        </Typography>
                        <TextInput
                            id="supplier"
                            type="text"
                            name="supplier"
                            className="mt-1 block w-full"
                            value={data.supplier}
                            onChange={(e) =>
                                setData("supplier", e.target.value)
                            }
                        />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="body2"
                            component="label"
                            htmlFor="title"
                            className="text-gray-700"
                        >
                            Наименование
                        </Typography>
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            className="mt-1 block w-full"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex mt-4 gap-2">
                    <Button
                        type="submit"
                        variant="contained"
                        className="bg-gray-900"
                    >
                        Создать
                    </Button>
                    <Button
                        variant="outlined"
                        className="outline border-gray-700 text-gray-700"
                        component={Link}
                        href={route("terminals.index")}
                    >
                        Отмена
                    </Button>
                </div>
            </form>
        </>
    );
}

TerminalForm.layout = (page) => (
    <AdminLayout>
        <Terminals children={page} />
    </AdminLayout>
);
