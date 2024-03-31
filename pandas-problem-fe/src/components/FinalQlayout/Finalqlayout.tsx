import React from 'react';
import Split from 'react-split';
import Codeeditor from '../Codeeditor/Codeeditor';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { q1 } from '@/utils/questions/q1';

type FinalqlayoutProps = {

};

const Finalqlayout: React.FC<FinalqlayoutProps> = () => {
  return (
<Split className='split' minSize={0} sizes={[40, 60]}>
  <div className='scrollable-container'>
    <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white'>
      <div className='bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer select-none'>
        Description
      </div>
    </div>
    <QuestionDescription problem={q1} />
  </div>
  <div className='flex flex-col bg-dark-layer-1 relative bg-dark-fill-2' >
    <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white'>
      <div className='bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer select-none'>
        Mysql
      </div>
    </div>
    <Codeeditor></Codeeditor>
  </div>
</Split>

  
  );
}

export default Finalqlayout;