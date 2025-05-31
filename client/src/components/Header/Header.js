import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ReactionButtons = ({ onClick }) => {
    return (_jsxs("div", { style: { display: 'flex', gap: '10px' }, children: [_jsx("button", { onClick: onClick, children: "\uD83D\uDC4D" }), _jsx("button", { onClick: onClick, children: "\uD83D\uDE10" }), _jsx("button", { onClick: onClick, children: "\uD83D\uDC4E" })] }));
};
export default ReactionButtons;
