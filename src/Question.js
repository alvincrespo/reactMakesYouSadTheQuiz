import React, { Component, PropTypes } from 'react';
import './Question.css';
import { connect } from 'react-redux';
import { clickedNo, clickedYes } from './actions/index.js';

class Question extends Component {
  static propTypes = {
    currentQuestionId: PropTypes.string,
    questionsData: PropTypes.object
  }

  static defaultProps = {
    currentQuestionId: 'a',
    questionData: {
      'questions': {
        'a': {
          'value': 'I am a yes or no question.. right?',
          'steps': {
            'yes': {
              'suggestion': null,
              'nextQuestion': 'questions.b'
            },
            'no': {
              'suggestion': 'suggestions.a',
              'nextQuestion': 'questions.b'
            }
          },
          'id': 'a'
      },
      'suggestions': {
        'a': 'I am a suggestion that is text',
        'b': 'I am another one'
      }
    }
  }
}

  constructor(props) {
    super(props)
    this.onClickYes = this.onClickYes.bind(this)
    this.onClickNo = this.onClickNo.bind(this)
  }

  onClickYes() {
    this.props.dispatch(clickedYes())
  }

  onClickNo() {
    this.props.dispatch(clickedNo())
  }

  render() {
    const questionValue = this.props.questionsData.questions[this.props.currentQuestionId].value;
    console.log('hi', this.props.currentQuestionId);
    console.log('there', this.props.questionsData.questions[this.props.currentQuestionId]);
    return (
      <div className='question-wrap'>
        <div className='question'>
          <p>{questionValue}</p>
          <a className="button is-info" onClick={this.onClickNo}> No </a>
          <a className="button is-info"  onClick={this.onClickYes}> Yes </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
     state
   }
};

let quest = connect(mapStateToProps)(Question);
export default quest;