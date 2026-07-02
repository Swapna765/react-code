function ToDoItem2() {
  let item = "Go to College";
  let date = "21/6/2026";

  return (
    <div class="container">
      <div class="row new-row">
        <div class="col-6">{item}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger new-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
