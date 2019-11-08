import { string } from 'prop-types';
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Details, Home } from 'components/pages';

import withStyle from './style';

const App = ({ className }) => (
  <div className={className}>
    <header>
      <h2>TV</h2>
    </header>
    <main>
      <Suspense fallback="Loading...">
        <Route path="/" component={Home} exact />
        <Route path="/details/:id" component={Details} />
      </Suspense>
    </main>
    <footer>
      <p>
        <span>Powered by </span>
        <a
          href="http://www.tvmaze.com/api"
          target="_blank"
          rel="noopener noreferrer"
          title="TV API | TVmaze - Add TV information to your website or app"
        >
          TVmaze
        </a>
        <span>.</span>
      </p>
    </footer>
  </div>
);

App.propTypes = {
  className: string.isRequired,
};

App.defaultProps = {};

export default withStyle(App);
