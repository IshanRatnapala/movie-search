import React from 'react';
import ActiveLink from './ActiveLink';

function SearchResult() {
  return (
    <section>
      <h2>SearchResult</h2>

      <p>{12312} results</p>
      <ul>
        <li>
          <ActiveLink href={'/district1'}>
            <h2>district1</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district2'}>
            <h2>district2</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district3'}>
            <h2>district3</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district4'}>
            <h2>district4</h2>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={'/district5'}>
            <h2>district5</h2>
          </ActiveLink>
        </li>
      </ul>
    </section>
  );
}

export default SearchResult;
