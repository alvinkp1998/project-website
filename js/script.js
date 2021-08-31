//Klasemen Bundesliga
//GET API Klasemen
const APIKlasemenBL = 'https://api.football-data.org/v2/competitions/BL1/standings?standingType=TOTAL'
const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '818e0f5cbdb54eaab21ef58c5b47ae8a'
};
const getAPIKlasemenBL = async () => {
    axios.get(APIKlasemenBL, {
            headers
        })
        .then(response => {
            let Data = response.data.standings
            let rowTables = ""
            let ranking = 1
            Data.forEach(data => {
                data.table.forEach(data => {
                    rowTables += `
                    <tr>
                        <th class="text-center">${ranking++}</th>
                        <td class="w-auto"><img src="${data.team.crestUrl}" class="logoTeam img-responsive mr-3" alt="logoTeam">${data.team.name}</td>
                        <td class="text-center">${data.playedGames}</td>
                        <td class="text-center">${data.won}</td>
                        <td class="text-center">${data.draw}</td>
                        <td class="text-center">${data.lost}</td>
                        <td class="text-center">${data.goalsFor}</td>
                        <td class="text-center">${data.goalsAgainst}</td>
                        <td class="text-center">${data.goalDifference}</td> 
                        <td class="text-center">${data.points}</td>
                    </tr>`
                });

            });
            $(klasemenBundesliga).html(rowTables)
        })
        .catch(err => console.log(err))
}
getAPIKlasemenBL()

//Klasemen Liga Spanyol
//GET API Klasemen
const APIKlasemenPD = 'https://api.football-data.org/v2/competitions/PD/standings?standingType=TOTAL'
const getAPIKlasemenPD = () => {
    axios.get(APIKlasemenPD, {
            headers
        })
        .then(response => {
            let Data = response.data.standings
            let rowTables = ""
            let ranking = 1
            Data.forEach(data => {
                data.table.forEach(data => {
                    rowTables += `
                    <tr>
                        <th class="text-center">${ranking++}</th>
                        <td class="w-auto"><img src="${data.team.crestUrl}" class="logoTeam img-responsive mr-3" alt="logoTeam">${data.team.name}</td>
                        <td class="text-center">${data.playedGames}</td>
                        <td class="text-center">${data.won}</td>
                        <td class="text-center">${data.draw}</td>
                        <td class="text-center">${data.lost}</td>
                        <td class="text-center">${data.goalsFor}</td>
                        <td class="text-center">${data.goalsAgainst}</td>
                        <td class="text-center">${data.goalDifference}</td> 
                        <td class="text-center">${data.points}</td>
                    </tr>`
                });

            });
            $(klasemenLaliga).html(rowTables)
        })
        .catch(err => console.log(err))
}
getAPIKlasemenPD()

//Klasemen Liga Inggris
//GET API Klasemen
const APIKlasemenPL = 'https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL'
const getAPIKlasemenPL = () => {
    axios.get(APIKlasemenPL, {
            headers
        })
        .then(response => {
            let Data = response.data.standings
            let rowTables = ""
            let ranking = 1
            Data.forEach(data => {
                data.table.forEach(data => {
                    rowTables += `
                    <tr>
                        <th class="text-center">${ranking++}</th>
                        <td class="w-auto"><img src="${data.team.crestUrl}" class="logoTeam img-responsive mr-3" alt="logoTeam">${data.team.name}</td>
                        <td class="text-center">${data.playedGames}</td>
                        <td class="text-center">${data.won}</td>
                        <td class="text-center">${data.draw}</td>
                        <td class="text-center">${data.lost}</td>
                        <td class="text-center">${data.goalsFor}</td>
                        <td class="text-center">${data.goalsAgainst}</td>
                        <td class="text-center">${data.goalDifference}</td> 
                        <td class="text-center">${data.points}</td>
                    </tr>`
                });

            });
            $(klasemenPremier).html(rowTables)
        })
        .catch(err => console.log(err))
}
getAPIKlasemenPL()

//Klasemen Liga Italia
//GET API Klasemen
const APIKlasemenSA = 'https://api.football-data.org/v2/competitions/SA/standings?standingType=TOTAL'
const getAPIKlasemenSA = () => {
    axios.get(APIKlasemenSA, {
            headers
        })
        .then(response => {
            let Data = response.data.standings
            let rowTables = ""
            let ranking = 1
            Data.forEach(data => {
                data.table.forEach(data => {
                    rowTables += `
                    <tr>
                        <th class="text-center">${ranking++}</th>
                        <td class="w-auto"><img src="${data.team.crestUrl}" class="logoTeam img-responsive mr-3" alt="logoTeam">${data.team.name}</td>
                        <td class="text-center">${data.playedGames}</td>
                        <td class="text-center">${data.won}</td>
                        <td class="text-center">${data.draw}</td>
                        <td class="text-center">${data.lost}</td>
                        <td class="text-center">${data.goalsFor}</td>
                        <td class="text-center">${data.goalsAgainst}</td>
                        <td class="text-center">${data.goalDifference}</td> 
                        <td class="text-center">${data.points}</td>
                    </tr>`
                });

            });
            $(klasemenSerieA).html(rowTables)
        })
        .catch(err => console.log(err))
}
getAPIKlasemenSA()

//Klasemen Liga Prancis
//GET API Klasemen
const APIKlasemenL1 = 'https://api.football-data.org/v2/competitions/FL1/standings?standingType=TOTAL'
const getAPIKlasemenL1 = () => {
    axios.get(APIKlasemenL1, {
            headers
        })
        .then(response => {
            let Data = response.data.standings
            let rowTables = ""
            let ranking = 1
            Data.forEach(data => {
                data.table.forEach(data => {
                    rowTables += `
                    <tr>
                        <th class="text-center">${ranking++}</th>
                        <td class="w-auto"><img src="${data.team.crestUrl}" class="logoTeam img-responsive mr-3" alt="logoTeam">${data.team.name}</td>
                        <td class="text-center">${data.playedGames}</td>
                        <td class="text-center">${data.won}</td>
                        <td class="text-center">${data.draw}</td>
                        <td class="text-center">${data.lost}</td>
                        <td class="text-center">${data.goalsFor}</td>
                        <td class="text-center">${data.goalsAgainst}</td>
                        <td class="text-center">${data.goalDifference}</td> 
                        <td class="text-center">${data.points}</td>
                    </tr>`
                });

            });
            $(klasemenLigue1).html(rowTables)
        })
        .catch(err => console.log(err))
}
getAPIKlasemenL1()