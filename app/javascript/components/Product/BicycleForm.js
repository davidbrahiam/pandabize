import React from 'react'

const BicycleForm = (props) => {
  console.log(props)
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>BicycleForm</div>
        <div className="field">
          <input onChange={props.handleChange} type="text" value={props.bicycle.name} placeholder="Name" name="name" />
        </div>
        <div className="field">
          <input onChange={props.handleChange} type="text" value={props.bicycle.wheel_size} placeholder="Wheel Size" name="wheel_size" />
        </div>
        <div className="field">
          <input onChange={props.handleChange} type="text" value={props.bicycle.saddle_color} placeholder="Saddle Color" name="saddle_color" />
        </div>

        <div className="field">
          <input onChange={props.handleChange} type="text" value={props.bicycle.rim_color} placeholder="Rim Color" name="rim_color" />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  )
}


export default BicycleForm