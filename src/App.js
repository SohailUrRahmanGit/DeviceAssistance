import 'bulma/css/bulma.css'
import ProfileCardComponent from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortnaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                       List Of Digital Assistance
                    </p>
                </div>
            </section>
            <div className='container'>
                <div className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCardComponent desc="Siri" handle="@siri99" image={SiriImage} 
                              descText="Siri is used in iOS and its the fastest of all"
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCardComponent desc="Alexa" handle="@alexa99" image={AlexaImage}
                                descText="Alexa is used in android and its second  fastest of all"
                                />
                        </div>
                        <div className='column is-4'>
                            <ProfileCardComponent desc="okGoogle" handle="@okGoogl" image={CortnaImage}
                            descText="Not so fast still work in progress"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;
