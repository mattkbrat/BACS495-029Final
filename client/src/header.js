import Log_in from "./Log_in";

export default function MyHeader(){
        return (
            <div>
            <header className="App-header">
                <a className="heart" target="_self"
                    href='/'
                    rel="noopener noreferrer"
                >🏫
                </a>
                <input type="text" placeholder="🔍 Search..." name="search"/>
                {/*<Log_in/>*/}
            </header>
            </div>
        );
    }

