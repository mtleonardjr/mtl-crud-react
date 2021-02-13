const Columns = () => {
    return (
      <div className="row">
        <div className="column">
          <form className="search">
            <div className='delete' >
              <button>x</button>
            </div>
            <label className='search-label'>Search Label</label>
            <input type='text'></input>
            <input type='submit'></input>
          </form>
        </div>
        <div className="column">
          <form className="add-form">
            <div className='delete' >
              <button>x</button>
            </div>
            <label className='search-label'>Add Note</label>
            <input type='text'></input>
            <input type='text'></input>
            <input type='submit'></input>
          </form>
        </div>
        <div className="column">
          <div className="column-1">
            <div className="column-item">Column 1</div>
            <div className="column-item">Column 1</div>
            <div className="column-item">Column 1</div>
          </div>
        </div>
      </div>
    )
  } 
  
export default Columns