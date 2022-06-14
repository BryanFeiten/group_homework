import { Btn } from "./styles";

export default function Button({children, onClick}) {
    return (
        <Btn>{children}</Btn>
    );
}