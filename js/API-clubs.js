let URLvar = window.location.href;
const urlSplit = URLvar.split("=");
const URLkey = urlSplit[urlSplit.length - 1]
const sampleAPI = 'https://api.football-data.org/v2/competitions/' + URLkey + '/teams'
const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '729818e4aba240058364640a06fb0920'
};
axios.get(sampleAPI, {
    headers
}).then(response => console.log(response)).catch(err => console.log(err))
const getAPIKlasemen = async () => {
    try {
        const APIclub = await axios.get(sampleAPI, {
            headers
        })
        let dataKlasemen = APIclub.data.teams
        console.log(dataKlasemen)
        let rowTables = ""
        let ranking = 1
        dataKlasemen.forEach(data => {
            rowTables += `
                <tr>
                <th class="text-center pt-5"><a href="club.html?info=${data.id}" class="text-dark">${data.name}</a></th>
                <td class=" text-center"><img src="${data.crestUrl}" class="logoClub" alt="logoTeam"></td>
                <td class="text-center pt-5">${data.venue}</td>
            </tr>`
        });
        $(dataclub).html(rowTables)
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
        await getAPIKlasemen()
        Swal.close()
    } catch (error) {
        alert(error)
    }
}
loading()