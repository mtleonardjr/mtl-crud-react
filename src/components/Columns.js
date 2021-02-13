const Columns = () => {
    return (
      <div className="row">
        <div className="column">
          <form className="search">
            <div className='delete' >
            <input type='submit'></input>
            </div>
            <label className='search-label'>Search Label</label>
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
        <div className="column">
          <div className="column-2">
            <div className="column-item">Column 2</div>
            <div className="column-item">Column 2</div>
            <div className="column-item">Column 2</div>
          </div>
        </div>
      </div>
    )
  } 
  
export default Columns