import {format, parse, addDays, isToday, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek ,endOfWeek, isSameMonth, isSameDay, isWeekend, isYesterday, isTomorrow} from "date-fns";
import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './calendar.css';
import { locale } from "../../resources/locales/locale";
import Modal from "../shared/modal.tsx";

export class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    addEventPopupVisible: false,
    events: [],
  };

  constructor() {
    super();
    this.eventsFromServer = [{id: 1, name: 'Планерка               10:30',  projectId: 1,},
                             {id: 2, name: 'Совещание с KHOFF      11:30', projectId: 1,},
                             {id: 3, name: 'Совещание с MARC       12:30', projectId: 1,},
                             {id: 4, name: 'Совещание с BELCVETMET 14:30', projectId: 1,},
                             {id: 5, name: 'Новое событие! 15:50', projectId: 5,},
                          ];
    this.openAddEventPopup = this.openAddEventPopup.bind(this)


  }

  componentDidMount() {
    let eventsElements = [] 
    this.eventsFromServer.forEach((item,index)=> {
      if(item.projectId == 1)
      eventsElements.push(
        <Row key={item.id}>
        <Col>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey={item.id}>{item.name}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      )
    })
    this.setState(prevState => ({
      events: eventsElements,
    }));
  }

  openAddEventPopup = () =>{
    debugger
    this.setState({
      addEventPopupVisible: !this.state.addEventPopupVisible
    });
  }

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day; 
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <span className="eventsCountRow"> 0 Совещаний </span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
    let events = [] 
    this.eventsFromServer.forEach((item,index)=> {
      if(item.projectId == 1)
      events.push(
        <Row key={item.id}>
        <Col>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey={item.id}>{item.name}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      )
    })
    this.setState(prevState => ({
      events: events,
    }));
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div style={{"display": "flex"}}>
        {this.state.addEventPopupVisible ? <Modal><div style={{height: "100px", width: "100px"}}><span>Текст для тестирования модального окна</span></div></Modal> : null}
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
        <div style={{"width": "25%", "backgroundColor": "#FFFAFA"}}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {this.state.events}
            <Button style={{width: "100%"}} variant="primary" onClick={this.openAddEventPopup}>{locale.sideBarElements.addNewEvent}</Button>
          </Tab.Container>
        </div>
      </div>
    );
  }
}