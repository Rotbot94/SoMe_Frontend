import {UtilService} from "@/utils/util-service";
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import axios from 'axios';

export default function Register() {

    const [disabled, setDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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

        await axios.post(process.env.NEXT_PUBLIC_SERVER + 'auth/register', {
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "password": formData.password,
                "email": formData.email,
            }, {
                headers: {
                    authorization: process.env.NEXT_PUBLIC_API_TOKEN
                },
                responseType: "json"
            }
        ).catch(function (error) {
            if (error.response) {
                setErrorMessage(error.response?.data?.message ?? 'An error has occured');
            } else if (error.request) {
                setErrorMessage('Error on request')
            } else {
                setErrorMessage('An error occured')
            }
        }).then((res) => {
            if (res?.statusText == 'Created') {
                setSuccessMessage('Registration succesful')
            }
        }).finally(() => {
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            setDisabled(false);
        });
    }

    return (
        <div className="flex flex-row justify-center text-center">
            <div className="container">
                <div className="mx-auto w-[600px]">
                    <h1 className="mb-2 text-white">Registration</h1>
                    <form className="flex flex-col gap-4" onSubmit={(e) => submit(e)}>
                        <div>
                            <div>
                                <div className="mb-2 !text-white block">
                                    <Label className="text-white"
                                        htmlFor="firstname"
                                        value="First Name"
                                    />
                                </div>
                                <TextInput onChange={(e) => validate(e)}
                                           id="firstname"
                                           type="text"
                                           name="first_name"
                                           placeholder="First Name"
                                           required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-white"
                                        htmlFor="lastname"
                                        value="Last Name"
                                    />
                                </div>
                                <TextInput onChange={(e) => validate(e)}
                                           id="lastname"
                                           type="text"
                                           name="last_name"
                                           placeholder="Last Name"
                                           required={true}
                                />
                            </div>
                            <div className="mb-2 block">
                                <Label className="text-white"
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
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className="text-white"
                                    htmlFor="password"
                                    value="Password"
                                />
                            </div>
                            <TextInput onChange={(e) => validate(e)}
                                       id="password"
                                       type="text"
                                       name="password"
                                       required={true}
                            />
                        </div>
                        {errorMessage && <div className="text-2xl text-red-500 font-medium">{errorMessage}</div>}
                        {successMessage && <div className="text-2xl text-green-500 font-medium">{successMessage}</div>}
                        <Button disabled={disabled} type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}