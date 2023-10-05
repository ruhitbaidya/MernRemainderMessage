import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section>
            <div className='container mt-5 pb-2'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='footer-link'>
                            <ul>
                                <li><Link>Facebook</Link></li>
                                <li><Link>Instagream</Link></li>
                                <li><Link>Linkedin</Link></li>
                                <li><Link>Github</Link></li>
                            </ul>
                        </div>
                        <hr />
                        <p className='footer-copy'>This site Copyright&copy; Ruhit baidya</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
