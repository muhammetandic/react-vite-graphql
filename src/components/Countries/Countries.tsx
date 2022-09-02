import React from 'react';
import { CountriesQuery } from '../../generated/graphql';

interface Props {
  data: CountriesQuery;
}

export const Countries: React.FC<Props> = ({ data }) => (
  <div>
    <h2>Countries</h2>
    <ol>
      {!!data.countries &&
        data.countries.map(
          (country, i) =>
            !!country && (
              <li key={i}>
                {country.code} - {country.name}
              </li>
            )
        )}
    </ol>
  </div>
);
