import { v4 as uuidv4 } from 'uuid';
const data = [
    {id : uuidv4() ,
    title:'Home Alone',
    description : 'An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas eve.',
    posterUrl :'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B9CACD4D5F953ABACEC2E6B19F1959C633150655E91BFD7D320CD9464B915E39/scale?width=1200&aspectRatio=1.78&format=jpeg',
    rating : 7,
    trailerUrl :'https://www.youtube.com/embed/dzdpqRGA1qc'
    },
    {
        id : uuidv4() ,
        title : 'The Matrix', 
        description :'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        posterUrl :'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        rating : 9,
        trailerUrl :'https://www.youtube.com/embed/vKQi3bBA1y8'

        } ,   
         {
            id : uuidv4() ,
            title :'Black Panther: Wakanda Forever',
            description : 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King TChalla.',
            posterUrl : 'https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
            rating : 7,
            trailerUrl :'https://www.youtube.com/embed/_Z3QKkl1WyM'

            },
               {
                id : uuidv4() ,
                title :'Lucy',
                description :'A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.',
                posterUrl : 'https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_.jpg',
                rating : 6,
                trailerUrl :'https://www.youtube.com/embed/-hpupbliDbk'

                }

]
export default data 