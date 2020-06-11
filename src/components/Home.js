import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '../style/Home.css';
import "react-datepicker/dist/react-datepicker.css";


class Home extends React.Component {

    esp_url = 'http://192.168.4.1:80/';
    backend_url = 'http://localhost:8080/api';

    constructor(props) {
      super(props);
      this.state = {
          startDate: new Date(),
          inputValueCalorifer: '',
          inputValueLumina: '',
          inputValueStropitoare: '',
          data: [],
      };
    }

    handleCalendarChange = (date) => {
      this.setState({
          startDate: date
      });
    };

    updateInputValueCalorifer = (event) => {
      this.setState({
          inputValueCalorifer: event.target.value
      })
    };

    updateInputValueLumina = (event) => {
        this.setState({
            inputValueLumina: event.target.value
        })
    };

    updateInputValueStropitoare = (event) => {
        this.setState({
            inputValueStropitoare: event.target.value
        })
    };

    handleCaloriferChange = () => {
      axios.get(this.esp_url + 'calorifer=' + this.state.inputValueCalorifer);
      //alert(this.state.inputValueCalorifer);
    };

    handleLuminaChange = () => {
        axios.get(this.esp_url + 'lumini=' + this.state.inputValueLumina);
        //alert(this.state.inputValueLumina);
    };

    handleStropitoareChange = () => {
        axios.get(this.esp_url + 'stropit=' + this.state.inputValueStropitoare);
        //alert(this.state.inputValueStropitoare);
    };

    handleGenerateData = () => {
        debugger;
        axios.get(this.backend_url + '/getDataSince', {
            params: {
                date: this.state.startDate.toISOString()
            }
        }).then(response => {
            this.setState({
                data: response.data
            });

        }).catch(err => {
            alert(err);
        });
    };

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
                        <button className='generateButton' onClick={this.handleGenerateData}>Genereaza Date</button>
                    </div>
                    <div className='rightHalf'>
                        <div className='textArea'>
                            <span>Rezultate</span><br/>
                            {this.state.data.map((elem) => (
                                <div>
                                    <span>{"Temperatura: " + elem.temp + "C, umiditate: " + elem.earthHum + "%, luminozitate: " + elem.light + "lux"}</span>
                                    <br/>
                                </div>
                            ))}
                        </div>
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