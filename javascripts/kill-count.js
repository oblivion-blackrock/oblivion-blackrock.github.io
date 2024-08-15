"use strict";

document.addEventListener("DOMContentLoaded", function() { // on document load
    /* Array of world-ranks */
    const worldRanks = document.getElementById('kill-count-table').getElementsByClassName('world-rank');

    /* Loop through all ranks */
    for (let i = 0; i < worldRanks.length; i++) {
        const rank = worldRanks[i].innerHTML; //the actual world-rank value
        worldRanks[i].classList.add('rank-' + determineClassColor(rank)); //add class
    }

    /**
     * determines a class for rank
     * @param rank number
     */
    function determineClassColor(rank) {
        if (rank <= 10) {
            return 'legendary';
        }
        if (rank <= 100) {
            return 'epic';
        }
        if (rank <= 250) {
            return 'rare';
        }
        if (rank == '-') {
            return 'default'
        }
        return 'uncommon';
    }

});

let isOpen = false;

function toggleTier(element) {
    if (!isOpen) {
        element.classList.add('open');
        isOpen = !isOpen;
    } else if (isOpen) {
        element.classList.remove('open');
        isOpen = !isOpen;
    }
}
