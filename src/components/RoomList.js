import React, { Component } from 'react';

export class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            newRoomName: ''
        };
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.handleChange = this.handleChange.bind(this);
        this.createRoom = this.createRoom.bind(this);
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) });
        });
    }

    handleChange(e) {
        this.setState({
            newRoomName: this.state.newRoomName
        });
    }

    createRoom(newRoomName) {
        this.roomsRef.push({
            name: newRoomName
        });
        this.setState({
            newRoomName: ''
        });
    }


    render() {
        const roomList = this.state.rooms.map((room) =>
            <li key={room.key}>{room.newRoomName}</li>
        );

        const roomForm = (
            <form onSubmit = {this.createRoom}>
                <input type='text' value={this.state.newRoomName} onChange={this.handleChange} />
                <input type='submit' value='Create New Room' />
            </form>
        );

        return (
            <div>
                <div>{roomForm}</div>
                <ul>{roomList}</ul>
            </div>
        );
    }
}

export default RoomList;
