import { Tag } from "@chakra-ui/react";

export interface IOwnProps {
    title: string;
    values: string[]
}

const TextWithChip: React.FC<IOwnProps> = ({title, values}) => {
    return (
        <div className="flex flex-row gap-6 items-center">
            <div className="text-s font-medium">{`${title} :`}</div>
            {values.map((value, i) => {
                return (<Tag key={`${value}_${i}`} style={{borderRadius: '20px', padding: "5px 10px"}}> <div className="text-s cursor-pointer">{value}</div></Tag>)
            })}
        </div>
    )
}

export default TextWithChip