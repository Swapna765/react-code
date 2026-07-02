function ToDoItem1() {
  let item = "Buy Milk";
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

export default ToDoItem1;
