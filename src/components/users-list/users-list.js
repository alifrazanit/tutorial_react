import { Card } from "../UI/Card/Card";
import classes from "./users-list.module.css";
export const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>{user.username} ({user.age} years old)</li>
        ))}
      </ul>
    </Card>
  );
};
