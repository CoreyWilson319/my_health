import axios from "axios";
import React, { useState } from 'react';

function Login() {
    const [user, setUser] = useState("")
    return (
        <div>
            <form>
                <label>
                    Staff Username:
                    <input type="text" name="name" />
                </label>
                <label>
                    Staff Password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form>
                <label>
                    Patient Username:
                    <input type="text" name="name" />
                </label>
                <label>
                    Patient Password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login