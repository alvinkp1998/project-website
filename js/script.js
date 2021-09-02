const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '818e0f5cbdb54eaab21ef58c5b47ae8a'
};

const showLoading = function () {
    Swal.fire({
        title: 'Please Wait !',
        html: 'Data Uploading', // add html attribute if you want or remove
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading()
        },
    });
};

document.getElementById("loadingKlasemen")
    .addEventListener('click', (event) => {
        showLoading();
    });