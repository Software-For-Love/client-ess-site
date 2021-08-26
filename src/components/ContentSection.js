import React from 'react';
import _ from 'lodash';

import {markdownify, classNames} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section">
              <div className={classNames("container", {'container--md': _.get(section, 'container', null) === 'medium'}, {'container--lg': _.get(section, 'container', null) !== 'medium'})}>
                {_.get(section, 'title', null) && (
                <h2 className="section__title align-center">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'content', null) && (
                <div className="section__copy">
                  {markdownify(_.get(section, 'content', null))}
                </div>
                )}
              </div>
            </section>
        );
    }
}
