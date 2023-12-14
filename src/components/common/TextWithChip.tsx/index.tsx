import { Tag } from "@chakra-ui/react";

export interface IOwnProps {
    title: string;
    values: string[]
}

const TextWithChip: React.FC<IOwnProps> = ({title, values}) => {
    return (
        <div className="flex flex-row gap-6 items-center">
            <div className="text-xs font-medium">{title}</div>
            {values.map((value, i) => {
                return (<Tag> <div className="text-xs cursor-pointer">{value}</div></Tag>)
            })}
        </div>
    )
}

export default TextWithChip