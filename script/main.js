const questions = [
    {
        numeroQuestion : 'Commençons par le commencement …',
        intro : 'Un peu d\'histoire tout d\'abord …',
        title : 'Où fût fondée cette liste?',
        typeRep : 'lieu',
        reponses : ['JB 212', 'JB 412', 'JB 633', 'JB933'],
    },
    {
        numeroQuestion : 'Question 2',
        intro : 'Blablabla',
        title : 'quest 2',
        typeRep : 'what',
        reponses : ['a', 'b', 'c', 'd'],
    },
]

questions.forEach( question => {
    let articleHTML = `
    <fieldset>
        <legend>${ question.numeroQuestion }</legend>
        <p class="question">${ question.intro }</p>
                <p>${ question.title }<br/>
                <form class="rep" method="post" action="traitement.php">
    `

    question.reponses.forEach(response => {
        articleHTML += `
            <input type="radio" name="${ question.typeRep }" id="${ response }"/>
            <label class="touchRep" for="${ response }">${ response }</label><br/>`
    });

    articleHTML += `
    </form>
        <div class="superposition">
            <img class="gifBack transitionGif" src="./gif/youfoundme.gif" alt="You found me!"/>
        </div>
        <button class="toNextForm">Question suivante</button>
        </fieldset>
    `
    

    const article = document.createElement('article')

    article.className = 'bcgPB'
    article.innerHTML = articleHTML

    document.querySelector('main').append(article)
    document.querySelector('.toNextForm').addEventListener('click', () => {
    document.querySelector('.bcgPB').scrollIntoView({ behavior: 'smooth', block: 'center' })
    })

})

document.querySelector('.toNextForm').addEventListener('click', () => {
    document.querySelector('.bcgPB').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

