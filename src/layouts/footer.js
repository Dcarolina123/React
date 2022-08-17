import React from 'react'

const Footer = () => {
    return(
        <div className='text-center text-white'>
            <div className='p-4 pb-0'>
                <section className=''>
                    <p className='d-flex justify-content-center align-items-center'>
                        <span className='me-3'>Regístrate Gratis</span>
                        <button type='button' className='btn btn-outline-light btn-rounded'>
                            ¡Únete!
                        </button>
                    </p>
                </section>
            </div>

            <div className='text-center p-3'>
                © 2022 Copyright:
                <a className='text-white' href='#!'></a>
            </div>
        </div>
  );
}
export default Footer