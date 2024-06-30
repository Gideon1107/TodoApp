import PropTypes from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

ToDoItem.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,

}

export default ToDoItem;
