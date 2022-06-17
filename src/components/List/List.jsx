import React from 'react';

export default function List({items, renderItem}) {

    const listItems = items.map(item => renderItem(item));

    return (
        <>
            {listItems}
        </>
    );
}