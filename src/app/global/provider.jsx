"use client";

import store from "app/_store/store";
import { Provider } from "react-redux";


export default function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
