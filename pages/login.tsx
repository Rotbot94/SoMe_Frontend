import {Label, Button, TextInput} from "flowbite-react";
import {UtilService} from "@/utils/util-service";
import {useEffect, useState} from "react";
import {LoginService} from '@/utils/login-service';
import Router from "next/router";
import {UserService} from "@/utils/user-service";

export default function Login() {

    const [disabled, setDisabled] = useState(true);

    const validate = (event: any) => {
        const formData = UtilService.get().getFormData(event.target as HTMLFormElement);
        let objValues = Object.values(formData);
        let invalid = true;
        for (let i = 0; i < objValues.length; i++) {
            if (objValues[i] == '') {
                setDisabled(true);
                break;
            }
            if (i == objValues.length - 1) {
                invalid = false;
            }
        }
        if (!invalid) {
            setDisabled(false);
        }
    }

    const submit = async (event: any) => {
        setDisabled(true);
        event.preventDefault();
        const formData = UtilService.get().getFormData(event.target as HTMLFormElement);
        try {
            const res = await LoginService.get().login(formData);
            if (res?.status == 200 || res?.status == 201) {
                await UserService.get().getUser();
                await Router.push('/feed').finally(() => Router.reload());
            }
        } catch (e) {
            console.log(e);
            alert('email or password incorrect');
        }
    }

    return (
        <div className="flex flex-row justify-center text-center">
            <div className="container">
                <form className="w-6/12 mx-auto" onSubmit={(event) => submit(event)}>
                    <h1 className="mb-5">Login</h1>
                    <div className="mb-2">
                        <Label
                            htmlFor="email1"
                            value="Email"
                        />
                    </div>
                    <TextInput onChange={(e) => validate(e)}
                               id="email1"
                               type="email"
                               name="email"
                               placeholder="your@email.com"
                               required={true}
                    />
                    <div>
                        <div className="mb-2 ">
                            <Label
                                htmlFor="password"
                                value="Password"
                            />
                        </div>
                        <TextInput onChange={(e) => validate(e)}
                                   className="mb-4"
                                   id="password"
                                   type="password"
                                   name="password"
                                   required={true}
                        />
                    </div>
                    <Button className="mx-auto px-5" disabled={disabled} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}