import AdminLayout from "@/Layouts/AdminLayout";
import Terminals from "./Terminals";
import { Button, TextField, Typography } from "@mui/material";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

export default function TerminalSearch({ terminals, terminal }) {
    const { data, setData, post, get, processing, errors } = useForm({
        code: "",
    });

    console.log(terminal);

    const submit = (e) => {
        e.preventDefault();
        get(route("terminals.searchResponse", { code: data.code }));
    };
    return (
        <>
            <Typography variant="h6" className="font-bold text-gray-700">
                Поиск контактов
            </Typography>
            <form noValidate className="mt-6" onSubmit={submit}>
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
                            className="mt-1 block"
                            required
                            value={data.code}
                            onChange={(e) => setData("code", e.target.value)}
                        />
                        <InputError message={errors.code} className="mt-2" />
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <Button
                        type="submit"
                        variant="contained"
                        className="bg-gray-900"
                    >
                        Поиск
                    </Button>
                </div>
            </form>

            {terminals && <h1>{terminals}</h1>}
        </>
    );
}

TerminalSearch.layout = (page) => (
    <AdminLayout>
        <Terminals children={page} />
    </AdminLayout>
);
