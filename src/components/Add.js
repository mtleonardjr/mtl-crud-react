const Add = ({ onAdd }) => {
    return (
      <div className="column">
        <form className="card">
          <div className='card-label'>
            <div className='label-collapsed-invs'></div>
            <label className='label-collapsed'>Add</label>
            <div className='expand' >
              <button className='btn' onClick={onAdd}>x</button>
            </div>
          </div>
          <input type='text' placeholder='Add a New Title...' className='text-input'></input>
          <input type='text' placeholder='Add a New Note...'className='text-input'></input>
          <input className='btn-submit'type='submit'></input>
        </form>
      </div>
    )
  } 
  
export default Add