'use client'

import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const AnimatedCodeEditor = () => {
  const [displayedCode, setDisplayedCode] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [currentLanguage, setCurrentLanguage] = useState('python')

  const codeSnippets = {
    python: `def HelloWorld():
    print("Hello, World!")
    
HelloWorld()`,
    cpp: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,

    java: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
  }

  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      margin: 0,
      background: 'transparent',
      fontSize: '1rem'
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const languages = Object.keys(codeSnippets)
    const currentCode = codeSnippets[languages[loopNum % languages.length] as keyof typeof codeSnippets]

    if (!isDeleting && displayedCode !== currentCode) {
      timeout = setTimeout(() => {
        setDisplayedCode(currentCode.slice(0, displayedCode.length + 1))
        setCurrentLanguage(languages[loopNum % languages.length] as keyof typeof codeSnippets)
      }, 50)
    } else if (isDeleting && displayedCode !== '') {
      timeout = setTimeout(() => {
        setDisplayedCode(displayedCode.slice(0, -1))
      }, 30)
    } else if (displayedCode === currentCode) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (displayedCode === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedCode, isDeleting, loopNum])

  return (
    <div className='max-w-[30rem] w-full h-[16rem] opacity-95 rounded-lg overflow-hidden shadow-xl bg-[#282c34] text-white'>
      <div className='h-8 bg-[#21252b] flex items-center px-4 space-x-2'>
        <div className='w-3 h-3 rounded-full bg-red-500'></div>
        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
        <div className='w-3 h-3 rounded-full bg-green-500'></div>
        <div className='ml-4 px-2 py-0.5 rounded text-sm text-gray-500'>{currentLanguage}</div>
      </div>
      <div className='p-6 overflow-auto h-[calc(100%-32px)] relative'>
        <SyntaxHighlighter
          language={currentLanguage}
          style={customStyle}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{ minWidth: '1.25rem' }}
          wrapLongLines={true}
          customStyle={{
            background: 'transparent',
            margin: 0,
            padding: 0
          }}
        >
          {displayedCode}
        </SyntaxHighlighter>
        <div className='inline-block w-2 h-4 bg-white opacity-75 animate-pulse absolute'></div>
      </div>
    </div>
  )
}

export { AnimatedCodeEditor }
