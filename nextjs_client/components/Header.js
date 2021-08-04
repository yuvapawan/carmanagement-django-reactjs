import Head from 'next/head'
const Header = (props) => (
  <div>
    <Head>
      <title>{ '' + props.title + '' }</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
      <link href='/static/GetAllCar.css' rel='stylesheet' />
      <link href='/static/base.css' rel='stylesheet' />
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' />
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' />
    </Head>
  </div>
)

export default Header
