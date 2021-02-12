import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import FeedbackContent from '../../common/FeedbackContent/FeedbackContent';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={styles.dots + 'row'}>
                {feedbacks.map(item => (
                  <FeedbackContent key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string,
      position: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
