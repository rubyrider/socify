var DateTimePickerModal = require('../datetimepickermodal.jsx');
var Places = require('../places.jsx');
var EventsForm = React.createClass({
  getInitialState() {
    return {
      date: this.formatDate(),
      latLng: {}
    }
  },
  handleClick() {
    $('#datetimepickermodal').modal({
      backdrop: 'static',
      keyboard: false
    }, 'show');
  },
  handleDateSelected(moment) {
    $('#datetimepickermodal').modal('hide');
    var formattedDate = this.formatDate(moment);
    this.setState({date: formattedDate});
  },
  formatDate(moment) {
    if(moment) {
      var m = Moment(moment);
      return m.format('MMMM Do YYYY, h:mm a');
    }
  },
  handlePlaceSelected(address, latLng) {
    this.setState({latLng: JSON.stringify(latLng)});
  },
  render() {
    return(
      <div>
        <form>
          <div className="form-group">
            <label>Event Name</label>
            <input type='text' placeholder='Event Name' name='name' value={this.state.event_name} className='form-control' autoFocus />
          </div>
          <div className="form-group">
            <label>When is it?</label>
            <input type='text' placeholder='When is it?' name='when' value={this.state.date} className='form-control' onClick={this.handleClick} onChange={function(){}} />
          </div>
          <div className="form-group">
            <label>Location</label>
            <Places inputName='location' onPlaceSelected={this.handlePlaceSelected} />
            <input type='hidden' name='latLng' value={this.state.latLng} />
          </div>
        </form>
        <DateTimePickerModal onDateSelected={this.handleDateSelected} />
      </div>
    );
  }
});

module.exports = EventsForm;
