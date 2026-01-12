import React from 'react'

export default function Page() {
  return (
    // 'overflow-hidden' on the parent cuts off the extra width
    <div className="w-full h-screen my-20 overflow-hidden">
      <iframe 
        src="https://app.virtualtour360.ai/contact/"
        title="Contact Form"
        className="md:w-[calc(100%+20px)] w-full h-full border-0"
        loading="lazy"
      />
    </div>
  )
}