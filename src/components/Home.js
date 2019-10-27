import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../style/Home.css';
import "react-datepicker/dist/react-datepicker.css";


class Home extends React.Component {

    url = 'http://192.168.4.1:80/';

  constructor(props) {
      super(props);
      this.state = {
          startDate: new Date(),
          inputValueCalorifer: '',
          inputValueLumina: '',
          inputValueStropitoare: ''
      };
  }

  handleCalendarChange = (date) => {
      this.setState({
          startDate: date
      });
      debugger;
  }

  updateInputValueCalorifer = (event) => {
      this.setState({
          inputValueCalorifer: event.target.value
      })
  }

    updateInputValueLumina = (event) => {
        this.setState({
            inputValueLumina: event.target.value
        })
    }

    updateInputValueStropitoare = (event) => {
        this.setState({
            inputValueStropitoare: event.target.value
        })
    }

    handleCaloriferChange = () => {
      axios.get(this.url + 'calorifer=' + this.state.inputValueCalorifer);
      //alert(this.state.inputValueCalorifer);
    }

    handleLuminaChange = () => {
        axios.get(this.url + 'lumini=' + this.state.inputValueLumina);
        //alert(this.state.inputValueLumina);
    }

    handleStropitoareChange = () => {
        axios.get(this.url + 'stropit=' + this.state.inputValueStropitoare);
        //alert(this.state.inputValueStropitoare);
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
                        <div className='textArea'>Rezultate</div>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <p className='text'>Calorifer: </p>
                        <input
                            className='input'
                            value={this.state.inputValueCalorifer}
                            placeholder={'introdu valoare'}
                            onChange={this.updateInputValueCalorifer}
                        />
                        <button className='input' onClick={this.handleCaloriferChange}>Trimite</button>
                    </div>
                    <div>
                        <p className='text'>Lumina: </p>
                        <input
                            className='input'
                            value={this.state.inputValueLumina}
                            placeholder={'introdu valoare'}
                            onChange={this.updateInputValueLumina}
                        />
                        <button className='input' onClick={this.handleLuminaChange}>Trimite</button>
                    </div>
                    <div>
                        <p className='text'>Stropitoare: </p>
                        <input
                            className='input'
                            value={this.state.inputValueStropitoare}
                            placeholder={'introdu valoare'}
                            onChange={this.updateInputValueStropitoare}
                        />
                        <button className='input' onClick={this.handleStropitoareChange}>Trimite</button>
                    </div>

                </div>
            </div>
        )
    }

}

export default Home;