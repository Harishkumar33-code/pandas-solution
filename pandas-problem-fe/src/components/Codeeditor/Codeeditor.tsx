"use client";

import Editor from "@monaco-editor/react"
import React from 'react';
import Split from 'react-split'

type CodeeditorProps = {

};

const Codeeditor: React.FC<CodeeditorProps> = () => {

    return <>
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
        <Split className='h-[calc(100vh-1px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
            <Editor 
                className="w-full overflow-auto"
                height="100vh"
                width="100%"
                theme="vs-dark"
                defaultLanguage="mysql"
            />          
            <div className='w-full px-5 overflow-auto text-sm font-medium mt-4 text-white'>TEST CASE</div>
        </Split>

        </div></>

}

export default Codeeditor;