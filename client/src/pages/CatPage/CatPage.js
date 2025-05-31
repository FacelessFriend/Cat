import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchCat } from '../../services/apiCat';
import ButtonAnimal from '../../components/buttonAnimal/buttonAnimal';
const CatPage = () => {
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector((state) => state.animals.cat);
    const loadNewCat = () => {
        dispatch(fetchCat());
    };
    useEffect(() => {
        loadNewCat();
    }, [dispatch]);
    if (status === 'loading')
        return _jsx("div", { children: "Loading..." });
    if (status === 'failed')
        return _jsxs("div", { children: ["Error: ", error] });
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    if (!data || data.length === 0)
        return _jsx("div", { children: "No cat found" });
    return (_jsxs("div", { children: [_jsx("h1", { children: "\u041A\u043E\u0442\u0438\u043A\u0438" }), _jsx("img", { src: data[0].url, alt: "Random cat", style: { maxWidth: '640px', maxHeight: '480px' } }), _jsx(ButtonAnimal, { onNext: loadNewCat })] }));
};
export default CatPage;
