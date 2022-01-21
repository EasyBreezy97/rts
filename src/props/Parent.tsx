import { ChildAsFc } from "./Child";

const Parent = () => {
    return (
        <ChildAsFc color="red" onClick={() => console.log("clicked")}>
            aadas
        </ChildAsFc>
    );
};

export default Parent;
