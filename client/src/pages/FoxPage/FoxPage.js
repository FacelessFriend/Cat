import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchFox } from '../../services/apiFox';
import ButtonAnimal from '../../components/buttonAnimal/buttonAnimal';
const FoxPage = () => {
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector((state) => state.animals.fox);
    const loadNewFox = () => {
        dispatch(fetchFox());
    };
    useEffect(() => {
        loadNewFox();
    }, [dispatch]);
    if (status === 'loading')
        return _jsx("div", { children: "Loading..." });
    if (status === 'failed')
        return _jsxs("div", { children: ["Error: ", error] });
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    if (!data)
        return _jsx("div", { children: "No dog found" });
    return (_jsxs("div", { children: [_jsx("h1", { children: "\u041B\u0438\u0441\u0438\u0447\u043A\u0438" }), _jsx("img", { src: data.image, alt: "Random fox", style: { maxWidth: '800px', maxHeight: '600px' } }), _jsx(ButtonAnimal, { onNext: loadNewFox })] }));
};
export default FoxPage;
