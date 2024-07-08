import { Link } from "react-router-dom";
import "./App.css";
// import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export type DataItem = {
    id: string;
    title: string;
    pinned: boolean;
};

const data = [
    { id: "1", title: "Dashboard", pinned: true },
    { id: "2", title: "Banking", pinned: true },
    { id: "3", title: "Telefonie", pinned: true },
    { id: "4", title: "Help", pinned: false },
    { id: "5", title: "Warenbestand", pinned: false },
    { id: "6", title: "Auswahllisten", pinned: false },
];

function App() {
    const [pinnedItems, setPinnedItems] = useState<DataItem[]>([]);
    // const [unpinnedItems, setUnpinnedItems] = useState<DataItem[]>([]);

    useEffect(() => {
        const array = data.filter((item) => item.pinned === true);
        setPinnedItems(array);
    }, []);

    // useEffect(() => {
    //     const array = data.filter((item) => item.pinned === false);
    //     setUnpinnedItems(array);
    // }, []);

    return (
        <div>
            <div>
                <span>pinned</span>
                {pinnedItems.map((item) => {
                    return (
                        <Link to={"/"} key={item.id}>
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </div>
            {/* <div>
                <span>unpinned</span>
                {unpinnedItems.map((item) => {
                    return (
                        <Link to={"/"} key={item.id}>
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </div> */}
        </div>
    );
}

export default App;
