import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchDog } from '../../services/apiDog';
import ButtonAnimal from '../../components/buttonAnimal/buttonAnimal';
const DogPage = () => {
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector((state) => state.animals.dog);
    const loadNewDog = () => {
        dispatch(fetchDog());
    };
    useEffect(() => {
        loadNewDog();
    }, [dispatch]);
    if (status === 'loading')
        return _jsx("div", { children: "Loading..." });
    if (status === 'failed')
        return _jsxs("div", { children: ["Error: ", error] });
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    if (!data)
        return _jsx("div", { children: "No dog found" });
    return (_jsxs("div", { children: [_jsx("h1", { children: "\u0421\u043E\u0431\u0430\u0447\u043A\u0438" }), _jsx("img", { src: data.message, alt: "Random dog", style: { maxWidth: '800px', maxHeight: '600px' } }), _jsx(ButtonAnimal, { onNext: loadNewDog })] }));
};
export default DogPage;
