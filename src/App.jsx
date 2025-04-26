import PageHeader from "./components/PageHeader/PageHeader";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from './data/transactions.json';


function App() {
    return (<Section>
        <Container>
            <PageHeader>Homework #1</PageHeader>
        </Container>

        <Container>
            <Profile name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}/>
        </Container>

        <Container>
            <FriendList friends={friends}/>
        </Container>

        <Container>
            <TransactionHistory items={transactions}/>
        </Container>
    </Section>);
}

export default App;
