interface CodeProps {
    code: string;
}

function Codeblock({code}: CodeProps) {
    return (
        <div className="bg-[#111111] p-2 border-1 border-[#2d2d2d]">
            <code className="text-white whitespace-pre-wrap">{code}</code>
        </div>
    )
}

export default Codeblock;