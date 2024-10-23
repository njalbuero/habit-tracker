import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import HabitsContainer from "./components/WithUseContext/HabitsContainer";
import { HabitsProvider } from "./components/WithUseContext/context/HabitsContext";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Habits Tracker
      </Typography>
      <HabitsProvider>
        <HabitsContainer />
      </HabitsProvider>
    </Container>
  );
}

export default App;
