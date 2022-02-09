const messageComponents = {
    _matchDays: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],

    _teamsPlaying: ["Real Madrid","Barcelona","Atletico de Madrid","Villareal","Valencia",
    "Chelsea","Liverpool","Manchester United","Manchester City","Arsenal","Tottenham",
    "Juventus","AC Milan","Inter","Roma","Napoli","Atalanta", "PSG", "Lyon", "Monaco",
    "Bayern Munich", "Dortmund", "Bayern Leverkusen", "RB Leipzig", "FC Schalke 04"],

    _results: ["win 1-0","win 2-0","win 3-0","win 4-0","win 5-0","win 2-1","win 3-1","win 4-2","win 4-3","win 5-2","win 5-4",
    "draw 0-0","draw 1-1","draw 2-2","draw 3-3","draw 4-4",
    "lose 0-1","lose 0-2","lose 0-3","lose 0-4","lose 0-5","lose 0-6","lose 1-2","lose 1-3","lose 1-4","lose 2-3","lose 3-4","lose 2-5"],

    _preDescription: ["quite","nothing but","completely","totally","absolutely","definitely","certainly","undoubtedly"],

    _gameDescription: ["amazing","boring","incredible","thrilling","exciting","tedious","breathtaking","phenomenal"],


    get matchDays(){
        return this._matchDays;
    },

    get teamsPlaying(){
        return this._teamsPlaying;
    },

    get results(){
        return this._results;
    },

    get preDescription(){
        return this._preDescription;
    },

    get gameDescription(){
        return this._gameDescription;
    },


    set teamsPlaying(newTeamPlaying){
        return this._teamsPlaying.push(newTeamPlaying);
    },

    set results(newResult){
        return this._results.push(newResult);
    },

    set preDescription(newPreDescription){
        return this._preDescription.push(newPreDescription);
    },

    set gameDescription(newGameDescription){
        return this._gameDescription.push(newGameDescription);
    },


    randomNumber(array){
        return Math.floor(Math.random()*array.length);
    },

    mixedMessage(){
        const daysPart = this.matchDays[this.randomNumber(this.matchDays)];
        const teamsPart = this.teamsPlaying[this.randomNumber(this.teamsPlaying)];
        const resultPart = this.results[this.randomNumber(this.results)];
        const preDescriptionPart = this.preDescription[this.randomNumber(this.preDescription)];
        const gameDescriptionPart = this.gameDescription[this.randomNumber(this.gameDescription)];

        return `This ${daysPart} ${teamsPart} is going to ${resultPart}! The game is going to be ${preDescriptionPart} ${gameDescriptionPart}!`;
    }
}

console.log(messageComponents.mixedMessage());