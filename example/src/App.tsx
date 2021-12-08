import React from 'react'

import { BeforeAfter } from 'react-simple-before-after'

function App() {
  return (
    <div className='d-flex flex-column h-100 App'>
      <main className='flex-shrink-0'>
        <div className='bg-dark text-light py-5 mb-5'>
          <div className='container col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
              <div className='col-10 col-sm-8 col-lg-6 mx-auto'>
                <h1 className='display-5 fw-bold'>React simple Before After</h1>
                <p className='lead mb-4'>
                  A simple yet powerful react component for adding a nice before after image slider to your project.
                </p>
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                  <a
                    role='button'
                    href='https://github.com/awran5/react-simple-before-after'
                    className='btn btn-light px-4'
                  >
                    GitHub
                  </a>
                  <a
                    role='button'
                    href='https://www.npmjs.com/package/react-simple-before-after'
                    className='btn btn-outline-light px-4'
                  >
                    npm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container py-5'>
          <BeforeAfter
            // pointerMove
            beforeImage='https://picsum.photos/id/646/1920/1080?grayscale'
            afterImage='https://picsum.photos/id/646/1920/1080'
          />
        </div>
      </main>

      <footer className='footer mt-auto py-3 bg-light text-center'>
        <div className='container'>
          <span className='text-muted'>
            by <a href='https://github.com/awran5'>awran5 </a> <span className='px-2'>|</span>
            <a href='https://github.com/awran5/react-simple-before-after'>Github</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
