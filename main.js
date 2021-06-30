
function getData(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(f1data => {
        console.log(f1data)
        for(let i = 0; i < 7; i++){
            // Getting Driver Data
            let givenName = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
            let familyName = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
            let fullName = `${givenName} ${familyName}`;
            document.querySelector(`#name-${i}`).innerHTML=fullName;


            // Getting Nationality Data
            let nationality = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
            document.querySelector(`#nationality-${i}`).innerHTML=nationality;

            // Getting Sponser Data
            let constructor = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
            document.querySelector(`#sponser-${i}`).innerHTML=constructor;
            // Getting Points Data
            let points = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
            document.querySelector(`#points-${i}`).innerHTML=points;
        }
    })
} 