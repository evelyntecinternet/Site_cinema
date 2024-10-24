import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from 'components/CardImage';
import Accordion from 'components/Accordion'
import dbjson from 'json/db.json';
import  Carousel  from 'components/Carousel';
export default function Home() {
    return (
        <>
        <Container>
            <Row>
                <Carousel />
            </Row>
        </Container>
        
        <Container>
            <Row>
                {
                    dbjson.data.map((json) => {
                        return <CardImage {...json} key={json.id} />
                    })
                }
            </Row>
        </Container>

        <Container>
            <Row>
                <Accordion /> 
            </Row>
        </Container>
       </>
    )
}