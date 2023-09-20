import { useState, useEffect } from "react";
import { Alert } from "react-native";

import {
    Container,
    FormContainer,
    InputText,
    InputSecretText,
    ButtonPrimary,
    ButtonSecondary,
    ImputImage,
} from "../../components";

export default RegistrationScreen = () => {
    const [ avatar, setAvatar ] = useState(null);
    const [ login, setLogin ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isReady, setIsReady ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsReady(avatar && login && email && password)
    }, [avatar, login, email, password]);

    const onSubmit = () => {
        console.log({"avatar": avatar, "login": login, "email": email, "password": password});

        setAvatar(null);
        setLogin("");
        setEmail("");
        setPassword("");
    };

    return <Container>
            <FormContainer
                title={"Реєстрація"}
            >
                <InputText
                    value={login}
                    onChangeText={setLogin}
                    placeholder={"Логін"}
                    keyboardType={"default"}
                    inputMode={"text"}
                />

                <InputText
                    value={email}
                    onChangeText={setEmail}
                    placeholder={"Адреса електронної пошти"}
                    keyboardType={"email-address"}
                    inputMode={"email"}
                />

                <InputSecretText
                    value={password}
                    onChangeText={setPassword}
                    placeholder={"Пароль"}
                    keyboardType={"default"}
                    inputMode={"text"}
                    style={{marginBottom: 43}}
                />

                <ButtonPrimary
                    title={isLoading ? "Очікуйте..." : "Зареєстуватися"}
                    isReady={isReady}
                    style={{marginBottom: 16}}
                    onPress={onSubmit}
                />

                <ButtonSecondary
                    text={"Вже є акаунт? "}
                    textButton={"Увійти"}
                    onPress={() => {}}
                />

                <ImputImage
                    image={avatar}
                    onPress={image => setAvatar(image)}
                />
            </FormContainer>
        </Container>;
};