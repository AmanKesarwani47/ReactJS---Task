import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ title, openingCrawl }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {openingCrawl}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Cards;