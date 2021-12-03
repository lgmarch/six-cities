import {AppRoute} from '../../constants/constants';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <section className="page__main">
      <section className="page__main">
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Go back to the main page</Link>
      </section>
    </section>
  );
}

export default NotFound;
