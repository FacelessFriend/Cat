import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CatPage from './pages/CatPage/CatPage';
import DogPage from './pages/DogPage/DogPage';
import FoxPage from './pages/FoxPage/FoxPage';
// import RabbitPage from './pages/RabbitPage/RabbitPage';
const NavigationButtons = () => {
    const navigate = useNavigate();
    return (_jsxs("nav", { style: { padding: '10px' }, children: [_jsx("button", { onClick: () => navigate('/cat'), style: { margin: '0 10px', padding: '5px 10px' }, children: "\u041A\u043E\u0442\u0438\u043A\u0438" }), _jsx("button", { onClick: () => navigate('/dog'), style: { margin: '0 10px', padding: '5px 10px' }, children: "\u0421\u043E\u0431\u0430\u0447\u043A\u0438" }), _jsx("button", { onClick: () => navigate('/fox'), style: { margin: '0 10px', padding: '5px 10px' }, children: "\u041B\u0438\u0441\u0438\u0447\u043A\u0438" })] }));
};
const App = () => {
    return (_jsxs(Router, { children: [_jsx(NavigationButtons, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/cat", element: _jsx(CatPage, {}) }), _jsx(Route, { path: "/dog", element: _jsx(DogPage, {}) }), _jsx(Route, { path: "/fox", element: _jsx(FoxPage, {}) })] })] }));
};
export default App;
