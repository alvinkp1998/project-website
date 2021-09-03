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

function tombolKlasemen(code) {
    if (code == 'PL') {
        buttonKlasemen = '<a href="../pageklasemen/index.html?league=PL"><button class="button-klasemen" style="margin-top:120px"><span>Klasemen</span></button></a>'
        $(btnKlasemen).html(buttonKlasemen)
    } else if (code == 'SA') {
        buttonKlasemen = '<a href="../pageklasemen/index.html?league=SA"><button class="button-klasemen" style="margin-top:120px"><span>Klasemen</span></button></a>'
        $(btnKlasemen).html(buttonKlasemen)
    } else if (code == 'PD') {
        buttonKlasemen = '<a href="../pageklasemen/index.html?league=PD"><button class="button-klasemen" style="margin-top:120px"><span>Klasemen</span></button></a>'
        $(btnKlasemen).html(buttonKlasemen)
    } else if (code == 'BL1') {
        buttonKlasemen = '<a href="../pageklasemen/index.html?league=BL1"><button class="button-klasemen" style="margin-top:120px"><span>Klasemen</span></button></a>'
        $(btnKlasemen).html(buttonKlasemen)
    } else if (code == 'FL1') {
        buttonKlasemen = '<a href="../pageklasemen/index.html?league=FL1"><button class="button-klasemen" style="margin-top:120px"><span>Klasemen</span></button></a>'
        $(btnKlasemen).html(buttonKlasemen)
    }
}
tombolKlasemen(URLkey)

function tombolClub(code) {
    if (code == 'PL') {
        buttonClub = '<a href="../pageclubs/index.html?league=PL"><button class="button-klasemen" style="margin-top:120px"><span>Daftar Club</span></button></a>'
        $(btnClub).html(buttonClub)
    } else if (code == 'SA') {
        buttonClub = '<a href="../pageclubs/index.html?league=SA"><button class="button-klasemen" style="margin-top:120px"><span>Daftar Club</span></button></a>'
        $(btnClub).html(buttonClub)
    } else if (code == 'PD') {
        buttonClub = '<a href="../pageclubs/index.html?league=PD"><button class="button-klasemen" style="margin-top:120px"><span>Daftar Club</span></button></a>'
        $(btnClub).html(buttonClub)
    } else if (code == 'BL1') {
        buttonClub = '<a href="../pageclubs/index.html?league=BL1"><button class="button-klasemen" style="margin-top:120px"><span>Daftar Club</span></button></a>'
        $(btnClub).html(buttonClub)
    } else if (code == 'FL1') {
        buttonClub = '<a href="../pageclubs/index.html?league=FL1"><button class="button-klasemen" style="margin-top:120px"><span>Daftar Club</span></button></a>'
        $(btnClub).html(buttonClub)
    }
}
tombolClub(URLkey)


const ftblAPI = 'https://api.football-data.org/v2/competitions/' + URLkey + '/matches'
const detailAPI = 'http://api.football-data.org/v2/matches/'
const clubAPI = 'http://api.football-data.org/v2/teams/'
const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '818e0f5cbdb54eaab21ef58c5b47ae8a'
};
axios.get(ftblAPI, {
    headers
}).then(response => console.log(response)).catch(err => console.log(err))

const getInfo = () => {
    axios.get(ftblAPI, {
            headers
        })
        .then(response => {
            let infoName = response.data.competition.name
            $(competitionTitle).html(infoName)
        })
        .catch(err => console.log(err))
}


const getDataFtbl = async () => {
    try {
        const response = await axios.get(ftblAPI, {
            headers
        })            
            let Data = response.data.matches
            let rowTables = "<div class='pagination'>"
            let gameWeeek = 1
            setGameWeek = 0

            Data.forEach(match => {
                if (match.matchday == gameWeeek) {

                    if (match.status == 'FINISHED') {
                        setGameWeek = gameWeeek
                    }

                    if (gameWeeek == setGameWeek) {
                        rowTables += `<a onclick="chooseMatchday(${gameWeeek})" href="#gw${gameWeeek}"  class="active">${gameWeeek}</a>`
                    } else {
                        rowTables += `<a onclick="chooseMatchday(${gameWeeek})" href="#gw${gameWeeek}">${gameWeeek}</a>`
                    }

                    gameWeeek++;
                }
            });
            rowTables += `</div>`

            $(gameWeekTab).html(rowTables)
            matchdayShow(setGameWeek)
        } catch (err) {
            alert(err)
        }
}



function chooseMatchday(number) {
    matchdayShow(number)
}
const matchdayShow = (gameweek) => {
    axios.get(ftblAPI + "?matchday=" + gameweek, {
            headers
        })
        .then(response => {
            let dataMatch = response.data.matches
            let rowMatchList = ""
            let noRows = 1
            let homeScore = ''
            let awayScore = ''
            let colorSet = ''

            dataMatch.forEach(matchList => {
                //Menampilkan Score jika sudah bertanding
                if (matchList.score.fullTime.homeTeam == null) {
                    homeScore = ''
                } else {
                    homeScore = matchList.score.fullTime.homeTeam
                }
                if (matchList.score.fullTime.awayTeam == null) {
                    awayScore = ''
                } else {
                    awayScore = matchList.score.fullTime.awayTeam
                }
                //Warna pada badge
                if (matchList.status == 'FINISHED') {
                    colorSet = 'badge-secondary'
                    actionSet = 'onclick'
                } else if (matchList.status == 'SCHEDULED') {
                    colorSet = 'badge-info'
                    actionSet = 'id'
                } else {
                    colorSet = 'badge-success'
                    actionSet = 'onclick'
                }
                //Text Winner
                if (matchList.score.winner == "HOME_TEAM") {
                    htColor = 'text-success font-weight-bold'
                    atColor = ''
                } else if (matchList.score.winner == "AWAY_TEAM") {
                    htColor = ''
                    atColor = 'text-success font-weight-bold'
                } else {
                    htColor = ''
                    atColor = ''
                }

                rowMatchList += `<tr>
                            <td scope="row">${noRows}</th>
                            <td class="${htColor} text-center">${matchList.homeTeam.name}</td>
                            <td class="text-center">${homeScore} - ${awayScore}</td>
                            <td class="${atColor} text-center">${matchList.awayTeam.name}</td> 
                            <td class="text-center">${matchList.matchday}</td>
                            <td class="text-center"><a ${actionSet}="detailMatch(${matchList.id})" class="linkDetail badge ${colorSet}"
                                data-toggle="tooltip" data-placement="top" title="Klik untuk detail pertandingan">${matchList.status}</a></td> 
                        </tr>`
                noRows++;
            });
            $("#tableWeek").html(rowMatchList)
            $("#gameWeekId").html("Matchday - " + gameweek)
        })
        .catch(err => console.log(err))
}

const detailMatch = (idMatch) => {
    axios.get(detailAPI + idMatch, {
            headers
        })
        .then(response => {
            let Data = response.data.match
            let Data2 = response.data.head2head

            $(homeClub).html(Data.homeTeam.name)
            $(homeClubW).html(Data2.homeTeam.wins)
            $(homeClubD).html(Data2.homeTeam.draws)
            $(homeClubL).html(Data2.homeTeam.losses)

            $(htScore).html(Data.score.halfTime.homeTeam + " - " + Data.score.halfTime.awayTeam)
            $(ftScore).html(Data.score.fullTime.homeTeam + " - " + Data.score.fullTime.awayTeam)
            $(venue).html(Data.venue)

            $(awayClub).html(Data.awayTeam.name)
            $(awayClubW).html(Data2.awayTeam.wins)
            $(awayClubD).html(Data2.awayTeam.draws)
            $(awayClubL).html(Data2.awayTeam.losses)

            $(mplayed).html(Data2.numberOfMatches)
            $(goalsTotal).html(Data2.totalGoals)

            teamDetail(Data.homeTeam.id, 'home')
            teamDetail(Data.awayTeam.id, 'away')

            $(resultMatch).fadeIn("slow")

        })
        .catch(err => console.log(err))
}

const teamDetail = (idClub, type) => {
    axios.get(clubAPI + idClub, {
            headers
        })
        .then(response => {
            let imgs = response.data.crestUrl
            if (type == 'home') {
                logoImg = `<img src="${imgs}" height=70px/>`
                $(logoHome).html(logoImg)
            } else {
                logoImg = `<img src="${imgs}" height=70px/>`
                $(logoAway).html(logoImg)
            }
        })
        .catch(err => console.log(err))
}

const loading = async () => {
    try {
        Swal.fire({
            title: 'Please Wait !',
            html: 'Fetching Data to Server',
            allowOutsideClick: false,
            showConfirmButton: false,
        });
        await getInfo()
        await getDataFtbl()
        Swal.close()
    } catch (error) {
        alert(error)
    }
}
loading()