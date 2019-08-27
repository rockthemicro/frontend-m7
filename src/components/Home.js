import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../style/Home.css';
import "react-datepicker/dist/react-datepicker.css";


class Home extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
          startDate: new Date()
      };
  }

  handleCalendarChange = (date) => {
      this.setState({
          startDate: date
      });
      debugger;
  }

    render() {
        return (

            <div>
                <div className='top'>
                    <div className='leftHalf'>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleCalendarChange}
                            inline
                        />
                        <button className='generateButton'>Genereaza Date</button>
                    </div>
                    <div className='rightHalf'>
                        <div>Rezultate</div>
                    </div>
                </div>
                <div className='bottom'>

                </div>
            </div>
        )
    }

}

export default Home;