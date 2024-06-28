import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
        <div>
            <div>
                <div>
                    HOME PAGE
                    <div>
                        <Link to='/'>
                        <span>
                            HOME
                        </span>
                        </Link>
                        </div><div>
                               <Link to='/about'>
                                <span>
                                    About
                                </span>
                              </Link>

                    </div>
                    <div>
                        <div>
                            The Home page is working
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;