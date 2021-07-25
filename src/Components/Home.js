
import { lazy, Suspense } from 'react'
import '../App.scss'
const HeroImg = lazy(() => import('./HeroImg'))
const HeroText = lazy(() => import('./HeroText'))


const Home = () => {

    const renderLoader = () => <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
    </div>


    return (
        <Suspense fallback={renderLoader()}>
            <div>

                <main className="hero">
                    <HeroText />
                    <HeroImg />

                </main>
                <div style={{margin:"1rem"}}>
                    <p className="copyright">&copy; Rohit Sanwariya</p>
                </div>
            </div>

        </Suspense>
    )
}

export default Home
