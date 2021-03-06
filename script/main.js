const questions = [
    {
        numeroQuestion: 'Commençons par le commencement',
        intro: 'Un peu d\'histoire tout d\'abord …',
        title: 'Où fût fondée cette liste ?',
        typeRep: 'lieu',
        reponses: ['JB 212', 'JB 412', 'JB 633', 'JB933'],
    },
    {
        numeroQuestion: 'Question 2',
        intro: 'Question pour les fins connaisseurs. Parmi nous se cache une personne ayant l\'âme d\'un papy.',
        title: 'Mais qui est-ce ?',
        typeRep: 'nom',
        reponses: ['Adrien Arestan', 'OLivier Fontelle', 'Matthieu Mary', 'Raphaël Maestracci']
    },
    // {
    //     numeroQuestion : 'Question 3',
    //     intro : 'Les soirées, vous savez qu\'on connaît bien.',
    //     title : 'Mais d\'après toi, qui est la plus petite caisse ?',
    //     typeRep : 'nom',
    //     reponses : ['Maëlle Corné','Lucas Memehtoglu','Pauline Gasse','Oh encore Lucas']
    // },
    // {
    //     numeroQuestion : 'Question 3',
    //     intro : 'Malheureusement, les lendemains de soirée ne réussissent pas à tout le monde, surtout quand on a autre chose que projet le vendredi.',
    //     title : 'Les vendredis matin, notre taux d\'alcoolémie moyen est de :',
    //     typeRep : 'taux',
    //     reponses : ['2g/l','4g/l','Les gars vous dormez …','Mais vous buvez pas vous bande de mytho']
    // },
    // {
    //     numeroQuestion : 'Question 4',
    //     intro : 'L\'année prochaine, la présidence des associations se relève comme chaque année. Comme nous sommes très investis pour notre école, certains d\'entre nous assurerons cette relève.',
    //     title : 'Mais combien ?',
    //     typeRep : 'nombre',
    //     reponses : ['2','6','7','8']
    // },
    // {
    //     numeroQuestion : 'Question 5',
    //     intro : 'L\'école c\'est sympa, mais on n\'y passe pas toute notre vie non plus.',
    //     title : 'D\'après toi, quel est notre endroit favoris ?',
    //     typeRep : 'nom',
    //     reponses : ['Le bar','Le port en été, le lit en hiver','JB','Avec la mif']
    // },
    // {
    //     numeroQuestion : 'Question 6',
    //     intro : 'Après cette période de confinement interminable ...',
    //     title : 'EST-CE QUE VOUS T\'ES CHAUD POUR UNE BONNE SOIREE ?',
    //     typeRep : 'oui',
    //     reponses : ['Oui !','Non','Ca dépend','OH QUE OUI !']
    // },
    // {
    //     numeroQuestion : 'Question 7',
    //     intro : 'Cette année fût haute en couleur grâce à notre cher BDVice.',
    //     title : 'Lequel des évènements de cette année t\'a le plus marqué(e) ?',
    //     typeRep : 'what',
    //     reponses : ['', '', '', ''],
    // },
    // {
    //     numeroQuestion : 'Question 8',
    //     intro : 'Oui, on sait, on rigole bien par ici. Mais trêve de plaisanterie.',
    //     title : 'Tu penses qu\'on vous réserve quoi de beau pour l\'année prochaine ?',
    //     typeRep : 'nom',
    //     reponses : ['Plein de soirées de ouf','Des activités comme on n\'en a jamais eu l\'année passée','De supers moments tous ensemble','Les 3 bien sûr !!']
    // },

]

questions.forEach((question, i) => {
    const article = document.createElement('article')

    let articleHTML = `
    <fieldset>
        <legend> ${question.numeroQuestion} </legend>
        <p>${question.intro}</p>
        <p>${question.title}<br/>
        <form class="rep" method="post" action="traitement.php">
    `
    question.reponses.forEach(response => {
        articleHTML += `
            <input type="radio" name="${question.typeRep}" id="${response}" required="required"/>
            <label class="touchRep" for="${response}">${response}</label><br/>`
    });

    articleHTML += `
        </form>
        <div class="superposition">
            <img class="gifBack" src="./gif/youfoundme.gif" alt="You found me!"/>
        </div>
        <button class="toNextForm">Question suivante</button>
    </fieldset>
    `

    article.className = 'bcgPB'
    article.id = `article${i}`
    article.innerHTML = articleHTML

    document.querySelector('#allArticles').appendChild(article)
})

const firstLink = document.querySelector('#firstArticle button')

firstLink.addEventListener('click', (e) => {
    const inputValue = document.querySelector('#pseudo').value.trim() // vas voir trim() sur le web

    if (!inputValue) { // si il est vide
        alert('input vide')
        // afficher le message d'erreur dans #firstArticle
        return
    }

    window.location.assign('#article1')

    return false
})

document.querySelectorAll('.bcgPB').forEach((toNextForm, i, p) => {
    toNextForm.querySelector('.toNextForm').addEventListener('click', () => {
        console.log(i++, p)
        if (!p[i++])
            return document.querySelector('.theEnd').scrollIntoView({behavior: 'smooth', block: 'end'})
        p[i++].scrollIntoView({behavior: 'smooth', block: 'center'})

    })
})

document.querySelector('#home').scrollIntoView()