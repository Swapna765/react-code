function AddToDo() {
  return (
    <div>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter to do here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success new new-btn">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
