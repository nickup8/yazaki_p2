import AdminLayout from "@/Layouts/AdminLayout";
import Seals from "./Seals";
import { Button, Typography } from "@mui/material";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function SealForm({ seal }) {
    const { data, setData, post, put, processing, errors } = useForm({
        code: seal ? seal.code : "",
        number: seal ? seal.number : "",
        title: seal ? seal.title : "",
        supplier: seal ? seal.supplier : "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (seal) {
            put(route("seals.update", seal.id), data);
        } else {
            post(route("seals.store", data));
        }
    };
    return (
        <>
            <Head
                title={
                    seal
                        ? `Изменить уплотнитель ${seal.code}`
                        : "Добавить новый уплотнитель"
                }
            />
            <Typography variant="h6" className="font-bold text-gray-700">
                {seal
                    ? `Изменить уплотнитель ${seal.code}`
                    : "Добавить новый уплотнитель"}
            </Typography>
            <form noValidate className="mt-6" onSubmit={onSubmit}>
                <div className="flex items-center w-full gap-4">
                    <div className="w-full">
                        <Typography
                            variant="body2"
                            component="label"
                            htmlFor="code"
                            className="text-gray-700"
                        >
                            Код уплотнителя (YPN)
                        </Typography>
                        <TextInput
                            id="code"
                            type="text"
                            name="code"
                            className="mt-1 block w-full"
                            autoComplete="code"
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
                            Номер уплотнителя (SPN)
                        </Typography>
                        <TextInput
                            id="number"
                            type="text"
                            name="number"
                            className="mt-1 block w-full"
                            autoComplete="number"
                            value={data.number}
                            onChange={(e) => setData("number", e.target.value)}
                        />
                        <InputError message={errors.number} className="mt-2" />
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
                            autoComplete="supplier"
                            value={data.supplier}
                            onChange={(e) =>
                                setData("supplier", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.supplier}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="body2"
                            component="label"
                            htmlFor="title"
                            className="text-gray-700"
                        >
                            Название
                        </Typography>
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            className="mt-1 block w-full"
                            autoComplete="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                </div>
                <div className="flex mt-4 gap-2">
                    <Button
                        type="submit"
                        variant="contained"
                        className="bg-gray-900"
                    >
                        {seal ? "Изменить" : "Добавить"}
                    </Button>
                    <Button
                        variant="outlined"
                        className="outline border-gray-700 text-gray-700"
                        component={Link}
                        href={seal ? route("seals.index") : route("seals")}
                    >
                        Отмена
                    </Button>
                </div>
            </form>
        </>
    );
}
SealForm.layout = (page) => (
    <AdminLayout>
        <Seals children={page} />
    </AdminLayout>
);
