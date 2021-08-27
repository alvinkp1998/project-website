const url = 'http://api.football-data.org/'
const token = '312dd2dbb6d4484f838a58da11f6a7d2'
const getAPIComp = async () => {

    try {
        const requestData = await axios.get(url + 'v2/competitions/', {
            headers: {
                "X-Auth-Token": `${token}`
            }
        })
        console.log(requestData)
    } catch (err) {
        alert(err.message)
    }
}
getAPIComp()