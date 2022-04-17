import React, {useState} from 'react';
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {RequestsAPI} from "./request-api";

export const Request = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [responseText, setResponseText] = useState<string | null>(null);

    const onClickHandler = () => {
        setIsLoading(true);
        RequestsAPI.authTest(isSuccess)
            .then(({data}) => {
                setResponseText(data.errorText);
            })
            .catch((error) => {
                setResponseText(error.response ? error.response.data.errorText : error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div>
            <SuperCheckbox
                disabled={isLoading}
                checked={isSuccess}
                onChangeChecked={setIsSuccess}
            >Success</SuperCheckbox>
            <SuperButton disabled={isLoading} onClick={onClickHandler}>
                click to send request
            </SuperButton>
            <div>
                {responseText}
            </div>
        </div>
    );
};