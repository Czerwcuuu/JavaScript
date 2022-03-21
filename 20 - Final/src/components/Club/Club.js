import React, {useState} from 'react';


const Club = () =>{

const [plClubState, setClubState] = useState({
    preNames:['Lechia','Legia','Polonia','Śląsk', 'Odra', 'Jagielonia', 'Chrobry', 'GKS', 'KS', 'Lech', 'Raków','Naprzód', 'Wigry', 'FC', 'Wieczysta', 'Warta'],
    cityNames:['Warszawa','Wrocław','Poznań','Białystok','Kraków', 'Łódź', 'Zielona Góra', 'Częstochowa', 'Katowice', 'Toruń', 'Lublin', 'Lubin'],
    name:'Testowy klub'
});

const generateNewClub = () => {
    const preNames = plClubState.preNames;
    const cityNames = plClubState.cityNames;

    const randomPreName = Math.floor(Math.random() * preNames.length)
    const randomCityName = Math.floor(Math.random() * cityNames.length)

    setClubState({
        preNames: preNames,
        cityNames:cityNames,
        name:preNames[randomPreName]+ ' ' + cityNames[randomCityName]
    })

}

    return(
            
            <div><h1>Moje Kluby:</h1>
<h2>{plClubState.name}</h2>
            <button onClick={generateNewClub}>Generuj</button>
            </div>
            
    );

}


export default Club;