"use client";

import Editor from "@monaco-editor/react"
import React from 'react';
import Split from 'react-split'
import QuestionDescription from "../QuestionDescription/QuestionDescription";
import { q1 } from "@/utils/questions/q1";

type CodeeditorProps = {

};

const Codeeditor: React.FC<CodeeditorProps> = () => {

    return <>
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
                <div className='w-full overflow-auto'>
                    <Editor
                        height="90vh"
                        width="100%"
                        theme="vs-dark"
                        defaultLanguage="mysql"
                    />
                </div>
                        <div className='text-sm font-medium leading-5 text-white'><QuestionDescription problem={q1} /></div>
                        
            </Split>

        </div></>

}

export default Codeeditor;