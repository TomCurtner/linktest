import { Link } from 'react-router-dom'

const About = () => {
    return(
    <>
        <div>
            <div>
                <div>
                    ABOUT PAGE
                    <div>
                    <Link to='/'>
                        <span>
                            HOME
                        </span>
                        </Link>
                    </div>
                    The About page is working
                </div>
            </div>
        </div>            
</>
    
    )
}

export default About;