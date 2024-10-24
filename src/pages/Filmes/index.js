import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import CardImage from 'components/CardImage';
//import dbjson from 'jaon/dbjson';
import React,{useState,useEffect} from 'react';
// userState é um Hook do react para trabalhar com o estado em componentes
//userEffect é outro Hook do react usado para executar efeitos colaterais em componentes
export default function Filmes(){
    const[movies,setMovies] = useState ([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
        .then(response => response.json())
        .then(data => {
            setMovies(data.videos);
        })
        .catch(error => console.error('Erro ao carregar os vídeos:',error));
    }, []);
    return (
        <Container>
            <Row>
                {movies.map(json => (
                    <p>{json.id} - {json.titulo}</p>
                ))}
            </Row>
        </Container>
    )
}