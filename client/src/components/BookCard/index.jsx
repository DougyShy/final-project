import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const BookCard = ( {book} ) => {
  console.log("HERE");
  console.log(book);
  if (!book) {
    return <h3>No Book Found</h3>;
  }

  return (
    <div>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <CardContent>
          <CardHeader>{book.title}</CardHeader>
          <CardMeta>Author: {book.author} </CardMeta>
          <CardMeta>Year: {book.year} </CardMeta>
          <CardDescription>
            Rating: {book.rating} / 5 stars
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <a>
            <Icon name='dollar sign' />
            10 Friends
          </a>
        </CardContent>
      </Card>
    </div>
  )

  /*return (
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
  )*/
};

export default BookCard;