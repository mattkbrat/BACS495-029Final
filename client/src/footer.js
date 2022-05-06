import {useContext} from "react";
import {Context} from "./UserContext";


export default function MyFooter() {
    const { user } = useContext(Context);

    return (
        <div>
            <footer className="App-footer">
                <div className="flexcon">
                    <p>
                        Made with
                    </p>
                    <p className="heart"> ❤ </p>
                    <p>
                        by <a href="https://github.com/mattkbrat/" rel="noopener" target="_blank">Matt</a>
                    </p>
                    <div>
                        {user ? (
                            <p>
                                User: {user[2].name}
                            </p>
                        ) : (
                            <p>
                                No user
                            </p>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
}