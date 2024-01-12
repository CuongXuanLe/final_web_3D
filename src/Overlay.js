import { Logo } from '@pmndrs/branding';
import { AiOutlineHighlight, AiOutlineShopping} from 'react-icons/ai'
export default function Overlay() {
    return <Customizer />
}

function Intro() {
    return (
        <div className="container">
            <header>
                <Logo width="40" height="40"/>
                <AiOutlineShopping size="3em"/>
            </header>

            <section key="main">
                <div className="section--container">
                    <div>
                        <h1>
                            Let's do it
                        </h1>
                    </div>
                    <div className="support--content">
                        <div>
                            <p>
                                Create your unique and exclusive shirt with our brand-new customization 
                                tool. <strong>Unleash your imagination</strong> and define your own style.  
                            </p>
                            <button style={{ background: 'black'}}>
                                CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Customizer() {
    const colors = ['#ccc', '#EF8D4E', '#80C670', '#726DE8', '#EF674E', '#353934']
    return (
        <section key="custom">
            <div className="Customizer">
                <div className="color-options">
                    {colors.map((color) => (
                        <div
                            key={color}
                            className='circle'
                            style={{ background: color }}    
                        >
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}