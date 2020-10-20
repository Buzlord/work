'use sctrict';

let nomberOfFilm;

function start () {
    nomberOfFilm = +prompt('Сколько фильмов вы уже смотрели', '' );

    while(nomberOfFilm == '' || nomberOfFilm == null || isNaN(nomberOfFilm)){
        nomberOfFilm = +prompt('Сколько фильмов вы уже смотрели', '' );
    }
}

start ();

const personalMovieDB = {
    count: nomberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};


function rememberMyMovie(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его', '' );
    
        if (a != null && b != null && a !='' && b !='' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyMovie();

function detectedMyMovie(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
        console.log('вы класический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Красава');
    } else {
        console.log('Заебал , делай правильно');
    }
    console.log(personalMovieDB);
    
}

detectedMyMovie();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privet);

function writeYourGenres(){
    for(let i = 1; i <=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимы жанр под номером ${i}`);
        
    }
}

writeYourGenres();