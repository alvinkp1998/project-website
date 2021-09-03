let URLvar = window.location.href;
const urlSplit = URLvar.split("=");
const URLkey = urlSplit[urlSplit.length - 1]

const clubAPI = 'https://api.football-data.org/v2/teams/'+URLkey
const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '818e0f5cbdb54eaab21ef58c5b47ae8a'
};

const teamDetail = async () => {
    try {
        const APIClub = await axios.get(clubAPI, {
            headers
        })
        console.log(APIClub)
        let data = APIClub.data

        let imgs = data.crestUrl
        let clubname = data.name
        let stadion = data.venue
        let alamat = data.address
        let urlweb = data.website
        let players = data.squad
        
        logoImg = `<img src="${imgs}" class="logoClub"/>`
        web = `<a href="${urlweb}" target="_BLANK">${urlweb}</a>`

        let rowTables = ""
        let rowNum = 1

        //Goalkeeper
        rowTables +=`<tr>
                        <td class="text-center" colspan="4" style="background-color: rgb(133, 181, 233); color: white;"><b>Goalkeeper</b></td>
                    </tr>`
        players.forEach(data => {
            if(data.position == "Goalkeeper"){
                rowTables += `<tr>
                                <td class="text-center">${rowNum}</td>
                                <td class="text-center">${data.name}</td>
                                <td class="text-center">${data.position}</td>
                                <td class="text-center">${data.nationality}</td>
                            </tr>`
                rowNum++
            }
        });  
        //Defender
        rowTables +=`<tr>
                        <td class="text-center" colspan="4" style="background-color: rgb(133, 181, 233); color: white;"><b>Defender</b></td>
                    </tr>`
        players.forEach(data => {
            if(data.position == "Defender"){
                rowTables += `<tr>
                                <td class="text-center">${rowNum}</td>
                                <td class="text-center">${data.name}</td>
                                <td class="text-center">${data.position}</td>
                                <td class="text-center">${data.nationality}</td>
                            </tr>`
                rowNum++
            }
        });   
        //Midfielder
        rowTables +=`<tr>
                        <td class="text-center" colspan="4" style="background-color: rgb(133, 181, 233); color: white;"><b>Midfielder</b></td>
                    </tr>`
        players.forEach(data => {
            if(data.position == "Midfielder"){
                rowTables += `<tr>
                                <td class="text-center">${rowNum}</td>
                                <td class="text-center">${data.name}</td>
                                <td class="text-center">${data.position}</td>
                                <td class="text-center">${data.nationality}</td>
                            </tr>`
                rowNum++
            }
        });  
        //Attacker
        rowTables +=`<tr>
                        <td class="text-center" colspan="4" style="background-color: rgb(133, 181, 233); color: white;"><b>Attacker</b></td>
                    </tr>`
        players.forEach(data => {
            if(data.position == "Attacker"){
                rowTables += `<tr>
                                <td class="text-center">${rowNum}</td>
                                <td class="text-center">${data.name}</td>
                                <td class="text-center">${data.position}</td>
                                <td class="text-center">${data.nationality}</td>
                            </tr>`
                rowNum++
            }
        });                             

        $(logoClub).html(logoImg)
        $(clubName).html(clubname)
        $(venue).html("Venue : "+stadion)
        $(address).html(alamat)
        $(linkWeb).html(web)

        $(playerList).html(rowTables)
    } catch (err) {
        alert(err)
    }
}

const loading = async () => {
    try {
        Swal.fire({
            title: 'Please Wait !',
            html: 'Fetching Data to Server',
            allowOutsideClick: false,
            showConfirmButton: false,
        });
        await teamDetail()
        Swal.close()
    } catch (error) {
        alert(error)
    }
}
loading()