export class AppareilService{
    appareils = [
        {name:'Machene a laver', status: 'éteint'},
        {name:'Television', status: 'allumer'},
        {name:'Ordinateur', status: 'éteint'}
      ];

    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allumer';
        }
    }
    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }
    switchOnOne(index: number){
        this.appareils[index].status = 'allumer';
    }
    switchoffOne(index: number){
        this.appareils[index].status = 'éteint';
    }
}