document.addEventListener('DOMContentLoaded', function() {

    const allSec = [
        document.querySelector('#Shome'),
        document.querySelector('#Smusic'),
        document.querySelector('#Smerch'),
        document.querySelector('#Svideos'),
        document.querySelector('#Stour'),
        document.querySelector('#Sinfo')
    ];

    const navLinks = {
        'navhome': 'Shome',
        'navmusic': 'Smusic',
        'navmerch': 'Smerch',
        'navvideos': 'Svideos',
        'navtour': 'Stour',
        'navinfo': 'Sinfo',
        'navbuytickets': 'Stour'
    };

    Object.entries(navLinks).forEach(function(par) {
        let linkId = par[0];   // 'navmusic'
        let secId = par[1];    // 'Smusic'

        document.querySelector('#' + linkId).addEventListener('click', function(event) {
            event.preventDefault();
            showSec(document.querySelector('#' + secId));
        });
    });

    function showSec(secao) {
        allSec.forEach(function(s) {
            s.classList.add('hidden');
        });
        secao.classList.remove('hidden');
    }

});