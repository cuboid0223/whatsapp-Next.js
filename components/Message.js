import { Avatar } from "@material-ui/core";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;
  const TypeOfTimestampPosition =
    user === userLoggedIn.email ? SenderTimestamp : RecieverTimestamp;
  return (
    <Container>
      {!userLoggedIn && <Avatar />}
      <TypeOfMessage>
        {message.message}
        <TypeOfTimestampPosition>
          {message.timestamp ? moment(message.timestamp).format("LT") : ""}
        </TypeOfTimestampPosition>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 8px;
  border-radius: 20px;
  margin: 10px;
  /* min-width: 60px; */
  /* padding-bottom: 26px; */
  position: relative;
  text-align: center;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const Reciever = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const Timestamp = styled.span`
  color: gray;
  padding: 5px;
  font-size: 5px;
  position: absolute;
  bottom: -5px;
  text-align: right;
  opacity: 0.3;
`;

const RecieverTimestamp = styled(Timestamp)`
  right: -65px;
`;

const SenderTimestamp = styled(Timestamp)`
  left: -65px;
`;
