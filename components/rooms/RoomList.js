import RoomItem from './RoomItem';
import classes from './RoomList.module.css';

function RoomList(props) {
  return (
    <ul className={classes.list}>
      {props.rooms.map((room) => (
        <RoomItem
          key={room.id}
          id={room.id}
          image={room.image}
          title={room.title}
          address={room.address}
        />
      ))}
    </ul>
  );
}

export default RoomList;
