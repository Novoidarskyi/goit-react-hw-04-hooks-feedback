import PropTypes from "prop-types";
import css from './FeedbackOption.module.css'



const FeedbackOption = ({ onLeaveFeedback }) => {

  const nameOfButton = ['good', 'neutral', 'bad'];
  return (
    <div>        
      <ul className={ css.listButton}>
          {nameOfButton.map(name =>
            <li key={name} className={css.buttonItem}>
              <button type="button" name={name} onClick={onLeaveFeedback} className={ css.button}>
                {name[0].toUpperCase() + name.slice(1)}
              </button>
            </li>)}
        </ul>
    </div>
  )
}

FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOption

