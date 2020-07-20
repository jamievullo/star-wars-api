import React from 'react';
import TableContent from './TableContent';

function TableMain({ character, search, charactersPerPage }) {

  //to show the first 10
  // slice first 10
  // starting index = 0
  // ending index = 10

  const showAll = character.map(character =>
    <TableContent key={character.name} character={character} />
  )

  const showSearch = character.filter(character =>
    character.name.toLowerCase().includes(search)).map(character =>
      <TableContent key={character.name} character={character} />
    )

  let content = search ? showSearch : showAll

  return (
    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>

      <tbody>
        {content}
      </tbody>

    </table>
  )
}

export default TableMain