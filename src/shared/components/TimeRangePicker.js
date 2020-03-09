import React, { Component } from 'react';
import { DatePicker, Icon } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

class TimeRangePicker extends Component {
    state = {
        startTime: undefined,
        endTime: undefined
    }

    set_time = (time) => {
        this.setState({
            startTime: time[0],
            endTime: time[1]
        })
    }

    onChange = (time) => {
        this.props.handleOnChange(time)
    }

    getStartTimeDisabledHours = () => {
        const { endTime } = this.state;
        let disabledHours = [];

        if (endTime) {
            const hourLimit = moment(endTime).hour();

            for (let x = 24; x > hourLimit; x--) {
                disabledHours.push(x)
            }
        }

        return disabledHours;
    }

    getStartTimeDisabledMinutes = (selectedHour) => {
        const { endTime } = this.state;
        let disabledMinutes = [];
        
        if (endTime && moment(endTime).hour() === selectedHour) {
            const minuteLimit = moment(endTime).minute();

            for (let x = 60; x >= minuteLimit; x--) {
                disabledMinutes.push(x)
            }
        }

        return disabledMinutes;
    }

    getEndTimeDisabledHours = () => {
        const { startTime } = this.state;
        let disabledHours = [];

        if (startTime) {
            const hourLimit = moment(startTime).hour();

            for (let x = 0; x < hourLimit; x++) {
                disabledHours.push(x)
            }
        }
        
        return disabledHours;
    }

    getEndTimeDisabledMinutes = (selectedHour) => {
        const { startTime } = this.state;
        let disabledMinutes = [];
        
        if (startTime && moment(startTime).hour() === selectedHour) {
            const minuteLimit = moment(startTime).minute();

            for (let x = 0; x <= minuteLimit; x++) {
                disabledMinutes.push(x)
            }
        }

        return disabledMinutes;
    }

    disabledRangeTime = (dateTime, type) => {
        
        if(type === 'start') {
            return {
                disabledHours: () => this.getStartTimeDisabledHours(),
                disabledMinutes: (hour) => this.getStartTimeDisabledMinutes(hour)
            }
        }
        return {
            disabledHours: () => this.getEndTimeDisabledHours(),
            disabledMinutes: (hour) => this.getEndTimeDisabledMinutes(hour)
        }
    }

    render() {
        return (
            <RangePicker
                suffixIcon={<Icon type="clock-circle" />}
                style={{ width: '210px' }}
                mode={['time', 'time']}
                onCalendarChange={this.set_time}
                onChange={this.onChange}
                disabledTime={(_, type) => this.disabledRangeTime(_, type)}
                showTime={{ hideDisabledOptions: true, format: "HH:mm A", use12Hours: false }}
                format="HH:mm A"
                placeholder={['Start Time', 'End Time']} />
        )
    }
}

export default TimeRangePicker;