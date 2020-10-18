'use sctrict';

const nomberOfFilm = +prompt('Сколько фильмов вы уже смотрели', '' );

const personalMovieDB = {
    count: nomberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};


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

