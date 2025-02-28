import { useRef, useState } from "react";
import { Data } from "react-csv/components/CommonPropTypes";

export const useForm = () => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const refScroll = useRef(null as any)
    const [result, setResult] = useState({status: false, error: ""} as any);
    const [resultCsv, setResultCsv] = useState<string | Data | (() => string | Data)>([]);
    const sendForm = () => {
        if (ref.current === null) return;
        setResult({loading: true})
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: ref.current.value.split("\n") })
        };
        fetch('/api/batchcheck', requestOptions)
            .then(response => response.json())
            .then(data => {
                setResult(data);
                if (data.data !== undefined) {
                    setResultCsv([["#", "Адрес", "Баланс", "Транзакции", "Объем через мост", "Объем через мост + биржи", "Активных дней / недель / месяцев", "Последняя транзакция"], ...data.data.map((v: any, index: number) => [String(index + 1), String(v.contract), String(v.balance), String(v.nonce), String(v.bridgesVolume), String(v.bridgesWithCexVolume), String(v.txTimestamps), String(v.lastTx)])]);
                }
                setTimeout(() => refScroll.current.scrollIntoView(), 500);
            });
    };
    
    return {sendForm, ref, refScroll, result, resultCsv};
}