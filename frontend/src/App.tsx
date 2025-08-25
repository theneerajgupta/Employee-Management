// App.js
import React, { useState } from 'react'
import './App.css'
import { TestApplication } from './pages/TestApplication'
import { TestPreview } from './pages/TestPreview'

function App() {
    return (
        <div className="min-h-screen w-screen flex flex-column items-start justify-center p-16 bg-base-300 text-base-content">
            <TestApplication />
            {/* <TestPreview /> */}
        </div>
    )
}

export default App;
