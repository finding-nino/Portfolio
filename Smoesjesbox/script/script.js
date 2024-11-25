function GenerateAnswer() {
    let responses = [
        'Ik ben ziek',
        'Het regent en ik ben van suiker',
        'Het is koud',
        'Ik heb me verslapen',
        'Mijn hond is ziek',
        'Mijn kat is ziek',
        'Ik heb mijn kleine teen gestoten',
        'Mijn band is lek',
        'Mijn hamster is ontsnapt',
        'Ik heb last van mijn allergieën',
        'Ik heb een afspraak bij de dokter',
        'Ik moet naar de tandarts',
        
        
    ];

    let randomResponse = responses[Math.floor(Math.random() * responses.length)];

    
   document.getElementById('tekstBox').value = randomResponse;
}
