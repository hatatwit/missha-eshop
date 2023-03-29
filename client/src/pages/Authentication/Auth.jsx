import Login from "./Login";
import Register from "./Register";

import "./styles.scss";

export default function Auth() {
    return (
        <div className="auth">
            <Login/>
            <Register/>
        </div>
    )
}