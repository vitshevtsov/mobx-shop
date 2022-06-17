import React from 'react';
import { TransitionGroup } from 'react-transition-group';

export default function List({items, renderItem, hasTransition}) {

    const listItems = items.map(item => renderItem(item));

    return (
        <>
            {hasTransition
                ? <TransitionGroup>{listItems}</TransitionGroup>
                : listItems}
        </>
    );
}