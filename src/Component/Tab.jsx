import React from 'react'
import { ChevronsRight } from 'lucide-react';
import TabsButton from './TabsButton'
import { ArrowDownUp } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { ListFilter } from 'lucide-react';
import { TextCursorInput } from 'lucide-react';
import { Download } from 'lucide-react';
import { ArrowUpToLine } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Split } from 'lucide-react';

const Tab = ( ) => {
  return (
    <div className='h-[5vh] bg-gray-300 flex items-center justify-between border-t-2 pl-2'>
      <div className='flex'>
      <TabsButton label = "Tool Bar" className="mr-2 border-r-2" icon={<ChevronsRight className='h-4 '/>} iconPosition="right" onClick={() => alert("ToolBar Clicked")}  />
      <TabsButton label ="Hide Field" className="mr-2" icon={<EyeOff className='h-3' />} onClick={()=>alert("Hide Field")} />
      <TabsButton label = "Sort"  icon = {<ArrowDownUp className='h-4' />} className="mr-2"  onClick={()=>alert("Sort")} />
      <TabsButton label ="Filter" icon ={<ListFilter className='h-3'  />} className="mr-2" onClick={()=>alert("Filter")}/>
      <TabsButton label = "Cell View" icon={<TextCursorInput className="h-3" />} onClick={()=>alert("Cell View")} />
      </div>
      <div className='flex'>
      <TabsButton label = "Import" className="mr-2 border rounded" icon={<Download className='h-3 ' />} onClick={()=>alert("Import")} />
      <TabsButton label ="Export" className="mr-2 border rounded" icon={<ArrowUpToLine className='h-3'  />} onClick ={()=>alert ("Export")} />
      <TabsButton label = "Share"  icon = {<ExternalLink className='h-4' />} className="mr-2 border rounded" onClick = {()=>alert("we are working on it ")}  />
      <TabsButton label ="New Action" icon ={<Split className='h-3 rotate-180'  />} className="mr-2 bg-green-700  text-white rounded " onClick ={()=>alert("we are working on it ")} />
      </div>
 
    </div>
  )
}

export default Tab