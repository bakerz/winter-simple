import React from 'react';

import styles from './styles.css';

function List(props) {
    const ComponentToRender = props.component;
    let content = (<div></div>);

    if (props.items) {
        content = props.items.map((item, index) => (
            <ComponentToRender key={`item-${index}`} item={item} />
        ));
    } else {
        content = (<ComponentToRender />);
    }

    return (
        <div className={styles['list-wrapper']}>
            <ul className={styles.list}>
                {content}
            </ul>
        </div>
    );
}

List.propTypes = {
    component: React.PropTypes.func.isRequired,
    items: React.PropTypes.array,
};

export default List;
