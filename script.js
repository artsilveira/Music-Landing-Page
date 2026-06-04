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

    function setActiveLink(activeId) {

        Object.keys(navLinks).forEach(function(id) {

            
            if (id === 'navbuytickets') return;

            document.querySelector('#' + id)
                .classList.remove(
                    'font-bold',
                    'text-white',
                    'underline',
                    'underline-offset-4'
                );
        });

        if (activeId !== 'navbuytickets') {

            document.querySelector('#' + activeId)
                .classList.add(
                    'font-bold',
                    'text-white',
                    'underline',
                    'underline-offset-4'
                );
        }
    }

    Object.entries(navLinks).forEach(function(par) {

        let linkId = par[0];
        let secId = par[1];

        document.querySelector('#' + linkId).addEventListener('click', function(event) {

            event.preventDefault();

            showSec(document.querySelector('#' + secId));

            setActiveLink(linkId);

        });
    });

function showSec(secao) {
    allSec.forEach(function(s) {
        s.classList.add('hidden');
    });
    secao.classList.remove('hidden');

    const header = document.querySelector('#header');
    if (secao.id === 'Shome') {
        header.classList.remove('bg-zinc-950');
    } else {
        header.classList.add('bg-zinc-950');
    }
}  


setActiveLink('navhome');

});