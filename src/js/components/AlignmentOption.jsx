import React from 'react';
import classNames from 'classnames';

export default function AlignmentOption(props) {
  const isUnaligned = props.alignment === 'unaligned';
  const abbreviation = isUnaligned ? 'Unaligned' : multiwordAbbreivation(props.alignment);
  const colspanVal = isUnaligned ? 3 : 1;
  return (
    <td
      colSpan={colspanVal}
      onClick={props.selectAlignment}
      className={classNames({selected: props.currentAlignment === props.alignment})}
      data-alignment={props.alignment}
    >
      {abbreviation}
    </td>
  );
}

function multiwordAbbreivation(words) {
  return words.split(' ')
      .map(eachWord => eachWord[0].toUpperCase())
      .reduce((letter1, letter2) => letter1 + letter2);
}
