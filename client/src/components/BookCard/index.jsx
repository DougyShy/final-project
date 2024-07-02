import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const BookCard = () => {
  /*console.log(book);
  if (!book.length) {
    return <h3>No Book Found</h3>;
  }*/

  return (
    <div>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <CardContent>
          <CardHeader>Daniel</CardHeader>
          <CardMeta>Joined in 2016</CardMeta>
          <CardDescription>
            Daniel is a comedian living in Nashville.
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </CardContent>
      </Card>
    </div>
  )
};

export default BookCard;