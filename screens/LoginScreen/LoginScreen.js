import { useState, useEffect } from "react";

import {
    Container,
    FormContainer,
    InputText,
    InputSecretText,
    ButtonPrimary,
    ButtonSecondary,
    ImputImage,
} from "../../components";

export default LoginScreen = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isReady, setIsReady ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsReady(email && password)
    }, [email, password]);

    const onSubmit = () => {
        console.log({"email": email, "password": password});

        setEmail("");
        setPassword("");
    };

    return <Container>
            <FormContainer
                title={"Увійти"}
                style={{
                    paddingTop: 32,
                    paddingBottom: 111,
                }}
            >
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
                    title={isLoading ? "Очікуйте..." : "Увійти"}
                    isReady={isReady}
                    style={{marginBottom: 16}}
                    onPress={onSubmit}
                />

                <ButtonSecondary
                    text={"Немає акаунту? "}
                    textButton={"Зареєструватися"}
                    onPress={() => {}}
                />
            </FormContainer>
        </Container>;
};