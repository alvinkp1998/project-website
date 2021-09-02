const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '818e0f5cbdb54eaab21ef58c5b47ae8a'
};

let URLvar = window.location.href;
const urlSplit = URLvar.split("=");
const URLkey = urlSplit[urlSplit.length - 1]

function imgLeague(code) {
    if (code == 'PL') {
        imgLiga = `<img src="../assets/img/premierleague.png" class="logo float-left pr-3" >`
        $(logoLiga).html(imgLiga)
    } else if (code == 'SA') {
        imgLiga = `<img src="../assets/img/Serie_A.png" class="logo float-left pr-3" >`
        $(logoLiga).html(imgLiga)
    } else if (code == 'PD') {
        imgLiga = `<img src="../assets/img/laliga.png" class="logo-2 float-left ml-3 " >`
        $(logoLiga).html(imgLiga)
    } else if (code == 'BL1') {
        imgLiga = `<img src="../assets/img/bundesliga.svg" class="logo pr-4" >`
        $(logoLiga).html(imgLiga)
    } else if (code == 'FL1') {
        imgLiga = `<img src="../assets/img/ligue1.png" class="logo-2 float-left ml-4" >`
        $(logoLiga).html(imgLiga)
    }
}

imgLeague(URLkey)

// GET Data API
const ftblAPI = 'https://api.football-data.org/v2/competitions/' + URLkey + '/matches'

axios.get(ftblAPI, {
    headers
}).then(response => console.log(response)).catch(err => console.log(err))

const getInfo = () => {
    axios.get(ftblAPI, {
            headers
        })
        .then(response => {
            let infoName = response.data.competition.name
            let infoSeason = response.data.competition.id
            $(competitionTitle).html(infoName)
        })
        .catch(err => console.log(err))
}
getInfo()

//GET API Klasemen
const APIKlasemenLiga = 'https://api.football-data.org/v2/competitions/' + URLkey + '/standings'
const getAPIKlasemen = async () => {
    try {
        const APIKlasemen = await axios.get(APIKlasemenLiga, {
            headers
        })
        let dataKlasemen = APIKlasemen.data.standings
        let rowTables = ""
        let ranking = 1
        dataKlasemen.forEach(data => {
            console.log(dataKlasemen)
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
        $(klasemen).html(rowTables)
    } catch (err) {
        alert(err)
    }
}
// const loading = () => {
//     Swal.fire({
//         title: 'Please Wait !',
//         html: 'Data Uploading',
//         allowOutsideClick: false,
//         showConfirmButton: false,
//     });
//     getAPIKlasemen()
// }
const loading = async () => {
    try {
        Swal.fire({
            title: 'Please Wait !',
            html: 'Data Uploading',
            allowOutsideClick: false,
            showConfirmButton: false,
        });
        await getAPIKlasemen()
        Swal.close()
    } catch (error) {
        alert(error)
    }
}
loading()