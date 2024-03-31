"use client";

import React from 'react';
import CsvToAsciiTable from '../Tableviz/CsvToAsciiTable';



type QuestionDescriptionProps = {
    problem: any
}
function formatToLeetCodeStyle(text: any) {
    const paragraphs = text.trim().split('\n').map((line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => <p className='mt-3'>{line}</p>);
    return (
        <div className='pl-4 mt-3'>
            {paragraphs}

        </div>
    );
}



const QuestionDescription: React.FC<QuestionDescriptionProps> = ({ problem }) => {
    const problemStatement = formatToLeetCodeStyle(problem.problemStatement)
    return (
        <>
            <div className='bg-dark-layer-1'>
                <div className='pl-4 mt-3'>
                    <div>
                        <h1 className='font-medium text-white text-2xl '>{problem.title}</h1>
                    </div>
                    <div className='font-small text-white '>
                        {problemStatement}
                    </div>
                    <br />
                    <p className='font-medium text-white text-2xl '>Input:</p>
                    <div className='example-card flex justify-center'>
                        <CsvToAsciiTable csvData={problem.input1} />
                    </div>
                    <p className='font-medium text-white text-2xl '>Output:</p>
                    <div className='example-card flex justify-center'>
                        <CsvToAsciiTable csvData={problem.output1} />
                    </div>
                </div>
            </div>
        </>
    )

}
export default QuestionDescription;
