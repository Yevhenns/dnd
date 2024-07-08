import { Link } from "react-router-dom";
import { DataItem } from "../../App";

type TabProps = {
    heading: string;
    data: DataItem[];
};

export function Tab({ data, heading }: TabProps) {
    return (
        <div>
            <span>{heading}</span>
            {data.map((item) => {
                return (
                    <Link to={"/"} key={item.id}>
                        <span>{item.title}</span>
                    </Link>
                );
            })}
        </div>
    );
}
