import ProfileCardComponent from "./ProfileCard";

function App() {
    return (<div>
        <div> Personal Assistance Types </div>
        <ProfileCardComponent title="Siri" handle="@siri99"/>
        <ProfileCardComponent title="Alexa" handle="@alexa99"/>
        <ProfileCardComponent title="okGoogle" handle="@okGoogl"/>
    </div>
    );
}

export default App;